import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeImgSize from "rehype-img-size";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import { Heading } from "@/types/heading";
import { searchTermOptimization } from "./src/utils/format";    // <-- 직접 경로 지정

const rehypeImgSizeAny: any = rehypeImgSize;

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    description: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
    headerImg: { type: "string" },
  },
  computedFields: {
    url: { type: "string", resolve: post => `/${post._raw.flattenedPath}` },
    headings: {
      type: "json",
      resolve: async post => {
        const regXHN = /\n(?<flag>#{1,6})\s+(?<content>.+)/g; //! 일단 1~6 까지
        const ghSlugger = new GithubSlugger();
        const headings = Array.from(post.body.raw.matchAll(regXHN)).map(({ groups }): Heading => {
          const level = groups?.flag?.length || 0;
          const content = groups?.content || "";
          return {
            level,
            content,
            slug: content ? ghSlugger.slug(content) : "",
          };
        });
        return headings;
      },
    },
    readingTime: { type: "string", resolve: doc => readingTime(doc.body.raw).text },
    path: { type: "string", resolve: doc => doc._raw.flattenedPath.replace(/^(post|project)\//, "") },
    postType: { type: "string", resolve: doc => doc._raw.sourceFileDir.split("/")[0] },
    searchTxt: { type: "string", resolve: doc => searchTermOptimization(doc.title) },
    // slug: {
    //   type: "string",
    //   resolve: (doc) => doc._raw.flattenedPath,
    // },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  contentDirExclude: ["private"],
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug, // heading 에 id 심기
      // rehypeCodeWrap,
      rehypeCodeTitles,
      rehypePrism,
      [rehypeImgSizeAny, { dir: "public" }],
      [
        rehypeAutolinkHeadings, // id 통해서 anchor 생성
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
