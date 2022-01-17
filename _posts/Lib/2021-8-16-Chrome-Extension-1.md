---
layout: post
title: 크롬 확장프로그램 만들기 - 1
date: 2021-8-16
categories: [Lib]
description: 프로젝트 생성과 설정
tags: [React, Typescript, Chrome, Extension]
keywords: React, Typescript, Chrome, Extension
comments: false
haveImg: true
headerImg: 2020-7-27-nosql.jpg
---

<p style="display:none;">
개발자 블로그 사이트 Velog extension 을 만들면서, React와 typescript 를 이용해 크롬 확장프로그램을 개발하는 방법에 대해서 적습니다.
제가 velog 에 포스팅을 하지는 않는데요.
재밌는 프로젝트나 개발 글들을 쉽게 읽어 볼 수 있어 종종 들려서 사용하곤 합니다.
특히 본인의 철학을 가지고 개발에 대한 글을 작성하시는 분이 상당히 재밌고 생각도 하게되어 그 분 글을 꾸준히 읽곤 하는데,
아무래도 velog 에는 팔로우 기능이 (아직까지)없어서 이런 기능을 도와줄 크롬 확장 프로그램을 생각하게 되었습니다.
</p>
<p style="display:none;">
chrome extension, react chrome extension, react typescript extension
</p>



