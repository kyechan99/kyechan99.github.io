import type { MetadataRoute } from "next";
import { allPosts } from "@/constants/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map(post => ({
    url: `https://kyechan99.github.io/${post._raw.flattenedPath}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const routes = ["", "/post", "/project"].map(route => ({
    url: `https://kyechan99.github.io${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.5,
  }));

  return [...routes, ...posts];
}
