"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

import { PostType } from "@/types/post";

export const SearchItem = ({ post }: { post: PostType }) => {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(post.url);
  };

  return (
    <SearchItemLink onClick={onClickHandler}>
      <SearchItemLinkCategory>/ {post.category}</SearchItemLinkCategory>
      <SearchItemLinkTitle>{post.title}</SearchItemLinkTitle>
    </SearchItemLink>
  );
};
export const StaticItem = ({ href, children }: { href: string; children?: React.ReactNode }) => {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <SearchItemLink onClick={onClickHandler}>
      <ItemWithIcon>{children}</ItemWithIcon>
    </SearchItemLink>
  );
};

const SearchItemLink = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: block;
  margin-bottom: 0.5rem;
  transition: background var(--delay);
  cursor: pointer;
  background-color: var(--asideBG);
  &:hover {
    background-color: var(--activeBG);
    color: var(--secondary);
  }
`;
const SearchItemLinkTitle = styled.p`
  margin: 0px;
  font-weight: 500;
`;
const SearchItemLinkCategory = styled.p`
  margin: 0px;
  font-size: 0.625rem;
`;
const ItemWithIcon = styled.p`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0rem;
  align-items: center;
  margin: 0px;
`;
