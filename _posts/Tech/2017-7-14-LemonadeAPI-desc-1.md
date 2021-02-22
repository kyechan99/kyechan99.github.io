---
layout: post
title: Lemonade API 사용하기 - 1
date: 2017-07-14
categories: [Tech]
description: Lemonade API 사용하기 - 1
tags: [Edu,Lemonade,Lemonade-API]
keywords: Lemonade, Lemonade-API
---

## 서론
1장은 Lemonade를 적용하기 전에 유니티에서 기본적으로 세팅해야 할 부분 입니다.


## 참고
- API 적용한 유니티 샘플 : [링크](https://github.com/LemonClub/lemonade-android-api-unity-example)
- Lemonade 개발자 [사이트](http://lemontree.dothome.co.kr/lemonade/)


## 1. Unity 실행하기
![1](/assets/img/2017-7-20-LemonadeAPI-func/1.png)

기본적으로 유니티 프로젝트를 생성합니다.


## 2. package 적용하기
![3](/assets/img/2017-7-20-LemonadeAPI-func/3.PNG)

[Release Site](https://github.com/LemonClub/lemonade-android-api-unity-example/releases) 에서 최신 버전을 다운 받고 유니티에 import 합니다.

![4](/assets/img/2017-7-20-LemonadeAPI-func//4.PNG)


## 3. AndroidManifest 생성하기
> 참고 :  [Unity-Plugin-01.유니티설정](/lib/2017/03/23/Unity-Plugin-01)

<br/>

### 3-1 package name 설정하기
![1](/assets/img/2017-7-20-LemonadeAPI-func/6.PNG)

package name 은 'com.game.test' 로 하겠습니다.

> 앞으로 나올 연동을 위해선 이 package name을 우선으로 정해둘 필요가 있으니 조심해 주세요.

<br/>

### 3-2 apk 빌드하기
![1](/assets/img/2017-7-20-LemonadeAPI-func/7.PNG)

다음으로 Build Settings/Android/Build 해 주세요.
Build Run을 해도 됩니다.

<br/>

### 3-3 AndroidManifest 찾기
![1](/assets/img/2017-7-20-LemonadeAPI-func/8.PNG)

apk 를 빌드하셨다면 프로젝트/Temp/StagingArea/ 부분에 AndroidManifest.xml 이 생겼을 것입니다.

![1](/assets/img/2017-7-20-LemonadeAPI-func/9.PNG)

이를 프로젝트/Assets/Plugins/Android/ 에 복붙 또는 이동해 줍니다.


## 4. _Lemonade 오브젝트 만들기
![1](/assets/img/2017-7-20-LemonadeAPI-func/34.PNG)

이름이 `_Lemonade`인 GameObject 를 만들고 그 안엔 Lemonade 스크립트를 추가해 주세요.

> 오브젝트의 이름은 무조건 `_Lemonade` 여야 하니 꼭 조심해 주세요.


유니티에서 설정해 줘야할 초반 작업이 마무리 됬습니다.
다음은 안드로이드 스튜디오에서의 작업으로, Lemonade 를 사용하기 위한 세팅이 마무리 됩니다.

<br/>

다음장 - [LemonadeAPI-사용하기-2](/tech/2017/07/18/LemonadeAPI-desc-2)

