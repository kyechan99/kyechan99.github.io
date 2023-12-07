"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import PostCard from "../post/PostCard";
import { allPosts, allTags } from "@/constants/posts";
import { H2 } from "../common/heading";
import { maxMedia } from "@/libs/media";

export default function RecentBoard() {
  return (
    <>
      <H2>
        Recent Post
        <PlusLink href="/post">+</PlusLink>
      </H2>
      <Card>
        <CardRow>
          {allPosts.slice(0, 4).map(post => (
            <CardCol key={post._id}>
              <PostCard {...post} />
            </CardCol>
          ))}
        </CardRow>
      </Card>
    </>
  );
}

const Card = styled.div``;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardCol = styled.div`
  flex: 0 0 49%;
  max-width: 49%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${maxMedia.tablet} {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
`;
const PlusLink = styled(Link)`
  float: right;
  padding: 0px 0.75rem;
  border-radius: 0.25rem;
  color: var(--black);
  &:hover {
    background-color: var(--hr);
  }
`;
