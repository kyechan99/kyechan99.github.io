"use client";

import styled from "@emotion/styled";

import { allTags } from "@/constants/posts";

import { H2 } from "../common/heading";
import Tag from "../common/tag/Tag";

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
