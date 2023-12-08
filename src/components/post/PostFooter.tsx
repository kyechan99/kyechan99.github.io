"use client";

import styled from "@emotion/styled";
import { IconSquareRoundedChevronLeft, IconSquareRoundedChevronRight } from "@tabler/icons-react";
import Link from "next/link";

import { allPostPosts } from "@/constants/posts";
import { boldBorderHoverStyle, boldBorderStyle } from "@/libs/bold";
import { maxMedia } from "@/libs/media";
import { PostType } from "@/types/post";

export default function PostFooter({ post }: { post: PostType }) {
  const postIndex = allPostPosts.findIndex(v => v.path === post.path);

  const prevPost = allPostPosts.at(postIndex + 1) ?? null;
  const nextPost = allPostPosts.at(postIndex - 1) ?? null;

  return (
    <PostFooterStyled>
      {prevPost && (
        <RelatedPost href={prevPost.url}>
          <IconSquareRoundedChevronLeft /> <span>{prevPost.title}</span>
        </RelatedPost>
      )}
      {nextPost && (
        <RelatedPost href={nextPost.url}>
          <span>{nextPost.title}</span> <IconSquareRoundedChevronRight />
        </RelatedPost>
      )}
    </PostFooterStyled>
  );
}

const PostFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
  gap: 2rem;
`;

const RelatedPost = styled(Link)`
  ${boldBorderStyle}
  ${boldBorderHoverStyle} 
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--black);
  max-width: 25rem;
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  ${maxMedia.mobile} {
    padding: 0.5rem;
  }
`;
