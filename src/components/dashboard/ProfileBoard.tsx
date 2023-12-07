"use client";

import { allTags } from "@/constants/posts";
import { boldBorderStyle } from "@/libs/bold";
import styled from "@emotion/styled";
import { IconBrandGithubFilled, IconMail, IconUserFilled, IconUserScan } from "@tabler/icons-react";
import Image from "next/image";
import Tag from "../common/tag/Tag";
import { useEffect, useState } from "react";
import { maxMedia } from "@/libs/media";

export default function ProfileBoard() {
  return (
    <Card>
      {/* {JSON.stringify(pinnedRepos)} */}
      {/* <Image src={"/profile.png"} alt="profile" width={200} height={200} /> */}
      <div>
        <Name>Ye-Chan Kang</Name>
        <Desc>개선하고, 변화시키고, 즐거운 것들</Desc>
        {/* <Desc>Things to improve, change, and have fun doing.</Desc> */}
        <Email>
          <IconMail stroke={1.5} width={14} height={14} />
          kyechan99@gmail.com
        </Email>
        <OutLink href="https://github.com/kyechan99">
          <IconBrandGithubFilled /> GitHub
        </OutLink>
        <OutLink href="/resume" style={{ paddingRight: "1.25rem" }}>
          <IconUserFilled /> About
        </OutLink>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  margin: 1rem 0rem 3rem 0rem;
  color: white;
  padding: 0rem 3rem;
  font-size: 20px;
  color: #ddd;
  font-weight: 500;
  display: flex;
  align-items: center;
  ${maxMedia.mobile} {
    padding: 1.25rem 2rem;
    height: auto;
  }
`;
const Name = styled.h2`
  margin-top: 0rem;
  font-size: 4rem;
  position: relative;
  &::after {
    content: ".";
    font-size: 3rem;
    color: var(--secondary);
    position: absolute;
    bottom: -0.25rem;
  }
  ${maxMedia.tablet} {
    font-size: 3rem;
  }
  ${maxMedia.mobile} {
    font-size: 1.5rem;
    &::after {
      font-size: 2rem;
      bottom: -0.5rem;
    }
  }
`;
const Desc = styled.p`
  margin: 0px;
`;
const Email = styled.p`
  display: flex;
  font-size: 14px;
  margin: 0rem 0rem 1.5rem 0rem;
  align-items: center;
  gap: 0.5rem;
  ${maxMedia.mobile} {
    margin-bottom: 0.5rem;
  }
`;

const OutLink = styled.a`
  margin-right: 0.5rem;
  color: black;
  border-radius: 0.5rem;
  font-size: 14px;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 0.5rem;
  ${maxMedia.mobile} {
    font-size: 12px;
    padding: 0.25rem 0.5rem !important;
    .tabler-icon {
      width: 12px;
      height: 12px;
    }
  }
`;
