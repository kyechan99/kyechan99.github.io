---
layout: post
title: Lemonade API 함수
date: 2017-07-20
categories: [Tech]
description: Lemonade API 함수
tags: [Edu,Lemonade,Lemonade-API]
keywords: Lemonade, Lemonade-API
---

# Lemonade API 함수
## 서론
Lemonade 의 기능에 대해 알고 사용법을 익힙니다.


## 참고
- API 적용한 유니티 샘플 : [링크](https://github.com/LemonClub/lemonade-android-api-unity-example)
- Lemonade 개발자 [사이트](http://lemontree.dothome.co.kr/lemonade/)
- [Lemonade API 사용하기 - 1](/edu/2017/07/14/LemonadeAPI-desc-1)
- [Lemonade API 사용하기 - 2](/edu/2017/07/18/LemonadeAPI-desc-2)


## 1. Lemonade 초기화
![1](/assets/img/2017-7-20-LemonadeAPI-func/35.png)

프로젝트에서 맨 처음 씬에서 가장 먼저 실행되는 부분에 다음과 같이 선언해 줍니다.

<br/>

### 1-1. Lemonade.init()
초기화 하는 과정입니다. 초기화 성공시 Lemonade.isInitialized 가 true 가 됩니다.

![1](/assets/img/2017-7-20-LemonadeAPI-func/36.png)

![1](/assets/img/2017-7-20-LemonadeAPI-func/37.png)

> [참고](https://github.com/LemonClub/lemonade-android-api-unity-example/blob/master/Assets/ExGame.cs#L11)

<br/>

### 1-2. Lemonade.Login()
로그인 과정입니다. 초기화 성공 (Lemonade.isInitialized == true) 일때 호출해 주는것이 필수입니다.

> 기존 저장되어 있는 유저를 게임에 접속 시키거나, 신규 유저를 게임에 첫 접속 시키게 합니다.

Lemonade.init을 사용했을때, 성공적으로 초기화가 이루어진 후에 이 함수를 실행시킬수 있도록

성공시 호출하는 첫번째 매개변수에 Lemonade.Login()을 넣어줍니다. ([참고](https://github.com/LemonClub/lemonade-android-api-unity-example/blob/master/Assets/ExGame.cs#L14))
 

## 2. 유저 정보 가져오기
![1](/assets/img/2017-7-20-LemonadeAPI-func/38.png)

플레이 중인 플레이어나 플레이 중이지 않은 유저의 정보를 불러올때 *Coroutine* 으로 호출합니다.

![1](/assets/img/2017-7-20-LemonadeAPI-func/39.png)

![1](/assets/img/2017-7-20-LemonadeAPI-func/40.png)

<br/>

### 정보를 받아올 함수의 형태 : callFunc
![1](/assets/img/2017-7-20-LemonadeAPI-func/41.PNG)

    delegate void initDelegate(LA.User.UserInfo dicArg);

함수의 형태는 이러합니다.
 

## 3. Custom Database
사용자가 정의한 커스텀 DB를 이용하는 방법입니다.

이를 사용하기 위해서는

![1](/assets/img/2017-7-20-LemonadeAPI-func/43.PNG)

Lemonade 개발자 [사이트](http://lemontree.dothome.co.kr/lemonade/) 에서 Access 권한이 **2단계** 여야 합니다.

<br/>

### 3-0. 사용전에
![1](/assets/img/2017-7-20-LemonadeAPI-func/42.PNG)

다음과 같이 Developer Setting Table에 SKILL 과 INVEN 을 추가했습니다.

(예시를 위해 만들어 둔것이니 필수로 만들 필요가 없습니다.)

> 주의 : TOKEN 칼럼은 테이블에 중복되는 유저가 입력되지 못하도록 설정된 칼럼입니다.

<br/>

### 3-1. Custom Database 추가
![1](/assets/img/2017-7-20-LemonadeAPI-func/44.PNG)

![1](/assets/img/2017-7-20-LemonadeAPI-func/45.PNG)

![1](/assets/img/2017-7-20-LemonadeAPI-func/46.PNG)

dic.Add()를 통해 추가할 칼럼 이름과 넣을 값을 추가해 줍니다.

> 주의 : TOKEN 칼럼이 존재한다 해서 dic.Add("TOKEN", .. ) 을 하실 필요가 없습니다.

<br/>

### 3-2. Custom Database 변경
![1](/assets/img/2017-7-20-LemonadeAPI-func/47.PNG)

![1](/assets/img/2017-7-20-LemonadeAPI-func/48.PNG)

![1](/assets/img/2017-7-20-LemonadeAPI-func/46.PNG)

dic.Add()를 통해 변경할 칼럼 이름과 넣을 값을 추가해 줍니다.

> 주의 : 마찬가지로 TOKEN 칼럼이 존재한다 해서 dic.Add("TOKEN", .. ) 을 하실 필요가 없습니다.

<br/>

### 3-3. Custom Database 가져오기
![1](/assets/img/2017-7-20-LemonadeAPI-func/50.PNG)

![1](/assets/img/2017-7-20-LemonadeAPI-func/51.PNG)

![1](/assets/img/2017-7-20-LemonadeAPI-func/52.PNG)
 

이상으로 Lemonade 에 적용되어 있는 기본적인 함수들에 알아보았습니다.

사진과 사이트, 또는 함수는 상시 변경될 수 있으니 [Release](https://github.com/LemonClub/lemonade-android-api-unity-example/releases) 에서 항시 변경사항을 체크해 주시고 [Issues](https://github.com/LemonClub/lemonade-android-api-unity-example/issues) 에 질문/오류/피드백을 적어주세요.
 
