"use client";

import Image from "next/image";
import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { Layout } from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div style={{textAlign: 'center'}}>
        <br />
        <br />
        <br />
        <br />
        <h1>404</h1>
        <br />
        <p>이런! 해당 페이지를 찾을 수 없어요.</p>
        <p>주소가 변경되었을 수 있으니 '/' 키로 검색해보세요.</p> <br />
        <Image src={`/banner_cat.png`} alt="banner" width={200} height={200} />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}
