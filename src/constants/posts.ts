import { PostType } from "@/types/post";
import { allPosts as allCLPosts } from "contentlayer/generated";

// contentlayer의 allPosts 를 시간순으로 정렬
export const allPosts: PostType[] = allCLPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// '포스트' 카테고리의 글만
export const allPostPosts: PostType[] = allPosts.filter(post => post._raw.sourceFilePath.includes("post"));

// '프로젝트' 카테고리의 글만
export const allProjectPosts: PostType[] = allPosts.filter(post => post._raw.sourceFilePath.includes("project"));

// 모든 글들의 태그들
interface TagCount {
  [key: string]: number;
}
interface TagType {
  tag: string;
  count: number;
}
const getElCount = (arr: string[]) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {} as TagCount);
const tags: string[] = allPosts.flatMap(post => post.tags ?? []);
const tagsWithCnt = getElCount(tags);
export const allTags: TagType[] = Object.entries(tagsWithCnt).map(([tag, count]) => ({ tag, count }));

// export const allTags: string[] = tags.filter((v, i) => tags.indexOf(v) === i);
