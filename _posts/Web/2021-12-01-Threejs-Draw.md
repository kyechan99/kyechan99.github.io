---
layout: post
title: THREE.JS로 3D 그림 그리기
date: 2021-12-01
categories: [Lib]
description: 웹 상에서 3d 그림 그리는 방법에 대해 정리합니다.
tags: [Web, three.js, 3D, JS]
keywords: Web, three.js, 3D, JS, draw, line, draw line, threejs drawing
comments: false
haveImg: true
headerImg: 2021-12-01-Threejs-Draw.jpg
---

<p style="display:none;">
요즘 한번도 배운적 없던 THREE.js 를 사용해 프로젝트를 진행해 보게 되어 배울것도 이해해야 될 것도 많아져 정신 없긴한데요.
또 그만큼 새로운 기술에 대해 공부한다는 생각에 재밌기도 합니다.
무엇보다 3D 환경에 동적인 면이 신기하기도, VR 기기 같은 여러 인풋에 대한 상황이 흥미롭습니다.
이번 글은 프로젝트에 사용될 기능 중 하나인 그림 그리기에 대해 공부하고 서핑한 것들에 대해 정리한 내용을 담고 있습니다.
THREE.js 의 상세한 내용은 담지 않았습니다.
</p>

## 개요
요즘 한번도 배운적 없던 THREE.js 를 사용해 프로젝트를 진행해 보게 되어 배울것도 이해해야 될 것도 많아져 정신 없긴한데요.
또 그만큼 새로운 기술에 대해 공부한다는 생각에 재밌기도 합니다.
무엇보다 3D 환경에 동적인 면이 신기하기도, VR 기기 같은 여러 인풋에 대한 상황이 흥미롭습니다.
이번 글은 프로젝트에 사용될 기능 중 하나인 그림 그리기에 대해 공부하고 서핑한 것들에 대해 정리한 내용을 담고 있습니다.
THREE.js 의 상세한 내용은 담지 않았습니다.

추가로, THREE.js 의 버전이 정말 빠르게 바뀌는 것 같습니다.
몇 달전 내용이 최신 버전에서는 꽤나 다르거나 사라진 함수/객체가 많더군요.
아래 코드는 `r135` 버전에서 작동됩니다.


## 코드 결과

![1](/assets/img/2021-12-01-Threejs-Draw/2.png)


## 기본 설정
제일 처음으로 씬과 카메라, 렌더러를 생성합니다.

```js
import * as THREE from 'three';

var scene = new THREE.Scene(); 

var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 10);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## OrbitControls 추가
마우스를 이용해 화면을 이동시키기 위해 OrbitControls 을 추가합니다.

```js
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

var controls = new OrbitControls(camera, renderer.domElement);
```

## Raycaster 추가
카메라가 바라보는 화면으로 raycast를 발사하여 3d 상에 마우스 위치를 받아옵니다.

Raycaster 를 사용하는 이유는 뒤에서 언급하겠습니다.

```js
var raycaster = new THREE.Raycaster();

// 마우스 좌표(위치) 저장
var mouse = new THREE.Vector2();
var point = new THREE.Vector3();
```

## plane 생성
마우스 위치를 그대로 받아와 3d 에서 사용하기 힘듭니다.

카메라의 위치, 시야각, 각도 등의 환경에 따라 변경되기 때문인데요.

그래서 사용하는 것이 plane 입니다.

앞서 추가한 raycaster 와 plane 을 이용해 뒤에서 마우스가 가리키는 위치를 받아오겠습니다.

```js
var plane = new THREE.Plane();
var planeNormal = new THREE.Vector3();
```

## 이벤트 리스너 생성
마우스 이동과 키보드 이벤트를 받을 리스너를 추가합니다.

일반적으로 그림을 그릴때 마우스 클릭 + 이동으로 입력을 받지만, 앞에서 `OrbitControls` 를 사용해 마우스 클릭은 카메라 이동으로 작동하게 만들었습니다.

고정된 화면에서 그림을 그리고 싶을때가 대부분이기 때문에 키보드의 `스페이스바`를 누르는 것으로 마우스 클릭을 대신하겠습니다.

추가로 그린 그림을 취소하는 뒤로가기(Ctrl + Z) 상황도 고려하겠습니다.

```js
document.addEventListener("mousemove", event => {
    // 마우스 이동
    //- 그림 그릴때 이동하고 있는 마우스의 현재 좌표를 받아옵니다.
});
document.addEventListener("keydown", event => {
    // 키보드 누르기
    //- 마우스 위치를 따라 그림을 그리고자 할때 스페이스바를 누릅니다.
    //- 그린 그림을 취소하고 싶을때 Ctrl+Z 를 입력 받습니다.
});
document.addEventListener("keyup", event => {
    // 키보드 떼기
    //- 스페이스바에서 손을 떼었을때 그림 그리기를 해제합니다.
});
```

## render
렌더링 합니다.

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```


