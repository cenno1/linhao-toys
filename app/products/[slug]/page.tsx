import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";
import {
  getProductBySlug,
  getProductFAQs,
  getProductSpecifications,
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

  return {
    title: product.name,
    description: product.note,
    keywords: product.keywords,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${SITE_NAME}`,
      description: product.note,
      url: `/products/${product.slug}`,
      type: "website",
      images: [{ url: product.images.hero, alt: product.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${SITE_NAME}`,
      description: product.note,
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
  const specifications = getProductSpecifications(product);
  const faqs = getProductFAQs(product);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.note,
    image: [absoluteUrl(product.images.hero)],
    category: product.category,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Wholesale buyers, retailers, distributors and brand owners",
    },
    additionalProperty: specifications.map(({ label, value }) => ({
      "@type": "PropertyValue",
      name: label,
      value,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
