import Dynamic from "next/dynamic";
import Image from "next/image";

import { ThemeButtonSkeleton } from "@/components/common/button/ThemeButton";
import { Nav, NavBrand, NavCollapse, NavItem, NavLink } from "@/components/common/nav/Nav";
import { Navbar } from "@/components/common/nav/Navbar";

import SearchButton from "../common/button/SearchButton";

const SuspenseThemeButton = Dynamic(() => import("@/components/common/button/ThemeButton"), {
  ssr: false,
  loading: ThemeButtonSkeleton,
});

export default function Header() {
  return (
    <Navbar>
      <Nav>
        <NavItem>
          <NavBrand href="/">
            <Image src="/logo_0.png" alt="logo_0" width={32} height={32} />
          </NavBrand>
        </NavItem>
        <NavItem>
          <NavLink href="/post">POST</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/project">PROJECT</NavLink>
        </NavItem>
      </Nav>
      <NavCollapse style={{ marginTop: "3px" }}>
        <SearchButton />
        <SuspenseThemeButton />
      </NavCollapse>
    </Navbar>
  );
}