## 그림 그리기를 위한 변수
그림 그리기를 위해 필요한 변수들을 생성합니다.
```js
let isDrawing = false;
let myLines = [];
let drawCount = 0;
const MAX_POS_LENGTH = 100000; 
```

- `isDrawing` : 그림 그리는 중임을 확인합니다. **스페이스바**를 누르고 있을때 true가 됩니다.
- `myLines` : 그린 그림들을 저장합니다. **뒤로가기**를 눌렀을때 스택형식으로 삭제됩니다.
- `drawCount` : 0부터 N 번째 좌표까지 그림을 그린다는 의미로 변수를 저장합니다.
- `MAX_POS_LENGTH` : 최대 N 개의 좌표를 저장할지를 의미합니다. 수가 적을수록 그림을 오래 그릴 수 없습니다.


## 마우스 좌표 위치 받아오는 함수
현재 마우스가 바라보고 있는 위치가 3D 상에서 어떤 좌표에 해당하는지를 받아오는 함수를 생성합니다.

앞서 `OrbitControls` 을 사용하지 않고 고정 화면에서 그림을 그리고자 한다면 마우스 위치를 받아오는 방법은 간단합니다.

아래와 같이 마우스 이동에 따른 event 를 받아와 위치를 받고,
`unproject`를 이용해 카메라의 정규화된 좌표 공간에서 월드(표준) 공간으로 변경시키면 되기 떄문입니다.

```js
function getMousePosition(event) {
    // 화면에서 마우스 위치 받아오기
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // ! 항상 z 좌표라는 문제와 카메라 앵글이 변하면 x와 y좌표가 정확하지 않음
    var point = new THREE.Vector3(mouse.x, mouse.y, 0);
    point.unproject(camera);
}
```

하지만 카메라를 움직이고 바라보는 방향에 따른 그림을 그리고 싶다면 위 방법만으로는 조금 부족합니다.

`OrbitControls`로 카메라의 위치와 앵글을 변환 시켰을때 원하는 좌표값을 얻어올 수 없기 떄문입니다.

```js
function getMousePosition(event) {
    // 화면에서 마우스 위치 받아오기
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // plane 이용해서 마우스 위치를 3d 에서 얻어오기
    planeNormal.copy(camera.position).normalize();
    plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), scenePosition);

    // raycaster
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, point);
}
```

`planeNormal` 에는 카메라 위치의 단위 벡터(unit vector)값이 들어갑니다. 즉, 카메라 위치의 방향은 같지만 길이가 1인 벡터입니다.

`plane`의 평면 속성을 planeNormal과 scene 위치와의 동일 평면 점으로 설정합니다.

`intersectPlane` 의 두번째 인자에 raycaster로 확인된 좌표가 복사됩니다.


