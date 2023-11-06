---
layout: post
title: Next.js 13 배포시 TypeError fetch failed
date: 2023-11-06
categories: [Memo]
description: Error occurred prerendering page, TypeError fetch failed
tags: [Memo, Bug, Next.js]
keywords: Memo, Bug, Next.js, TypeError, Nextjs13, Error, prerender, fetch
---

### 문제

Next.js 13 으로 App router 프로젝트를 진행하다가 deploy 시 아래와 같은 에러가 발생했습니다.

```
Error occurred prerendering page "/contest". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11372:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11372:11)
   Generating static pages (20/21) [  ==]
 ✓ Generating static pages (21/21)

> Export encountered errors on following paths:
        /community/page: /community
        /contest/page: /contest
        /page: /

```

![1](/assets/img/2023-11-06-Nextjs-Fetch-failed/error1.PNG)

### 해결법

Node의 버전을 업그레이드하거나 혹은 다운그레이드 하기,
Next.js 업데이트 하기,
App router 폴더 구조 문제,
혹은 추후에 해결되어야 할 문제라 현재는 방법이 없다는 등등..

여러가지 해결법을 많이 찾아보았다가 동적 페이지 설정으로 해결되었습니다.

```js
// src/app/page.tsx
export const dynamic = "force-dynamic";

const Home = async () => {
  const res = await getData();
  ...
};
```

매번 다른 데이터를 가져와 렌더링해야 하는 페이지인데,
API 도 Next.js 내에서 구현을 하다보니 해당 페이지를 정적 페이지로 빌드하려고 하니 문제가 생기는 것 같습니다.
클라이언트 컴포넌트는 해당 에러에서 발견되지 않았고, 동적 라우팅된 페이지 역시 기본적으로 동적 페이지로 빌드하다 보니
별도로 설정되어 있지 않은 기본적인 서버 컴포넌트들이 에러가 되는 것 같습니다.

![2](/assets/img/2023-11-06-Nextjs-Fetch-failed/error2.PNG)
