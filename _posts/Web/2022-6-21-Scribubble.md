---
layout: post
title: Scribubble
date: 2022-6-21
categories: [Web]
description: Scribble on paper, Scribubble
tags: [Three.js, Web, Preact, WebVR, Aframe, VR, 3D]
keywords: Three.js, Web, Preact, WebVR, Aframe, VR, 3D, Scribubble
haveImg: true
headerImg: 2022-6-21-Scribubble.png
---

<p style="display:none;">
이전에 J2KB 5기에 참가하면서 진행하게 되었던 프로젝트, Scribubble을 소개합니다.

J2KB 에서는 아이디어를 가진 사람이 팀장으로, 팀원들을 모집하여 프로젝트를 진행하는 포니콘/유니콘이 있습니다.
당시 저는 제 아이디어를 가지고 프로젝트를 진행할지 아닐지에 대해 되게 고민했었습니다만
팀원 모집글에 있는 되게 재밌어 보이는 기획을 보고 팀 지원을 넣게 되었습니다.
메타버스라는 주제에 관심을 가지고 있었고 3D상의 공간에 여러 사람이 낙서를 통해 생각을 공유한다는 목표가 특히 흥미를 돋았던것 같습니다.
THREE.JS 나 Aframe 은 한번도 배워본적 없어 걱정되기도 했지만... 결국 또 이렇게 잘 마무리 되었습니다. 역시 뭐든 해보지 않으면 모르는 것 같네요.
여러모로 새로운 분야를 공부해 볼 수 있는 계기가 되어 좋았고 결과물 자체도 마음에 들어 특히 정이 가는 프로젝트 입니다. 
</p>


<br/><br/>


<p align="center">
    <img src="https://user-images.githubusercontent.com/14146566/168096520-1d04b7ba-41e7-4253-bb2f-72d8517fbd51.gif" />
</p>


