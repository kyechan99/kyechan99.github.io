"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import { CATEGORY, POST_CATEGORY, PROJECT_CATEGORY, getCategoriesWithAll } from "@/constants/category";
import { maxMedia, minMedia } from "@/libs/media";

type MenuNavProps = {
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
};

export default function MenuNav({ menu, setMenu }: MenuNavProps) {
  const pathname = usePathname();
  const pathnameList = pathname.split("/");

  const category: CATEGORY = pathnameList.length > 0 && pathnameList[1] === "post" ? "post" : "project";

  const isPostCategory = (category: string, compareCategory?: string) => {
    if (category === "All" && (compareCategory === "" || compareCategory === "All")) return true;

    if ([...POST_CATEGORY, ...PROJECT_CATEGORY].includes(category)) {
      return category === compareCategory;
    }

    return false;
  };

  return (
    <MenuNavStyled className="scroll scroll-min">
      {getCategoriesWithAll({ type: category, stroke: 2 }).map(category => (
        <Menu
          key={category.name}
          onClick={() => setMenu(category.name)}
          $active={isPostCategory(category.name, menu)}
          tabIndex={0}
        >
          {category.icon}
          <span>{category.name}</span>
        </Menu>
      ))}
    </MenuNavStyled>
  );
}

const MenuNavStyled = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  margin-right: 2rem;
  ${maxMedia.desktop} {
    max-width: 25%;
  }
  ${maxMedia.tablet} {
    margin-right: 0rem;
    margin-bottom: 0.25rem;
    display: flex;
    flex: auto;
    max-width: 100%;
    border-bottom: 1px solid var(--hr);
    overflow-x: auto;
    gap: 0.5rem;
  }
`;
const Menu = styled.div<{ $active: boolean }>`
  padding: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem 0rem;
  ${props =>
    props.$active
      ? css`
          color: var(--secondary);
          background: var(--activeBG);
          font-weight: 700;
          ${minMedia.tablet} {
            background: var(--activeBG);
          }
        `
      : css`
          &:hover {
            background: var(--activeBG);
            font-weight: 500;
            box-shadow: 0px 5px 0px var(--grey);
          }
        `}
  .tabler-icon {
    margin-right: 1rem;
  }
  ${maxMedia.tablet} {
    font-size: 0.875rem;
    margin: 0px;
    padding: 0.5rem;
    .tabler-icon {
      margin-right: 0.5rem;
      width: 0.875rem;
      height: 0.875rem;
      display: none;
    }
  }
`;
