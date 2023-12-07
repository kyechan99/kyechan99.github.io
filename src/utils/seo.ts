import { PostType } from "@/types/post";
import { headerImgPath } from "./url";
import { Metadata } from "next";

export const siteConfig = {
  url: "https://kyechan99.github.io",
  title: "kyechan99",
  description: "개발자는 참치다. 멈춰있으면 죽는다.",
  copyright: "kyechan99 © All rights reserved.",
  since: 2023,
  googleAnalyticsId: "",
  author: "kyechan99",
  email: "kyechan99@gmail.com",
  profile: "https://kyechan99.github.io/profile.png",
};

const getRelativeUrl = (url?: string) => {
  if (!url) return siteConfig.url;

  return `${siteConfig.url}/${url.replace(/^\/+/g, "")}`;
};

export const getBaseMetadata = ({ title, path }: { title: string; path?: string }): Metadata => {
  const url = getRelativeUrl(path);
  const { description } = siteConfig;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: siteConfig.title,
      url,
      type: "website",
      images: [
        {
          url: "/profile.png",
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
};

export const getArticleMetadata = (post: PostType): Metadata => {
  const description = post.description?.slice(0, 90);
  const url = getRelativeUrl(post.url);
  const dateTime = new Date(post.date).toISOString();

  return {
    title: post.title,
    description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      siteName: siteConfig.title,
      url,
      publishedTime: dateTime,
      modifiedTime: dateTime,
      authors: [`https://github.com/kyechan99`],
      tags: post.tags,
      images: [
        {
          url: headerImgPath(post.headerImg),
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
};

export const JSONLD = (post: PostType) => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    name: siteConfig.author,
    author: {
      "@type": "Person",
      name: siteConfig.author,
      email: siteConfig.email,
      url: siteConfig.url,
      nationality: {
        "@type": "Country",
        name: "South Korea",
      },
    },
    image: siteConfig.profile,
    description: post.description,
    title: post.title,
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    inLanguage: 'ko',
    mainEntityOfPage: { "@type": "WebPage", "@id": getRelativeUrl(post.url) },
  };
  return JSON.stringify(jsonLD);
};

const aa = {
  "@context": "https://schema.org",
  "@type": "Article",
  datePublished: "2022-11-11T00:00:01.000Z",
  description: "블로그를 만들 때 어떤 것들을 고려해야 할까? 🤔",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://bepyan.github.io/blog/nextjs-blog/1-boilerplate" },
  headline: "기술 블로그를 만들 때 고려해야 할 점",
  image: ["https://bepyan.github.io/images/base.jpg"],
  dateModified: "2022-11-11T00:00:01.000Z",
  author: { "@type": "Person", name: "Edward Kim" },
  publisher: {
    "@type": "Organization",
    name: "Edward Kim",
    logo: { "@type": "ImageObject", url: "https://bepyan.github.io/favicon.ico" },
  },
};

const bb = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  name: "kyechan99",
  image: "https://kyechan99.github.io/profile.png",
  description: "데스크 셋업 플랫폼, Desk-It",
  title: "Desk-It",
  datePublished: "2023-05-31T15:00:00.000Z",
};
