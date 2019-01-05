---
layout: post
title: Kakao Interlock Cocos2d-X ver.
date: 2017-03-22
categories: [Edu]
description: 카카오 연동 Cocos2d-X
tags: [Edu,Kakao,Interlock, Cocos2d-X]
keywords: Kakao, Interlock, cocos2d
---

# Kakao Interlock - Cocos2d-X

- Kakao Interlock github [링크](https://github.com/kyechan99/Kakao_Interlock)
- Kakao 개발자 사이트 [링크](https://developers.kakao.com/)
- JNI 사용법 [링크](http://blog.naver.com/kyechan99/220552861010)

## 참고
- Kakao_Interlock 의 [ReadMe.md](https://github.com/kyechan99/Kakao_Interlock/blob/master/README.md) 를 참고


## 진행
1. Kakao SDK 를 [다운](https://developers.kakao.com/sdk/latest-android-sdk-for-eclipse)받고 이클립스에 임포트
2. 카카오 개발자 [사이트](https://accounts.kakao.com/login?continue=https://developers.kakao.com/login?redirectUrl=%2Fapps)에서 로그인 후 본인 애플리케이션 추가
3. 이클립스 환경으로 돌아와 AndroidManifest를 수정 
    > ( 주석으로 kakao add 가 적혀 있는 곳을 추가 ex : [LINK](https://github.com/kyechan99/Kakao_Interlock/blob/master/kakaoLink/AndroidManifest.xml) )
4. res/values/string.xml 의 **kakao_app_key** 와 **kakao_scheme** 에 네이티브 키로 변경
5. AppActivity.java 에 내용을 입력 ( ex : [LINK](https://github.com/kyechan99/Kakao_Interlock/blob/master/kakaoLink/src/org/cocos2dx/cpp/AppActivity.java) )
6. Cocos2d-X 프로젝트로 돌아와 JNI Helper 사용

## JNI Helper
  - [JNI Helper](https://kyechan99.github.io/2017/03/22/JNI-Helper-Cocos2dX/) 사용하기
