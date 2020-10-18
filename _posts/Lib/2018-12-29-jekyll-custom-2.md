---
layout: post
title: Jekyll custom 블로그 만들기 - 2
date: 2018-12-29
categories: [Lib]
description: bootstrap 과 custom sass 넣기
tags: [Dev, Web, Jekyll]
keywords: Jekyll, Blog
haveImg: true
headerImg: 2020-5-22-jekyll-custom-4.jpg
---

- [Jekyll Custom 블로그 만들기 - 1](/lib/2018/12/28/jekyll-custom-1)

## 설정

현재까지 디렉토리 구조는 다음과 같다.

```
.
├── _config.yml
├── _includes
|   ├── footer.html
|   ├── head.html
|   └── header.html
├── _layouts
|   ├── default.html
|   ├── home.html
|   └── post.html
├── _posts
|   └── ...
├── assets
|   └── css
|       └── ...
├── _sass
|   └── ...
└── index.html      # 또는 index.md
```

이제부터 `minima` 의 원본 파일에서 디자인을 수정할 것이기 때문에 만일 내 프로젝트에 없는 파일들이 위에 있다면 [minima repository](https://github.com/jekyll/minima) 에서 가져오도록 한다.

## Sass

이제 블로그에 디자인을 입히고 변경할 차례가 왔다.

스타일시트를 작성할 sass를 jekyll 자체가 지원하기 때문에 sass에 대한 설정은 `_config` 파일에서 sass를 사용하겠다고 작성해주기만 하면 된다.
(sass 에 대해서는 [Velopert님의 블로그](https://velopert.com/1712)를 보시면 이해하기 쉽다.)

![1](/assets/img/2018-12-29-jekyll-custom-2/1.png)

32번째 라인처럼 `sass` 환경 설정을 해준다.

`sass_dir` : `_sass` 는 sass를 저장한 경로라고 이해하면 된다. 즉, 현재 프로젝트의 디렉토리중 하나인 `_sass` 폴더에 sass 파일을 작성하면 된다는 뜻이다.

## 구조
```
.
├── assets
|   └── css
|       └── styles.scss
├── _sass
|   ├── jebl
|   |   ├── _base.scss      # 기본 태그들의 스타일
|   |   ├── _layout.scss    # 레이아웃을 잡아주는 스타일
|   |   └── _variables.scss # 값들을 저장
|   └── jebl.scss
└── index.html      # 또는 index.md
```
일단 sass 구조는 위와 같이 base, layout, variables 세가지로 정했다.

> sass 파일 내용에 대해서는 [소스코드](https://github.com/kyechan99/kyechan99.github.io/tree/master/_sass) 를 참조하면 좋을 것 같다.

이후 `assets/css/styles.scss`에 
```
---
## Only the main Sass file needs front matter (the dashes are enough)
---

@import 'jebl';
```
를 입력하면 `_sass/jebl.scss` 내용들을 가져오게 된다.


마지막으로 이 `styles.scss`를 가져오기 위해 `_includes/head.html`에서 호출한다.

```
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/styles.css">
```

이를 통해서 fontawesome 이나 bootstrap 등이 필요하다면 `_includes/head.html` 에 link 해주면 된다는 것을 알 수 있다.

## 다음글
[Jekyll custom 블로그 만들기 - 3](/lib/2020/05/19/jekyll-custom-3.html)