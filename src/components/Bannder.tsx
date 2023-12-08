"use client";

import Image from "next/image";

import styled from "@emotion/styled";
import { ComponentProps, PropsWithChildren } from "react";

import { maxMedia } from "@/libs/media";

import { CATEGORY } from "@/constants/category";

interface BannerProps extends React.PropsWithChildren {
  bannerType?: CATEGORY | "cat";
}

export default function Banner({ bannerType = "post", children }: BannerProps) {
  return (
    <BannerContainer>
      <BannerText>{children}</BannerText>
      <Image src={`/banner_${bannerType}.png`} alt="banner" width={300} height={300} />
    </BannerContainer>
  );
}

export const SmallBanner = (props: ComponentProps<"div">) => {
  return (
    <SmallBannerContainer {...props}>
      <BannerText>{props.children}</BannerText>
      <Image src={`/banner_cat.png`} alt="banner" width={200} height={200} />
    </SmallBannerContainer>
  );
};

export const HomeBanner = styled(SmallBanner)`
  margin-top: 9rem;
  margin-bottom: 9rem;
  ${maxMedia.mobile} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  margin: 1rem 0rem 3rem 0rem;
  color: white;
  padding: 3rem;
  font-size: 20px;
  color: #ddd;
  font-weight: 500;
  display: flex;
  align-items: center;
  img {
    position: absolute;
    right: 0px;
    bottom: -2.12rem;
  }
  ${maxMedia.desktop} {
    padding: 2rem 16rem 2rem 2rem;
    img {
      right: -1rem;
    }
  }
  ${maxMedia.tablet} {
    padding: 2rem 12rem 2rem 2rem;
    height: 180px;
    margin-bottom: 1rem;
    img {
      width: 220px;
      height: 220px;
      bottom: -1.5rem;
    }
  }
  ${maxMedia.mobile} {
    padding: 1rem 6.5rem 1rem 1rem;
    height: auto;
    align-items: flex-start;
    img {
      width: 140px;
      height: 140px;
      bottom: -1rem;
    }
  }
`;
const BannerText = styled.p`
  font-size: 20px;
  color: #ddd;
  font-weight: 400;
  margin: 0px;
  ${maxMedia.tablet} {
    font-size: 17px;
  }
  ${maxMedia.mobile} {
    font-size: 15px;
  }
`;

const SmallBannerContainer = styled(BannerContainer)`
  height: 100px;
  margin-top: 3rem;
  padding: 0rem 2rem;
  ${maxMedia.tablet} {
    height: 100px;
    align-items: center;
  }
  ${maxMedia.mobile} {
    padding-left: 1.25rem;
    padding-right: 5rem;
  }
  p {
    font-size: 1rem;
    ${maxMedia.mobile} {
      font-size: 14px;
    }
  }
  img {
    position: absolute;
    right: 0px;
    bottom: -1.2rem;
  }
  .tablet-br {
    display: none;

    ${maxMedia.tablet} {
      display: block;
    }
  }
`;
