import Logo from "@/public/logo.png";
import Dynamic from "next/dynamic";
import Image from "next/image";

import SearchButton from "@/components/common/button/SearchButton";
import { ThemeButtonSkeleton } from "@/components/common/button/ThemeButton";
import { Nav, NavBrand, NavCollapse, NavItem, NavLink } from "@/components/common/nav/Nav";
import { Navbar } from "@/components/common/nav/Navbar";

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
            <Image src={Logo} alt="logo_0" width={32} height={32} />
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
