import Comments from "@/components/Comment";
import { ColMain, ColSub, Container, Row } from "@/components/common/grid/Container";
import Helper from "@/components/helper";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Mdx from "@/components/mdx";
import PostArticle from "@/components/post/PostArticle";
import PostFooter from "@/components/post/PostFooter";
import PostHead from "@/components/post/PostHead";
import Search from "@/components/search/Search";

import { JSONLD } from "@/utils/seo";

import { PostType } from "@/types/post";

export const Layout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Container>
        <Header />
        {props.children}
      </Container>
      <Search />
      <Footer />
    </>
  );
};

export const PostLayout = ({ post, props }: { post: PostType; props?: React.PropsWithChildren }) => {
  return (
    <>
      <Container>
        <Header />
        <Row>
          <ColMain>
            <PostArticle>
              <PostHead post={post} />
              <Mdx code={post.body.code} />
              {props?.children}
            </PostArticle>
          </ColMain>
          <ColSub>
            <Helper post={post} />
          </ColSub>
        </Row>

        <PostFooter post={post} />

        <Comments />

        <Search />
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD(post) }} />
      <Footer />
    </>
  );
};
