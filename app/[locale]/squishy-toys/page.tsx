import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedWholesalePage } from "@/components/LocalizedMarketPages";
import {
  isLocale,
  localizedAlternates,
  localizedCatalog,
  locales,
} from "@/lib/localized-catalog";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const page = localizedCatalog[locale].wholesale;
  const url = `/${locale}/squishy-toys`;

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: url,
      languages: localizedAlternates("wholesale"),
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url,
      type: "website",
      images: [{
        url: "/images/products/ready-stock-highland-cow-tpr-squishy/hero.png",
        alt: page.title,
      }],
      locale: locale === "es" ? "es_ES" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: ["/images/products/ready-stock-highland-cow-tpr-squishy/hero.png"],
    },
  };
}

export default async function LocalizedWholesale({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = localizedCatalog[locale];
  const pageUrl = absoluteUrl(`/${locale}/squishy-toys`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      url: pageUrl,
      name: copy.wholesale.seoTitle,
      description: copy.wholesale.description,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      numberOfItems: copy.products.length,
      itemListElement: copy.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: absoluteUrl(`/${locale}/products/${product.slug}`),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: copy.wholesale.faqs.map(({ question, answer }) => ({
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
      <LocalizedWholesalePage locale={locale} copy={copy} />
    </>
  );
}
