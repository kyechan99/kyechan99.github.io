---
layout: post
title: Lemonade API 사용하기 - 2
date: 2017-07-18
categories: [Tech]
description: Lemonade API 사용하기 - 2
tags: [Edu,Lemonade,Lemonade-API]
keywords: Lemonade, Lemonade-API
---

## 서론
2장은 Lemonade를 적용하기 전에 안드로이드 스튜디오에서 기본적으로 세팅해야 할 부분 입니다.


## 참고
- API 적용한 유니티 샘플 : [링크](https://github.com/LemonClub/lemonade-android-api-unity-example)
- Lemonade 개발자 [사이트](http://lemontree.dothome.co.kr/lemonade/)
- [Lemonade API 사용하기 - 1](/tech/2017/07/14/LemonadeAPI-desc-1)


## 1. 안드로이드 스튜디오 새 프로젝트 만들기
### 1-1. 새 프로젝트
![1](/assets/img/2017-7-20-LemonadeAPI-func/10.PNG)

기본적으로 안드로이드 프로젝트를 생성합니다.

<br/>

### 1-2. APP 이름
![1](/assets/img/2017-7-20-LemonadeAPI-func/11.PNG)

처음 [1장](/tech/2017/07/14/LemonadeAPI-desc-1.html) 떄 설정했던 package name 으로 설정합니다.

> 이 외의 것은 작동하지 않으므로 조심해야 합니다.

<br/>

### 1-3. 디바이스 설정
![1](/assets/img/2017-7-20-LemonadeAPI-func/12.PNG)

넘어갑니다.

<br/>

### 1-4. 액티비티 설정
![1](/assets/img/2017-7-20-LemonadeAPI-func/13.PNG)

넘어갑니다.

<br/>

### 1-5. 액티비티 이름
![1](/assets/img/2017-7-20-LemonadeAPI-func/14.PNG)

넘어갑니다.

Activity name을 바꾸셔도 상관 없지만, 차후에 계속해서 바꾸어야 하기 때문에 추천하진 않습니다.


## 2. Gradle 설정하기
### 2-1. Gradle
![1](/assets/img/2017-7-20-LemonadeAPI-func/16.PNG)

프로젝트가 생성되었으니 app/build.gradle 로 들어가줍니다.

<br/>

### 2-2. Gradle 변경
![1](/assets/img/2017-7-20-LemonadeAPI-func/17.PNG)

Gradle의 내용을 다음과 같이 변경하고 추가해 줍니다.

> [스크립트](https://github.com/LemonClub/lemonade-androidstudio-unity/blob/master/app/build.gradle)

참고 : 모두 바꾸시는것이 아닌 본인 환경에 맞추어 바꾸셔야 합니다.
( 필수로 변경 삭제 추가될 부분은 위 링크에 주석처리로 설명해 놓았습니다. )


## 3. MainActivity 설정하기
![1](/assets/img/2017-7-20-LemonadeAPI-func/18.PNG)

[링크](https://github.com/LemonClub/lemonade-androidstudio-unity/blob/master/app/src/main/java/net/lemontree/lemonade/MainActivity.java)
로 들어가 MainActivity에 CtrlCV 해줍니다.

> 추가된 부분의 스크립트는 첨삭 및 수정은 자유로우나 추천하지 않습니다.
( 시스템상의 로직이나 구성을 망칠 수 있음 )

![1](/assets/img/2017-7-20-LemonadeAPI-func/19.PNG)


## 4. Splash 만들기
### 4-1. Splash 만들기
![1](/assets/img/2017-7-20-LemonadeAPI-func/20.PNG)

app/src/main/java/설정한-package-name/ 경로에 다음과 같이 Java Class를 생성합니다.

![1](/assets/img/2017-7-20-LemonadeAPI-func/21.PNG)

사진과 같이 생성되었다면 [링크](https://github.com/LemonClub/lemonade-androidstudio-unity/blob/master/app/src/main/java/net/lemontree/lemonade/Splash.java) 의 내용을 CtrlCV 해줍니다.

> 추가된 부분의 스크립트는 첨삭 및 수정은 자유로우나 추천하지 않습니다.
( 시스템상의 로직이나 구성을 망칠 수 있음 )

<br/>

### 4-2. Splash xml 만들기
![1](/assets/img/2017-7-20-LemonadeAPI-func/23.PNG)

다음과 같이 layout xml 을 만듭니다.

![1](/assets/img/2017-7-20-LemonadeAPI-func/24.PNG)

다음과 같이 만드신 후 activity_splash.xml 의 내용은 [링크](https://github.com/LemonClub/lemonade-androidstudio-unity/blob/master/app/src/main/res/layout/activity_splash.xml) 의 내용을 CtrlCV 해줍니다.

> 추가된 부분의 스크립트는 첨삭 및 수정은 자유로우나 추천하지 않습니다.
( 시스템상의 로직이나 구성을 망칠 수 있음 )


## 5. Export 하기
IDE의 우측 맨 끝의 Gradle 항목을 눌러줍니다.

![1](/assets/img/2017-7-20-LemonadeAPI-func/27.PNG)

:app/other/exportJar 를 눌러줍니다.

![1](/assets/img/2017-7-20-LemonadeAPI-func/28.PNG)

완료가 되었다면
프로젝트/app/release 경로에 AndroidPlugin.jar 파일이 생겼을 것입니다.

jar 파일이 생기지 않은 흔한 이유
1. :app/other/exportJar 가 아닌 다른것을 누름

2. 프로젝트/build.gradle 과 프로젝트/app/build.gradle 에서 설정한 컴파일 대상이 서로 다름
  > 보통 위의 build.gradle 링크를 무작정 CtrlCV 했을때 생겨납니다.

## 6. AndroidPlugin.jar 파일 옮기기
![1](/assets/img/2017-7-20-LemonadeAPI-func/30.PNG)

Release 된 AndroidPlugin.jar 파일을 Unity-Project-경로/Assets/Plugins/Android/ 에 옮겨줍니다.


## 7. AndroidManifest.xml 수정하기
1장에서 만든 AndroidManifest.xml 을 수정합니다.
![1](/assets/img/2017-7-20-LemonadeAPI-func/31.PNG)

초기엔 위에 처럼 되어 있을건데요.

![1](/assets/img/2017-7-20-LemonadeAPI-func/32.PNG)

다음과 같이 변경해줍니다.

참고 : 수정해야 할 내용은 [링크](https://github.com/LemonClub/lemonade-android-api-unity-example/blob/master/Assets/Plugins/Android/AndroidManifest.xml)에서 <!-- 기호 --> 형태로 표시해 두었습니다.

이상으로 사용하기 위한 설정이 모두 끝났습니다.
다음 장은 Lemonade API 기능과 그 사용 방법에 대해 설명합니다.

