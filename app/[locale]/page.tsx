import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHomePage } from "@/components/LocalizedMarketPages";
import {
  isLocale,
  localizedAlternates,
  localizedCatalog,
  locales,
} from "@/lib/localized-catalog";
import { DEFAULT_OG_IMAGE, SITE_URL, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const page = localizedCatalog[locale].home;
  const url = `/${locale}`;

  return {
    title: { absolute: page.seoTitle },
    description: page.description,
    alternates: {
      canonical: url,
      languages: localizedAlternates("home"),
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, alt: page.title }],
      locale: locale === "es" ? "es_ES" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function LocalizedHome({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = localizedCatalog[locale];
  const pageUrl = absoluteUrl(`/${locale}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: copy.home.seoTitle,
      description: copy.home.description,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: copy.home.faqs.map(({ question, answer }) => ({
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
      <LocalizedHomePage locale={locale} copy={copy} />
    </>
  );
}
