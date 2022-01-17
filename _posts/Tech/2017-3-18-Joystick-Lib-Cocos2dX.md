---
layout: post
title: Joystick Lib Cocos2d-X ver.
date: 2017-03-18
categories: [Tech]
description: 조이스틱 라이브러리 적용법
tags: [Lib,Joystick, Cocos2d-X]
keywords: Joystick, cocos2d
haveImg: true
headerImg: 2017-3-18-Joystick-Lib-Cocos2dX.jpg
---

Joystick Lib 다운로드 [링크](https://github.com/kyechan99/Joystick_Lib)


## 참고사항
최대한 간편하게 사용 가능하도록 만들었습니다.   
사용하기 위해 꼭 알아야 할것들이 있으니 이 점은 참고 하여야 합니다.  
(파일의 "사용설명서.txt"를 읽어도 됨)
   
   
   

## 조이스틱 기능 추가 방법
Github 레포지터리에서 [Cocos2d 버전](https://github.com/kyechan99/Joystick_Lib/tree/master/Cocos2d-X)을 다운받아 Joystick.cpp와 Joystick.h 를 추가 시킵니다.   
조이스틱 기능을 추가할 씬 ( ex>HelloWorldScene.cpp ) 에 밑의 함수들을 써줍니다.   
> (조이스틱을 생성하도록 하는것)




## 의무적으로 쓰셔야 할 함수

```
joystick = Joystick::create();     // 조이스틱 생성
joystick->setMainChar(spr);        // 조이스틱으로 조종할 스프라이트 설정
this->addChild(joystick);
```

setMainChar는 조이스틱으로 **조종할 스프라이트**를 적습니다.    
joystick 의 형은 **.h**에 **Joystick* joystick;** 이라 적어 줍니다.




## 추가 기능 함수

```
joystick->setSpeed(0.1f);         // 조이스틱으로 움직일 스피드 설정
joystick->setLimitScreen(true);   // 스프라이트 움직임을 화면에 제한걸으려면 true, 아니라면 false 또는 안써도 됨 
```

setSpeed() 는 조이스틱으로 움직여 지는 스프라이트의 **이동속도** 입니다. 0.1f가 기본으로 세팅되어 있습니다.   
setLimitScreen() 는 스프라이트가 화면안에 **벗어날지 안 벗어날지** 유무입니다.

>  (벗어나는것이 기본 세팅입니다)
   
   
   

## 터치 :
조이스틱은 터치로 이루어 이동합니다.   
조이스틱을 사용할 씬에 터치를 등록하시어 밑에 처럼 꼭 써주시길 바랍니다.
   
```
void HelloWorld::onTouchesBegan(const std::vector &touches, Event* unused_event)    
{    
   for (auto it : touches)        
   {        
      joystick->onTouchBegan(it, unused_event);            
   }        
}
   
void HelloWorld::onTouchesMoved(const std::vector &touches, Event* unused_event)
{
   for (auto it : touches)
   {
      joystick->onTouchMoved(it, unused_event);
   }
}

void HelloWorld::onTouchesEnded(const std::vector &touches, Event* unused_event)
{
   for (auto it : touches)
   {
      joystick->onTouchEnded(it, unused_event);
   } 
}
```



### 업데이트
조이스틱의 위치값은 업데이트로 이루어 집니다.   
조이스틱을 사용할 씬의 업데이트 부분에 밑에처럼 꼭 써주시길 바랍니다.
   
```
void HelloWorld::Update(float dt)    
{    
   joystick->update();        
}
```



### 헤더파일

```
class HelloWorld : public Layer    
{    
private:    
   Joystick* joystick;        
```



### 실행영상






<p style="display:none;">
cocos2dx joystick
</p>