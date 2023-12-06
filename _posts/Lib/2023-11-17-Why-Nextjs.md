---
layout: post
title: 나는 왜 React 프로젝트를 Next로 변환했는가
date: 2023-11-17
categories: [Lib]
description: Next의 특징과 프로젝트에 대한 생각
tags: [Next.js, Next.js13, React]
keywords: Next.js, Next.js13, React
haveImg: true
headerImg: 2023-11-17-Why-Nextjs.png
---

<p style="display:none;">
개발중이던 React 프로젝트를 최근, Next.js 로 마이그레이션 작업을 진행했습니다.
당시엔 프로토타입이 빠르게 필요했기에 큰 생각없이 React SPA로 개발을 시작했는데요.
필수 기능들이 모두 완성이 된 다음으로 부분적인 내용들에 대해 고려해야할 여유가 생겼을때, Nextjs가 눈에 밟혀오기 시작했습니다.

단순하게 React와 Next의 차이가 무엇인가라고 한다면 가장 첫번째로 나오는 문구는 Next가 React 기반의 서버사이드 렌더링(SSR) 프레임워크라는 것,
그리고 그로 인한 검색 엔진 최적화(SEO)에 유리하다는 내용일 것입니다.
</p>

## 개요

개발중이던 React 프로젝트를 최근, Next.js 로 마이그레이션 작업을 진행했습니다.
당시엔 프로토타입이 빠르게 필요했기에 큰 생각없이 React SPA로 개발을 시작했는데요.
필수 기능들이 모두 완성이 된 다음으로 부분적인 내용들에 대해 고려해야할 여유가 생겼을때, Nextjs가 눈에 밟혀오기 시작했습니다.

단순하게 React와 Next의 차이가 무엇인가라고 한다면 가장 첫번째로 나오는 문구는 Next가 React 기반의 서버사이드 렌더링(SSR) 프레임워크라는 것,
그리고 그로 인한 검색 엔진 최적화(SEO)에 유리하다는 내용일 것입니다.

저 역시 SEO에 대한 고려때문에 Next.js 로의 변환을 결정했다라고 한다면 일부는 맞으나, 일부는 틀립니다.
리액트 역시 SSR 을 완전 사용할 수 없지 않습니다. (이를 테면 ReactDOMServer 라는게 있다는것 같습니다)
무엇보다 프로젝트 자체가 이미 꽤나 많은 기능을 구현했기에 변환하는 작업은 굳이 시간만 소요할 뿐이었습니다.
단순히 Next.js 라는 프로젝트를 진행하고자 했다면 구상중인 다른 좋은 프로젝트도 많았고요.
그리고 요즘의 검색 엔진은 SPA도 잘 고려해 준다고도 합니다.

그래서 이 글은 변환하는데 어떤 이유가 있었는가, 에 대해 적는 글입니다.
결국 이 글도 다른 많은 React와 Next의 차이를 다루는 흔한 글일지도 모르겠습니다만 고민하는 누군가에겐 참고가 되었으면 싶고 저도 생각정리를 해보고자 합니다.

> 제목이 자극적일지는 모르겠습니다.
>
> 이 글은 Next.js 로 프로젝트를 해야한다는 글이 아닙니다.

## 서버 사이드 렌더링 (SSR)

처음으로 안나올수는 없는 이야기, SSR 입니다.

서버 사이드 렌더링의 뜻은 결국 **서버가 초기 페이지를 생성해 완전한 형태의 페이지를 브라우저에 전달** 하는 방식을 이야기합니다.

반대되는 말로 클라이언트 사이트 렌더링(CSR)이 있는데 **브라우저가 JS를 사용해 웹 페이지를 생성하고 업데이트** 방식을 이야기하고요.

SSR이 SEO이 유리하다는 이유가, 이 `페이지 구성을 언제하냐`에 대해 있습니다.

검색 엔진은 흔히 얘기하는 크롤링을 통해 정보를 얻어옵니다.
이 웹 크롤러는 사이트를 방문한 다음, 해당 페이지에 있는 링크들을 타고 다니며 새로운 페이지를 찾습니다.
때문에 CSR의 경우에는 초기에 빈 페이지(HTML)이 로드되기 떄문에 SEO 면에서 불리하다는 것이고요.

