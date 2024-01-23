"use client";

import styled from "@emotion/styled";
import { IconBrandGithub, IconDeviceMobile, IconMail, IconPencil } from "@tabler/icons-react";
import Link from "next/link";

export default function Resume() {
  return (
    <Container className="container container-resume">
      <div className="resume" id="app">
        <div className="introduce">
          <div className="resume-block resume-profile row">
            <div className="col-md-4 profile-block">
              <img
                className="profile-img"
                src="https://avatars2.githubusercontent.com/u/14146566?s=460&u=483e82666381dc503a456252f195e3d05230c8ba&v=4"
              />
            </div>
            <div className="col-md-8">
              <h1 className="name">
                강예찬<span className="name-en"> | &nbsp;Ye-Chan Kang</span>
              </h1>

              <ul className="info-list profile-list">
                <li className="info">
                  <span className="info-icon">
                    {" "}
                    <IconDeviceMobile stroke={1.25} />{" "}
                  </span>
                  010-5236-7457
                </li>
                <li className="info">
                  <span className="info-icon">
                    <IconMail stroke={1.25} />
                  </span>
                  kyechan99@gmail.com
                </li>

                <li className="info">
                  <span className="info-icon">
                    <IconBrandGithub stroke={1.25} />
                  </span>
                  <a href="https://github.com/kyechan99" target="_blank">
                    github.com/kyechan99
                  </a>
                </li>
                <li className="info">
                  <span className="info-icon">
                    <IconPencil stroke={1.25} />
                  </span>
                  <Link href="https://kyechan99.github.io" target="_blank">
                    kyechan99.github.io
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <hr className="divider" /> */}
          <div className="resume-block resume-introduce">
            <div className=" ">
              <div className="intro-block">
                <p>
                  일일 평균 45,000 요청량의 오픈소스를 관리하고 있습니다.
                  <br />
                  {/* 소프트웨어 개발은 문제를 개선하고 변화시키는 일에 큰 가치가 있다고 생각해요.  */}
                  개발자로서 무엇을 해결하는지를 넘어 <b className="stress">근본적인 문제와 창의적인 해결책</b>에
                  고민합니다.
                  <br /> 이를 바탕으로 오픈소스에 관심이 많아 개발하면서 도전과 성장을 즐기고 있습니다.
                </p>
                {/* <p>소프트웨어 개발은 문제를 개선하고 변화시키는 일에 큰 가치가 있다고 느낍니다.</p>
                <p>
                  개발자로서 무엇을 해결하는지를 넘어 <b className="stress">'근본적인 문제와 창의적인 해결책'</b>에
                  고민합니다.
                </p>
                <p>이를 바탕으로 오픈소스에 관심이 많아 분석하고 개발하며 도전과 성장을 즐기고 있습니다.</p> */}
                <p>
                  가치를 창출하는 코드를 위해 <b className="stress">지속적인 학습과 실천에 적극적</b>입니다. <br />
                  생각을 행동으로 거침없이 옮기면서 현재는 활성 사용자 5000명 이상의 프로그램을 서비스하고 있습니다.
                </p>
              </div>
            </div>
            {/* <div className="intro-block">
              <p>
                겪었던 실수를 반복하지 않기 위해 <b className="stress">지속적인 학습과 공유에 적극적</b>입니다. 특히
                협업은 문제를 고민하고 나누는 환경에서 힘이 나온다고 생각합니다. 능동적으로 소통에 참여해 서비스 발전과
                가치를 창출하는 코드를 위해 노력합니다.
              </p>
            </div> */}
          </div>

          <PrintDivider />
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
                  <span className="badge badge-light tag-badge">SVG</span>
                  <span className="badge badge-light tag-badge">Vercel</span>
                  <span className="badge badge-light tag-badge">React</span>
                  <span className="badge badge-light tag-badge">Jest</span>
                  <span className="badge badge-light tag-badge">Husky</span>
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
                  <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    이미지 동적 생성 오픈소스{" "}
                    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/kyechan99/capsule-render" />
                  </li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Owner & Maintainer</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>API Query 값으로 SVG를 활용해 동적인 이미지 응답</li>
                  <li>하루 평균 45,000건 이상 요청 (최다 85,000건)</li>
                  <li>오픈 소스 사용 방법 및 예외 사항 등을 명시한 문서 제공</li>
                  <li>
                    <a href="https://github.com/kyechan99/capsule-render/discussions/15" target="__blank">
                      Discussions
                    </a>
                    을 나누며 에러나 기능사항에 대해 토론하고 적용시킴
                  </li>
                  <li>
                    서비스 에러 방지
                    <ul className="semi-list origin-ul">
                      <li>테스트 코드 작성</li>
                      <li>Github Action을 통해 테스트 결과(Coverage Report) 분석</li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://github.com/kyechan99/capsule-render/issues/19" target="__blank">
                      사용자 편의 개선을 위한
                    </a>{" "}
                    Generator 제공
                    <ul className="semi-list origin-ul">
                      <li>GitHub가 제공한 기존 Traffic 분석과 Generator 방문수 분리</li>
                      <li>분리된 방문자를 더욱 자세히 파악하기 위해 Google Analytics 적용</li>
                    </ul>
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
                  <span className="badge badge-light tag-badge">Express</span>
                  <span className="badge badge-light tag-badge">Mongoose</span>
                  <span className="badge badge-light tag-badge">S3</span>
                  <span className="badge badge-light tag-badge">styled-component</span>
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
                    React에서 Next로의{" "}
                    <Link href="https://kyechan99.github.io/post/lib/why-nextjs" target="_blank">
                      마이그레이션
                    </Link>
                    <ul className="semi-list origin-ul">
                      {/* <li>App Router </li> */}
                      <li>페이지 전환보다 첫 페이지 입장을 위한 마이그레이션 작업</li>
                      <li>분리된 프로젝트 단순화시키면서 개발 시간과 테스트 감소</li>
                      {/* <li>프로젝트 증가한 서버측 작업과 비용을 감소시키기 위해 일부 페이지 SSR → SSG 변환</li> */}
                      {/* <li>증가한 서버측 작업과 비용을 감소시키기 위해 일부 페이지 SSR → SSG 변환</li> */}
                    </ul>
                  </li>
                  <li>
                    렌더링 속도 개선
                    <ul className="semi-list origin-ul">
                      <li>우선순위에 따라 Streaming 하며 첫 컨텐츠 렌더링 시간 0.9s → 0.3s 단축</li>
                      <li>로딩 중 Skeleton UI를 만들어 CLS 와 사용자 경험 개선</li>
                    </ul>
                  </li>
                  {/* <div className="print-empty-voicehub"></div> */}
                  <li>
                    컴포넌트 복잡도 개선
                    <ul className="semi-list origin-ul">
                      {/* <li>Media Query를 이용한 반응형 웹 사이트 작업</li>
                <li>동적 스타일링을 위한 CSS-IN-JS로 styled-component 도입</li>  */}
                      <li>컴포넌트 단위로 개발하면서 재사용성을 높이고 반복 작업 최소화</li>
                      <li>Storybook을 이용해 문서화하며 컴포넌트 종류 시각화</li>
                    </ul>
                  </li>
                  <li>
                    오디오 플레이어 상태 유지
                    <ul className="semi-list origin-ul">
                      <li>
                        다양한 오디오 재생 컴포넌트들과 상태를 공유하면서 불필요한 재렌더링을 방지하고 페이지 이동에도
                        재생 유지
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
                  <li>WebVR 환경에서의 3D 공간 Drawing</li>
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
                        Preact 도입 효과를 정리하고 팀원들과 토론하여{" "}
                        <Link href="https://kyechan99.github.io/post/lib/react-preact" target="_blank">
                          설득
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
                        Line2 와의{" "}
                        <Link href="https://kyechan99.github.io/post/lib/threejs-draw" target="_blank">
                          비교 분석
                        </Link>
                        을 통해 프로젝트에 도입하면서 브라우저 호환
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
                  <a href="https://kyechan99.github.io/" target="_blank">
                    Blog
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Next.js</span>
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">Recoil</span>
                  <span className="badge badge-light tag-badge">Emotion</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/kyechan99/kyechan99.github.io" target="_blank">
                    https://github.com/kyechan99/kyechan99.github.io
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>기술 및 프로젝트를 자유롭게 구성하기 위해 만든 블로그</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>SEO를 위한 시멘틱 태그 배치에 신경 씀</li>
                  <ul className="semi-list origin-ul">
                    <li>sitemap, robots 생성 후 크롤러가 잘 읽어갈 수 있도록 구현</li>
                    <li>open graph를 적용한 프리뷰로 유입 개선 시도</li>
                    <li>구조화된 JSON-LD 데이터 마크업 작성</li>
                  </ul>
                  <li>MDX를 활용하기 위해 rehype, remark 플러그인 구성</li>
                  <ul className="semi-list origin-ul">
                    <li>이미지, 코드, 주소 등을 최적화 된 컴포넌트로 재구성</li>
                    <li>각 Heading을 정리한 TOC 생성과 Observer 처리</li>
                  </ul>
                  <li>GitHub Action으로 자동 빌드 Workflow 구성</li>
                  <li>다크모드 구현</li>
                </ul>
              </div>
            </div>
            {/* <div className="project-row row">
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
                      <li>환경에 따라 변하는 이미지 비율에 맞추어 데이터 위치 재조정</li>
                    </ul>
                  </li>
                  <li>
                    부분 색상 및 두께 조절등의 기능을 위한{" "}
                    <Link href="https://kyechan99.github.io/dragond" target="_blank">
                      컴포넌트
                    </Link>{" "}
                    개발
                  </li>
                </ul>
              </div>
            </div> */}
            <hr className="divider" />

            {/* <div className="print-empty-yuristrap"></div> */}

            {/* <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/yuristrap/yuristrap" target="_blank">
                    Yuristrap
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Javascript</span>
                  <span className="badge badge-light tag-badge">SCSS</span>
                  <span className="badge badge-light tag-badge">Gatsby</span>
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
            <hr className="divider" /> */}

            {/* <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://lostwak.github.io/" target="_blank">
                    Chzzk-Plus
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">React</span>
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
            </div>
            <hr className="divider" /> */}

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
                    순수한 개발 즐거움에 몰두하며{" "}
                    <Link href="https://kyechan99.github.io/project/games/loswak" target="_blank">
                      새로운 도전을 적극적으로 시도
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <PrintDivider />

          <div className="resume-block resume-education">
            <h2 className="title">Activities</h2>
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
                <li>
                  자동 모자이크 웹 서비스를 개발하면서 프레임워크 Vue.js를 처음 접하게 되었고 웹 공부를 시작했습니다.
                </li>
                <li>프로젝트의 구조나 개발자들끼리의 작업 분배에 대해 고민해보는 경험이 되었습니다.</li>
              </ul>
            </div>
            <hr className="divider" />
            <div>
              <h3 className="info-log">
                기타 오픈소스 활동
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>
                  [직접 개발] : 서비스 20일 만에 <b>활성 자용자수 5000 명 도달</b> -{" "}
                  <a href="https://github.com/kyechan99/chzzk-plus">확장 프로그램</a>
                </li>
                <li>
                  [직접 개발] : 드래그시 도우미를 띄워주는 Vue.js 컴포넌트 배포 -{" "}
                  <a href="https://www.npmjs.com/package/dragond">npm package</a>
                </li>
                <li>
                  [직접 개발] : 평소 자주 사용하는 최소한의 디자인 및 기능 프레임워크 -{" "}
                  <a href="https://yuristrap.github.io/v1.0/introduction/customize">DOCS</a>
                </li>
                <li>
                  [Merge] : devhints의 sass 치트시트 내용 추가 -{" "}
                  <a href="https://github.com/rstacruz/cheatsheets/pull/1481">#1481</a>
                </li>
                <li>
                  [Merge] : naver/fe-news 11월 경로 수정 - <a href="https://github.com/naver/fe-news/pull/35">#35</a>
                </li>
                <li>
                  [Open] : graphql-kr 한국 문서 수정 -{" "}
                  <a href="https://github.com/graphql-kr/graphql-kr.github.io/pull/4">#4</a>
                </li>
              </ul>
            </div>
          </div>

          <PrintDivider />

          <div className="resume-block resume-skill">
            <h2 className="title">SKILL</h2>
            <div>
              <h3 className="info-log">
                HTML / CSS(SCSS) / CSS-IN-JS
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>SCSS 를 사용한 프레임워크를 만들어 보기도 하며 Semantic Markup을 준수하며 사용합니다.</li>
                <li>Styled-Component 및 Emotion 을 활용한 프로젝트를 설계 할 수 있고 선호합니다.</li>
                <li>SEO 에 신경쓰며 프로젝트를 진행하며 사용자 유입 분석을 위해 시도합니다.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                Javascript / Typescript
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>ES6 문법을 활용해 웹 어플리케이션을 개발하는 데 익숙합니다.</li>
                <li>TypeScript 를 이용해 데이터 타입과 문법 등을 준수하며 개발하는 것을 선호합니다.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                React / Next
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>CSR과 SSR에 대해 고민하며 개발합니다.</li>
                <li>Flux 패턴을 이해하고 Redux 및 Recoil 을 사용합니다.</li>
                <li>작은 단위로 개발해 상향적 조립에 노력하며 Storybook을 도입해본 경험이 있습니다.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                ETC
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>확장프로그램, Discord 봇, Electron을 사용한 데스크톱 앱 등 필요한 SW를 직접 만들어 사용합니다.</li>
                <li>Node.js/Express.js 를 사용해 간단한 REST API를 구축해 프로젝트를 진행해보기도 합니다.</li>
                <li>Git 컨벤션을 정리해 협업을 진행하며 Github Action을 사용해 관리한 경험이 있습니다.</li>
                <li>취미로 C#, Unity를 이용해 게임을 만들어 보기도 합니다.</li>
                <li>스스로 학습하고 해결하는 것을 즐기면서도 동료나 스승이 있음을 잊지 않습니다</li>
              </ul>
            </div>
          </div>

          <PrintDivider />

          <div className="resume-block resume-education">
            <h2 className="title">EDUCATION</h2>

            <p className="info-log">
              국민대학교 소프트웨어학과
              <span className="info-detail left">2018.03 - 2024.02 (졸업예정)</span>
            </p>
            <p className="info-log">
              한국게임과학고 프로그래밍과
              <span className="info-detail left">2015.03 - 2018.02</span>
            </p>
          </div>

          {/* <PrintDivider />

          <div className="resume-block resume-education">
            <h2 className="title">Award</h2>

            <ul className="semi-list origin-ul">
              <li>
                해군 창업경진대회 - 장려상
                <span className="info-detail left">2020</span>
              </li>
              <li>
                제33회 한국정보올림피아드 경시부문 지역대회 - 동상
                <span className="info-detail left">2016</span>
              </li>
              <li>
                글로벌 인디 게임 제작 경진대회 - 장려상
                <span className="info-detail left">2016</span>
              </li>
              <li>
                미래상상 기술 경진대회 - 동상
                <span className="info-detail left">2016</span>
              </li>
              <li>
                제 1회 전북 초중고 창업아이디어 및 창업아이템 경진대회 - 장려상
                <span className="info-detail left">2015</span>
              </li>
            </ul> 
          </div> */}
        </div>
      </div>
    </Container>
  );
}

