---
layout: post
title: Jekyll custom 블로그 만들기 - 1
date: 2018-12-28
categories: [Lib]
description: jekyll 블로그 생성하기
tags: [Dev, Web, Jekyll]
keywords: Jekyll, Blog
haveImg: true
headerImg: 2020-5-22-jekyll-custom-4.jpg
---

## 개요
공부하면서 새로 알게된 내용이나 나중에 다시 찾아보게 될 것들을 메모하기 위해 [TIL](https://github.com/kyechan99/TIL)을 사용해 왔었습니다.
다만 하나씩 파일을 만들어 메모하는 TIL의 컨셉때문에 프로젝트를 진행하면서 배우게 되는 내용을 모두 TIL에 담기에는 다소 번거로움이 있더군요.
그런면에서 [우아한 형제들 기술 블로그](http://woowabros.github.io/)같은 기술 블로그나 개발 노트용 블로그를 만드는 것은 좋은 방법이라 생각합니다.

저는 `jekyll(지킬)`을 사용한 `github` 블로그 이지만 직접 디자인한 블로그이길 바랬습니다. 기존에 많은 [템플릿 블로그들](http://jekyllthemes.org/)이 있긴 하지만 이왕 만들기로 결정한거 디자인까지 온전히 내것으로 만들고 싶었기 때문입니다.

> 1. 앞으로 편의를 위해 프로젝트 명을 jekyll blog 이름을 따와 `jebl`이라고 하겠습니다.
>
> 2. 이후 진행과정에 대한 내용을 함축 및 편리를 위해 딱딱한 말투를 사용했습니다.



## 설치
jekyll을 설치하기 위해선 먼저 Ruby 부터 설치가 되어있어야 한다.

윈도우 환경이라면 [RubyInstaller for Windows](https://rubyinstaller.org/downloads/) 에서 자신에게 맞는 Ruby를 다운받는다.

![1](/assets/img/2018-12-28-jekyll-custom/1.png)

<br/>

이후 Jekyll 블로그를 설치할 디렉토리로 들어간다.
```
$ mkdir jebl
$ cd jebl
```

> 폴더명은 자유입니다.


이후 gem을 통해 [minima](https://github.com/jekyll/minima)와 기타 github 블로그에 필요한 플러그인들을 설치한다.
```
$ gem install minima
$ gem install bundler
$ gem install jekyll-feed
$ gem install tzinfo-data
```
> Ruby의 gem은 Python의 pip, Node의 npm 과 같다.

설치가 모두 되었다면 jekyll 프로젝트를 생성한다.
```
$ jekyll new .
```

jekyll 블로그의 실행 명령어는 다음과 같다.
```
$ jekyll serve
```

만약 `Run 'bundle install' to install missing gems` 과 같은 에러가 생긴다면
다음과 같이 조치해 준다.

```
$ bundle install
```

추가로, Goorm IDE 같은 환경에서 로컬 호스트의 주소가 변경되어야만 실행되는 경우가 있다.

이는 jekyll serve 명령어에서 호스트 주소를 바꿔주는 란을 추가하면 된다.

```
$ bundle exec jekyll serve --port 4000 --host 0.0.0.0
```


## 환경 구성

정상적으로 작동된 디렉토리 구조는 다음과 같다.

![2](/assets/img/2018-12-28-jekyll-custom/2.png)

이는 jekyll 블로그의 최소 환경으로, 실제 Jekyll이 작동되는 [Jekyll 디렉토리 구조](https://jekyllrb-ko.github.io/docs/structure/) 와 비교해보면 없는 폴더가 많다.

블로그를 커스터마이징 하기 위해 주로 봐야할 디렉토리는 다음과 같다.
```
.
├── _config.yml
├── _includes
|   └── ...
├── _layouts
|   └── ...
├── _posts
|   └── ...
├── assets
|   └── css
|       └── ...
├── _sass
|   └── ...
└── index.html      # 또는 index.md
```

현재 jekyll로 생성한 디렉토리에는 `_includes` 나 `_layouts` 등이 없을것이니 만들어 주도록 한다.

[Jekyll 디렉토리 구조](https://jekyllrb-ko.github.io/docs/structure/)를 읽어보고 필요한 기능이 추가로 있다면 추가해도 좋다. 예로 `초안 포스트 기능`을 사용하고자 한다면 `_drafts` 폴더를 만들어 주면 된다.

추가로 `_site` 폴더의 내용은 수정하지 않도록 한다. 이 폴더는 `jekyll serve` 을 통해 변환 작업이 일어나고 생성된 사이트가 저장되는 폴더인데, 때문에 안의 내용을 변경하였다고 해도 변환 작업을 통해 변경한 내용이 사라진다. 한마디로 전체적인 내용을 컴파일하고 생성된 사이트가 저장되는 폴더이니 신경쓸 필요가 없다.


## 이해

[Jekyll 공식사이트 - 테마](https://jekyllrb-ko.github.io/docs/themes/)를 읽어보면, 현재의 레이아웃이나 조각파일을 변경하려면 `_layouts` 나 `_includes` 디렉토리를 복사하여 그안의 원하는 파일을 수정 및 덮어 쓰라고 설명하고 있다.

일단 [minima 전체 파일](https://github.com/jekyll/minima)을 통해 비교하며 이해해기로 했다.


![3](/assets/img/2018-12-28-jekyll-custom/3.png)

간단하게 minima의 [`_includes/footer.html`](https://github.com/jekyll/minima/blob/master/_includes/footer.html)을 그대로 `jebl`의 `_includes/`로 작성해주고 위 사진처럼 29번째 라인을 추가해준다.
이후 실행화면의 `footer`부분이 다음과 같이 변경됨을 볼 수 있었다.

![4](/assets/img/2018-12-28-jekyll-custom/4.png)

즉, 원하는 기능의 폴더안에 파일을 덮어씌우거나 수정하면 블로그가 커스터마이징 가능하다는 것이 확인된 셈이다.



## 정리

정리해보면 Jekyll 블로그의 구조는 이렇다.

![5](/assets/img/2018-12-28-jekyll-custom/5.png)

먼저 페이지의 레이아웃을 잡아주는 `_layouts`폴더에 `default.html` 파일이 있는데 이 파일이 뼈대역할을 한다.
이 default파일이 `header`와 `footer` 를 각각 `_includes`폴더에서 가지고온다.
이후 `body`의 내용을 상황에 맞게 변하는데 `index`페이지라면 `home.html`을, `포스트`페이지라면 `post.html`등으로 변경된다.


![6](/assets/img/2018-12-28-jekyll-custom/6.png)


## 다음글
[Jekyll custom 블로그 만들기 - 2](/lib/2018/12/29/jekyll-custom-2.html)
