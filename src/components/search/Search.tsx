"use client";

import styled from "@emotion/styled";
import { IconBrandGithubFilled, IconPencil, IconRocket, IconSearch, IconUserCircle } from "@tabler/icons-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import { searchModalState } from "@/recoil/search";

import { allPosts } from "@/constants/posts";
import { boldBorderStyle } from "@/libs/bold";
import { maxMedia } from "@/libs/media";
import { PostType } from "@/types/post";
import { searchTermOptimization } from "@/utils/format";

import { SearchItem, StaticItem } from "./SearchItem";

export default function Search() {
  const [open, setOpen] = useRecoilState(searchModalState);
  const [searchWord, setSearchWord] = useState<string>("");
  const [posts, setPosts] = useState<PostType[]>(allPosts.slice(0, 3));
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.addEventListener("keydown", keyDownListener);

    return () => document.removeEventListener("keydown", keyDownListener);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const keyDownListener = (e: KeyboardEvent) => {
    const keyCode = e.keyCode || e.which || e.key;
    if (keyCode === 191 || keyCode === "/") {
      setOpen(prev => !prev);
      e.preventDefault();
    }
  };

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputValue = e.target.value;

    setSearchWord(inputValue);

    const searchTerm = searchTermOptimization(inputValue);

    if (searchTerm.length === 0) return;
    setPosts(allPosts.filter(post => post.searchTxt?.includes(searchTerm)));
  };

  const focus = (key: "next" | "prev"): void => {
    const { activeElement } = document;
    const listItems = Array.from(document.querySelectorAll<HTMLElement>('[role="listitem"]'));

    if (activeElement instanceof HTMLElement) {
      const currentIdx = listItems.indexOf(activeElement);
      let nextIdx = 0;
      if (key === "next") {
        nextIdx = (currentIdx + 1) % listItems.length;
      } else {
        nextIdx = (currentIdx - 1 + listItems.length) % listItems.length;
      }
      const nextElement = listItems[nextIdx] as HTMLElement;

      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  const ACTIONS: Record<string, () => void> = {
    ArrowDown: () => focus("next"),
    ArrowUp: () => focus("prev"),
    Enter: () => focus("next"),
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (Object.keys(ACTIONS).includes(e.key)) {
      const handler = ACTIONS[e.key];

      if (handler) {
        e.preventDefault();
        handler();
      }
    }
  };

  return (
    <>
      {open && (
        <div>
          <SearchBackground onClick={() => setOpen(false)}>
            <SearchModal onClick={e => e.stopPropagation()} onKeyDown={onKeyDownHandler}>
              <SearchHeader>
                <label htmlFor="search-input">
                  <IconSearch />
                </label>
                <SearchInput
                  id="search-input"
                  ref={inputRef}
                  value={searchWord}
                  onChange={search}
                  placeholder="Search"
                  spellCheck="false"
                />
              </SearchHeader>
              <SearchBody className="scroll" role="list">
                {posts.length > 0 && <Classify>Results</Classify>}
                {posts.slice(0, 10).map((post, idx) => (
                  <SearchItem key={idx} post={post} role="listitem" />
                ))}
                {posts.length >= 10 && <Warning>결과물이 너무 많아요 ! (최대 10개)</Warning>}

                <Classify>Recommends</Classify>
                <StaticItem href="https://github.com/kyechan99" role="listitem">
                  <IconBrandGithubFilled /> Github
                </StaticItem>
                <StaticItem href="/post" role="listitem">
                  <IconPencil /> Post
                </StaticItem>
                <StaticItem href="/project" role="listitem">
                  <IconRocket /> Project
                </StaticItem>
                <StaticItem href="/resume" role="listitem">
                  <IconUserCircle /> About
                </StaticItem>
              </SearchBody>
            </SearchModal>
          </SearchBackground>
        </div>
      )}
    </>
  );
}

const SearchModal = styled.div`
  ${boldBorderStyle}
  border-radius: 1rem;
  background-color: var(--white);
  z-index: 2;
  width: 100%;
  max-width: 35rem;
  max-height: 80vh;
  margin: 0 auto;
  overflow: hidden;
`;
const SearchBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: hsla(0, 0%, 30%, 0.3);
  padding: 15vh 1rem 1rem 1rem;
  backdrop-filter: blur(3px);
  ${maxMedia.mobile} {
    padding-top: 5vh;
  }
`;

const SearchHeader = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0px 2px 0px 0px #a3a3a336;
`;
const SearchBody = styled.div`
  padding: 0rem 1.5rem 1rem 1.5rem;
  max-height: calc(80vh - 79px);
  overflow-y: auto;
`;
const SearchInput = styled.input`
  border: 1px solid var(--grey);
  border: none;
  font-size: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  outline: none;
  width: 100%;
  background-color: var(--white);
  color: var(--black);
`;

const Classify = styled.p`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.deepGrey};
  font-size: 14px;
`;
const Warning = styled.p`
  margin: 1rem;
  text-align: center;
  color: var(--primary);
  font-size: 0.75rem;
`;
