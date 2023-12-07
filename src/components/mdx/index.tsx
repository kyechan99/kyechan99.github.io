import MDXLink from "@/components/mdx/MDXLink";
import MDXImage from "@/components/mdx/MDXImage";
import MDXCode from "@/components/mdx/MDXCode";

import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
  a: MDXLink,
  img: MDXImage,
  pre: MDXCode,
};

export default function Mdx({ code }: { code: string }) {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={mdxComponents} />;
}
