"use client";

import { boldBorderStyle, boldBorderHoverStyle } from "@/libs/bold";
import styled from "@emotion/styled";

const Button = styled.button`
  ${boldBorderStyle}
  ${boldBorderHoverStyle}

  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 1rem;
  outline: none;

  color: var(--black);

  background-color: var(--white);
  transition:
    margin var(--delay),
    box-shadow var(--delay);

  .icon.icon-sm {
    margin-right: 0.25rem;
  }
  .icon.icon-md {
    margin-right: 0.5rem;
  }
`;
export default Button;
