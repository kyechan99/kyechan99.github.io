"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { maxMedia, minMedia } from "@/libs/media";

export const Container = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;

  ${minMedia.tablet} {
    max-width: 736px;
  }
  ${minMedia.desktop} {
    max-width: 1120px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /* ${minMedia.desktopLarge} {
    max-width: 1168px;
  } */
`;

export const Row = styled.div<{ $direction?: "column" | "row"; $gap?: string }>`
  display: flex;
  ${props =>
    props.$direction &&
    css`
      flex-direction: ${props.$direction};
    `}
  ${props =>
    props.$gap &&
    css`
      gap: ${props.$gap};
    `}
`;

export const Col = styled.div<{ width: string }>`
  flex: 0 0 ${props => props.width};
  /* max-width: ${props => props.width}; */
  ${minMedia.desktop} {
    max-width: ${props => props.width};
  }
`;
export const ColMain = styled.div`
  max-width: 75%;
  ${maxMedia.desktop} {
    max-width: 100%;
  }
`;
export const ColSub = styled.div`
  margin-left: auto;
  flex: 0 0 calc(25% - 2rem);
  max-width: calc(25% - 2rem);
  ${maxMedia.desktop} {
    display: none;
  }
`;