/* (구) Jekyll 블로그 파일이라 구림. 추후 개선 */
const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5;
  &.container-resume {
    width: 100%;
    max-width: 57rem;
    margin: auto;
  }

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
    font-size: 17px;
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
    &.divider {
      background: #d9d9d9;
      height: 1px;
      border: 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .semi-list {
    padding-left: 0px;
    margin: 0.25rem 0rem 1.5rem 0rem;
    li {
      margin: 0.25rem 0rem;
    }
    .semi-list {
      margin-bottom: 0.5rem;
    }
  }
  .semi-list.origin-ul {
    padding-left: 1.5rem;
  }
  .resume {
    padding-top: 10rem;
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--black);
    li {
      font-weight: 400;
      color: var(--black);
    }
    p {
      font-weight: 400;
      color: var(--black);
    }
    a {
      color: var(--resume);
      text-decoration: underline;
    }
    .introduce {
      height: auto;
      padding-bottom: 100px;
      position: relative;
    }
    .resume-block {
      margin-bottom: 6.5rem;
    }
    .name {
      margin-top: 0px;
      border-left: none;
      padding-left: 0px;
      font-weight: bold;
      position: relative;
      &::after {
        content: ".";
        font-size: 2rem;
        color: var(--resume);
        position: absolute;
        bottom: -0.125rem;
      }
      &::before {
        margin-top: 0px;
        margin-left: -10px;
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        content: " ";
        white-space: pre;
        background-color: var(--resume);
        z-index: -1;
        transform: rotate(-12deg);
        opacity: 0.3;
      }
      .name-en {
        font-size: 1.5rem;
        margin-left: 0.5rem;
      }
    }
    .title {
      margin-top: 0px;
      position: relative;
      font-size: 2rem;
      &::before {
        margin-top: 0px;
        margin-left: -10px;
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        content: " ";
        white-space: pre;
        background-color: var(--resume);
        z-index: -1;
        transform: rotate(-12deg);
        opacity: 0.3;
      }
    }
    .project-title {
      font-size: 1.5rem;
      position: relative;
      display: inline;
      font-weight: 600;
      a {
        color: var(--black);
        font-weight: 600;
        text-decoration: none;
        &:hover {
          color: var(--resume);
        }
      }
    }
    .url-block {
      border: 1px solid #d9d9d9;
      border-radius: 0.5rem;
      width: 100%;
      padding: 1rem;
      line-height: 1.25rem;
      margin: 1rem 0rem;
      position: relative;
      white-space: pre-wrap; /* css-3 */
      white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
      white-space: -pre-wrap; /* Opera 4-6 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: break-word; /* Internet Explorer 5.5+ */
      &::before {
        position: absolute;
        top: -0.75rem;
        left: 0.5rem;
        font-size: 0.675rem;
        background: var(--white);
        padding: 0rem 0.5rem;
      }
      a {
        font-size: 0.875rem;
        color: var(--resume);
      }
    }
    .url-block.github {
      &::before {
        content: "GitHub";
      }
    }
    .url-block.service {
      &::before {
        content: "Service";
      }
    }
    .project-description {
      margin: 0.75rem 0rem;
    }
    .semi-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--resume);
      margin-bottom: 0.25rem;
      line-height: 1.2;
    }
    .desc {
      p {
        margin-bottom: 1.5rem;
      }
    }
    h4 {
      margin-top: 0.5rem;
    }
  }
  .tags {
    margin: 0.75rem 0rem 1.5rem 0rem;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.125rem;
  }
  .resume-introduce {
    .intro-block {
      margin-bottom: 2rem;
      p {
        margin-bottom: 0.25rem;
      }
    }
  }
  .resume-profile {
    .profile-img {
      height: 250px;
      border-radius: 0.5rem;
    }
    .info-list {
      margin-top: 2rem;
      padding-left: 0.5rem;
      .info {
        display: flex;
        margin-bottom: 0.75rem;
        .info-icon {
          margin-right: 1.25rem;
        }
        a {
          font-weight: 400;
          text-decoration: underline;
          color: var(--black);
        }
      }
    }
  }
  .resume-education {
    .info-detail {
      margin-left: 0.5rem;
      font-size: 14px;
      opacity: 0.6;
    }
  }
  .stress {
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: #acbaee75;
    text-decoration-thickness: 1px;
  }
  .tag-badge {
    font-size: 14px;
    font-weight: 400;
  }
  .out-link {
    color: #acbaee;
    font-size: 1rem;
  }
  .info-log {
    margin-top: 6px;
    margin-bottom: 0.675rem;
  }
  @media (max-width: 768px) {
    .tag-badge {
      background-color: #f7f7f7;
    }
    .resume {
      li {
        font-size: 16px;
      }
      p {
        font-size: 16px;
      }
      padding-top: 2rem;
      .introduce {
        padding-bottom: 40px;
        height: auto;
      }
      .resume-block {
        margin-bottom: 6rem;
      }
      .name {
        .name-en {
          font-size: 1.25rem;
        }
      }
      .desc {
        margin-top: 1.5rem;
      }
    }
    .resume-profile {
      .profile-img {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
      }
    }
  }
  @media print {
    .resume {
      margin-top: 1rem;
      .col-md-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
      }
      .col-md-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
      }
      .resume-block {
        margin-bottom: 0rem;
      }
      .name {
        line-height: 1.25;
        &::before {
          opacity: 0;
        }
      }
      .title {
        &::before {
          opacity: 0;
        }
      }
      .desc {
        margin-top: 0rem;
      }
    }
    .resume-profile {
      .col-md-4 {
        width: 240px;
        flex: 0 0 26%;
        max-width: 26%;
        display: flex;
        justify-content: flex-start;
      }
      .profile-img {
        margin-left: 0px;
        margin-bottom: 0rem;
        height: 200px;
      }
      .info-list {
        margin-top: 1rem;
        margin-bottom: 0rem;
        .info {
          margin-bottom: 0.5rem;
        }
      }
    }
    .resume-introduce {
      .intro-block {
        p {
          font-size: 19px;
        }
      }
    }
    .print-empty-yuristrap {
      width: 100%;
      margin-top: 14rem;
    }
    .print-empty-voicehub {
      width: 100%;
      margin-top: 4rem;
    }
    .profile-block {
      display: none !important;
    }
    .info-icon svg {
      width: 20px;
      height: 20px;
    }
    .resume-profile .info-list .info {
      width: 50%;
    }
    .resume-profile .info-list.profile-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem !important;
      margin-bottom: 1.25rem !important;
    }
    .resume-skill .semi-list.origin-ul {
      margin-bottom: 0.5rem !important;
    }
  }
  @page {
  }
`;

const PrintDivider = styled.div`
  @media print {
    width: 100%;
    border-top: 1px solid black;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
`;
