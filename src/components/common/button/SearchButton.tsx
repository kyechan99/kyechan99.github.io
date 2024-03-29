"use client";

import styled from "@emotion/styled";
import { IconSearch, IconSlash } from "@tabler/icons-react";
import { useRecoilState } from "recoil";

import { searchModalState } from "@/recoil/search";

import { maxMedia } from "@/libs/media";

import Button from "./index";

export default function SearchButton() {
  const [open, setOpen] = useRecoilState(searchModalState);

  return (
    <SearchButtonStyled onClick={() => setOpen(!open)}>
      <span className="mobile">
        <IconSearch stroke={1.5} />
      </span>
      <span className="mobile-else">
        Search{" "}
        <kbd>
          <IconSlash stroke={1.5} />
        </kbd>
      </span>
    </SearchButtonStyled>
  );
}

const SearchButtonStyled = styled(Button)`
  font-weight: 400;
  font-size: 14px;

  &:focus-visible {
    box-shadow: 0 0px 3px var(--black);
  }

  .mobile {
    display: none;
    .tabler-icon {
      width: 18px;
      height: 18px;
    }
  }
  .mobile-else {
    display: flex;
    align-items: center;
    .tabler-icon {
      background: var(--asideBG);
      border-radius: 0.25rem;
      width: 18px;
      height: 18px;
      margin-left: 0.5rem;
    }
  }
  ${maxMedia.mobile} {
    padding: 0.5rem 0.5rem;
    .mobile {
      display: flex;
      align-items: center;
    }
    .mobile-else {
      display: none;
    }
  }
`;
