"use client";

import styled from "@emotion/styled";
import { useState } from "react";

import { Row } from "@/components/common/grid/Container";
import MenuNav from "@/components/common/nav/MenuNav";
import PostCard from "@/components/post/PostCard";
import { maxMedia } from "@/libs/media";
import { PostType } from "@/types/post";

/***************************************************
 *        글 목록 Feed 를 보여주는 컴포넌트
 ***************************************************/
export function PostFeed({ posts }: { posts: PostType[] }) {
  const [menu, setMenu] = useState<string>("All");

  const isPostCategory = (category: string) => {
    if (menu === "All" || menu === "") return true;
    return menu === category;
  };

  return (
    <FeedRow>
      <MenuNav menu={menu} setMenu={setMenu} />
      <Row $direction="column" $gap="2rem" className="posts-row">
        {posts
          .filter(post => isPostCategory(post.category))
          .map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
      </Row>
    </FeedRow>
  );
}

const FeedRow = styled(Row)`
  ${maxMedia.tablet} {
    flex-direction: column;
  }
  .posts-row {
    width: 100%;
    min-height: 100vh;
    ${maxMedia.mobile} {
      gap: 1rem;
    }
  }
`;
