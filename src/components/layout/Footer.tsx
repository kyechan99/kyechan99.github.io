"use client";

import Link from "next/link";
import styled from "@emotion/styled";

import { Col, Container, Row } from "../common/grid/Container";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { maxMedia } from "@/libs/media";

export default function Footer() {
  return (
    <FooterStyle>
      <FooterNavBar>
        <Row className="row" $direction="row">
          <Col className="col-0" width="33.333%">
            <p className="name">Ye-Chan Kang</p>
            <p className="email">kyechan99@gmail.com</p>
          </Col>
          <Col className="col-1" width="33.333%">
            <a href="https://github.com/kyechan99" target="__">
              <IconBrandGithubFilled width={32} height={32} />
            </a>
          </Col>
          <Col className="col-2" width="33.333%">
            <Link href="/">Home</Link>
            <Link href="/post">Post</Link>
            <Link href="/project">Project</Link>
            <Link href="/resume">About</Link>
          </Col>
        </Row>
      </FooterNavBar>
    </FooterStyle>
  );
}
const FooterStyle = styled.footer`
  margin-top: 10rem;
  border-top: 1px solid var(--hr);
`;
const FooterNavBar = styled(Container)`
  padding: 3rem 0rem;
  a {
    color: #a2a3a0;
  }
  .row {
    align-items: center;
    gap: 0px;
    ${maxMedia.tablet} {
      gap: 1rem;
      flex-direction: column;
      align-items: center;
    }
  }
  .col-0 {
    .name {
      font-weight: 500;
      font-size: 22px;
      margin: 0px;
      color: #a2a3a0;
    }
    .email {
      font-size: 14px;
      margin: 0px;
      color: #a2a3a0;
    }
  }
  .col-1 {
    display: flex;
    justify-content: center;
  }
  .col-2 {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    ${maxMedia.tablet} {
      justify-content: center;
    }
  }
`;
const FooterCompanyDesc = styled.p`
  font-size: 0.75rem;
  color: #a1a1a1;
`;
