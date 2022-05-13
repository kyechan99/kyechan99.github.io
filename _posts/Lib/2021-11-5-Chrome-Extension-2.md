---
layout: post
title: 크롬 확장프로그램 만들기 - 2
date: 2021-11-5
categories: [Lib]
description: 구조 이해와 개발
tags: [React, Typescript, Chrome, Extension]
keywords: React, Typescript, Chrome, Extension
comments: false
haveImg: true
headerImg: 2020-7-27-nosql.jpg
---

<p style="display:none;">
크롬 확장프로그램을 생성하고 초기 환경을 구축하였다면 이제 개발만 하면 됩니다!
확장프로그램이라 해서 복잡한 구현을 요구하는 것도, 별도의 컴파일을 요구하지도 않습니다.
핵심 요소 3가지에 대해서만 알맞게 구조를 짜면 일반적인 웹 사이트같이 크게 다르지 않기 때문입니다.
</p>

<p style="display:none;">
chrome extension, react chrome extension, react typescript extension
</p>


## 개요
크롬 확장프로그램을 생성하고 초기 환경을 구축하였다면 이제 개발만 하면 됩니다!
확장프로그램이라 해서 복잡한 구현을 요구하는 것도, 별도의 컴파일을 요구하지도 않습니다.
핵심 요소 3가지에 대해서만 알맞게 구조를 짜면 일반적인 웹 사이트같이 크게 다르지 않기 때문입니다.


## 이전글
이전 장을 보지 않아도 본 포스팅을 읽기에 무리가 없지만 빠른 이해를 도와줄 것 입니다.
- [크롬 확장프로그램 만들기 - 1](/lib/2021/08/16/Chrome-Extension-1)

