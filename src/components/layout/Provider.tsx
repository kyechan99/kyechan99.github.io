"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

import { rootThemeSetting } from "@/utils/dom";

import GlobalStyle from "@/styles/GlobalStyle";
import baseTheme from "@/styles/theme";

export const ScriptDom = () => {
  const stringifyFn = String(rootThemeSetting);
  const fnToRunOnClient = `(${stringifyFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: fnToRunOnClient }} />;
};

export default function Provider(props: React.PropsWithChildren) {
  useEffect(() => {
    document.body.style.transition = "background var(--delay)";
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <Global styles={GlobalStyle(baseTheme)} />
      <ScriptDom />
      <RecoilRoot>{props.children}</RecoilRoot>
    </ThemeProvider>
  );
}
