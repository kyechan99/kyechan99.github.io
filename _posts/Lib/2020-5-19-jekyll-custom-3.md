---
layout: post
title: Jekyll custom 블로그 만들기 - 3
date: 2020-5-19
categories: [Lib]
description: 카테고리 기능 넣기
tags: [Dev, Web, Jekyll]
keywords: Jekyll, Blog
haveImg: true
headerImg: 2020-5-22-jekyll-custom-4.jpg
---

## 개요
앞 단계에서는 대표적인 프론트엔드 프레임워크인 bootstrap이나 앞으로 직접 커스텀 해서 꾸밀 파일들을 세팅하는 방법에 대해 알아봤습니다.

이번 단계에서는 카테고리 기능을 넣어 작성한 포스트들을 분리하여 보여줄 수 있도록 해보는 내용이 담겨있습니다.

## 이전글
- [Jekyll Custom 블로그 만들기 - 1](/lib/2018/12/28/jekyll-custom-1)
- [Jekyll Custom 블로그 만들기 - 2](/lib/2018/12/29/jekyll-custom-2)


## 시작에 앞서
이후 작업할 카테고리 기능을 위해서는 `_post` 폴더에 들어가 있는 포스트들에 `categories` 라는 값을 입력해 주어야 합니다.
```
---
layout: post
title: Jekyll-custom
categories: 포스트에 해당하는 카테고리 명을 입력해주세요
---
```

## Minima 는
![1](/assets/img/2020-5-19-jekyll-custom-3/1.png)

앞서 본 블로그의 초기 세팅의 모티브가 된 [Minima](https://jekyll.github.io/minima/)를 보면 
우측 상단에 메뉴가 모여져 있다.

이는 [Jekyll Custom 블로그 만들기 - 1](/lib/2018/12/28/jekyll-custom-1) 에서 진행했던 `header` , `body`, `footer` 분리 작업에서 `header`에 해당되는 부분이다.


![2](/assets/img/2020-5-19-jekyll-custom-3/2.png)

역시나 `_includes/header.html` 파일을 보면  [Minima](https://jekyll.github.io/minima/) 와 같이 상단의 navbar 메뉴에 카테고리 항목을 띄워주는 부분이 이미 구현이 되어있다.

그렇다면 이를 이용해 위에 for문이 작동되도록 걸맞는 행동을 취해주면 된다.


## Jekyll 문서에서 해당 변수 찾기
[Jekyll 변수 문서](https://jekyllrb-ko.github.io/docs/variables/) 를 찾아보면 

![3](/assets/img/2020-5-19-jekyll-custom-3/3.png)

`site.categories.CATEGORY` 라는 변수가 해당 카테고리의 포스트들을 보여주는 기능을 하고 있다.

`site.categories`는 기본적으로 배열로, `_post` 폴더에 작성한 포스트들에 입력한 카테고리들이 모두 중복되지 않고 담겨있다.

`site.categories` 배열에 들어가 있는 변수들은 카테고리 이름과 해당 카테고리에 포함된 게시글들이 모두 포함되어있다.

> `for category in site.categories`  를 가정한다면
>
> `category` 의 첫번째 인덱스는 카테고리 명이 담겨있는 변수
>
> `category` 의 두번째 인덱스는 해당 카테고리에 해당되는 포스트들


간단하게 확인해 보기 위에 `default.html`의 아무 부분에 

```
<h3>Category</h3>
{.% for category in site.categories %}
    <h3>{{ category[0] }}</h3>
    <ul>
    {.% for post in category[1] %}
        <li><a href="{.{ post.url }}">{.{ post.title }}</a></li>
    {.% endfor %}
    </ul>
{.% endfor %}
```
> {.% 에서 .을 지워야 작동됩니다.

를 입력하여 실행시켜 보면

![4](/assets/img/2020-5-19-jekyll-custom-3/4.png)

이와 같이 카테고리별로 나뉘어져서, 카테고리명과 그 게시글들을 보여주는 기능이 만들어졌다.

다시한번 처음 찾은 변수 `site.categories.CATEGORY`를 보면 내가 원하는 카테고리 명만 찾아서 그 게시글들을 보여줄수도 있다.
```
<h4>Games</h4>
<ul>
    `{.% for post in site.categories.Games %}`
    <li><a href="{.{ post.url }}">{.{ post.title }}</a></li>
    {.% endfor %}
</ul>
```
`Games`라는 카테고리가 있다면 위와 같이 작성해주면 된다.

여기까지 카테고리와 관련된 변수들과 사용방법에 대해 알아봤다.

## 우측 상단에 카테고리 메뉴 넣기
카테고리와 관련된 변수들은 모두 찾았으니 이제 카테고리 메뉴 넣기로 되돌아 본다.

처음 봤던 찾아본 `_includes/header.html`의 `nav-item`을 생성하는 for문은 이미 About 이라는 페이지를 넣고 있었다.

그렇다면 이 About 페이지는 어디에 있는가 하고 찾아보니 루트 경로에 about.md 파일이 있었다.

이처럼 상단 navbar 에 새로운 페이지를 등록하기 위해서 `/about.md`나 `/index.md`처럼 새 페이지를 루트 경로에 페이지 파일을 하나씩 추가해 줘야 되는것이다.

나는 상단에 Games와 Web 카테고리 들을 모아 보는 프로젝트라는 메뉴를 상단에 놓기로 했다.

`/Project.html` 파일을 생성하고 아래와 같이 작성했다.

```
---
layout: default
title: 프로젝트
permalink: /Project/
---
```
> default 레이아웃을 기반으로 한 페이지 이며
> 
> 제목은 프로젝트 이고
>
> 경로는 Project 로 칭한다.

이렇게 Project 페이지에 대한 설정을 맞추고 이후에는 이 페이지로 들어갔을때 해당되는 카테고리들과 포스트들을 보여주는 코드를 작성하면 된다.

> 해당되는 카테고리 및 포스트를 보여주는 코드는 위 Jekyll 문서에서 해당 변수 찾기 파트에서 진행했다.
>
> [kyechan99.github.io/Project.html 코드](https://github.com/kyechan99/kyechan99.github.io/blob/master/Project.html)


![5](/assets/img/2020-5-19-jekyll-custom-3/5.png)
( Project 메뉴와 해당 페이지에서 관련된 게시글들을 보여주는 모습 )


<p style="display:none;">
github jekyll blog, make custom jekyll blog
</p>