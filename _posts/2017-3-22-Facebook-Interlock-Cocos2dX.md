---
layout: post
title: Facebook Interlock Cocos2d-X ver.
date: 2017-03-22
categories: [Edu]
description: 페이스북 연동 Cocos2d-X
tags: [Edu,Facebook,Interlock, Cocos2d-X]
keywords: Facebook, Interlock, cocos2d
---


# Facebook Interlock - Cocos2d-X

- Facebook Interlock github [링크](https://github.com/kyechan99/Facebook_Interlock)
- Facebook 개발자 사이트 [링크](https://developers.facebook.com)
- JNI 사용법 [링크](http://blog.naver.com/kyechan99/220552861010)

## 참고
- Facebook 의 [README](https://github.com/kyechan99/Facebook_Interlock/blob/master/README.md) 를 참고


## 개요
  1. 개발자 등록
  2. 이클립스 환경 설정
  3. 오류 해결
  4. AndroidManifext.xml 수정
  5. String.xml 수정
  6. AppActivity 수정
  7. JNI 이용

## 1. 개발자 등록
  1. 앱 생성
  2. 구글 패키지 이름
  3. 클래스 이름
  4. 키 해시
  - [참고 사이트](http://moelcano.tistory.com/135)

## 2. 이클립스 환경 설정
  1. 이클립스에 다운 받은 Facebook SDK 를 Import
  2. Facebook SDK 를 Library 형식으로 바꿈
  3. 프로젝트에 Library 추가
  4. [Github Libs]() 에서 `android..` 와 `Bolt..` 를 프로젝트의 Libs 폴더에 넣어 준다.

## 3. 오류 해결
  1. 페이스북 SDK 의 proteries 의 Java Build Path 의 Libraries 에 들어가 Add Jars 에서 android.. 와 Bolt.. 를 추가
  2. Proteries 의 Android 에서 SDK 버전을 4.4.2W 버전으로 바꿔준다.
  3. Java Compiler 의 JDK 버전을 1.6에서 **1.7**로 바꿔준다.
  4. 아직도 에러가 뜬다면 프로젝트의 SDK 버전을 4버전 이상으로 바꿔준다.

## 4. AndroidManifest.xml 수정
```
<activity android:name="com.facebook.FacebookActivity" 
          android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
          android:theme="@android:style/Theme.Translucent.NoTitleBar"
          android:label="@string/app_name" />
<meta-data android:name="com.facebook.sdk.ApplicationId"
           android:value="@string/facebook_app_id"/>
```
를 추가한다.

## 5. String.xml 수정
  - rex/values/string.xml 에
  ``` <string name="facebook_app_id">facebookId</string> ``` 를 추가한다.
  - facebookId 에는 개발자 사이트에서 공급받은 키값을 입력한다.

## 6. AppActivity 수정
  - Login 기능 : 참고 [사이트](https://github.com/kyechan99/Facebook_Interlock/tree/master/facebookLogin/src/org/cocos2dx/cpp)
  - Share 기능 : 참고 [사이트](https://github.com/kyechan99/Facebook_Interlock/tree/master/facebookShare/src/org/cocos2dx/cpp)


## 7. JNI Helper
  - [JNI Helper](https://kyechan99.github.io/2017/03/22/JNI-Helper-Cocos2dX/) 사용하기
