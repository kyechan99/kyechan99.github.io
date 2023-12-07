"use client";

import Link from "next/link";
import styled from "@emotion/styled";

export type TagProps = {
  tag: string;
  count?: number;
};

const Tag = ({ tag, count }: TagProps) => {
  return (
    <TagLink href={`#${tag}`} className="tag">
      {tag}
      {count && <span>{count}</span>}
    </TagLink>
  );
};
export default Tag;

const TagLink = styled(Link)`
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 3px 7px 3px 7px;
  display: inline-block;
  color: var(--black);
  background-color: var(--asideBG);
  font-size: 14px;
  font-weight: normal;
  span {
    background-color: var(--activeBG); 
    border-radius: 0.125rem;
    margin-left: 0.5rem;
    font-size: 70%;
    padding: 0.125rem 0.25rem;
  }
`;
