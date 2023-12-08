import { Metadata } from "next";

import { PostType } from "@/types/post";

import { headerImgPath } from "./url";

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
          url: siteConfig.profile,
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
          url: `${siteConfig.url}${headerImgPath(post.headerImg)}`,
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
    inLanguage: "ko",
    mainEntityOfPage: { "@type": "WebPage", "@id": getRelativeUrl(post.url) },
  };
  return JSON.stringify(jsonLD);
};
