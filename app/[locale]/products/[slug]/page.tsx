import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedProductPage } from "@/components/LocalizedMarketPages";
import {
  getLocalizedProduct,
  isLocale,
  localizedAlternates,
  localizedCatalog,
  localizedProductSlugs,
  locales,
} from "@/lib/localized-catalog";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    localizedProductSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const product = getLocalizedProduct(locale, slug);
  if (!product) return {};

  const url = `/${locale}/products/${product.slug}`;

  return {
    title: product.seoTitle,
    description: product.description,
    alternates: {
      canonical: url,
      languages: localizedAlternates("product", product.slug),
    },
    openGraph: {
      title: `${product.seoTitle} | ${SITE_NAME}`,
      description: product.description,
      url,
      type: "website",
      images: [{ url: product.image, alt: product.imageAlt }],
      locale: locale === "es" ? "es_ES" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.seoTitle} | ${SITE_NAME}`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function LocalizedProduct({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const copy = localizedCatalog[locale];
  const product = getLocalizedProduct(locale, slug);
  if (!product) notFound();

  const pageUrl = absoluteUrl(`/${locale}/products/${product.slug}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: product.name,
      description: product.description,
      image: [absoluteUrl(product.image)],
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Worldwide" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: locale === "es"
          ? "Compradores mayoristas, minoristas, distribuidores y propietarios de marcas"
          : "Großhändler, Einzelhändler, Distributoren und Markeninhaber",
      },
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: product.seoTitle,
      description: product.description,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(product.image),
      },
      mainEntity: { "@id": `${pageUrl}#service` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: copy.navigation.home,
          item: absoluteUrl(`/${locale}`),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.navigation.wholesale,
          item: absoluteUrl(`/${locale}/squishy-toys`),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: product.faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LocalizedProductPage locale={locale} copy={copy} product={product} />
    </>
  );
}