[Explore Scribubble »](https://d1bsmwli3pnvxm.cloudfront.net/)


<br/>







## 개요

이전에 J2KB 5기에 참가하면서 진행하게 되었던 프로젝트, Scribubble을 소개합니다.

J2KB 에서는 아이디어를 가진 사람이 팀장으로, 팀원들을 모집하여 프로젝트를 진행하는 포니콘/유니콘이 있습니다.
당시 저는 제 아이디어를 가지고 프로젝트를 진행할지 아닐지에 대해 되게 고민했었습니다만
팀원 모집글에 있는 되게 재밌어 보이는 기획을 보고 팀 지원을 넣게 되었습니다.
메타버스라는 주제에 관심을 가지고 있었고 3D상의 공간에 여러 사람이 낙서를 통해 생각을 공유한다는 목표가 특히 흥미를 돋았던것 같습니다.
THREE.JS 나 Aframe 은 한번도 배워본적 없어 걱정되기도 했지만... 결국 또 이렇게 잘 마무리 되었습니다. 역시 뭐든 해보지 않으면 모르는 것 같네요.
여러모로 새로운 분야를 공부해 볼 수 있는 계기가 되어 좋았고 결과물 자체도 마음에 들어 특히 정이 가는 프로젝트 입니다. 

## 소개

![1](/assets/img/2022-6-21-Scribubble/1.png)

첫 페이지에는 웹으로 접근할지 VR 장착한 환경에서 접근할지 선택합니다.
웹 환경에서도 VR 환경에서 접근하여 상하좌우키로 살펴 볼 수 있고 반대로 VR 환경에서도 웹 환경에 접근해서 살펴볼 순 있지만
그림 그리는 기능 자체는 불가능합니다.

> [사이트](https://d1bsmwli3pnvxm.cloudfront.net/)가 굉장히 직관적이라 생각되니 직접 경험을 추천드립니다.

## 고민

처음에는 웹과 VR 환경을 합쳐서 편하게 만들려고 했었습니다.
지금 개발된 Scribubble의 웹환경과 VR환경에는 조금 큰 차이가 있는데 각각 THREE.js 와 Aframe 으로 제작한 점입니다.
Aframe은 THREE.js 기반이니까 결국 같은 THREE.js 이긴 하는데요. VR 환경에서 Aframe 에서 제공하는 컨트롤러 기능 등을 손쉽게 사용하고자 Aframe 을 추가했습니다.

때문에 VR 환경에서는 기능이 더 붙어 있는 Aframe 으로 개발하고자 웹과는 조금 달라졌습니다.
그렇다면 반대로 웹 환경에서도 Aframe으로 적용하면 두 환경을 분리할 필요가 없지 않나 생각이 들 수 있습니다.
물론 이도 맞는 말이지만 일단 Scribubble 에서는 웹과 VR환경에서의 사용자가 그림 그리기 위한 기능이 서로 다릅니다.

웹에서는 좌측 palette UI 버튼을, VR에서는 왼손에 붙어있는 pallete의 선택으로 사용자 그리기를 제공합니다.

![2](/assets/img/2022-6-21-Scribubble/2.png)

웹에서는 카메라의 이동을 마우스로 하는 반면 VR에서는 직접 이동을 통해 진행되고요.   
그림 그리는 펜의 좌표를 웹에서는 카메라 기준으로 임의의 PLANE 과의 충돌을 통해 얻어오는 반면 VR 에서는 컨트롤러 자체의 좌표를 얻어오는 방식으로 개발이 됩니다.

그림 그리는 기능 하나에 생각보다 웹과 VR 에서는 방식이 많이 다르죠?

외에도 기획단계에서 제거된 기능들은 웹에서만 지원한다거나 하는 기능이 많았기 때문에 결국은 분리하여 개발하게 되었습니다.

처음 그리기 기능을 임시로 제작했었을때 프레임이 60에서 10때로 떨어지는 정도로 심한 모습을 보았기 때문에
각 환경을 분리해서 개발하더라도 그 무게를 최대한 줄여야만 했기때문입니다.

(결론적으로 THREE.js 도 공부하면서 Aframe 경험도 핥아 볼 수 있었네요.)

최적화에 또 신경을 썼었던 점은 그려지고 있는 선 데이터의 갱신입니다.

> 아래에 나올 고민들은 THREE.js의 r135 버전에 해당됩니다.
> 
> 이 글을 작성한 시기부터 당시 버전과 달라졌기에 아래 고민에 대해 의미가 없어졌을수도 있음을 알립니다.

THREE.js 에서 선을 생성해주는 `Line`에서는 선이 그려질 좌표들을 저장할 `LineGeometry`를 기본적으로 입력해야 합니다.
여기에는 조금 단점이 있는데, Scene 에 그려질 이 Line 오브젝트는 LineGeometry가 생성된 이후 Line을 그리고 Scene에 추가가 되는 점입니다.
좌표가 추가가 될 때에 Line안의 LineGeometry 의 position 들을 수정한다고 Line이 바뀌지 않습니다.
때문에 THREE.js 에는 이 position에 `needsUpdate` 속성을 통해 true로 변경해 주었을 때 강제로 갱신을 시키는 방식을 제공하고 있습니다.

<script src="https://gist.github.com/kyechan99/000a187b8072e707aa0363db7e026009.js"></script>

문제는 이 position들의 좌표들을 저장하기 위해 큰 크기의 배열을 생성해서 `LineGeometry`를 생성해주어야 했던 점입니다.
지금도 웹 서핑을 해보면 그림 그리기 위해 모두 큰 배열을 생성하는 형태로 제공되고 있습니다.
아무래도 한번 그려진 선이 동적으로 수정될 일 보다 그저 생성되고 존재하고 있는것만이 WebXR 상황에서는 일반적 이기 때문에 이런 고민이 잘 이뤄지지 않는것 같습니다.

때마침 `Line`에는 WebXR을 지원하는 환경에 따라 선 굵기가 일정한 문제가 있었기 때문에
선에 대해 고민하던 차에 `Line2`를 뜯어보게 되었습니다.
`Line2`는 THREE.js의 examples 폴더에 들어가 있는 만큼 완전 권장하는 선 오브젝트는 아닙니다.
다만 WebXR 환경에 맞춰 추가로 개발된 고민의 흔적이라고 볼 수 있을것 같습니다.

<script src="https://gist.github.com/kyechan99/b6da75ab86814c9f367fb2aa79ea679d.js"></script>

`Line2`에서는 앞의 needsUpdate 속성이 없습니다.
정확히는 `Line`과는 내부적으로 조금 바뀐 느낌입니다.

`Line2`에서는 `_maxInstanceCount`라는 변수가 있는데요. 이 변수가 geometry가 생성될때 이 크기를 변경해주더군요.
사실 position들의 크기 자체를 변수로 따로 가질 필요는 없죠. 변수의 크기정도야 length 를 사용하면 쉽게 알아올 수 있기 때문입니다.
그러면 왜 존재하냐..
사실 저도 정확한 이유는 모릅니다! 개발자만의 의도가 분명히 있겠죠.
다만 재미있는 것은 이 _maxInstanceCount가 앞의 needsUpdate 기능을 대신 해준다는 점입니다.

지금은 또 새 버전이 많이 나오고 바뀌어서 의미가 없어졌지만 선 하나당 큰 배열을 두고 수정해야만 했던거에 비해
동적으로 늘릴 수 있게 변경되었던 고민을 한 기억이 남아 기록에 남깁니다.

외에도 React 가 아닌 Preact를 선택한 점이 있는데 이는 이전에 작성한 [React vs Preact](https://kyechan99.github.io/lib/2021/12/17/React-Preact.html) 에 언급된 바가 있으니 생략하겠습니다.

## 마치며

아무쪼록 새로운 기술도 배우고 개발, 테스트부터 결과물까지 색다른 경험들이 많이 남게되어 재밌는 프로젝트였습니다.
분명 WebXR, WebVR 분야가 활용도가 정말 높다는 생각이 드네요.
이번 경험을 통해 여러 아이디어도 떠올라 조만간 또 건드려 볼 지 모르겠습니다.
마지막으로 VR 에서 그렸던 그림들 몇개 올리며 마무리합니다.

WEB view | VR Drawing 
--- | --- 
![flower_web](https://user-images.githubusercontent.com/14146566/168096727-e0275923-ff03-4c8e-954b-c11a9146ba43.gif) | ![flower_vr](https://user-images.githubusercontent.com/14146566/168096913-17ba4bbb-c4b0-41ae-bd18-3b4e0176cce4.gif)

<br/>

WEB view | VR Drawing 
--- | --- 
![shark_web](https://user-images.githubusercontent.com/14146566/168096628-b803483c-e2ce-4e3c-95a8-f753b6c788ba.gif) | ![shark_vr](https://user-images.githubusercontent.com/14146566/168096820-f96d8c86-cf87-4507-aec9-3513ee2da97c.gif)
