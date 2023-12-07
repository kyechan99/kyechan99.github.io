import { css } from "@emotion/react";
import { Theme } from "@emotion/react";
import { maxMedia, minMedia } from "./media";

export const boldBorderStyle = ({ theme }: { theme: Theme }) => css`
  margin-top: 0px;
  margin-bottom: 5px;
  position: relative;
  border: none;
  border-radius: 0.5rem;
  /* background-color: var(--white); */

    box-shadow: 0px 5px 0px var(--grey);
 
  /* &::before {
    transition: top 0.3s;
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    left: 0px;
    top: 6px;
    border-radius: 0.5rem;
    background-color: var(--grey);
    border: none;
    pointer-events: none;
    z-index: -1;
  } */
`;

export const boldBorderHoverStyle = ({ theme }: { theme: Theme }) => css`
  ${minMedia.mobile} {
    &:hover {
      margin-top: 5px;
      margin-bottom: 0px;
      box-shadow: 0px 0px 0px var(--grey);

      /* &::before {
      top: 0px;
      background-color: white;
    } */
    }
  }
`;