외에도 검색 엔진은 여러가지를 고려합니다.
사이트의 문제점 역시 살펴보는데 문제 있는 링크나, 페이지의 잦은 변경 사항 들도 고려합니다.
(이 블로그도 sitemap 처음 작성할때 페이지가 너무 자주 바뀌면 결국 걸러진다고 해서 괜히 조심했던 기억이..)
이미지 같은 경우는 당연 크롤러가 읽기 못하기에 `<img >` 태그의 alt 값을 대신 읽습니다.
그러니 우리가 html tag를 사용할때, 단순히 css를 적용시키는 것만이 아니라 적절한 tag를 사용하는 이유도 모두 이 떄문입니다.
크롤러는 페이지 로딩 속도도 고려하는데, SSR은 서버에서 완전한 형태의 페이지를 제공하기 때문에 로딩 속도면에서도 CSR에 앞선다는 것이고요.

<br/>
"아니 결국 SEO 면에서 이득이라는 거네 !"
<br/>

글쎄요. 그렇다고 해서 꼭 프로젝트를 Next로 사용해야 한다는 이유가 아직은 합당하지 않았습니다.

개요에서 언급했듯 React 역시 SSR 이 가능하며 (사용법을 깊게 연구해보지는 않아 다루지는 못합니다만!) sitemap을 잘 제출하기만 한다면 페이지 자체의 색인에도 손해보지 않습니다.
[구글](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko)의 경우에는 크롤링 과정에서 JS를 구동해 읽을 수도 있습니다. (물론 JS 동작시키고 렌더링하면서 시간이 소요되지만)

그리고, 동적 렌더링(Dynamic Rendering)을 통해 SEO 를 높일 수도 있는데,
요청하는 자가 사용자인지 크롤러인지에 따라 HTML,JS를 제공할 것인지 사전에 렌더링된 HTML를 제공할 것인지를 통해
크롤러가 서버에서 이미 렌더링된 HTML 소스를 읽게 할 수도 있습니다.

그러니 '서버 사이드 렌더링과 그 SEO 이점 때문에 Next.js'은 크게 이유가 되지 못합니다.

### SSG, ISR

서버 사이드 렌더링 (SSR) 만 이야기 된 것 같지만, Next는 렌더링 방식은 다양합니다.

Next라고 해서 CSR 이 불가능하다는 것도 아니고요.

**Pre-Rendering**

Next.js 는 렌더링을 할 때에 이 사전 렌더링(pre-rendering)을 진행합니다.
서버단에서 DOM 요소를 빌드해 HTML 을 만드는 작업입니다.

기본적으로 Next는 페이지를 미리 렌더링합니다.
그렇기 때문에 서버가 JS를 수행하고 HTML을 미리 생성한다는 것이고요.
생성된 각 HTML은 최소한의 JS와 연결이 되는데,
브라우저가 페이지를 로드하면 그 JS가 실행되어 interactive(상호작용 가능한) 페이지가 되는 것입니다. 그리고 이 과정은 `hydration`이라고 부릅니다.

