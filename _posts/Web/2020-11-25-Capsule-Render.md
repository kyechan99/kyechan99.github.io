---
layout: post
title: Capsule-render
date: 2020-11-25
categories: [Web]
description: Dynamic Image
tags: [Web, JS, GitHub, Render, API]
keywords: Web, JS, API, GitHub
comments: false
haveImg: true
headerImg: 2020-11-25-capsule-render.png
---


깃허브가 최근에 프로필 페이지를 작성할 수 있게 새로운 기능을 추가했습니다. 본인 아이디와 같은 레포를 생성하면 해당 레포의 README 를 프로필에 띄워주는 기능이죠.

최근 커밋한 내용을 보여주거나, PR이나 스타 등을 보여주는 기능들이 개발자들로 부터 여럿 개발 되었는데 꾸며주는 부분에 대해선 개발이 안된듯 싶었습니다. 이 프로젝트가 여러 개발자분들께 깃허브를 꾸미는데 도움이 됬으면 하는 마음에 제작을 시작했습니다.


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/pjykp0xdizcz219h35zu.gif)

핵심적인 컨셉은 **페이지를 새로고침 할때마다 색이 변경되는 것**입니다. 랜덤 색 또는 그라데이션으로 설정할 수도 있지만 고정된 색으로도 설정할 수도 있습니다. 랜덤으로 변경되는 색이나 그라데이션이 불안하시면 검증된 색들로만 설정할수도 있습니다.

여러 타입:

![Alt Text](/assets/img/2020-11-25-capsule-render/1.png)

> 2020-11-25 기준

여러 모양들로 설정할 수 있고 그 위에 텍스트를 넣을수도 있게 만들었습니다. 계속해서 추가할 예정입니다.



## 사용법

```
https://capsule-render.vercel.app/api?
```

위 주소 뒤에 설정하려고 하는 쿼리문 몇개만 추가하면 됩니다.

```
![header](https://capsule-render.vercel.app/api?type=wave&color=gradient&height=300&section=footer&text=capsule%20render&fontSize=90)
```


## 기능 쿼리
### 색 변경 쿼리
`&color=auto` : 검증된 랜덤 색만 보여줍니다. [목록](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)

`&color=random` : 완전 랜덤색들을 보여줍니다. 무슨 색이 나올지는 모릅니다.

`&color=gradient` : 검증된 랜덤 그라데이션만 보여줍니다. [목록](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)

`&color=_hexcode` : 고정 색으로 설정하려면 #을 제외한 헥스 코드 값을 넣어주면 됩니다. (default : B897FF)

> auto 또는 gradient로 설정했을때, text 색도 랜덤 색에 어울리는 색으로 자동 설정됩니다.

<br/>

### 타입 변경 쿼리
`&type=wave` : 파도 치는 효과의 이미지입니다. (default)

`&type=egg` : 달걍 형태의 이미지입니다.

`&type=shark` : 상어 이빨 형태의 이미지입니다.

`&type=slice` : 잘린듯한, 직각삼각형의 이미지입니다.

`&type=rect` : 완전 사각형 이미지입니다.

`&type=soft` : 주변이 조금 둥근 사각형 이미지입니다. 다른 깃허브를 꾸밀때 사용하는 프로젝트들과 어울려 사용하기 좋은 모서리를 가집니다.

`&type=rounded` : 주변이 둥근 이미지입니다.

> 계속해서 추가중입니다.

<br/>

### 섹션 (이미지 반전))
`&section=header` : (default)

`&section=footer` : 상하 반전되서 보여줍니다. 

<br/>

### 기타 등등
`&height` : 이미지 높이

`&text` : 이미지 위에 띄울 텍스트

`&textBackground` : 텍스트 주변 배경 (텍스트를 강조할 수 있습니다.)

`&animation` : 텍스트 애니메이션 효과들입니다. [목록](https://github.com/kyechan99/capsule-render#animation)

`&textBackground` : 텍스트 주변 배경 (텍스트를 강조할 수 있습니다.)

`&fontColor` : 텍스트 색

`&fontSize` : 택스트 크기

`&fontAlign` : 텍스트 X 위치

`&fontAlignY` : 텍스트 Y 위치

자세한 기능 설명들은 [README](https://github.com/kyechan99/capsule-render#types)에 적혀있습니다.

<br/>

<hr/>

<br/>

사실 이 API는 깃허브 프로필만 꾸밀수 있는게 아닌, 레포지터리 README 타이틀 이미지를 간단하게 작성하려 할때나 웹 서비스에서도 사용이 가능하다는 장점도 있습니다.

처음에는 정말 간단한 기능 들(텍스트, 색, 크기 조절) 밖에 없었을때는 큰 반응이 없었지만, 특히 애니메이션 기능을 추가 하면서 스타 수나 포크 수가 늘어난 것 같습니다.

확실히 간단한 애니메이션이라도 들어가면서 동적 이미지라는 것을 각인시켜주는 도움을 준 것 같습니다.

정말 고맙게도 다양한 분들이 사용을 해주시고 관련 블로그 포스팅 까지 해주신걸 발견하면 정말 행복합니다. 하하


앞으로도 여러 기능들을 지속해서 추가할 예정이고 혹시 이 글을 보시고 추가하고 싶은 기능이나 색들이 있으시다면 레포에 이슈, PR 날려주시면 매우 감사합니다.

<a href="https://github.com/kyechan99/capsule-render">![](https://images.velog.io/images/kyechan99/post/0618a205-c1c7-4fef-8d54-368e0e4a078a/%EC%BA%A1%EC%B2%98.JPG)
</a>

> [레포 주소](https://github.com/kyechan99/capsule-render)

끝으로 깃허브 프로필로 사용하기에 다른 좋은 기타 기능들입니다.
- [GitHub-README-stats](https://github.com/anuraghazra/github-readme-stats) : 총 커밋, PR, 스타 등을 보여주는 그래프입니다.
- [GitHub-Profile-README-generator](https://arturssmirnovs.github.io/github-profile-readme-generator/) : 어떤 내용을 채워야 할지 막막할때 가이드해줍니다.
- [Github-Activity-README](https://github.com/jamesgeorge007/github-activity-readme) : 최근 활동을 보여줄 수 있습니다.