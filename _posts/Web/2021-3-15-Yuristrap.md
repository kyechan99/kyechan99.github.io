---
layout: post
title: Yuristrap
date: 2021-3-15
categories: [Web]
description: 웹 프레임워크
tags: [Web, CSS, JS, Framework, Yuristrap]
keywords: Web, CSS, JS, Framework, Yuristrap
comments: false
haveImg: true
headerImg: 2021-3-15-Yuristrap.png
---

<p style="display:none;">
분명 웹 프레임워크라고 한다면 대표적이면서도 가장 친숙한 부트스트랩이 있죠. 그럼에도 yuristrap 을 만들게 된 것은 여러 이유가 있었습니다.

먼저, 부트스트랩을 사용하기에는 가벼운 프로젝트에서는 조금 무겁울 수도 있다는 생각이였습니다. 부트스트랩이 프로젝트를 무겁게 한다는 의미는 아니고, 단순히 사용하지 않는 부분들까지 가져와야 된다는 의미입니다. 코드 몇줄 늘어난다고 용량의 변화가 큰 것이 아니지만 무엇이든 줄일 수 있으면 좋으니까요. 그런면에서 아무래도 부트스트랩에서 제가 필요 없는 부분을 제거한다기 보다, 직접 만든 프레임워크에선 제가 예외처리를 하기 편하고 쉬우니.. 하는 생각이였습니다.
</p>

<br/><br/>

<img class="dsp-block" style="width: 8rem; margin: 0 auto;" src="https://avatars1.githubusercontent.com/u/68942934?s=200&v=4"/>

<p align="center">
  <strong>반응형, 다크모드, 쉬운 커스터마이징, 부트스트랩보다 약하지만 가벼운</strong>
  <br/>  
  웹 개발을 더욱 빠르고 편리하게 도와주는 프레임워크, yuristrap
</p>
<p align="center">
 <img src="https://img.shields.io/netlify/6e32703e-74ac-40fc-80ef-40e79f8c2de2?label=BUILD&style=for-the-badge"/>
 <img src="https://img.shields.io/github/issues/yuristrap/yuristrap?style=for-the-badge"/>
 <img src="https://img.shields.io/github/license/yuristrap/yuristrap?style=for-the-badge"/>
 <a href="https://yuristrap.github.io/">
 	<img src="https://img.shields.io/badge/Document-SITE-%235f5fff?style=for-the-badge"/>
 </a>
</p>
<br/><br/>


