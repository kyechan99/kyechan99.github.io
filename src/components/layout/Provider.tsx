"use client";

import { RecoilRoot } from "recoil";
import { ThemeProvider, Global } from "@emotion/react";

import { rootThemeSetting } from "@/utils/dom";
import GlobalStyle from "@/styles/GlobalStyle";
import baseTheme from "@/styles/theme";

const ScriptDom = () => {
  const stringifyFn = String(rootThemeSetting);
  const fnToRunOnClient = `(${stringifyFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: fnToRunOnClient }} />;
};

export default function Provider(props: React.PropsWithChildren) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={baseTheme}>
        <Global styles={GlobalStyle(baseTheme)} />
        <ScriptDom />
        {props.children}
      </ThemeProvider>
    </RecoilRoot>
  );
}
