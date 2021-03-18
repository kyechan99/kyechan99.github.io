---
layout: post
title: Jekyll custom 블로그 만들기 - 4
date: 2020-5-22
categories: [Lib]
description: Disqus 를 사용한 댓글 기능 넣기
tags: [Dev, Web, Jekyll]
keywords: Jekyll, Blog
comments: false
haveImg: true
headerImg: 2020-5-22-jekyll-custom-4.jpg
---

## 개요
아무리 개인 블로그라 해도 새로운 피드백을 얻을수 있는 기회는 중요하기에 댓글 기능은 중요할 수 밖에 없죠.

대표적인 댓글 서비스 Disqus를 사용해 Jekyll Custom 블로그에 댓글 기능을 넣어보는 방법에 대해 알아보겠습니다.

- [Jekyll Custom 블로그 만들기 - 1](/lib/2018/12/28/jekyll-custom-1)
- [Jekyll Custom 블로그 만들기 - 2](/lib/2018/12/29/jekyll-custom-2)
- [Jekyll Custom 블로그 만들기 - 3](/lib/2020/05/19/jekyll-custom-3)

## 1. Disqus 회원가입
![1](/assets/img/2020-5-22-jekyll-custom-4/1.png)

[disqus.com](https://disqus.com/) 에 들어가서 회원가입을 한다.

## 2. GET STARTED
![2](/assets/img/2020-5-22-jekyll-custom-4/2.png)

[GET STARTED](https://disqus.com/profile/signup/intent/) 에서 두 번째 `I want to install Disqus on my site` 버튼을 누른다.

## 3. Create a new site
![3](/assets/img/2020-5-22-jekyll-custom-4/3.png)

Website Name 란에 만들 깃허브 블로그의 이름을 입력한다.

## 4. 가격 정책
![4](/assets/img/2020-5-22-jekyll-custom-4/4.png)

가격 정책은 Basic 으로 설정한다. 무료 정책으로, 서비스를 이용하기에 충분하다.

## 5. 플랫폼 선택
![5](/assets/img/2020-5-22-jekyll-custom-4/5.png)

사이트 플랫폼은 `Jekyll` 을 설정한다.

## 6. 코멘트 기능 설정
![6](/assets/img/2020-5-22-jekyll-custom-4/6.png)

댓글 기능을 사용하려는 페이지에 `comments:true` 를 추가하라고 한다.

댓글은 포스트 페이지에 항상 보여줄테니 `_layouts/post.html` 에 추가해 준다.

> [예시 _layout/post.html 코드](https://github.com/kyechan99/kyechan99.github.io/blob/master/_layouts/post.html#L1)

## 7. Disqus 소스코드 가져오기
![8](/assets/img/2020-5-22-jekyll-custom-4/8.png)

위의 소스코드는 Disqus 댓글 기능을 불러오는 소스코드다.

`_layouts/post.html` 에 댓글 기능을 넣으려는 태그에 위의 소스코드를 붙여주면 된다.

> [예시 _layout/post.html 코드](https://github.com/kyechan99/kyechan99.github.io/blob/master/_layouts/post.html#L25)

## 8. 댓글 횟수 확인
![9](/assets/img/2020-5-22-jekyll-custom-4/9.png)

위의 코드는 달린 댓글의 수를 확인하는 코드다.

필요시 해당 코드를 응용하면 된다.


## 9. 상세 정보 입력
![7](/assets/img/2020-5-22-jekyll-custom-4/7.png)

웹사이트 이름과 주소, 그리고 카테고리 까지만 입력해 주면 된다.


## 10. config 설정
```
---
comments:
  provider: disqus
  
disqus:
  shortname: kyechan99-1
---
```
마무리로 설정값들을 저장하는 `_config.yml` 파일에 위와 같이 입력한다.

`shortname` 부분은 8번의 댓글 횟수 확인의 소스코드나 Disqus 의 General 메뉴에 가보면 확인할수있다.

![10](/assets/img/2020-5-22-jekyll-custom-4/10.png)

> 보통은 Website Name 을 따라가지만 위처럼 임의의 경우 예외가 생기는것같다.

## 마무리
![11](/assets/img/2020-5-22-jekyll-custom-4/11.png)

성공적으로 작동하는 모습을 볼 수 있습니다.

번외로 [https://utteranc.es/](https://utteranc.es/) 라는 댓글 기능도 있습니다. Disqus 는 댓글에 대한 정보가 Disqus 내에 저장된다는 점이 장점이기도 단점이기도 한데요.
utteranc 는 깃허브 레포, 즉 `{githubid}.github.io` 라는 레포에 대한 issue 를 남기는 걸로 댓글에 대한 정보가 남습니다. 매일 깃헙을 들어가는 사람에게는 오히려 편한 편이기도 하고 사용법도 사이트 사진만 따라해도 적용될 정도이니 한번 사용해보는것도 좋을것 같습니다. (현 블로그도 utteranc를 사용하고 있습니다)
