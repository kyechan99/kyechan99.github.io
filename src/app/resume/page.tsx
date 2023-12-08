/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */
"use client";

import Link from "next/link";

import styled from "@emotion/styled";
import { IconDeviceMobile } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";

import "@/styles/resume.css";

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5;
  ul {
    font-size: 18px;
  }
  ul:not(.origin-ul) {
    list-style: none;
  }
  .row {
    display: flex;
    position: relative;
    margin-left: -1rem;
    margin-right: -1rem;
    flex-wrap: wrap;
  }
  .col-md-4 {
    width: 100%;
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: 768px) {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
  }
  .col-md-8 {
    width: 100%;
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: 768px) {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
  }

  p {
    margin-top: 0;
    font-size: 18px;
    line-height: 1.5;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .tag-badge {
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
    background-color: var(--asideBG);
    display: inline-block;
    padding: 0.3em 0.5em;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }

  hr {
    margin-top: 10px;
  }

  .resume-project {
    margin-bottom: 3rem;
  }
`;

export default function Home() {
  return (
    <Container className="container container-resume">
      <div className="resume" id="app">
        <div className="introduce">
          <div className="resume-block resume-profile row">
            <div className="col-md-4">
              <img
                className="profile-img"
                src="https://avatars2.githubusercontent.com/u/14146566?s=460&u=483e82666381dc503a456252f195e3d05230c8ba&v=4"
              />
            </div>
            <div className="col-md-8">
              <h1 className="name">
                강예찬<span className="name-en"> | Ye-Chan Kang</span>
              </h1>

              <ul className="info-list">
                <li className="info">
                  <span className="info-icon">
                    {" "}
                    <IconDeviceMobile />{" "}
                  </span>
                  010-5236-7457
                </li>
                <li className="info">
                  <span className="info-icon">
                    <IconMail />
                  </span>
                  kyechan99@gmail.com
                </li>

                <li className="info">
                  <span className="info-icon">
                    <IconBrandGithub />
                  </span>
                  <a href="https://github.com/kyechan99" target="_blank">
                    github.com/kyechan99
                  </a>
                </li>
                <li className="info">
                  <span className="info-icon">
                    <IconPencil />
                  </span>
                  <Link href="/" target="_blank">
                    kyechan99.github.io
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-block resume-introduce">
            <div className=" ">
              <h2 className="title">INTRODUCE</h2>
            </div>
            <div className=" ">
              <div className="intro-block">
                <p>일일 사용량 45,000 건의 오픈소스를 관리하고 있습니다.</p>
                <p>
                  기술의 사용법에 능숙해지기보다,
                  <b className="stress">왜 필요하고 무엇을 해결하는지 근원적 물음을 제기</b>
                  합니다.
                </p>
                <p>이를 바탕으로 오픈소스에 관심이 많아 분석해보거나 개발 해보며 다양하게 도전해오고 있습니다.</p>
                <p>특히 개발자에게 필요한 기능이나 문제를 경험하면서, 직접 개선하고 변화시키는 일이 즐겁습니다.</p>
              </div>
            </div>
            <div className="intro-block">
              <p>
                소프트웨어 개발은 문제를
                <b className="stress">개선하고 변화시키는 일에 큰 가치</b>가 있다고 느낍니다.
              </p>
              <p>이전에 겪었던 실수와 고민을 반복하지 않기 위해 문제 해결을 위한 프로젝트를 진행하거나 공유합니다.</p>
              <p>
                소통과 협업은 문제를 공유하는 상황에서 힘이 나온다고 생각하며, 귀 기울이며 수용하고 배우고자 노력합니다.
              </p>
            </div>
          </div>

          <div className="resume-block resume-project">
            <h2 className="title">PROJECT</h2>

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/kyechan99/capsule-render" target="_blank">
                    Capsule-Render
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Javascript</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/kyechan99/capsule-render" target="_blank">
                    https://github.com/kyechan99/capsule-render
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>SVG를 활용한 이미지 동적 생성 API 오픈소스</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Owner & Maintainer</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>API Query 값으로 SVG를 활용해 동적인 이미지 응답</li>
                  <li>하루 평균 45,000건 요청 (35,000~55,000)</li>
                  <li>오픈 소스 사용 방법 및 예외 사항 등을 명시한 문서 제공</li>
                  <li>
                    <img
                      alt="GitHub Repo stars"
                      src="https://img.shields.io/github/stars/kyechan99/capsule-render?labelColor=%23e2deff&color=FFFFFF"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/baggun/VoiceHub" target="_blank">
                    VoiceHub
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Next.js</span>
                  <span className="badge badge-light tag-badge">React</span>
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">Recoil</span>
                  <span className="badge badge-light tag-badge">styled-component</span>
                  <span className="badge badge-light tag-badge">Mongoose</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/baggun/VoiceHub" target="_blank">
                    https://github.com/baggun/VoiceHub
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://voice-hub-beta.vercel.app" target="_blank">
                    https://voice-hub-beta.vercel.app
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>성우 포트폴리오 관리 및 커뮤니티 플랫폼</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Owner & Maintainer</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>
                    React에서 Next로의 마이그레이션
                    <ul className="semi-list origin-ul">
                      <li>
                        페이지 전환보다 초기 페이지 속도 향상을 위한 Next.js 마이그레이션 작업 -
                        <Link href="/post/lib/why-nextjs" target="_blank">
                          포스팅
                        </Link>
                      </li>
                      <li>증가한 서버측 작업과 비용을 감소시키기 위해 일부 페이지 SSR → SSG 변환</li>
                    </ul>
                  </li>
                  <li>
                    초기 렌더링 속도 개선
                    <ul className="semi-list origin-ul">
                      <li>우선순위에 따라 Streaming 하며 lighthouse FCP 0.7s → 0.4s 로 감소</li>
                      <li>로딩 중 Skeleton UI를 이용해 화면 일관성과 사용자 경험 개선</li>
                    </ul>
                  </li>
                  <div className="print-empty-voicehub"></div>
                  <li>
                    오디오 플레이어 상태 유지
                    <ul className="semi-list origin-ul">
                      <li>
                        Recoil로 다양한 오디오 재생 컴포넌트들과 상태를 공유하면서 불필요한 재렌더링을 방지하고 페이지
                        이동에도 재생 유지
                      </li>
                    </ul>
                  </li>
                  <li>
                    컴포넌트 복잡도 개선
                    <ul className="semi-list origin-ul">
                      {/* <li>Media Query를 이용한 반응형 웹 사이트 작업</li>
                <li>동적 스타일링을 위한 CSS-IN-JS로 styled-component 도입</li>  */}
                      <li>컴포넌트 단위로 개발하면서 재사용성을 높이고 반복 작업 최소화</li>
                      <li>Storybook을 이용해 문서화하며 컴포넌트 종류 시각화</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/scribubble/scribubble" target="_blank">
                    Scribubble
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Preact</span>
                  <span className="badge badge-light tag-badge">Three.js</span>
                  <span className="badge badge-light tag-badge">A-Frame</span>
                  <span className="badge badge-light tag-badge">styled-component</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/scribubble/scribubble" target="_blank">
                    https://github.com/scribubble/scribubble
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://buly.kr/9t7YCdV" target="_blank">
                    https://buly.kr/9t7YCdV
                  </a>
                </div>
                {/* <div className="url-block service">
            <a
              href="https://github.com/kyechan99/capsule-render"
              target="_blank"
              >https://github.com/kyechan99/capsule-render</a
            >
          </div> */}
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>WebVR을 활용한 3D 공간 Drawing</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <ul className="semi-list">
                  <li>프론트엔드 개발 (프론트엔드 3명, 백엔드 1명)</li>
                  <li>프로젝트 설계, WebVR 환경 구현, 드로윙 / 팔레트 기능을 중점으로 구현</li>
                </ul>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>
                    프로젝트 경량화
                    <ul className="semi-list origin-ul">
                      <li>서비스 요구사항 대비 불필요한 React 도입 고려</li>
                      <li>
                        Preact 도입 효과를 정리하고 팀원들과 토론하여 설득 -
                        <Link href="/post/lib/react-preact" target="_blank">
                          포스팅
                        </Link>
                      </li>
                      <li>렌더링 속도와 메모리 사용량 개선 시도</li>
                      <li>VR 환경 지원도 고려 가능해지면서 WebVR 기능 추가가 가능해짐</li>
                    </ul>
                  </li>
                  <li>
                    프레임 저하 개선
                    <ul className="semi-list origin-ul">
                      <li>
                        데이터가 Drawing 작업에 맞추어 동적 증가되도록 하고 재렌더링 요청 작업을 불필요하게 만들면서
                        평균 초당 프레임(FPS) 10 → 60 개선
                      </li>
                    </ul>
                  </li>
                  <li>
                    브라우저 환경간 선 굵기가 호환 문제 해결
                    <ul className="semi-list origin-ul">
                      <li>
                        Three.js 의 공식 Line 객체가 모든 브라우저에 호환되지 못하는 문제로, 라이브러리의 샘플 단계
                        Line2 와의 비교 분석을 통해 프로젝트에 도입하면서 브라우저 호환 -
                        <Link href="/post/lib/threejs-draw" target="_blank">
                          포스팅
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    3D 상의 Drawing 좌표계 문제 해결
                    <ul className="semi-list origin-ul">
                      <li>
                        무한한 공간에서의 깊이와 시점으로 인한 좌표 변경을 카메라와 평행한 평면과 event와의 꼭짓점
                        계산으로 고정된 좌표를 얻어냄
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/kookmin-sw/capstone-2023-06" target="_blank">
                    Desk-IT
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">React</span>
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">Redux</span>
                  <span className="badge badge-light tag-badge">styled-component</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/scribubble/scribubble" target="_blank">
                    https://github.com/kookmin-sw/capstone-2023-06
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://www.youtube.com/watch?v=3H6TQfn8TNo" target="_blank">
                    https://www.youtube.com/watch?v=3H6TQfn8TNo
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>데스크 셋업 플랫폼</p>
                <h4 className="semi-title">Role</h4>
                <ul className="semi-list">
                  <li>프론트엔드 개발 (프론트엔드 2명, 백엔드 1명)</li>
                  <li>상품 및 커뮤니티 페이지 구현</li>
                  <li>블럭 기반 전용 에디터 및 에디터 상품 참조 기능 구현</li>
                </ul>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>
                    이미지 파일에 상품 정보 입력
                    <ul className="semi-list origin-ul">
                      <li>각 줄마다 스타일링을 지정할 수 있게 블럭 기반의 에디터를 개발</li>
                      <li>변경되는 내부 html 내용을 스택의 깊이 확인을 통해 재검사</li>
                      <li>분리된 블럭 컴포넌트간의 작용을 위해 Redux 상태 관리</li>
                      <li>환경에 따라 변하는 이미지 비율에 맞추어 데이터 위치 재조정</li>
                    </ul>
                  </li>
                  <li>
                    부분 색상 및 두께 조절등의 기능을 위한{" "}
                    <Link href="/dragond" target="_blank">
                      컴포넌트
                    </Link>{" "}
                    개발
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="print-empty-yuristrap"></div>

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/yuristrap/yuristrap" target="_blank">
                    Yuristrap
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Javascript</span>
                  <span className="badge badge-light tag-badge">SCSS</span>
                </div>
                <div className="url-block github">
                  <a href="https://yuristrap.github.io/v1.0/components/button" target="_blank">
                    https://github.com/yuristrap/yuristrap
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://yuristrap.github.io/" target="_blank">
                    https://yuristrap.github.io
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>웹 제작에 필요한 최소한의 디자인과 기능 프레임워크</li>
                  <li>평소 자주 사용하는 기능이나 반응형 웹 디자인을 분리하고자 개발</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Owner & Maintainer</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>반응형 웹 디자인을 지원</li>
                  <li>darkmode와 modal/alert 등의 기능 지원</li>
                  <li>
                    모든 기능과 사용법을 명시한{" "}
                    <a href="https://yuristrap.github.io/v1.0/introduction/version" target="_blank">
                      Docs
                    </a>{" "}
                    지원
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://lostwak.github.io/" target="_blank">
                    LostWak
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">C#</span>
                  <span className="badge badge-light tag-badge">Javascript</span>
                  <span className="badge badge-light tag-badge">Unity3D</span>
                  <span className="badge badge-light tag-badge">Node.js</span>
                  <span className="badge badge-light tag-badge">Express.js</span>
                  <span className="badge badge-light tag-badge">Mongoose</span>
                </div>
                <div className="url-block service">
                  <a href="https://lostwak.github.io/" target="_blank">
                    https://lostwak.github.io/
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://youtu.be/bssHujvUd3o" target="_blank">
                    https://youtu.be/bssHujvUd3o
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>MORPG 협동 레이드 게임</p>
                <h4 className="semi-title">Role</h4>
                <ul className="semi-list">
                  <li>개발 및 팀장을 맡으며 총 13명의 다양한 직군을 모집해 6개월간 개발</li>
                </ul>
                <h4 className="semi-title">Effort & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>분야를 가리지 않고 개발 열정을 다양하게 쏟아옴</li>
                  <li>생방송 당시 2만명이 넘게 시청</li>
                  <li>평균 동시접속자 35명과 1745명의 사용자 가입</li>
                  <li>
                    순수한 개발 즐거움에 몰두하기도 하며 새로운 도전에도 적극적으로 참여 -
                    <Link href="/project/games/loswak" target="_blank">
                      포스팅
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-block resume-education">
            <h2 className="title">Act</h2>
            <div>
              <h3 className="info-log">
                J2KB 코딩 스터디 5th
                <span className="info-detail left">2022</span>
              </h3>
              <ul className="semi-list">
                <li>
                  React 스터디에 참가하면서 주간 목표를 정해 포스팅하거나 경험해본 내용을 가지고 공유하는 시간을
                  가졌습니다.
                </li>
                <li>공부한 내용을 가지고 프로젝트 개발에 참여하면서 Scribubble 을 개발했습니다.</li>
                <li>독창적인 기획과 서비스 완성도로 찬사를 받으며 대상을 수상했습니다.</li>
              </ul>
            </div>
            <hr className="divider" />
            <div>
              <h3 className="info-log">
                국방 오픈소스 아카데미 OSAM
                <span className="info-detail left">2020</span>
              </h3>
              <ul className="semi-list">
                <li>군 복무중 비어있는 시간을 활용하기 위해 공부하면서 참가하게 되었습니다.</li>
                <li>자동 모자이크 웹 서비스를 개발하면서 프레임워크 Vue.js를 접하게 되었습니다.</li>
                <li>프로젝트의 구조나 개발자들끼리의 작업 분배와 형태에 대해 고민해보는 경험이 되었습니다.</li>
              </ul>
            </div>
          </div>

          <div className="resume-block resume-education">
            <h2 className="title">EDUCATION</h2>

            <p className="info-log">
              한국게임과학고 프로그래밍과
              <span className="info-detail left">2015.03 - 2018.02 (졸업)</span>
            </p>
            <p className="info-log">
              국민대학교 소프트웨어학과
              <span className="info-detail left">2018.03 - 2024.02 (졸업예정)</span>
            </p>
          </div>

          <div className="resume-block resume-education">
            <h2 className="title">Award</h2>

            <p className="info-log">코딩 스터디 J2KB 5th - 대상</p>
            <p className="info-log">제33회 한국정보올림피아드 경시부문 지역대회 - 동상</p>
            <p className="info-log">글로벌 인디 게임 제작 경진대회 - 장려상</p>
            <p className="info-log">미래상상 기술 경진대회 - 동상</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