## 개요
제가 [velog](https://velog.io/) 에 포스팅을 하지는 않는데요.
재밌는 프로젝트나 개발 글들을 쉽게 읽어 볼 수 있어 종종 들려서 사용하곤 합니다.
특히 본인의 철학을 가지고 개발에 대한 글을 작성하시는 분이 상당히 재밌고 생각도 하게되어 그 분 글을 꾸준히 읽곤 하는데,
아무래도 velog 에는 팔로우 기능이 (아직까지)없어서 이런 기능을 도와줄 크롬 확장 프로그램을 생각하게 되었습니다.

이번 글은 이 [velog 확장 프로그램](https://github.com/kyechan99/velog-extension)을 개발하면서 얻은 몇몇 지식과 개발 방법에 대해서 정리 하는 글이 될 것 같습니다.





<br/>




## 사이트
뒤에서 설명할 설정에 대한 참고용 사이트입니다.
- [Manifest 2 문서](https://developer.chrome.com/docs/extensions/mv2/manifest/)
- [Manifest 3 문서](https://developer.chrome.com/docs/extensions/mv3/manifest/)
- [content 에 대해서](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
- [권한 종류](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)
- [참고용 - Velog Extension 의 구조](https://github.com/kyechan99/velog-extension)
- [참고용 - Velog Extension 의 Manifest 설정](https://github.com/kyechan99/velog-extension/blob/master/public/manifest.json)





<br/>





## 1. 프로젝트 생성
```console
npx create-react-app 이름 --template typescript
```

먼저 **react**와 **typescript** 로 크롬 확장 프로그램을 개발하기 위해서 위와 같은 명령어로 프로젝트를 생성합니다.




<br/>




## 2. 프로젝트 설정
프로젝트 생성을 마쳤다면, 이제는 프로젝트를 설정해 주어야 합니다.
시작이 반이라고 하듯 **Manifest**의 설정은 정말 개발하는 데 있어 큰 부분이었는데요.

대부분의 설정은 개발 도중에 수정하고 추가해도 문제가 없지만 __몇몇 설정은 차후 변경이 매우 까다로워__ 지며 개발 방식에 대해서도 변함이 생기기 때문에
초기 설정이 매우 중요한 부분이 존재합니다. 

설정 파일은 `public/manifest.json` 에 위치해 있습니다.


대략적으로 사용되는 것만을 정리하니 자세한 설정은 **공식 문서**에서 확인하면 좋을 것 같습니다.




<br/>




### 2-1. 버전 설정

아무래도 가장 중요한건 Manifest의 버전 설정인데요. `manifest_version` 을 2 또는 3으로 지정해 주면 됩니다.

```json
{
    "manifest_version": 2 or 3,
}
```

2버전과 3버전, 둘 중 어느것을 선택하느냐에 따라 이후 설정 방식에 대해 차이가 있습니다. 때문에 버전 설정은 초기에 해주는 것이 가장 좋습니다.
아무래도 2버전은 전부터 계속해서 사용되어 왔으니 관련 문서가 많습니다. 다만 [공식 문서](https://developer.chrome.com/docs/extensions/mv3/intro/)에도 나와있듯 2버전 보다는 3버전을 추천하고 있습니다. 
앞으로 개발하면서 생기는 문제에 대해 서핑하게 되면 2버전에 대한 글이 많을 텐데요(저는 그랬습니다..).  3버전에 대한 글이 2보다는 수가 적어도, 개발하는 확장 프로그램이 보안 및 보호에서 성능적인 면에서 보다 향상되어 있다고 하니 (실제로 설정 방법에서 차이가 납니다) 결정에 참고하면 좋을 것 같습니다.

앞서 얘기하자면, 해당 글은 **3 버전**을 사용합니다. 2 버전을 사용하고자 한다면 [2 버전 문서](https://developer.chrome.com/docs/extensions/mv2/manifest/) 를 활용하시면 될 것 같습니다. 

> [3 버전 문서](https://developer.chrome.com/docs/extensions/mv3/manifest/)




<br/>





### 2-2. 프로그램 이름 설정
```json
{
    "short_name": "이름",
    "name": "이름",
    "version": "0.1",
    "description": "소개",
}
```

다음은 프로그램에 대한 이름과 소개글을 작성합니다. 언제든지 변경 가능하니 편하게 수정하시면 될 것 같습니다.
다만 `version`에 대해서는 배포와 같은 경우 당연히 동일하게 유지 및 하위 버전으로 변경하는 것은 힘듭니다.




<br/>





### 2-3. 아이콘 설정
```json
{
    "icons": {
        "16": "icon16.png",
        "32": "icon32.png",
        "64": "icon64.png",
        "128": "icon128.png"
    },
}
```
프로그램의 아이콘 이미지에 대한 설정입니다.
위와 같이 `16px의 경우 icon16.png를 사용한다` 라는 의미로 사용하면 될 것 같습니다.

```json
{
    "icons": [
        {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
        },
        ...
    ]
}
```

더욱 자세하게 사용하고자 한다면 위와 같이 사용해도 괜찮은 것 같습니다.




<br/>




### 2-4. action 설정
```json
{
    "action": {
        "default_icon": "icon128.png",
        "default_popup": "popup.html",
        "default_title": "이름"
    },
}
```

확장 프로그램을 클릭했을때 띄워지는 팝업창을 지정합니다.

`default_icon` 과 `default_title` 은 작명 그대로의 의미를 지닙니다.
크롬 브라우저 우측 상단에 크롬 확장프로그램들이 나열되는데, 이때 보여질 이미지와 (마우스를 hover 시 띄워줄)제목을 지정해줍니다.

이때 중요한 것은 `default_popup` 입니다. 위에서는 `popup.html` 이라고 지어놓았지만 실제로 꼭 해당 파일명을 가지고 있을 필요는 없습니다.
다만, 통일성과 이해를 위해 대체로 **popup** 이라는 이름을 선호하는 편입니다.
`default_popup`은 프로젝트 생성 후 바로 존재하는 파일이 아닌 빌드시에 생기는 파일을 지정합니다.
때문에 webpack 으로 파일명을 설정하게 되는데 이는 설정 글 이후에 작성하겠습니다.




<br/>




### 2.5. 서비스 워커 설정
```json
{
    "background": {
        "service_worker": "background.js"
    },
}
```
작명 그대로 `background`, 뒤에서 실행 될 스크립트를 의미합니다. 

**크롬 확장프로그램의 구조는 크게 `action`, `content`, `background`로 나눌 수 있는데요.**

`action`과 `content`는 각각 팝업창을 열거나 해당 페이지에 접속해야 된다는 조건을 만족할때마다 실행됩니다.
반면에 서비스 워커는 크롬 브라우저가 실행되어 있을때부터 작동되어 지는데요.

크롬 브라우저에서의 **탭(창) 이동 및 생성과 같은 특정 행동에 대한 이벤트 관리**를 필요로 할 때 사용합니다.

더해서 `action` 과 `content`와의 **정보 전달**이 가능하기 때문에 소이 말하는 서버와 같은 구조는 아니어도 클라이언트와 통신한다는 점에서 비슷하게 이해하면 쉬울듯 합니다.

한 가지 사용 예시로, 특정 시간 및 행동에 따라 **사용자 PC 에 알림**을 보내고자 할때 서비스 워커에서의 코드 작성이 필요로 해집니다.




<br/>




### 2.6. content 설정
```json
{
    "content_scripts": [
        {
            "matches": [ ... ],
            "js": [ ... ]
        }
    ],
}
```
다음으로는 `content`의 설정입니다.

앞서 언급된 대로 content 역시 크롬 확장프로그램에서 중요한 세 분류중 하나입니다.

**특정 페이지에 접근하였을때 어떤 파일을 실행시킬지** 설정하는 부분이라고 생각하면 되는데요.

```json
{
    "content_scripts": [
        {
            "matches": [ "*://velog.io/*" ],
            "js": [ "content.js" ]
        }
    ],
}
```

[velog extension](https://github.com/kyechan99/velog-extension)을 예로 들면, velog 홈페이지에 접속했을때 (matches), content.js 파일을 (js) 실행한다.
라는 의미로 설정하면 됩니다.

> [content 문서](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)




<br/>




### 2.7. permission 설정
```json
{
    "permissions": [ ... ],
}
```
안드로이드 앱을 개발하다 보면, 혹은 새로 설치를 해보기만 하였어도 우리는 어플리케이션에 어떤 권한을 쥐어주어 특정 행동을 허락할지에 대해     선택합니다.
크롬 확장프로그램도 이와 같이, 어떤 행동에 대해 이벤트를 사용하고자 할때 사용자로부터 권한을 받아야 행동이 가능합니다.

일반적으로 사용하는 권한 몇가지만 정리하며 자세한 권한은 문서에서 확인하면 좋을 것 같습니다.

- `"tags"` : 탭들에 대한 권한입니다. 새로운 탭을 열거나 최근 탭에 대해 받아오거나 할때 사용합니다.
- `"alarms"` : 크롬 내 알람 기능을 사용할때 필요합니다.
- `"cookies"` : 크롬 쿠키에 접근하고자 할때 필요합니다.
- `"history"` : 주소 히스토리를 사용할때 필요합니다. 
- `"storage"` : 스토리지에 접근할때 사용합니다. 특정 데이터를 로컬에 저장할때 필요합니다.
- `"webNavigation"` : 페이지가 변경되었을떄와 같은 네비게이션 이벤트를 사용할때 필요합니다.

> [기타 권한 문서들](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)





<br/>




## 정리
Manifest 3 버전일 경우 대체로 아래와 같은 형태면 모든 뼈대는 완성했습니다.

```json
{
  "manifest_version": 3,
  "short_name": "이름",
  "name": "이름",
  "version": "0.1",
  "description": "소개",
  "icons": {
      ...
  },
  "action": {
    "default_icon": "icon128.png",
    "default_popup": "popup.html",
    "default_title": "이름"
  },
  "background": {
    "service_worker": "background.js"
  },
  "permissions": [ ... ],
  "content_scripts": [
    {
      "matches": [ ... ],
      "js": [ ... ]
    }
  ]
}
```

다음 글에서는 `content`, `action`, `background` 의 관계와 설계 등에 대해 작성하도록 하겠습니다.

혹여 지나가다 글을 보신 분이 계시다면 잘못된 부분에 대해 지적해 주시면 감사드리겠습니다.


