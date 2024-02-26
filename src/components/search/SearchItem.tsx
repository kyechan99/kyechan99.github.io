"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

import { PostType } from "@/types/post";

interface SearchItemProps extends Omit<React.ComponentProps<"div">, "tabIndex"> {
  post: PostType;
}

export const SearchItem = ({ post, ...props }: SearchItemProps) => {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(post.url);
  };

  const onKeyEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") router.push(post.url);
  };

  return (
    <SearchItemLink onClick={onClickHandler} tabIndex={0} onKeyDown={onKeyEnter} {...props}>
      <SearchItemLinkCategory>/ {post.category}</SearchItemLinkCategory>
      <SearchItemLinkTitle>{post.title}</SearchItemLinkTitle>
    </SearchItemLink>
  );
};

interface StaticItemProps extends Omit<React.ComponentProps<"div">, "tabIndex"> {
  href: string;
}

export const StaticItem = ({ href, children, ...props }: StaticItemProps) => {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <SearchItemLink onClick={onClickHandler} tabIndex={0} {...props}>
      <ItemWithIcon>{children}</ItemWithIcon>
    </SearchItemLink>
  );
};

const SearchItemLink = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: block;
  margin-bottom: 0.5rem;
  transition: background-color var(--delay);
  cursor: pointer;
  background-color: var(--asideBG);
  &:hover {
    background-color: var(--activeBG);
    color: var(--secondary);
  }
  &:focus {
    box-shadow: 0 0px 3px black;
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