![no-pre-rendering](https://nextjs.org/static/images/learn/data-fetching/pre-rendering.png)
![pre-rendering](https://nextjs.org/static/images/learn/data-fetching/no-pre-rendering.png)

Next는 다양한 렌더링 방식을 제공하는데요.
여기서! `SSR`, `CSR` 외에도 `SSG`, `ISR` 가 나타납니다.

### Static Site Generation (SSG)

SSR은 서버에서 페이지를 렌더링 후 완전한 페이지를 전송하는 방법이였다면

SSG는 프로젝트 build 시점에 미리 페이지를 렌더링 하여 정적인 HTML을 미리 생성하는 방식이라고 볼 수 있습니다.

비슷해보이기도 하나 정적인 면에서 다릅니다.

SSR은 페이지를 요청할때마다 HTML 문서를 생성하기에 요청마다 동적인 결과물을 내놓을 때 용이하고,
SSG는 페이지를 미리 만들어 두어 **재사용**하는 점 때문에 정적인 결과물일때 용이합니다.

당연히 재사용하는 SSG가 SSR에 비해 서버 부하 적인 측면도, 응답 속도 측면에서도 이점이 있습니다.
단, 정적인 페이지(동일한 정보를 가지는 페이지)일때에 한해서요.

### Incremental Static Regeneration (ISR)

저는 SSR과 SSG의 이점을 결합한 방법이라 생각하는데, revalidate 속성을 사용하는 방법입니다.

사이트 구축 후 정적 페이지를 생성하거나 업데이트 하는 방식으로, 설정한 시간마다 페이지를 새로 렌더링,
재확인을 한다는 점에 SSG와 다릅니다. SSG는 빌드 시 페이지 생성, ISR은 일정 시간마다 그 페이지를 업데이트합니다.

### 그래서

뭔가 Next의 렌더링 방식에 대해 주저리 이야기 하게 되었는데, 그래서 변경하게 된 이유 중 하나에요.

Next는 이렇게 다양한 렌더링 방식을 페이지마다 정말 쉽게 사용할 수 있습니다.
선택과 변경이 쉽다는거죠.

일반적인 프로젝트에서는 그냥 SPA, CSR 로도 충분할지 몰라도 주체가 된 이 프로젝트는 상용화를 목적으로 두고 있었어요.
특히나 커뮤니티와 포트폴리오, 공고 및 대사 모음집 등 다양한 기능들이 존재하는데요.
포트폴리오 페이지와 대사 모음집의 경우에는 일반적으로 정적인 페이지인 경우가 많습니다. 그리고 이 기능은 서비스에 입장하게 되는 가장 큰 요인이면서 동시에 초기 로딩 속도가 빨랐어야 했습니다. React의 경우에는 결국 해당 페이지 하나를 보기 위해서 입장을 했어도 다른 작업이 요구되고 로딩 속도와 SEO 측면에서도 부족했던거죠. 데이터가 자주 바뀌게 될 커뮤니티도 생각해야 했습니다. 공고 페이지의 경우에는 관리자만 공고를 올릴 수 있게 할지, 사용자들도 올릴 수 있게 할 지에 대해 고민중이었는데요 (이건 지금도 고민중입니다만). 앞의 내용들 모두 결국 Next가 아니어도 해결할 수 있었다겠지만 Next(13)은 페이지마다, 데이터를 fetch 하는 방법에 따라 이를 쉽고 빠르게 변경할 수도 있으니 Next로 변환한다면 추후에도 유연하게 작업할 수 있겠다고 생각했습니다. 새로운 기능을 추가한다고 했을때에도요.

## App Router

Next 13 부터 Next는 [App Router](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) 를 도입했습니다.
레이아웃, 중첩 라우팅, 로딩 및 오류 들을 기본적으로 지원하는 라우터입니다.
그리고 저는 이 라우터가 마음에 들었습니다.

App Router는 `app` 이라는 폴더에서 작동합니다.
그리고 URL 경로를 폴더 구조에 맞추어 매핑합니다.

![route segments](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_7qDwkTDwmgWzVYKGukeHHPrgxfLF)

/app/dashboard/settings 폴더가 곧 /dashboard/settings URL이 되는 거에요.
폴더 하나가 경로 세그먼트가 되는 것이죠.

만약 폴더 구조 중 특정 경로 세크먼트를 생략하고자 하면 괄호로 해결할 수 있고
동적인 경로를 원한다면 대괄호를 사용할 수 있습니다.

![1](/assets/img/2023-11-17-Why-Nextjs/1.png)

때문에 react-router-dom 과 같이 별다른 라우터 관리를 해줄 필요가 없습니다.

우리 프로젝트에는 동적인 주소에 제한이 걸린 주소도 존재해야 했습니다.
쉽게 이야기하면 GitHub와 같은 URL 경로를 사용합니다.
사용자에 대한 주소는 `/[유저아이디]` , 그 유저의 작업물은 `/[유저아이디]/[작업물]` 과 같이요.
저에 대한 주소는 `/kyechan99` 겠죠.

그런데 만약 설정창에 입장을 한다면?

`/settings` 주소를 사용해야 하는데 이것이 사용자 아이디인지, 설정창 주소인지를 구분해야 합니다.
그래서 Velog 같은 사이트는 `/@[유저아이디]` 와 같이 앞에 기호를 사용하면서 구분을 합니다.

다만, 저는 기호를 사용하지 않고 사용하는 특별한 주소는 아이디로 사용할 수 없게 하는 방법을 선택했습니다.

```js
<Routes>
  <Route path="/settings" element={<Setting />} />
  <Route path="/:user_id" element={<User />} />
</Routes>
```

라우터는 유저 아이디를 인식하기 전에 특정 주소를 먼저 인식하는 방법을 사용하면서, 회원가입을 처리하는 부분에서는 사용하는 특정 주소들을 사용하지 못하게 막아두고요.

그럼 이때 새 기능이 담긴 페이지를 추가한다고 했을떄, 이 라우터 파일을 확인해야 하고 경로 우선순위에 대해서도 고려하면서, 예외 될 내용이 담긴 목록을 변경해야 합니다.
그런데 앞서 Next는 파일 구조만으로 라우터 기능을 제공한다고 했습니다.
즉, fs, path 등을 사용해서 app 폴더 아래의 파일들에 대해 읽어오는 코드를 작성한다면 경로 하나에 들어가는 시간이 줄어듭니다.

## Express 

프로젝트는 데이터베이스와 그 API를 Node/Express로 작업하고 있었습니다.
그래서 React 프로젝트와 Express 프로젝트를 분리하여 개발하고 있었고 각기 다르게 관리했습니다.

Next는 앞서 React의 React-Router-Dom 과 같은 기능을 유사하게 내재되어 제공하고 있고 이는 Express.js 역시 마찬가지입니다.
express 기능을 똑같이 가지고 있다라고 할 수 없지만 express에서의 작업물이 크게 바뀌어야 하는 어려움이 없었습니다.

Next는 API Routes 라는 API 를 호출할 수 있는 Endpoint를 생성해줍니다.
앞의 폴더 기반의 라우팅과 연결되는 이야기인데 `/app/api` 아래 파일을 작성하는 것을 이야기합니다. (서버리스가 이렇게 나온다)

![api](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-special-file.png&w=1920&q=75&dpl=dpl_7qDwkTDwmgWzVYKGukeHHPrgxfLF)

그러니.. Next로 변환하게 되면 프로젝트를 합쳐서 관리할 수 있으니 이제 좀 편해지겠다!
서버 확장이나 역할 분담과 같이 경우에 따라서 서버를 분리해서 개발하는 일이 선호되는 경우가 있는데 그건 이번 프로젝트에서의 고려사항이 아니었습니다.

## 빌드와 배포

Next는 [Vercel](https://vercel.com/docs/frameworks/nextjs)에서 개발했습니다.

그러니 Next 배포에 대해, Vercel 은 친화적인 방법 중 하나이기 또 추천되기도 합니다.

AWS 를 통하는 것이 더 이득을 보는 경우가 있다고는 하는데요.

저는 꽤나 전부터 Vercel을 몇 개의 프로젝트에 사용하면서 특별한 거부감도 없었고 ([Capsule-Render](https://github.com/kyechan99/capsule-render)나 [Yuristrap](https://github.com/yuristrap/yuristrap) 등) Git push로 프리뷰도 편하게 볼 수 있어서 사전 반응 확인이 우선인 이번 프로젝트에서는 괜찮아 보이기도 했습니다. 나중에 더 성능이 좋거나 비용적인 면을 고려하게 될 때에 배포는 바꾸면 되는 일이니까요.

## 정리

뭔가 Next 가 되게 좋네, 찬양글로 보일 수 있지만 그렇지 않습니다.

단순히 SSR 을 위해서가 아니라 특수한 주소를 위한 라우팅 고민과 기존 백엔드 프로젝트 특성과 크게 맞아 떨어졌다는 점.
그리고 당장에 이득을 볼 수 있는 부분에 대해서도 고려되었습니다.

Next는 아무래도 서버에서 내용을 만들어 내는 일이니, 캐싱을 한다해도 결국 비용과 연결되는 부분입니다.

요즘은 Next를 모르면 경쟁이 안된다고 하는 것 같은데.. 한번쯤 프로젝트를 진행해 보는 것이 좋아 보이기는 합니다.
그런데 대체로 경험식 프로젝트는 Next는 과하지 않나도 생각되네요. 서버 컴포넌트, 클라이언트 컴포넌트에 대한 작업을 하는 일도 번거롭고 특히 CSS-IN-JS (저는 styled-component를 사용했습니다) 를 적용하는 일이 꽤나 귀찮습니다. 대체로 Tailwind를 사용하는 것 같던데 저는 또 그걸 선호하지 않는 사람이었고요.