> [Vector3 / normalize](https://threejs.org/docs/#api/en/math/Vector3.normalize)
>
> [Plane / setFromNormalAndCoplanarPoint](https://threejs.org/docs/#api/en/math/Plane.setFromNormalAndCoplanarPoint) 

말로서는 조금 복잡하지 몰라도 아래 사진과 같다고 생각하면 편리합니다.

![1](/assets/img/2021-12-01-Threejs-Draw/1.png)

카메라 위치와 앵글이 변해도 plane 역시 카메라를 따라가기 때문에 항상 원하는 x,y,z 값을 구할 수 있습니다.


## 마우스 좌표 저장하는 함수
앞에서 마우스 좌표를 받아왔다면 해당 좌표를 저장하는 함수를 만들겠습니다.

```js
function addPosition() {
    // 현재 그리고 있는 line의 position 속성값
    const positions = myLines[myLines.length - 1].geometry.getAttribute('position');

    // 마우스 좌표 추가
    positions.array[ drawCount ++ ] = point.x;
    positions.array[ drawCount ++ ] = point.y;
    positions.array[ drawCount ++ ] = point.z;

    // 최대 배열 크기 안넘어가게 방지
    drawCount %= MAX_POS_LENGTH;

    // 0 ~ N(마우스가 이동한 좌표들 개수)개 까지 화면에 그림
    myLines[myLines.length - 1].geometry.setDrawRange( 0, drawCount / 3 );
    myLines[myLines.length - 1].geometry.getAttribute('position').needsUpdate = true;
}
```

**THREE.LINE** 에는 `setDrawRange` 함수가 있습니다.

함수 명명 그대로 특정 범위까지의 좌표를 그린다는 의미입니다.

마우스를 이동시킬때마다 좌표가 변경될텐데요. 그때마다 추가되는 좌표를 myLines의 마지막 line 에 추가합니다.

그리고 setDrawRange 를 이용해 0 부터 N개의 좌표까지 그림을 그린다고 명시하는 겁니다.

drawCount 는 좌표 x,y,z 마다 증가되기 때문에 N개의 좌표는 drawCount / 3을 의미합니다.

마지막으로 THREE.LINE 의 geometry에서 position 속성에 `needsUpdate` 를 true 로 변경해 주어야 추가된 좌표가 업데이트 되어 그려집니다.


## 마우스 이동 이벤트
앞에서 추가한 mousemouve 이벤트 리스너를 다음과 같이 변경합니다.

isDrawing 은 현재 그림을 그리고자 하는 상황을 의미합니다.

getMousePosition 함수에서 마우스의 좌표값을 받아온 후 point 변수에 저장되고 addPosition 함수에서 해당 좌표를 마우스가 이동한 좌표 배열에 추가하는 방식입니다. 

```js
document.addEventListener("mousemove", event => {
	getMousePosition(event);
	if (isDrawing)
		addPosition();
});
```

> getMousePosition 을 if문 안으로 넣어도 됩니다. 상황에 따라 변경하시면 되겠습니다.


## 키 입력 이벤트

이번에는 스페이스바 입력과 Ctrl+Z 입력을 위해 keydown 이벤트 리스너를 변경합니다.

```js
let keysPressed = {};		// 키 다중 입력 처리용
document.addEventListener("keydown", event => {
	let key = event.key || event.keyCode;

	keysPressed[key] = true;

	if ((key === ' ' || key === 32) && !isDrawing) {
		isDrawing = true;

		drawCount = 0;
		
		var geometry = new THREE.BufferGeometry();

		var positions = new Float32Array( MAX_POS_LENGTH * 3 ); // (x,y,z 총 3개가 담기기 떄문에 * 3)
		geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
		geometry.setDrawRange( 0, drawCount );

		var material = new THREE.LineBasicMaterial( { color: 'white', linewidth: 4 } );

		myLines.push( new THREE.Line( geometry,  material ) );

		scene.add(myLines[myLines.length - 1]);
	}
	
	if (keysPressed['Control'] && event.key == 'z' && !event.repeat) {
		if (myLines.length)
			scene.remove(myLines.pop());
	}
});
```

Ctrl+Z 기능을 위해서 키 다중 입력을 처리해야 하는데요.
만약 필요없다 싶으면 keysPressed 부분은 모두 제거하면 됩니다.

좌표를 저장하기 위한 positions 함수의 길이는 x,y,z 좌표 3개를 담기 위해 3을 곱해줍니다.

(각각의 좌표를 저장하기 위해 Float32Array 를 사용하게 됩니다만 차라리 편리하게 VectorArray 같은걸 만들어서 한번에 쉽게 저장할 수 있으면 더 좋았을텐데 아쉽습니다.)

그려지는 선의 특징을 LineBasicMaterial 에서 변경하면 되겠습니다.


## 키 떼기 이벤트

마지막으로 키 입력에서 손을 떼었을때 즉, 키 입력을 마쳤을때의 keyup 이벤트 리스너를 변경합니다.

```js
document.addEventListener("keyup", event => {
	let key = event.key || event.keyCode;
    
	delete keysPressed[key];

	if ((key === ' ' || key === 32)) {
		isDrawing = false;
	}
});
```



## 코드 전체
<script src="https://gist.github.com/kyechan99/b4edc1c574ac0efe002048eac564db39.js"></script>


## 마치며
여러모로 삽질이 조금 많았습니다.
마우스 위치를 제대로 받지 못하는 문제부터 좌표를 계속해서 못바아 오면서 선이 끊어 지는 등,
[MeshLine](https://github.com/spite/THREE.MeshLine) 같은 것도 추가해서 사용해보았지만 위 방법과 같이 마우스 좌표를 계속해서 추가해 주는 것이 제일 깔끔했습니다.

물론 위 방법도 최고의 방법이라고 하기에는 조금 부족함이 있습니다. 
`MAX_POS_LENGTH` 변수의 값에 따라 선의 길이가 정해진다는 점인데요.
너무 큰 값으로 설정하자니 짧게 그린 선들에게는 쓸데없이 배열의 크기가 커지는 점이 걸립니다.

일단 가장 간단해 보이는 방법으로는 배열의 크기가 꽉 찼을때 새 선을 생성해주는 점이 좋아보입니다만 
뒤로가긱 기능에서 나뉘어 지워진다는 점이 조금 아쉽습니다.

만약 동적으로 배열 크기를 조절하는 방법을 찾게 되면 업데이트 하겠습니다.



