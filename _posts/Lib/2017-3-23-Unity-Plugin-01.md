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
![1](http://postfiles1.naver.net/MjAxNzAzMjNfNjcg/MDAxNDkwMjI4MjM0MjQz.Rh_v7QJZcDkVuUoVA_kpJT39b1xaJ4PTEPxKt3t4fsog.a9jdiFwZXm4OE561q9AGiUVjJV-VT1S-u5VyKT0Smhgg.PNG.kyechan99/0.PNG?type=w1)

먼저 프로젝트를 생성해 준다.

## 폴더 생성
![2](http://postfiles1.naver.net/MjAxNzAzMjNfMTEx/MDAxNDkwMjI4MzMyNDQ2.B3VA8MkKaetsqFFMD4fo3pXl49R7m6C8QqOyCghWdGsg.a4402Gn53cGqB0-7nbT9ROGgtqSOamg6fnQSMrtOLQUg.PNG.kyechan99/001.PNG?type=w1)

Assets / Plugins / Android 폴더를 만들어 준다.

## Player Setting
![2.5](http://postfiles1.naver.net/MjAxNzAzMjNfMTk5/MDAxNDkwMjI4MDAzNjEw.zNIC-n_MMaQkVsrJsfVuaaVUcqLk3noxgeqycjSU9rYg.kbhDUYuxgIuwwnyivGLOpQ3klhcd6ce659m9r2U_TWEg.PNG.kyechan99/1.5.PNG?type=w1)

Bundle Identifier 를 수정해 준다.

## 빌드
![3](http://postfiles5.naver.net/MjAxNzAzMjNfNDEg/MDAxNDkwMjI4MjM0MDQ4.T0FoUL9ykNtzXxDVwQCAIPWnQhuMaFhW8NIFywIhgAIg.B5gN1c69MRkOwPmqWxASWrLHOq3Q_qWGl2MylLEo1pwg.PNG.kyechan99/0.5.PNG?type=w1)

Android 로 설정하고 빌드를 실행한다.

![4](http://postfiles7.naver.net/MjAxNzAzMjNfMTA3/MDAxNDkwMjI4MDA0MTM4.cSHKAZoHmXEDznQ9uul_cwNXUVq2HUUnryLB5t-XNhcg.CQ4i9X4JOLcShQD7mY0m4hwXQ97_nMG4Gb1aErl78UUg.PNG.kyechan99/2.PNG?type=w1)

## AndroidManifest.xml 찾기
![5](http://postfiles4.naver.net/MjAxNzAzMjNfMyAg/MDAxNDkwMjI4MDA0Mzc1.hhrJsGPfh49e1GQcJWdZ05ojGtVzzQOxQ0IPYbr9GlEg.v5o5LOk9WTixauKMREKuyCLZ0vZF7-zGckP2_9xnwtYg.PNG.kyechan99/3.PNG?type=w1)

빌드가 끝나면 ** *프로젝트 경로 / Temp / StagingArea* ** 에 **AndroidManifest.xml** 이 있다.

## AndroidManifest.xml 추가
![6](http://postfiles10.naver.net/MjAxNzAzMjNfNTYg/MDAxNDkwMjI4MDA0NTAz.cnexSySDMlmTpD6sbQFoA7a7GwxTaDZbTYZW9kevI2sg.MNT4V3t0A5Y4wnMEbmGmAHSsu0bMIJud8C8DMo2ilt8g.PNG.kyechan99/4.PNG?type=w1)

찾은 **AndroidManifest.xml** 을 이전에 만든 경로 ** *Assets / Plugins / Android* ** 폴더에 추가해 준다.


## AndroidManifest.xml 수정
![7](http://postfiles11.naver.net/MjAxNzAzMjNfMTYg/MDAxNDkwMjI4MDA1MDgw.mlgnNqqO1rKVWdZPbdd0DCPf-fpsB-wq-2yZ1g82Av8g.hdDqXlSDvcqy8zDZqPpKsKkosuZj783NaTwliEZbe8sg.PNG.kyechan99/6.PNG?type=w1)

위와 같이 android:name 을 빌드하면서 수정한 *Bundle Identifier.UnityPlayerActivity* 로 변경해 준다.

> UnityPlayerActivity 는 수정하지 않는다.




