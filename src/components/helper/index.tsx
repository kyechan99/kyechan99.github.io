"use client";

import styled from "@emotion/styled";
import { IconChevronsUp, IconLink } from "@tabler/icons-react";
import { Post } from "contentlayer/generated";

import Button from "../common/button";
import Toc from "./Toc";

export default function Helper({ post }: { post: Post }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl).then(
      () => {
        // setCopySuccess('주소가 성공적으로 복사되었습니다.');
      },
      err => {
        console.error("주소 복사 실패:", err);
        // setCopySuccess('주소 복사 실패');
      },
    );
  };

  return (
    <HelperStyled>
      <HelperBar>
        <Toc post={post} />
      </HelperBar>

      <HelperFooter>
        <Button onClick={handleCopyUrl}>
          <IconLink width={18} height={18} />
        </Button>
        <Button onClick={handleScrollToTop}>
          <IconChevronsUp width={18} height={18} />
        </Button>
      </HelperFooter>
    </HelperStyled>
  );
}

const HelperStyled = styled.div`
  position: sticky;
  display: block;
  top: 120px;
  /* padding: 0rem 0rem 1rem 1rem; */
  width: 100%;
`;

const HelperBar = styled.div`
  padding: 1.5rem;
  margin-top: 0px;
  margin-bottom: 5px;
  /* border-radius: 0.5rem; */
  border-left: 1px solid var(--hr);
  background-color: var(--white);
  transition: background var(--delay);
  -moz-transition: background var(--delay);
  -webkit-transition: background var(--delay);
  -ms-transition: background var(--delay);
  -o-transition: background var(--delay);
`;

const HelperFooter = styled.div`
  position: absolute;
  display: flex;
  /* bottom: -2rem; */
  width: 100%;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const HelperBackground = styled.div`
  z-index: -1;
  height: 85%;
  width: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: 0px;
  border-radius: 0.5rem;

  margin-bottom: 5px;
  transition: margin 0.3s;
  background-color: var(--secondary);
`;
