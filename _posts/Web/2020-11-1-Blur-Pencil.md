---
layout: post
title: BLUR PENCIL
date: 2020-11-1
categories: [Web]
description: 자동 모자이크 웹 서비스
tags: [Web, Vue, API, Blur, Service, Mosaic-images]
keywords: Web, Vue, API, Blur, Osam, Mosaic
comments: false
haveImg: true
headerImg: 2020-11-1-Blur-Pencil.png
---

<br/><br/>

<img class="dsp-block" style="width: 8rem; margin: 0 auto;" src="https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/client/src/images/logo.png"/>

<p align="center">
  <strong>자동 검열 모자이크 서비스, BLUR PENCIL</strong>
  <br/>  
 빠르고 편리한 자동 검열 기능을 통해 취약한 보안을 강화하고 저작권 침해를 예방합니다.
</p>
<p align="center">
 <img src="https://img.shields.io/github/license/osamhack2020/Cloud_BlurPencil_GonNyong4?style=for-the-badge"/>
 <a href="http://gonnyong4.koreacentral.cloudapp.azure.com:8080">
 	<img src="https://img.shields.io/badge/LIVE-DEMO-%235f5fff?style=for-the-badge"/>
 </a>
</p>
<br/><br/>


"Blur Pencil은 Blur와 Pencil을 합친 단어로, 모자이크 처리 하고 싶은 이미지를 Pencil(연필)과 같은 우리에게 익숙한 도구로 간단하고 쉽게 Blur처리 하기 위해 고안한 아이디어 입니다. 접근하기 편리한 웹을 통해 이미지를 드래그 앤 드랍만 하면, 학습된 Blur Pencil이 이미지를 분석한 뒤, 모자이크 할 객체를 인식하며, 인식된 객체 중 원하는 객체를 골라 모자이크 처리를 할 수 있습니다. 또한 모자이크 처리 된 이미지 내역들을 저장할 수 있으며, 다른 사용자와 공유할 수 있도록 도와줍니다."

<br/><br/>

