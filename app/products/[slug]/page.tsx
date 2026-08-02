import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";
import {
  getProductBySlug,
  getProductFAQs,
} from "@/lib/product-utils";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const seoTitle = product.seoTitle ?? product.name;
  const seoDescription = product.seoDescription ?? product.note;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: product.keywords,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${seoTitle} | ${SITE_NAME}`,
      description: seoDescription,
      url: `/products/${product.slug}`,
      type: "website",
      images: [{ url: product.images.hero, alt: product.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | ${SITE_NAME}`,
      description: seoDescription,
      images: [product.images.hero],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productUrl = absoluteUrl(`/products/${product.slug}`);
  const faqs = getProductFAQs(product);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${productUrl}#service`,
    name: `${product.name} custom manufacturing and wholesale supply`,
    description: product.note,
    image: [absoluteUrl(product.images.hero)],
    serviceType: product.category,
    category: "Custom toys and wholesale toy supply",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Wholesale buyers, retailers, distributors and brand owners",
    },
    subjectOf: product.video
      ? {
          "@type": "VideoObject",
          name: `${product.name} product demonstration`,
          description: `Product appearance, squeeze feel and recovery demonstration for ${product.name}.`,
          thumbnailUrl: absoluteUrl(product.images.hero),
          contentUrl: absoluteUrl(product.video),
          uploadDate: "2025-04-08",
        }
      : undefined,
    url: productUrl,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: absoluteUrl("/products"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <ProductDetail product={product} />
    </>
  );
}
