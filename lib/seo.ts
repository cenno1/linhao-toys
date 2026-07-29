import type { Metadata } from "next";
import type { Product } from "./products";
import type { Guide } from "./guides";
import { COMPANY_FACTS } from "./company";
import { faqItems } from "./faq";
import { INQUIRY_EMAIL, PRODUCT_MOQ } from "./product-utils";

export const SITE_URL = "https://linhaotoys.com";
export const SITE_NAME = "LINHAO Toys";
export const DEFAULT_OG_IMAGE = "/images/products/glitter-bao-bun/hero.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
};

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const imageUrl = absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/products/glitter-bao-bun/hero.png"),
    email: INQUIRY_EMAIL,
    description:
      "LINHAO Toys is a China-based OEM and ODM manufacturer of squishy toys, plush gifts and bag accessories for Amazon sellers, retailers and wholesale buyers.",
    areaServed: "Worldwide",
    foundingDate: COMPANY_FACTS.founded,
    address: {
      "@type": "PostalAddress",
      addressRegion: COMPANY_FACTS.location,
      addressCountry: "CN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.note,
    image: [absoluteUrl(product.images.hero)],
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/products/${product.slug}`),
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: PRODUCT_MOQ,
        unitText: "piece",
      },
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
        email: INQUIRY_EMAIL,
      },
    },
  };
}

export function articleJsonLd(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: absoluteUrl(`/resources/${guide.slug}`),
  };
}