## 개요
분명 웹 프레임워크라고 한다면 대표적이면서도 가장 친숙한 [부트스트랩](http://bootstrapk.com/)이 있죠. 그럼에도 yuristrap 을 만들게 된 것은 여러 이유가 있었습니다.

먼저, 부트스트랩을 사용하기에는 가벼운 프로젝트에서는 조금 무겁울 수도 있다는 생각이였습니다. 부트스트랩이 프로젝트를 무겁게 한다는 의미는 아니고, 단순히 사용하지 않는 부분들까지 가져와야 된다는 의미입니다. 코드 몇줄 늘어난다고 용량의 변화가 큰 것이 아니지만 무엇이든 줄일 수 있으면 좋으니까요. 그런면에서 아무래도 부트스트랩에서 제가 필요 없는 부분을 제거한다기 보다, 직접 만든 프레임워크에선 제가 예외처리를 하기 편하고 쉬우니.. 하는 생각이였습니다.

두번째론 다크모드(나이트모드)입니다. 아무래도 부트스트랩에는 다크모드기능이 자연적으로는 없으니 요즘 웹 사이트에서 자주 보이는것이 트렌드가 되는듯 하여 추가하고 싶었습니다.

세번째론 역시 빠질수없는 학습 목적입니다. CSS 같은걸 공부하려 하기 보다 기본적으로 사용하는 JS 부분을 조금 프레임워크형태로 만들어 보고 싶었습니다.

마지막, 가장 원동력이 된 목적은 바로 제 웹 프로젝트에는 순수 제껄로 넣고 싶었습니다. 아무래도 부트스트랩을 워낙 자주 쓰다보니 점점 제 프로젝트엔 안빠지는 경우가 없더군요. 이대로는 부트스트랩없으면 못살아! ..상태가 되기전에 만들게되었습니다. yuristrap을 대강 봐줄만큼 완성한 지금, 제 프로젝트들을 부트스트랩에서 yuristrap 으로 변경하는데 목표로 두고 있습니다. 해당 블로그가 그 첫번째로서, 성공적으로 변경된 케이스라고 생각되네요.



## 링크
- [Yuristrap 레포](https://github.com/yuristrap/yuristrap)
- [Yuristrap 문서, Docs](https://yuristrap.github.io/)


## 사용하기
### yuri.css 사용하기
아래 CDN 주소로 css 파일을 불러오면 됩니다.
```
https://yuristrap-cdn.vercel.app/1.0.3/css/yuri.css
```
버전은 언제든 업데이트 될 수 있습니다.

<br/>

### yuri.js 사용하기
아래 CDN 주소로 JS 파일을 불러오면 됩니다.
```
https://yuristrap-cdn.vercel.app/1.0.3/css/yuri.js
```
마찬가지로 버전은 언제든 업데이트 될 수 있습니다.

<br/>

### 나이트모드 
나이트모드를 사용하게 되면, 페이지를 이동할때마다 나이트모드를 변경해야됩니다. 뿐만 아니라 한번 방문했던 블로그를 나중에 다시 들어오게 되었을때, 나이트모드 설정값이 캐시로 저장되어 있다면 언제든 편하게 볼 수 있겠죠.

이런 경우에 사용하는 CDN 입니다. 나이트모드를 변경해주는 input 값을 연결해서 캐시로 저장하는 역이니 필요하게 될 경우에만 사용하면 됩니다.

```
https://yuristrap-cdn.vercel.app/1.0.3/js/night.js
```

<br/>

### 버전
> [yuristrap - docs - 버전](https://yuristrap.github.io/v1.0/introduction/version) 에서 버전 변경에 대해 얘기합니다.

<br/>


## 샘플
<button type="button" class="btn btn-primary">primary</button>
<button type="button" class="btn btn-success">success</button>
<button type="button" class="btn btn-warning">warning</button>
<button type="button" class="btn btn-danger">danger</button>
<button type="button" class="btn btn-info">info</button>
<button type="button" class="btn btn-dark">dark</button>
<button type="button" class="btn btn-light">light</button>
<br/>
<div class="spinner-border alpha" role="status"> </div>
<div class="spinner-border success alpha" role="status"> </div>
<div class="spinner-border primary alpha" role="status"> </div>
<br/>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheckWithLabel1" checked>
  <label class="form-check-label worked-with" for="defaultCheckWithLabel1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheckWithLabel2">
  <label class="form-check-label worked-with" for="defaultCheckWithLabel2">Second checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <label class="form-check-label">Disabled checkbox</label>
</div>
<br/>
<button class="btn btn-brown" data-toggle="notice" data-target="#exampleNoticeBox01">Notice-Box</button>
<div class="notice-box" id="exampleNoticeBox01" data-speed="4000">
	This is Notice-Box
</div>
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal00">Basic Modal</button>
<div id="exampleModal00" class="modal" data-speed="200">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal00" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal 1
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal00">Close</button>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal00">Agree</button>
	</div>
  </div>
</div>

> 더 많은 샘플은 Docs 에서 볼 수 있습니다.

<br/>

## 마치면서
친구([sunforest99](https://github.com/sunforest99))랑 같이 작업하면서 첫 버전 릴리즈가 나올때까지 두 달 정도가 걸렸습니다. 군 복무중 휴식 시간에 개발을 하다보니 생각했던것 보다 오래 걸렸다고 생각 하면서도 오히려 조금씩 진행하게 되다보니 여기까지 올 수 있었다 생각도 드는 프로젝트입니다.

아무래도 부트스트랩이 모티브이다 보니 유사한 점은 피해갈 수 없었지만 그 덕분인지 부트스트랩에서 넘어올 수 있는 진입장벽이 많이 낮아질 수 있지 않나 생각도 듭니다. 뭐, yuristrap의 장점도 있으니깐요.

첫 버전을 릴리즈 하고나서 블로그에 적용을 해보니 막상 부족했던 것이 많이 보이더군요. 지금은 모두 해결을 한 상태이지만 이런 점은 앞으로 많이 보일것같습니다. 역시 실제로 사용해보기 전에는 모르는 일이네요. 완벽을 꿈꾸며..


## 번외
**yuristrap** 명명은 아이돌 이름에서 영감을 얻었습니다. 아이즈원 해체하지마ㅠㅠ
