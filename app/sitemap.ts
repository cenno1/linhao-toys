import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { buyerGuides } from "@/lib/guides";
import {
  localizedAlternates,
  localizedCatalog,
  localizedProductSlugs,
  locales,
} from "@/lib/localized-catalog";
import { SITE_LAST_MODIFIED, SITE_URL, absoluteUrl } from "@/lib/seo";

function absoluteLanguages(
  alternates: ReturnType<typeof localizedAlternates>,
) {
  return Object.fromEntries(
    Object.entries(alternates).map(([language, path]) => [
      language,
      absoluteUrl(path),
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Keep dates tied to material page changes, not the date of each build.
  const reviewedPaths: Record<string, string> = {
    "": "2026-09-05",
    "/resources": "2026-09-05",
    "/custom-pu-squishy-manufacturer": "2026-09-02",
  };
  const staticPaths = [
    "",
    "/products",
    "/resources",
    "/custom-squishy-toy-manufacturer",
    "/custom-pu-squishy-manufacturer",
    "/custom-stress-ball-manufacturer",
    "/custom-blind-box-toys-manufacturer",
    "/wholesale-squishy-toys",
    "/taba-squishy-manufacturer",
    "/trending-squishy-toys",
    "/custom-plush-bag-charms",
    "/tpr-squishy-toy-manufacturer",
    "/slow-rising-squishy-wholesale",
    "/oem",
    "/factory",
    "/about",
    "/ai-sourcing-profile",
    "/contact",
    "/privacy",
  ];

  const localizedMarketPages = locales.flatMap((locale) => [
    {
      url: absoluteUrl(`/${locale}`),
      lastModified: "2026-09-01",
      changeFrequency: "weekly" as const,
      priority: 0.85,
      alternates: {
        languages: absoluteLanguages(localizedAlternates("home")),
      },
    },
    {
      url: absoluteUrl(`/${locale}/squishy-toys`),
      lastModified: "2026-09-01",
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: absoluteLanguages(localizedAlternates("wholesale")),
      },
    },
    {
      url: absoluteUrl(`/${locale}/custom-pu-squishy-manufacturer`),
      lastModified: "2026-09-02",
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: absoluteLanguages(localizedAlternates("customPu")),
      },
    },
  ]);

  const localizedProductPages = locales.flatMap((locale) =>
    localizedCatalog[locale].products.map((product) => ({
      url: absoluteUrl(`/${locale}/products/${product.slug}`),
      lastModified: "2026-09-01",
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [new URL(product.image, SITE_URL).toString()],
      alternates: {
        languages: absoluteLanguages(
          localizedAlternates("product", product.slug),
        ),
      },
    })),
  );

  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: reviewedPaths[path] ?? SITE_LAST_MODIFIED,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
      alternates:
        path === ""
          ? { languages: absoluteLanguages(localizedAlternates("home")) }
          : path === "/wholesale-squishy-toys"
            ? {
                languages: absoluteLanguages(
                  localizedAlternates("wholesale"),
                ),
              }
            : path === "/custom-pu-squishy-manufacturer"
              ? {
                  languages: absoluteLanguages(
                    localizedAlternates("customPu"),
                  ),
                }
              : undefined,
    })),
    ...localizedMarketPages,
    ...products.map((product) => {
      const hasLocalizedVersion = localizedProductSlugs.some(
        (localizedSlug) => localizedSlug === product.slug,
      );

      return {
        url: absoluteUrl(`/products/${product.slug}`),
        lastModified:
          product.detailsOnRequest || product.availability === "ready-stock"
            ? SITE_LAST_MODIFIED
            : "2026-09-05",
        changeFrequency: "monthly" as const,
        priority: 0.7,
        images: [new URL(product.images.hero, SITE_URL).toString()],
        alternates: hasLocalizedVersion
          ? {
              languages: absoluteLanguages(
                localizedAlternates("product", product.slug),
              ),
            }
          : undefined,
      };
    }),
    ...localizedProductPages,
    ...buyerGuides.map((guide) => ({
      url: absoluteUrl(`/resources/${guide.slug}`),
      lastModified: guide.updated,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
