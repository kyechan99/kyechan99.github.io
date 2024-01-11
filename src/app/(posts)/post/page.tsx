import { Metadata } from "next";

import Banner from "@/components/Bannder";
import { Layout } from "@/components/layout";
import { PostFeed } from "@/components/post/PostFeed";
import { allPostPosts } from "@/constants/posts";
import { getBaseMetadata } from "@/utils/seo";

export const metadata: Metadata = getBaseMetadata({
  title: "포스팅",
  path: "/post",
});

export default function PostPage() {
  return (
    <Layout>
      <h1>포스팅</h1>
      <Banner>
        연구하거나 공부한 것을 기록하는 공간입니다.
        <br />
        배움은 나눌수록 커지잖아요
      </Banner>

      <PostFeed posts={allPostPosts} />
    </Layout>
  );
}
