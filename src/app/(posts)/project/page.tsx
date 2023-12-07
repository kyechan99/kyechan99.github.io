import { Layout } from "@/components/layout";
import { Row } from "@/components/common/grid/Container";
import { PostFeed } from "@/components/post/PostFeed";
import Banner from "@/components/Bannder";
import { allProjectPosts } from "@/constants/posts";
import { Metadata } from "next";
import { getBaseMetadata } from "@/utils/seo";

export const metadata: Metadata = getBaseMetadata({ title: "프로젝트", path: "/project" });

export default function PostPage() {
  return (
    <Layout>
      <h1>프로젝트</h1>
      <Banner bannerType="project">
        구상하고, 구현하는 일은 짜릿해요.
        <br />
        새로운 도전에도 적극적으로 참여하고자 노력하고 있어요.
      </Banner>
      
      <PostFeed posts={allProjectPosts} />
    </Layout>
  );
}
