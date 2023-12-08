import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Provider from "@/components/layout/Provider";
import { getBaseMetadata } from "@/utils/seo";

import "@/styles/prism.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--Noto-Sans-KR",
});

export const metadata: Metadata = getBaseMetadata({ title: "kyechan99" });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="">
      <head>
        <meta name="google-site-verification" content="CPBHSXOcqx3RLJ-Pn1Vr34l30UqV46HXj7Et7LsCM7U" />
        <meta name="naver-site-verification" content="32b3ee031edf2f6c12c44c12006d46b903de6110" />
      </head>
      <body className={notoSansKr.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
