import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gemsolar.ng/sitemap.xml",
    host: "https://gemsolar.ng",
  };
}
