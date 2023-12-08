"use client";

import { Theme, css } from "@emotion/react";

import { maxMedia } from "@/libs/media";
import { cssCustomProperties } from "@/utils/format";

import { darkColors, lightColors } from "./theme";

const GlobalStyle = (theme: Theme) => css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :root {
    --delay: 0.2s;
    ${cssCustomProperties(lightColors)}
  }

  html[data-theme="dark"] {
    ${cssCustomProperties(darkColors)}
  }

  ::selection {
    background: var(--grey);
  }
  ::-moz-selection {
    background: var(--grey);
  }

  html,
  body {
    margin: 0px;
    padding: 0px;
  }

  body {
    color: var(--black);
    background-color: var(--white);
    transition: background var(--delay);
    -moz-transition: background var(--delay);
    -webkit-transition: background var(--delay);
    -ms-transition: background var(--delay);
    -o-transition: background var(--delay);
  }

  a {
    text-decoration: inherit;
    font-weight: 500;
    color: var(--secondary);
    word-wrap: break-word;
  }

  p {
    font-weight: 400;
    font-size: ${theme.fontSizes.p};
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.75;
    ${maxMedia.mobile} {
      font-size: ${theme.fontSizes.mobile_p};
    }
    code {
      font-family: var(--Noto-Sans-KR);
      background-color: var(--asideBG);
      padding: 0.125rem 0.375rem;
      border-radius: 0.5rem;
      font-size: 100%;
      margin: 0rem 0.125rem;
    }
  }

  b,
  strong {
    font-weight: 500;
  }

  hr {
    border-top: 1px solid var(--hr);
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }

  h1 {
    font-weight: 800;
    font-size: ${theme.fontSizes.h1};
    margin-top: 0rem;
    margin-bottom: 0.25rem;
    ${maxMedia.mobile} {
      font-size: ${theme.fontSizes.mobile_h1};
    }
  }

  h2 {
    font-size: ${theme.fontSizes.h2};
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: ${theme.fontSizes.h3};
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h4 {
  }
  h5 {
  }
  h6 {
  }

  blockquote {
    background-color: var(--blockquoteBG);
    border-left: var(--primary) 5px solid;
    padding: 5px 0px 2px 14px;
    margin: 1rem 0rem;
    p {
      margin: 0rem 0rem 0.25rem 0rem;
    }
  }
  aside {
    background: var(--asideBG);
    border-radius: 0.5rem;
    padding: 1rem 2rem 1rem 4rem;
    position: relative;
    &::before {
      content: "✏️";
      position: absolute;
      top: 1.375rem;
      left: 1.5rem;
    }
    p,
    ul {
      margin: 0.25rem 0rem;
    }
  }
  ul li {
    margin-bottom: 0.25rem;
  }

  .video-container {
    position: relative;
    margin: 2rem 0rem;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .scroll {
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--grey);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--white);
      border-radius: 10px;
      background-clip: padding-box;
    }
    &.scroll-min::-webkit-scrollbar {
      width: 1px;
      height: 2px;
    }
    &.scroll-min::-webkit-scrollbar-thumb {
      border-radius: 2px;
    }
    &.scroll-min::-webkit-scrollbar-track {
      border-radius: 2px;
    }
  }
`;

export default GlobalStyle;
