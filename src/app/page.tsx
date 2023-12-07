import { Metadata } from "next";
import { Layout } from "@/components/layout";
import { HomeBanner } from "@/components/Bannder";
import ProfileBoard from "@/components/dashboard/ProfileBoard";
import RecentBoard from "@/components/dashboard/RecentBoard";
import TagsBoard from "@/components/dashboard/TagsBoard";
import RepoBoard from "@/components/dashboard/RepoBoard";
import { getBaseMetadata } from "@/utils/seo"; 
 
export const metadata: Metadata = getBaseMetadata({ title: "kyechan99" });

export default function Home() {
  return (
    <Layout>
      <ProfileBoard />
      <RepoBoard />
      <RecentBoard /> 
      <HomeBanner  >안녕하세요!</HomeBanner>
      <TagsBoard />
    </Layout>
  );
}
