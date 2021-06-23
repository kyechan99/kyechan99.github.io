---
layout: post
title: Unity Plugin - 01. 유니티 설정
date: 2017-03-23
categories: [Lib]
description: Unity Plugin
tags: [Dev,Unity3D,Plugin]
keywords: Unity, Plugin, C#, Android
---

- 유니티 플러그인 사용법을 적습니다.

## 참고
- [Lemonade API](https://github.com/kyechan99/lemonade-android-api-unity-example) 역시 Unity Plugin 을 이용하였습니다.

## 개요
  1. 프로젝트 생성
  2. 폴더 생성
  3. Player Setting
  4. 빌드
  5. AndroidManifest.xml 찾기
  6. AndroidManifest.xml 추가
  7. AndroidManifest.xml 수정

  
## 프로젝트 생성
![1](/assets/img/2017-3-23-Unity-Plugin-01/0.png)

먼저 프로젝트를 생성해 준다.

## 폴더 생성
![1](/assets/img/2017-3-23-Unity-Plugin-01/1.png)

Assets / Plugins / Android 폴더를 만들어 준다.

## Player Setting
![1](/assets/img/2017-3-23-Unity-Plugin-01/2.png)

Bundle Identifier 를 수정해 준다.

## 빌드
![1](/assets/img/2017-3-23-Unity-Plugin-01/3.png)

Android 로 설정하고 빌드를 실행한다.

![1](/assets/img/2017-3-23-Unity-Plugin-01/4.png)

## AndroidManifest.xml 찾기
![1](/assets/img/2017-3-23-Unity-Plugin-01/5.png)

빌드가 끝나면 ** *프로젝트 경로 / Temp / StagingArea* ** 에 **AndroidManifest.xml** 이 있다.

## AndroidManifest.xml 추가
![1](/assets/img/2017-3-23-Unity-Plugin-01/6.png)

찾은 **AndroidManifest.xml** 을 이전에 만든 경로 ** *Assets / Plugins / Android* ** 폴더에 추가해 준다.


## AndroidManifest.xml 수정
![1](/assets/img/2017-3-23-Unity-Plugin-01/7.png)

위와 같이 android:name 을 빌드하면서 수정한 *Bundle Identifier.UnityPlayerActivity* 로 변경해 준다.

> UnityPlayerActivity 는 수정하지 않는다.