## 사이트
뒤에서 설명할 설정에 대한 참고용 사이트입니다.

      
- [참고용 - Velog Extension 레포](https://github.com/kyechan99/velog-extension)
- [참고용 - Velog Extension 의 Manifest 설정](https://github.com/kyechan99/velog-extension/blob/master/public/manifest.json)
- [참고용 - Velog Extension 의 webpack 설정](https://github.com/kyechan99/velog-extension/blob/master/webpack.config.js)
- [Chrome API reference](https://developer.chrome.com/docs/extensions/reference/)



## 구조
크롬 확장프로그램은 아래 3개의 요소로 구분합니다.

이 요소들의 차이만 구별하게 된다면 앞으로 모든 코딩은 자유롭게 가능합니다.

- **popup** 
- **content** 
- **background**

<br/>

### 구조 - popup
단어 그대로, 팝업창을 의미합니다.

우리가 크롬 확장프로그램을 설치하게 된다면 크롬 브라우저의 우측 상단에 확장프로그램의 아이콘이 생성됩니다.

해당 아이콘을 클릭하였을때 `띄워주는 창`을 팝업이라 부릅니다.

![1](/assets/img/2021-11-5-chrome-extension/1.png)

위와 같은 팝업창을 React 를 이용해 구성합니다.

크롬 확장프로그램 전용의 컴포넌트, 모듈 같은것은 없고 웹 페이지를 개발하는 것과 똑같이 코딩합니다.

<br/>

### 구조 - content
내용물, 사전적 정의로 '속에 든 것들'이라고 이해하면 편합니다.

특정 페이지에(혹은 모든 페이지에) `삽입되어 사용되는 코드`입니다.

어떤 페이지에 대한 내용을 수정하고자 할 때 사용할 수 있습니다.

![d](https://github.com/kyechan99/velog-extension/raw/master/README/full1.png)

> 위 이미지는 veleg extension 의 설명 이미지입니다.

위와 같이 기존에 velog 사이트에는 없었던 아이콘(및 기능) 들을 content 스크립트를 이용해서 추가하거나 수정이 가능합니다.

<br/>

### 구조 - background
앞에 결과물들을 보여주는 popup과 content와는 다르게 `별도의 인스턴스로 실행`되는 부분입니다.

크롬 탭을 닫았는지 숨겼는지와 같은 브라우저 전체 상태를 처리할때 사용됩니다.

![2](/assets/img/2021-11-5-chrome-extension/2.png)

background 스크립트에서 로그를 찍는다면, 서비스워커를 통해서 콘솔창을 띄움으로 확인이 가능합니다.


<br/>


## 개발하기
### popup 사용하기
[이전장](/lib/2021/08/16/Chrome-Extension-1) 에서 action 설정을 할때 popup.html 이라는 이름으로 작성했습니다.

popup.html 을 우리가 직접 생성하는 것은 아니고, webpack 을 이용해 build 후에 생성되게 합니다.

```js
// webpack.config.js
const config = {
  entry: {
    popup: path.join(__dirname, "src/index.tsx"),
    content: path.join(__dirname, "src/content.tsx"),
    background: path.join(__dirname, "src/background.ts"),
  },
  output: { 
    path: path.join(__dirname, "dist"), 
    filename: "[name].js"
  },
  ...
};
```
> [velog-extension-webpack 예시](https://github.com/kyechan99/velog-extension/blob/master/webpack.config.js#L8)

위와 같이 작성하였다면, 앞으로 popup 을 통해 띄워줄 창은 index.tsx 의 작성 그대로 보여지게 됩니다.

index.tsx 에는 기존에 React 프로젝트를 제작하는 것과 같이 코딩하시면 됩니다.

<br/>

### content 사용하기
앞서 언급되었든 페이지에 대해 수정 등의 작업을 할때 content 를 이용합니다.

[이전장](/lib/2021/08/16/Chrome-Extension-1) 에서 설정했듯, manifest 의 `content_scripts` 에서 어떤 페이지에 대해 반응을 할 지 수정할 수 있습니다.

프로젝트에서 `content.tsx` 파일을 만들고 manifest 에서 아래와 같이 설정했다고 가정합니다.
```json
{
    "content_scripts": [
        {
            "matches": ["*://velog.io/*"],
            "js": ["content.js"]
        }
    ]
}
```

위와 같은 설정이라면, velog.io  라는 주소가 들어간 웹 페이지에 접근하게 되었을때 content.js 를 실행합니다.
(우리는 typescript 를 사용하기에 content.tsx 파일을 생성하였지만 content_scripts 설정에서는 당연히 웹팩으로 번들링된 js 파일을 사용 하기에 .js 확장파일로 적습니다.)

content.tsx 에 아무런 로그를 찍어보았을 때, `*://velog.io/*` 사이트에 접속후 개발자모드(F12)의 콘솔에서 확인할 수 있습니다.

만약 [velog-extension](https://github.com/kyechan99/velog-extension) 과 같이 웹 페이지의 DOM 을 수정하고자 한다면 React.render 를 사용합니다.

```js
// content.tsx
import ReactDOM from 'react-dom';
import SampleButton from 'components/SampleButton';

ReactDOM.render(<SampleButton/>, document.~~~('~~'));
```

> 다른 사용 예시 : [velog-extension/content.tsx](https://github.com/kyechan99/velog-extension/blob/master/src/content.tsx) 

js 파일 뿐만 아니라 css 설정도 가능합니다.

`import './**.css'` 를 content.tsx 안에 포함한다면 자동으로 웹 content 가 수정됩니다.

<br/>


### background 사용하기
```js
// background.ts
chrome.runtime.onMessage.addListener((message: MESSAGE_TYPE, sender) => {
    let tabId = sender.tab?.id;
    switch (message.type) {
        case "SEND_DATA":
            console.log("메세지를 받았습니다.", message.data);
            break;
        default:
            break;
    }
});
```
popup 과 background 간에 데이터를 주고 받고자 할 때 `chrome.runtime.onMessage`를 이용합니다.

위의 코드에서는 typescript 를 사용하기 때문에 `MESSAGE_TYPE`과 같은 타입을 만들어서 사용했지만 만약 ts 를 사용하지 않는다면 순수 object 처럼 사용해도 무관합니다.

```js
// App.tsx 나 popup에서 사용할 컴포넌트 파일
chrome.runtime.sendMessage({ type: "SEND_DATA", data: "데이터입니다" });
```

데이터를 전송하고자 할때는 `chrome.runtime.sendMessage`를 사용합니다. 

위에서는 popup에서 메세지를 송신, background에서 메세지를 수신하는 것을 예로 들었지만 반대로도 사용이 가능하니 이를 두고 프로그램을 개발하시면 될 것 같습니다.

종종 웹페이지 개발할 때 localstorage 를 이용해 데이터를 저장할때가 있죠. 크롬 확장프로그램 역시 이를 지원합니다.

```js
// 가져오기
chrome.storage.local.get("data", (res) => {
  console.log(res);
});

// 저장
chrome.storage.local.set({ "data": tempData });
```

`chrome.storage` 역시 popup, background 상관 없이 사용가능합니다. (코드에서 볼 수 있듯 비동기로 작동합니다.)

`chrome.storage`를 사용하기 위해서는 Manifest 설정에서 저장소 권한을 사용하겠다고 암시해야 합니다.
```json
{
    "permissions": ["storage"]
}
```

일반적으로 사용하는 `chrome.runtime`과 `chrome.storage` 말고도 다양한 API 가 있으니 [API Reference](https://developer.chrome.com/docs/extensions/reference/) 에서 확인 하여 사용하면 될 것 같습니다.

> [chrome.runtime reference](https://developer.chrome.com/docs/extensions/reference/runtime/)
>
> [chrome.storage reference](https://developer.chrome.com/docs/extensions/reference/storage/)
>
> [chrome reference](https://developer.chrome.com/docs/extensions/reference/)


<br/>

## 빌드 및 테스트하기
이전장 이후로 특별한 설정을 건드리지 않았다면 `npm run build` 명령어로 프로젝트가 빌드됩니다.

저의 경우 웹팩에서 `dist` 폴더에 파일들을 생성하게 하였습니다.

![ㅁ](https://github.com/kyechan99/velog-extension/raw/master/README/help1.png)
이후에 `chrome://extensions/` 를 chrome 브라우저에 입력하여 접속합니다.

우측 상단에 개발자 모드를 ON 시켜줍니다.

![ㅁ](https://github.com/kyechan99/velog-extension/raw/master/README/help2.png)

좌측 상단의 **압축해제된 확장 프로그램을 로드합니다** 버튼을 눌러 build 된 폴더를 첨부합니다.

정상적으로 첨부되었다면 위와 같은 이미지로 보일 것입니다.

새로고침 버튼을 누르면 자동으로 폴더 경로를 탐색해 파일을 새로고침하니 테스트때마다 파일을 지정해줄 필요는 없습니다.

다만 chrome.storage 의 데이터들은 삭제되지는 않으며,
몇몇 에러 같은 경우는 새로고침이 아닌 폴더 재첨부를 통해서 해결되기도 하니 참고하면 좋을것 같습니다.

앞서 background 설명에도 언급했지만 background의 console은 위 **서비스 워커**를 눌러 확인 할 수 있습니다.
만약 빌드 파일 자체의 문제나 프로젝트 실행 중 에러가 생길때 위 서비스 워커가 뜨지 않을 수 있습니다.

<br/>

## 마치며
Manifest 2와 3에 따라 설정도 다르고 이에 따른 권한들도 달라서 프로그램 개발이 쉽지는 않았던 것 같습니다.
대표적으로 둘의 차이인 2보다 3이 보안적인 부분에서 더 탄탄하다고 할만한 것이 API를 사용할 때와 같이 필요한 권한들에 대해 설정하는 것이 좀 더 섬세해진 것에 차이가 있습니다.
때문에 웹 서핑을 통해 사용법에 대해 검색하고 알아내도 2버전인지 3버전인지에 따라 방식이 다르거나 설정해 줘야 하는 것이 다를 수 있습니다.

velog extension 에서는 팔로우 등에 대한 데이터를 popup 과 background 에서 `chrome.runtime`을 이용해서 데이터를 주고 받습니다.
사실 이 프로그램의 경우에는 굳이 이런 방식으로 작성할 필요는 없었습니다. 단순히 `chrome.storage` 만 사용하면 되기 때문이었는데요.
background 와의 통신에 대해서 이 글을 작성하기 위해 그렇게 코딩하였을 뿐이기 때문에 비슷한 프로그램을 개발하고자 하는 분이 계시다면 좋지 않은 방법이니 따라하지 않기를 권장합니다.

