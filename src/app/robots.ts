import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kyechan99.github.io/sitemap.xml",
    host: "https://kyechan99.github.io",
  };
}
