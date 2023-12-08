"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import useFadeIn from "@/hooks/useFadeIn";
import { boldBorderHoverStyle, boldBorderStyle } from "@/libs/bold";
import { maxMedia } from "@/libs/media";
import { PostType } from "@/types/post";

import { Row } from "../common/grid/Container";
import TagList from "../common/tag/TagList";

/***************************************************
 *        작성글로 이동하는 글 카드
 ***************************************************/
export default function PostCard(post: PostType) {
  const [ref, visible] = useFadeIn();

  return (
    <PostCardStyled ref={ref} $visible={visible}>
      <Row>
        <PostCardLink href={post.url}>
          <PostCategory>/ {post.category}</PostCategory>
          <PostCardTitle>{post.title}</PostCardTitle>
          <PostCardDesc>{post.description}</PostCardDesc>
        </PostCardLink>
      </Row>
      <TagList tags={post.tags} />
    </PostCardStyled>
  );
}

const PostCardThumbnail = styled(Image)`
  height: 150px;
  border-radius: 0.5rem;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;
const PostCardStyled = styled.div<{ $visible: boolean }>`
  ${boldBorderStyle}
  ${boldBorderHoverStyle}
  width: 100%;
  color: var(--black);
  padding: 1rem;
  border-bottom: 1px solid var(--grey);

  /* will-change: opacity, transform; */
  opacity: 0;
  transform: translateY(16px);

  transition:
    margin var(--delay),
    // 기존 boldBorderHover hover
    box-shadow var(--delay),
    // 기존 boldBorderHover hover
    opacity 1s,
    // observe 나타나고 나서
    transform 1s; // observe 나타나고 나서

  ${props =>
    props.$visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;
const PostCardLink = styled(Link)`
  width: 100%;
  color: var(--black);
  transition: color var(--delay);
  &:hover {
    color: var(--secondary);
  }
`;
const PostCategory = styled.p`
  margin: 0px;
  font-size: 0.75rem;
`;
const PostCardTitle = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0px;
  position: relative;
  ${maxMedia.tablet} {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;
const PostCardDesc = styled.p`
  font-weight: 500;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.deepGrey};
  ${maxMedia.tablet} {
    /* opacity: 0.6; */
  }
`;
