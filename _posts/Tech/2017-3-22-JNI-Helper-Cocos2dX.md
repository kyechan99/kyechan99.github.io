---
layout: post
title: JNI Helper Cocos2d-X ver.
date: 2017-03-22
categories: [Tech]
description: JNI Helper
tags: [Dev,JNI, Cocos2d-X]
keywords: JNI, cocos2d
---


## 참고
이 글에선 Cocos2d-X 내부의 JNI Helper 를 이야기 합니다.

### JNIHelper Include
```
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include "platform/android/jni/JniHelper.h"
#endif
```
윈도우 환경헤선 include 할 필요가 없으니 if ~ endif 로 닫아 줍니다.
  

### 메소드 불러오기 참고

메소드를 불러오는 방식은 크게 두 가지로
  - 기본 메소드 불러오기
  - static 메소드 불러오기
  
로 구분할수 있는데 이 글에선 기본 메소드 불러오기 방식을 사용합니다.
> static 메소드는 getStaticMethodInfo 를 쓴다.

### 메소드 불러오기 작성
```
#if(CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    JniMethodInfo t;
    bool isHave = JniHelper::getStaticMethodInfo(t
                                        ,"org/cocos2dx/cpp/AppActivity"
                                        ,"getJavaActivity"
                                        ,"()Ljava/lang/Object;");
    jobject activityObj;
  
    if(isHave)
    {
        activityObj=t.env->CallStaticObjectMethod(t.classID, t.methodID);
    }
  
    isHave=JniHelper::getMethodInfo(t
                                ,"org.cocos2dx/cpp/AppActivity"
                                ,"callFunc"
                                ,"()V");
    if(isHave)
    {
        jstring jmsg = t.env->NewStringUTF(NULL);
        t.env->CallVoidMethod(activityObj,t.methodID,jmsg);
    }
#endif
```

*.java 파일의 소스 코드를 불러올 C++ 소스 코드를 위와 같이 작성한다.
  - 4번째 줄 - .java 파일을 불러오기 위함 (안드로이드 일 경우 MainActivity)
  - 5번째 줄 - 인자 값을 받기 위한 함수 호출
  - 15번째 줄 - 역시 .java 파일을 불러오기 위함
  - 16번째 줄 - 실행할 함수 호출
  

### AppAcitivity 
1. JNI 를 사용하기 위해 ``` public static Activity actInstance; ``` 를 추가
2. 기본적으로 onCreate 를 만들어 주며 actInstance 를 초기화 
``` 
@Override
public void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      
      actInstance = this;
}
``` 
3. actInstance를 받기 위한 함수 작성
```
public static Object getJavaActivity()
{
      return actInstance;
}
```
4. JNI 를 이용해 들어갈 함수 생성
```
public void callFunc() {
      Log.d("jni test","test");    
}
```
  

