"use client";

import styled from "@emotion/styled";
import { IconGitFork, IconStar } from "@tabler/icons-react";
import React, { useEffect } from "react";

import { boldBorderHoverStyle, boldBorderStyle } from "@/libs/bold";
import { maxMedia } from "@/libs/media";

import { H2 } from "../common/heading";
import Skeleton from "../skeleton";

type RepoType = {
  description: string;
  forks: number;
  home?: string;
  name: string;
  stars: number;
  tags?: string[];
  url: string;
};

const getPinnedRepos = async () => {
  try {
    const res = await fetch("https://gh-pinned-api.vercel.app/api?user=kyechan99", {
      next: {
        revalidate: 86400, // 24 시간 간격
      },
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("에러 ", err);
  }
};

export default function RepoBoard() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const t = await getPinnedRepos();
    setData(t);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <H2>
        Pinned Repo
        <PlusLink href="https://github.com/kyechan99">+</PlusLink>
      </H2>
      <Card>
        <CardRow>
          {data.length > 0
            ? data.map((post: RepoType) => (
                <CardCol key={post.name}>
                  <Repo href={post.url}>
                    <RepoHead>
                      <RepoName>{post.name}</RepoName>
                      <RepoDescription>{post.description}</RepoDescription>
                    </RepoHead>
                    <RepoDetail>
                      <span>
                        <IconStar width={16} height={16} stroke={1.5} /> {post.stars}
                      </span>
                      <span>
                        <IconGitFork width={16} height={16} stroke={1.5} /> {post.forks}
                      </span>
                    </RepoDetail>
                  </Repo>
                </CardCol>
              ))
            : [...Array(6)].map((_, idx) => (
                <CardCol key={idx}>
                  <Skeleton height="155px" width="100%" style={{ marginTop: "0px", marginBottom: "5px" }} />
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
  flex: 0 0 32.5%;
  max-width: 32.5%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${maxMedia.desktop} {
    flex: 0 0 49%;
    max-width: 49%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  ${maxMedia.tablet} {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  ${maxMedia.mobile} {
    .skeleton {
      height: 130px !important;
    }
  }
`;
const PlusLink = styled.a`
  float: right;
  padding: 0px 0.75rem;
  border-radius: 0.25rem;
  color: var(--black);
  &:hover {
    background-color: var(--hr);
  }
`;
const Repo = styled.a`
  ${boldBorderStyle}
  ${boldBorderHoverStyle}
  min-height: 160px;
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  color: var(--black);
  transition: all var(--delay);
  p {
    margin: 0px;
  }
  &:hover {
    background: var(--activeBG);
  }
  ${maxMedia.mobile} {
    min-height: 130px;
  }
`;
const RepoHead = styled.div`
  /* flex:  */

  flex: 1 0 auto;
`;
const RepoName = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
const RepoDescription = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.deepGrey};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const RepoDetail = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;
