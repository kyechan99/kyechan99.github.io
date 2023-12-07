import { notFound } from "next/navigation";

import { PostLayout } from "@/components/layout";
import { allProjectPosts } from "@/constants/posts";

import { PostType } from "@/types/post";
import { getArticleMetadata } from "@/utils/seo";

export const generateStaticParams = async () => allProjectPosts.map(post => ({ slug: post.path?.split("/") }));

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const flattenedPath = params.slug.join("/");
  const post: PostType | undefined = allProjectPosts.find(post => post.path === flattenedPath);

  if (!post) return {};
  return getArticleMetadata(post);
};

const PostPage = ({ params }: { params: { slug: string[] } }) => {
  const flattenedPath = params.slug.join("/");
  const post = allProjectPosts.find(post => post.path === flattenedPath);
  if (!post) notFound();

  return <PostLayout post={post} />;
};

export default PostPage;
