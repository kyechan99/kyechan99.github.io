import { Theme } from "@emotion/react";

/**
 * 테마에 상관없이 항상 기본이 되는 값
 */
export const baseColors = {
  black: "#222",
  white: "#fCfCff",
  deepGrey: "#797979",
};

/**
 * Light 테마
 */
export const lightColors = {
  black: "#222",
  white: "#ffffff",
  primary: "#a296ff", // "#EAEF92",
  secondary: "#7700ff",
  grey: "#d9d9d9",
  hr: "#e1e1e1",
  blockquoteBG: "#efefef",
  asideBG: "#ededed",
  activeBG: "#f6f3f9", // primary 와 같이 사용할때 사용
  header: "#222", //! h1 와 같이 강력히 강조해야할 헤더는 테마가 바뀌어도 강조해야함
  resume: "#f17226",
};

/**
 * Dark 테마
 */
export const darkColors = {
  black: "#bdbdbd",
  white: "#1D1D1F",
  primary: "#564a67",
  secondary: "#ad65ff",
  grey: "#3C3C3E",
  hr: "#3C3C3E",
  blockquoteBG: "#2b2b2b",
  asideBG: "#272727",
  activeBG: "#323035", // primary 와 같이 사용할때 사용
  header: "#fdfdfd", //! h1 와 같이 강력히 강조해야할 헤더는 테마가 바뀌어도 강조해야함
  resume: "#ae6f4a",
};

/**
 * Dark 테마
 */
export const fontSizes = {
  p: "18px",
  mobile_p: "16px",

  desc: "1.25rem",
  refer: "0.75rem",

  h1: "2.25rem",
  mobile_h1: "1.875rem",
  h2: "1.625rem",
  // mobile_h1: "1.875rem",
  h3: "1.25rem",

  small: "14px",
  medium: "16px",
  title: "42px",
  subtitle: "20px",
};

/**
 * Dark 테마
 */
export const breakpoints = {
  desktopLarge: "1200px",
  desktop: "1024px",
  tablet: "768px",
  mobile: "576px",
};

/**
 * Dark 테마
 */
const baseTheme: Theme = {
  colors: baseColors,
  fontSizes,
  breakpoints,
};
export default baseTheme;
