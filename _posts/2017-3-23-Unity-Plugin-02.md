---
layout: post
title: Unity Plugin - 02. 안드로이드 스튜디오 설정
date: 2017-03-23
categories: [Edu]
description: Unity Plugin
tags: [Edu,Unity3D,Plugin]
keywords: Unity, Plugin, C#, Android
---

# Unity Plugin - 02. 안드로이드 스튜디오 설정

- 유니티 플러그인 사용법을 적습니다.
- CHAPER 01 : [링크](https://kyechan99.github.io/2017/03/23/Unity-Plugin-01.%EC%9C%A0%EB%8B%88%ED%8B%B0%EC%84%A4%EC%A0%95/)

## 참고
- [Lemonade API](https://github.com/kyechan99/lemonade-android-api-unity-example) 역시 Unity Plugin 을 이용하였습니다.

## 개요
  1. 프로젝트 생성
  2. 라이브러리 추가
  3. 스크립트

## 프로젝트 생성
![1](http://postfiles15.naver.net/MjAxNzAzMjNfMTEx/MDAxNDkwMjI4MDA0NzM2.-MY5AlW1CZ4athfoZ42VBZxK9eAupzl8EapyY2uEN5gg.hyPI2GGb_GRbHEY34foE0k8z4qfdmCz4awITvzK3qPYg.PNG.kyechan99/5.PNG?type=w1)

먼저 프로젝트를 생성해 준다.


## 라이브러리 추가

1. Project Structure 로 이동한다.
  > ![2](http://postfiles8.naver.net/MjAxNzAzMjNfMjIy/MDAxNDkwMjMxNTA4MTI5.F3dfHM3W0PFNNdWC57ZSu95kwwu_lekabvvdgXv3glEg.R5mcRg3PlkQq7uAavC5_u1FYnjMXQSV0y-IBZQcZwyog.PNG.kyechan99/2.PNG?type=w1)

2. app / Dependencies / + / File dependency 클릭
  > ![3](http://postfiles3.naver.net/MjAxNzAzMjNfMTYg/MDAxNDkwMjMxNTA4NDM2.2d0MrnFOgn92srLGYVds0FKGXd-8RFnkBGceGIrX29kg.mOBxEbQfZqXEocm1vatwo9DpobUMxtmlP_T9VYEbM1Ig.PNG.kyechan99/3.PNG?type=w1)

3. libs 폴더 확인
  > ![4](http://postfiles14.naver.net/MjAxNzAzMjNfMTMy/MDAxNDkwMjMxNTA4Njk5.C_B9cVZ56EwY65lPRvKm7aCQssu_V8Ij4jtnT_Iqg4Eg.cTE7h09o985unLdH-tjj85UPWXz94WX78TgM4dSWF5gg.PNG.kyechan99/4.PNG?type=w1)
  >
  > 현재는 libs 폴더에 아무것도 없음을 확인할수 있다.

4. classes.jar 찾기
  > ![5](http://postfiles12.naver.net/MjAxNzAzMjNfNTAg/MDAxNDkwMjMxNTA4OTAw.hZZnWevtixYFmFfiKJcJ5llQwUgGMV1INmu2geLKSw4g.bK1Tx7a58Xxljy9BQhKYzIYWuTeUFadP0Tk2mZW29scg.PNG.kyechan99/5.PNG?type=w1)
  >
  > *유니티설치경로 / Editor / Data / PlaybackEngines / AndroidPlayer / Variations / mono / Development / Classes*

5. classes.jar 이동
  > ![6](http://postfiles11.naver.net/MjAxNzAzMjNfMTA3/MDAxNDkwMjMxNTA5MDk1.kxt-oHaUH8cHCVmL-n2TdHkKT4Twcbt7o6Fr44ttxkIg.zbIrMOCKh2yHCM82q1QdurkAe1UyV1nZ2BivMzrjQEcg.PNG.kyechan99/6.PNG?type=w1)
  >
  > 안드로이드프로젝트 / app / libs 에 방금 찾은 classes.jar 를 붙혀넣기

6. classes.jar 추가
  > ![7](http://postfiles14.naver.net/MjAxNzAzMjNfMjUz/MDAxNDkwMjMxNTA5MzUy.h8fefsv260fg-_ogun5JjAi5iesuMJf_QGE4Oi1xeMkg._Bk9iPFRZ6u_4MUTe6EHDOx8TihM9QEwHosCcTV4zAsg.PNG.kyechan99/7.PNG?type=w1)
  >
  > 안드로이드 프로젝트로 돌아와 classes.jar 를 Add 한다.

  ## 스크립트
  ![8](http://postfiles7.naver.net/MjAxNzAzMjNfMTY4/MDAxNDkwMjMxNTA5NzU1.6TgY4jp-5c_ryyaQP8xvaDpAAO9OuUulBYw--M42JlEg._N-8PrafQ1CXuP2JJg-giRCmDUHvARAlrOusO2MaKYsg.PNG.kyechan99/8.PNG?type=w1)

  MainActivity.java 를 위와 같이 수정해 준다.
  - 스크립트 : [링크](https://gist.github.com/kyechan99/9b2d5e402098f99fdca0cdde324cef4c)

    ```UnityPlayer.UnitySendMessage();``` : 안드로이드에서 유니티 쪽으로 함수를 호출.    
     - ```_PluginManager``` : 유니티의 _PluginManager 란 오브젝트의     
     - ```ReceiveInit``` : ReceiveInit() 이란 함수에     
     - ```SUCCESS``` : "SUCCESS" 란 string 을 전송  

  - 나머지는 다음 글에서 사용해 보면서 설명하겠다.

