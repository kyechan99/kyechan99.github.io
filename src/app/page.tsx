import { HomeBanner } from "@/components/Bannder";
import ProfileBoard from "@/components/dashboard/ProfileBoard";
import RecentBoard from "@/components/dashboard/RecentBoard";
import RepoBoard from "@/components/dashboard/RepoBoard";
import TagsBoard from "@/components/dashboard/TagsBoard";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <ProfileBoard />
      <RecentBoard />
      <RepoBoard />
      <HomeBanner>안녕하세요!</HomeBanner>
      <TagsBoard />
    </Layout>
  );
}
