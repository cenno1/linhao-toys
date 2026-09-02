import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedPuManufacturerPage from "@/components/LocalizedPuManufacturerPage";
import {
  isLocale,
  localizedAlternates,
  localizedCatalog,
  locales,
} from "@/lib/localized-catalog";
import { localizedPuPages } from "@/lib/localized-pu";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const page = localizedPuPages[locale];
  const url = `/${locale}/custom-pu-squishy-manufacturer`;

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: url,
      languages: localizedAlternates("customPu"),
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url,
      type: "website",
      images: [
        {
          url: "/images/products/custom-pu-fruit-animal-figures/hero.png",
          alt: page.examples[0].alt,
        },
      ],
      locale: locale === "es" ? "es_ES" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: ["/images/products/custom-pu-fruit-animal-figures/hero.png"],
    },
  };
}

export default async function LocalizedCustomPuManufacturer({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const marketCopy = localizedCatalog[locale];
  const page = localizedPuPages[locale];
  const pageUrl = absoluteUrl(`/${locale}/custom-pu-squishy-manufacturer`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.title,
      description: page.description,
      serviceType:
        locale === "es"
          ? "Fabricación OEM de squishies PU personalizados"
          : "OEM-Herstellung individueller PU-Squishies",
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          locale === "es"
            ? "Marcas, mayoristas, minoristas, importadores y distribuidores"
            : "Marken, Großhändler, Einzelhändler, Importeure und Distributoren",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.seoTitle,
      description: page.description,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/products/custom-pu-fruit-animal-figures/hero.png"),
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
          name: marketCopy.navigation.home,
          item: absoluteUrl(`/${locale}`),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: marketCopy.navigation.customPu,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map(({ question, answer }) => ({
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LocalizedPuManufacturerPage
        locale={locale}
        marketCopy={marketCopy}
        page={page}
      />
    </>
  );
}
