---
layout: post
title: Unity AR - Vuforia 사용
date: 2017-03-24
categories: [Dev]
description: Unity AR
tags: [Dev,AR,Unity3D,Vuforia]
keywords: Unity, AR, Vuforia
---


- 유니티 AR 의 기능이 담긴 Vuforia 를 얘기합니다.

## 참고
- [Vuforia 사이트](https://www.vuforia.com/)
- [Vuforia SDK 다운로드](https://developer.vuforia.com/downloads/sdk)
- [Vuforia 정책](https://developer.vuforia.com/pricing)

## 개요
  1. 프로젝트 생성
  2. Vuforia 회원가입
  3. Vuforia SDK 다운로드
  4. Package Import
  5. Prefab 꺼내기
  6. Add License key
  7. Add Database
  8. Database 파일 다운
  9. 인식 대상 설정하기
  10. 인식 대상에 오브젝트 올리기
  11. Datasets 설정
  12. Build Setting
  13. 빌드

## 1. 프로젝트 생성
![1](http://postfiles15.naver.net/MjAxNzAzMjNfMTEx/MDAxNDkwMjI4MDA0NzM2.-MY5AlW1CZ4athfoZ42VBZxK9eAupzl8EapyY2uEN5gg.hyPI2GGb_GRbHEY34foE0k8z4qfdmCz4awITvzK3qPYg.PNG.kyechan99/5.PNG?type=w1)

먼저 유니티 3D 프로젝트를 생성해 준다.

## 2. Vuforia 회원가입
Vuforia 에서 [회원가입](https://developer.vuforia.com/user/register)을 한다.

## 3. Vuforia SDK 다운로드
- Unity 용 SDK 를 다운받는다.
> ![1](http://postfiles16.naver.net/MjAxNzAzMjRfMTE4/MDAxNDkwMzYyMjg2NTQ2.seOz4L_iaT11qKIVM1HhE_8NFxkYumo4CUc9QeH3QVgg.vZ8ERV2uWFHwfAO3RoRPBqurUz5CHuwulD1tpXcThskg.PNG.kyechan99/2.PNG?type=w1)




## 4. Package Import

1. 프로젝트에 방금 다운 받은 SDK 를 임포트 하고
  > ![1](http://postfiles9.naver.net/MjAxNzAzMjRfMjcx/MDAxNDkwMzYyMjg3Mjg4.VCQ_L6y8besxTKKffNyEEggCgttY6qQDhWbHfqkEZBwg.Ghjm6FS8HLOLkPEViCtFb1opvEhl1G42z34qb6k0t8Yg.PNG.kyechan99/3.PNG?type=w1)

2. 추가로 화면에 띄워줄 3D 오브젝트도 다운받는다.
  > ![1](http://postfiles12.naver.net/MjAxNzAzMjRfMzkg/MDAxNDkwMzYyMjg3NTM5.skhGDJ7dtz9vLrBgzsWiL7NKXXifW9kgssPRBbJT6Ywg.Yr96kyXSXS9RlAkfASHuoPWUt2Pvpm4xbtPJoY-Oh18g.PNG.kyechan99/4.PNG?type=w1)
  >
  > ( WOLF_3D 이 화면에 띄울 3D 오브젝트 파일이다 )

## 5. Prefab 꺼내기
- Assets/Vuforia/Prefabs 에 **ARCamera**와 **ImageTarget**을 *Hierachy* 로 꺼낸다.
  > ![1](http://postfiles14.naver.net/MjAxNzAzMjRfMTE5/MDAxNDkwMzYyMjg3OTM4.HmdEAyCUTo78GaAJcGh2LjP6BI1bwIq0d8PPb65gh1gg.4Xe4SF2c7JK_VSnlXI2LkAiSU14wCPM4Kmnf0v1zCQcg.PNG.kyechan99/6.PNG?type=w1)

## 6. Add License key
- 라이센스 키를 추가하기 위해 다시 vuforia 로 돌아와 **Add License Key**를 눌러준다.
  1. > ![1](http://postfiles9.naver.net/MjAxNzAzMjRfNzYg/MDAxNDkwMzYyMjg4MTg0.JOml7jghEF3a8rD3ycWHswU_4ZSPwb_i3ou0Y8UmUQcg.lPDyuL7cmphozsNXJ5n7e6GaBeBLQl0B38GRMl5T_gEg.PNG.kyechan99/7.PNG?type=w1)
  2. > ![2](http://postfiles7.naver.net/MjAxNzAzMjRfMTc3/MDAxNDkwMzYyMjg4NDQ4.-Tyrz8FrTl0gSnO4lXjFcKIfMdWoPI4Zk5cgMXnqxawg.x8AXgIvnAFYcId41J2ZnHK1t96DZXULOkcvis0G6Mzkg.PNG.kyechan99/8.PNG?type=w1)
  3. > ![3](http://postfiles10.naver.net/MjAxNzAzMjRfNjcg/MDAxNDkwMzYyMjg4NzUz.zzKRmk2UxKyYfBH-ORQHFikl5oGM0O-a3pJGcsN9_acg.K8BPnWIMMNtoDQKN8w8uIlpIqrfa_CWQXADjyHMvZ4Mg.PNG.kyechan99/9.PNG?type=w1)
  4. > 만든 라이센스로 들어가서
    >
    > ![4](http://postfiles15.naver.net/MjAxNzAzMjRfMTk5/MDAxNDkwMzYyMjg4OTE3.mkGVIkhJWCq9133srHdTDe-CXf-8rSdy63RpPG0IDu0g.LV8FRCeyW3xy2_e-DLYIvxsF6rH5gekNJcVA7a4hg44g.PNG.kyechan99/10.PNG?type=w1)
  5. > 키를 복사한다.
    >
    > ![5](http://postfiles11.naver.net/MjAxNzAzMjRfMTcz/MDAxNDkwMzYyMjg5MTY1.IxQmRfPQzCiyUH8GbH1e3wHNxiH9iX0vZs4bV0GiwJEg.noYvdTaGWey28qlANpDPORJt2QkieanNmrrM8OsCzOIg.PNG.kyechan99/11.PNG?type=w1)
  6. > 복사한 키를 **ARCamera**의 **Open Vuforia configuration**에
    >
    > ![6](http://postfiles5.naver.net/MjAxNzAzMjRfMTY1/MDAxNDkwMzYyMjg5MzYx.H20bsrSnKTzsSfnTSCHnpyPjtZEH_xMg19EI9GEB0hAg.O9ryybTKVMuqRioLEjHzjxSF7Hic-vLHK_ED4WLC2dIg.PNG.kyechan99/12.PNG?type=w1)
    >
    > App License Key 에 붙여준다.
    >
    > ![7](http://postfiles8.naver.net/MjAxNzAzMjRfMTA4/MDAxNDkwMzYyMjg5NTA2.1MN4f0drzgQyiiol9q3VSYKEOHV2JGI34h-MB1FvndIg.VWdONTkX-lEzmnp-NEYPiBAD5Z5jyLT3zeRr7BYochcg.PNG.kyechan99/13.PNG?type=w1)

## 7. Add Database
1. Target Manager로 돌아와 **Add Database**를 눌러준다.
  >![1](http://postfiles10.naver.net/MjAxNzAzMjRfNzEg/MDAxNDkwMzYyMjg5Njc0.ARxRL7vI7473RT7UpIeaqSyKFiE5feCOBjABxXtru3gg.NpAyN6-eCAE09MlGVWXvZrFJW1WPd4uVaKVdMs-HG9Ug.PNG.kyechan99/14.PNG?type=w1)
2. Type 은 Device로 체크해준다.
  >![2](http://postfiles14.naver.net/MjAxNzAzMjRfMjg5/MDAxNDkwMzYyMjg5ODI2.lFSiYhQh_P_3HAre4jV2WB2ms1eCEGYwdiYoZDoqTd0g.ENQZHYLt2MR4br7dPWsMgWprD53T7Wfd0H6zNv5Tzywg.PNG.kyechan99/15.PNG?type=w1)
3. Add Target 을 누른다
  >![3](http://postfiles2.naver.net/MjAxNzAzMjRfMjM5/MDAxNDkwMzYyMjkwMDAw.XFVQc7Gs8AzvZneYdK2HzrosoUxKUSMyRvaeGbU-Qs4g.b79e5gxEHctF-9P7-hDRSZ79CJfVvivk_JIYXDxombcg.PNG.kyechan99/16.PNG?type=w1)
4. 인식할 대상에 관한 파일을 올리는 작업이다. 일단 간단한 Single Image 로 테스트 한다.
>![1](http://postfiles16.naver.net/MjAxNzAzMjRfMTg0/MDAxNDkwMzYyMjkwMjQ2._HmuaKSvk8NYYm0AOMVPtEy24X-U88GvFERA0heChJAg.8URaGKGXc22natdYCOxysZLWBv3E5GgJ0x-mo8EAKYwg.PNG.kyechan99/17.PNG?type=w1)
  >
  > File 은 대상에 관한 이미지 이다. ( 여덟단어 라는 책의 앞 표지를 올렸다. )
  >
  > Width 는 대상의 실제 크기 입력칸이다. ( 여덟단어 책의 세로 길이가 225mm 이기에 입력했다. )
  >
  > Name 은 타겟의 호칭을 의미한다.
  
## 8. Database 파일 다운
- **Download Database (All)** 을 눌러 파일을 다운받는다.
> ![1](http://postfiles12.naver.net/MjAxNzAzMjRfMjQ2/MDAxNDkwMzYyMjkwNDUz.xxQ0iYhkW-8XG2Ip-nI-_DRbsoO-1GvWYwC7FxZfCxAg.R-w2BY2-WcRvUKlYF8NGqTZcUpzp9_XxG3wMuguN73Ug.PNG.kyechan99/18.PNG?type=w1)
> 
> 
> ![2](http://postfiles11.naver.net/MjAxNzAzMjRfMjEy/MDAxNDkwMzYyMjkwNjA2.9U5PpuO4ZwKGthaPS0dPKdiBgjwP141UopIWjoaFj24g.HaXR7acU4mPgk-5e-jPCcQwjkpsBMo0PtydWGc08SEMg.PNG.kyechan99/19.PNG?type=w1)

## 9. 인식 대상 설정하기
1. 다운 받은 파일을 유니티에서 Import 해준다.
  > ![1](http://postfiles1.naver.net/MjAxNzAzMjRfMjg4/MDAxNDkwMzYyMjkwNzY2.HUJyGwoj7hBHLUKBb2jIabqECP92lWmlwcS25UvUI5Qg.kp4E_fnPf4vduCtqKxNsTLaMywIvcGCtxrNzuyF6IM4g.PNG.kyechan99/20.PNG?type=w1)
2. **ImageTarget** 오브젝트의 *Database* 부분에 방금 만든 Database의 Name으로 변경해준다.

### 9-1 . 에러 해결하기
- ※ 만일 아래와 같이 여전히 흰색판이 보일경우에만 봅니다.
  > ![1](http://postfiles3.naver.net/MjAxNzAzMjRfMjUw/MDAxNDkwMzYyMjkxNTg2.gzWCdAsCKf0WmMzeoTMH5TQo93suRmdrOMTdohfDp3wg.bfkii6b0AGsRQw4sAKhBk5rDKR4IdVvwtNFlCoQtoUog.PNG.kyechan99/22.PNG?type=w1)

  1. *Assets/Editor/QCAR/ImageTargetTexture/이름* 으로 들어간다.
  > ![1](http://postfiles7.naver.net/MjAxNzAzMjRfNzMg/MDAxNDkwMzYyMjkxODAz.j4MPNqjZkjVjOJk0FOo0GaYR9gzsosM5-6r9hple-lgg.ww6JDTpnu41OpskYk0hqMuvHYabR_YIhu4lzyCZtcUUg.PNG.kyechan99/23.PNG?type=w1)

  2. Texture Type : Default  와  Texture Shape : 2D 로 설정해 줍니다.
  > ![1](http://postfiles1.naver.net/MjAxNzAzMjRfNDUg/MDAxNDkwMzYyMjkxOTY5.903YE_fGy6rlKHCYZEeI4Aq8cyK03twrNLu4RzjvTDQg.6qc4o82gnvo2KiHytr8A80HnPL4U6M2OrsL2wq7ke7sg.PNG.kyechan99/24.PNG?type=w1)

  3. 아래와 같이 떠야 성공된겁니다.
  > ![1](http://postfiles6.naver.net/MjAxNzAzMjRfMjQ2/MDAxNDkwMzYyMjkyNTM5.ZL3uUEM5ZbiTQAvrM0YXWX7ksc5Tp5MLYfuqBU7CSXMg.4yYooTNGN7n6Ie12oz6YVmq0Gu7Y_aiAUKTA_5pBJX0g.PNG.kyechan99/25.PNG?type=w1)
  
## 10. 인식 대상에 오브젝트 올리기
- ImageTarget 을 부모로 3D 오브젝트를 올립니다.
> ![1](http://postfiles6.naver.net/MjAxNzAzMjRfOTYg/MDAxNDkwMzYyMjkzMTI1.xmwveIhG5kdhneQgY8sLp86m1Ct0HGUnC6TarVnyDB4g.kBIdKQu1tfpSjLGEeSPB1UgwhEtWT3LOGJahefK7RxAg.PNG.kyechan99/26.PNG?type=w1)
> ![2](http://postfiles11.naver.net/MjAxNzAzMjRfNTAg/MDAxNDkwMzYyMjkzNTE4.YxxQ3JJsOSq4eQVFqXXWtZWk4Pml9knNZj6oiEw4trkg.MWaZ3WngVn1xtVAyRkH0Pa3BGoTPW4qLMqCDs4ZPRBog.PNG.kyechan99/27.PNG?type=w1)

## 11. Datasets 설정
1. 다시 ARCamera 의 configuration 으로 들어갑니다.
> ![1](http://postfiles5.naver.net/MjAxNzAzMjRfMTY1/MDAxNDkwMzYyMjg5MzYx.H20bsrSnKTzsSfnTSCHnpyPjtZEH_xMg19EI9GEB0hAg.O9ryybTKVMuqRioLEjHzjxSF7Hic-vLHK_ED4WLC2dIg.PNG.kyechan99/12.PNG?type=w1)
2. Datasets 의 Load ARTest Database 와 Activate 를 체크해줍니다.
> ![1](http://postfiles10.naver.net/MjAxNzAzMjRfMjEx/MDAxNDkwMzYyMjkzODc1.KLiBIQ3daYHkojoXHdE6Uaw44Pr76Sb5WmuustPAYrsg.z1v0KoYiixXVrEMTOBHYDJWq2QCmdva4fB9o3iF1vU4g.PNG.kyechan99/29.PNG?type=w1)

## 12. Build Setting
1. Android로 플랫폼 변경
> ![1](http://postfiles16.naver.net/MjAxNzAzMjRfMTUy/MDAxNDkwMzYyMjk0MTEw.Q4W3TZuqti0xrNEQx2watcJwHJuOAolyFZNs-1f-x3Qg.TUXlEleCsP58_JiZMfQT8tdQ2zh6vg3M5CcSIxQ5UiEg.PNG.kyechan99/30.PNG?type=w1)
2. Identification 수정
> ![1](http://postfiles16.naver.net/MjAxNzAzMjRfMjcx/MDAxNDkwMzYyMjk0MjQz.P7dZoZhbGsczzcT35qtBMyKaqX2jfr8ememhYc9BPvYg.c2Jgqwe1aRTpR3hn2r_FxJJAguQ81K_JaNOHsf5UXu8g.PNG.kyechan99/31.PNG?type=w1)

## 13. 빌드
- > ![1](http://postfiles4.naver.net/MjAxNzAzMjRfMjgg/MDAxNDkwMzY0MTgyNjQ1.F8mdNK8TgkQ57w4l8onXSFVuBwFAusquusIxAsYyx0Ug.y68wYBt2fcq4aDhfKOGwKUBMrQUNRhGKTgrjKu1bWYIg.JPEG.kyechan99/1.jpg?type=w1)


