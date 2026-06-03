import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://www.primefix.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/profile", "/account", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/profile", "/account", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/profile", "/account", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
