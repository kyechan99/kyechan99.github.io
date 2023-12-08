"use client";

import Giscus, { type Theme } from "@giscus/react";
import { useRecoilValue } from "recoil";

import { themeState } from "@/recoil/theme";

// import { useGlobalTheme } from "./layout/Provider";

type DefaultThemeType = Extract<
  Theme,
  | "light"
  | "light_high_contrast"
  | "light_protanopia"
  | "light_tritanopia"
  | "dark"
  | "dark_high_contrast"
  | "dark_protanopia"
  | "dark_tritanopia"
  | "dark_dimmed"
  | "preferred_color_scheme"
  | "transparent_dark"
  | "noborder_light"
  | "noborder_dark"
  | "cobalt"
>;

export default function Comments() {
  const theme = useRecoilValue(themeState);
  // const { theme } = useGlobalTheme();

  return (
    <Giscus
      id="giscus-comments"
      repo="kyechan99/kyechan99.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkxNjM1NjgwMzY"
      category="General"
      categoryId="DIC_kwDOCb_ZpM4Cbfjp"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={
        theme === "dark"
          ? ("transparent_dark" satisfies DefaultThemeType)
          : ("noborder_light" satisfies DefaultThemeType)
      }
      lang="en"
      loading="lazy"
      inputPosition="top"
    />
  );
}
