import { notFound } from "next/navigation";

import { PostLayout } from "@/components/layout";
import { allPostPosts } from "@/constants/posts";
import { PostType } from "@/types/post";
import { getArticleMetadata } from "@/utils/seo";

import "@/styles/prism.css";

export const generateStaticParams = async () => allPostPosts.map(post => ({ slug: post.path?.split("/") }));

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const flattenedPath = params.slug.join("/");
  const post: PostType | undefined = allPostPosts.find(post => post.path === flattenedPath);

  if (!post) return {};
  return getArticleMetadata(post);
};

const PostPage = ({ params }: { params: { slug: string[] } }) => {
  const flattenedPath = params.slug.join("/");
  const post = allPostPosts.find(post => post.path === flattenedPath);
  if (!post) notFound();

  return <PostLayout post={post} />;
};

export default PostPage;
