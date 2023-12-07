import { Layout } from "@/components/layout";
import { Row } from "@/components/common/grid/Container";
import { PostFeed } from "@/components/post/PostFeed";
import Banner from "@/components/Bannder";
import { allPostPosts } from "@/constants/posts";
import { compareDesc } from "date-fns";
import { Metadata } from "next";
import { getBaseMetadata } from "@/utils/seo";

export const metadata: Metadata = getBaseMetadata({ title: "포스팅", path: "/post" });

export default function PostPage() {
  return (
    <Layout>
      <h1>포스팅</h1>
      <Banner>
        연구하거나 배운것을 기록하는 공간이에요.
        <br />
        이전에 겪었던 실수와 고민을 반복하지 않기 위해 노력하고 있어요.
      </Banner>

      <PostFeed posts={allPostPosts} />
    </Layout>
  );
}
