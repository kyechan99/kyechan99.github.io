"use client";

import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

import { SmallBanner } from "../Bannder";

export default function PostArticle(props: PropsWithChildren) {
  return (
    <article>
      <Content>{props.children}</Content>
      <SmallBanner>
        틀린 내용이 있다면 지적해 주시고, <br className="tablet-br" />더 좋은 방법이나 생각을 공유해주세요.
      </SmallBanner>
    </article>
  );
}

const Content = styled.div`
  padding-bottom: 5rem;
`;
