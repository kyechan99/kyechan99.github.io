"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import PostCard from "../post/PostCard";
import { allPosts, allTags } from "@/constants/posts";
import Tag from "../common/tag/Tag";
import { H2 } from "../common/heading";

export default function TagsBoard() {
  return (
    <>
      <H2>Tags</H2>
      <Card>
        <CardRow>
          {allTags.map(tag => (
            <Tag key={tag.tag} tag={tag.tag} count={tag.count} />
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
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
