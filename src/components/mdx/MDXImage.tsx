"use client";

import Image from "next/image";

import styled from "@emotion/styled";

export default function MDXImage({ src, alt, width = 1, height = 1, ...props }: React.ComponentProps<"img">) {
  if (!src || !alt) return <></>;
  // if (!src || !alt || !width || !height) return <></>;
  if (src.startsWith("https://") || src.startsWith("http://")) return <Img src={src} alt={alt} className="img" />;
  return <ImageStyled className="img" src={src} alt={alt} width={+width} height={+height} />;
}

const ImageStyled = styled(Image)`
  display: block;
  max-width: 100%;
  margin: 2rem auto;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 8px 0px var(--grey);
  height: auto;
`;

const Img = ImageStyled.withComponent("img");