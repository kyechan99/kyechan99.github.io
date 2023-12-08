"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from "@emotion/styled";
import clsx from "clsx";

import { maxMedia, minMedia } from "@/libs/media";

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const NavCollapse = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${maxMedia.mobile} {
    gap: 0.25rem;
  }
`;

interface NavLinkProps extends React.ComponentProps<"a"> {
  href: string;
  active?: boolean;
}

export const NavLink = ({ href, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const pathnameList = pathname.split("/");
  const firstPathname = "/" + (pathnameList.length > 0 && pathnameList[1]);

  return (
    <NavLinkStyled href={href} className={clsx({ active: href === firstPathname })}>
      {props.children}
    </NavLinkStyled>
  );
};

const NavLinkStyled = styled(Link)`
  color: var(--black);
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  opacity: 0.8;
  &:not(.active):hover {
    opacity: 1;
  }
  &.active {
    color: var(--secondary);
    font-weight: 700;
    position: relative;
    ${minMedia.mobile} {
      &::before {
        top: 6px;
        left: 8px;
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        content: " ";
        white-space: pre;
        background-color: var(--secondary);
        z-index: -1;
      }
      &::after {
        bottom: 6px;
        right: 8px;
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        content: " ";
        white-space: pre;
        background-color: var(--secondary);
        z-index: -1;
      }
    }
  }
  ${maxMedia.mobile} {
    font-size: 14px;
    padding: 0.5rem 0.5rem;
  }
`;

export const NavItem = styled.li`
  margin: 0.75rem;
  ${maxMedia.mobile} {
    margin: 0.5rem 0rem 0.5rem 0px;
  }
`;

export const NavBrand = styled(Link)`
  /* margin-right: 1rem; */
  display: flex;
  align-items: center;
  color: var(--black);
  /* background-color: ${({ theme }) => theme.colors.white}; */
  border-radius: 0.25rem;
  padding: 0.125rem;
  ${maxMedia.mobile} {
    padding: 0rem;
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: var(--grey);
  }
`;
