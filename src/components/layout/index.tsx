import Mdx from "../mdx";
import Footer from "./Footer";
import Header from "./Header";
import Helper from "../helper";
import Comments from "../Comment";
import PostHead from "../post/PostHead";
import PostArticle from "../post/PostArticle";
import { ColMain, ColSub, Container, Row } from "@/components/common/grid/Container";
import { PostType } from "@/types/post";
import { JSONLD } from "@/utils/seo";
import PostFooter from "../post/PostFooter";
import Search from "../Search/Search";

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