## 개요
군 복무 중에 1년에 한번씩 진행하는 [국방부 오픈소스 아카데미](https://osam.kr/main/index.jsp)(이하 osam)라고 불리는 곳에서 온라인 해커톤(SW 개발 대회)이 열렸습니다. 몇달간 osam 에서 제공하는 프로그래밍 강의들(웹, 앱, 인프라 등)을 듣고 알고리즘 대회와 몇 서류를 제출 해서 해커톤에 선출되었습니다.

15년도 부터 시작해서 지금까지 진행해 온 해커톤인데 5일간 진행되었던 캠프를 코로나의 영향으로 이번엔 온라인으로 변경이 되었더군요. 군인 신분에서 프로그래밍 개발할 시간은 저녁 시간밖에 없음을 알았는지 (물론 부대마다 입장은 다르지만) 그래도 기간은 한달로 늘어났습니다. 오프라인에서 새로운 사람들과 만나 몇일간 밤 새우며 프로젝트를 진행하는게 해커톤의 묘미인지라 아쉬움이 남을 수 밖에 없었던거 같아요.

## 소개 영상
<br/>
<p align="center">
<div class="video-container">
    <iframe src="https://www.youtube.com/embed/Dpo0IvrmeTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</p>
<br/>

## 개발
구조는 크게 3개로 Vue를 사용한 웹 프론트, 몽고 디비랑 통신해줄 express api 서버, 업로드한 이미지를 처리해줄 pytorch 서버로 나뉩니다.

저는 프론트에선 주로 디자인이나 서버와의 통신, 대시보드나 작업대를 맡았습니다. 백엔드는 크게 없었던것이, 사실 핵심적인 모자이크 처리는 PyTorch 서버에서 처리해주기 때문에 유저, 파일 정보 들만 DB와 통신 처리하면 됐기 때문에 혼자서도 감당 가능했던것 같습니다. (물론 보안이나 안정성등을 생각하면 끝이 없었겠지만 한 달안 정상 작동이 우선이기에..)

### 구조
![구조](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/archi.png)

### 설계
![설계](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/archi2.png)

### API 가이드(유저 관련)
[📝 가이드 문서](https://github.com/osamhack2020/Cloud_BlurPencil_GonNyong4/wiki/API-Guide)

### API 가이드(로고 인식 관련)
[📝 가이드 문서](https://github.com/osamhack2020/Cloud_BlurPencil_GonNyong4/wiki/API-Guide-(Logo-Detection))


## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
- 권장 : 최신 버전의 크로미움 기반 브라우저

## 기술 스택 (Technique Used)
### Server(back-end)
 - Node.js
 - Express
 - MongoDB
 - Flask
 - PyTorch
 
### front-end
 -  Vue.js
 -  Bootstrap

## 사용법
### 사진을 드래그 앤 드롭
![2](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/1.png)

<br/>

### 인식된 객체중 모자이크할 객체를 선택 및 해제
![3](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/2.png)

> 인식률과 NMS 수치를 변경해서 검열될 이미지들의 디테일을 변경할 수 있다.

저희 핵심이자 모자이크 작업을 진행해주는 **작업대**입니다. 우측에 데이터 수치를 변경해주면서 Flask API 서버와 통신해서 검열 예상되는 이미지 좌표를 받아오고 해당 이미지들을 밑에 뿌려줍니다.

찾은 이미지들을 선택 및 해제해서 검열 하고자 하는 이미지들을 지정함으로서 편하게 모자이크 된다는게 blur pencil의 장점입니다.

<br/>

### 모자이크 처리 완료된 이지미를 확인 후 다운
![4](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/3.png)

<br/>


## 메인 페이지
![5](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/prev_dash.png)

메인 페이지는 상당히 공을 들였는데요. 아무래도 심사위원 분들이 심사를 하기위해 테스트를 한다면 제일 먼저 (물론 랜딩페이지 다음으로) 보여지기 때문이였습니다. 아무래도 개발자들만 모였다 보니 디자인이 참 쉽지 않아 여러 사이트를 많이 참고했습니다.

특히 참고했던게 구글 드라이브였는데, 처음엔 폴더 기능이나 공유 기능을 생각 안했다가 대시보드가 너무 밋밋한 바람에 마감주에 급하게 제작해봤습니다. 다행히 팀원분들도 맘에 들어주신거 같고, 회원가입을 해야되는 이유나 대시보드가 이뻐지는 등 개인적으로 제일 잘한일이라고 생각합니다.


<br/>

## 데모 이미지
![demo](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/example1.png)
![demo](https://github.com/kyechan99/Cloud_BlurPencil_GonNyong4/raw/master/images/example2.png)


## 랜딩 페이지
<img style="width: 100%; max-height:none;" src="/assets/img/2020-11-1-Blur-Pencil/1.png"/>

## 마치면서
개인적으로 군 복무중인 프로그래밍 개발자분이 계시다면 **무조건** osam 을 참여해야 된다고 생각합니다. 물론 시간도 없고 다른 할일도 많겠지마는 부대내에서 합법적으로 코딩할 수 있는 기회는 상당히 적습니다.

무엇보다 20년도는 코로나 때문에 온라인이였지만, 앞으로 다시 오프라인 일때는 무려 한 주간 해커톤 떄문에 부대내에 없는 것이 엄청난 장점입니다. (정말 중요ㅎㅎ) 무엇보다 상도 탄다면 휴가나 상금을 주는것도 크죠.

중간에 알고리즘 시험이 있는데 난이도 자체는 정말 쉽습니다. 그렇다고 osam 에 있는 강의로 프로그래밍을 시작해서 시험을 보기에는 조금 힘들 순 있습니다. 동기가 실제로 휴가때문에 노렸지만 결국 포기하더군요. 알고리즘 사이트에서 제일 낮은 단계 몇개만 풀어봐도 비슷한 유형으로 나오는 문제만 풀어도 합격이 되니 너무 걱정은 하지말고 지원해봤음 좋겠습니다.

모두 휴가 많이 받고 건강히 전역할 수 있게 파이팅입니다!