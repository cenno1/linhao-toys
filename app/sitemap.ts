import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { buyerGuides } from "@/lib/guides";
import { SITE_LAST_MODIFIED, SITE_URL, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/products",
    "/resources",
    "/custom-squishy-toy-manufacturer",
    "/wholesale-squishy-toys",
    "/taba-squishy-manufacturer",
    "/custom-plush-bag-charms",
    "/oem",
    "/factory",
    "/about",
    "/contact",
    "/privacy",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.slug}`),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [new URL(product.images.hero, SITE_URL).toString()],
    })),
    ...buyerGuides.map((guide) => ({
      url: absoluteUrl(`/resources/${guide.slug}`),
      lastModified: guide.updated,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
