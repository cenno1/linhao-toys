import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Custom Squishy Toy Manufacturer | LINHAO Toys",
    template: "%s | LINHAO Toys",
  },
  description:
    "LINHAO Toys provides OEM and ODM squishy toy design, sampling, manufacturing, packaging and worldwide export support for brands, retailers and promotional campaigns.",
  keywords: [
    "custom squishy toys",
    "squishy toy manufacturer",
    "OEM squishy toys",
    "ODM squishy toys",
    "glitter squishy",
    "promotional toys",
    "custom stress toys",
    "LINHAO Toys",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Custom Squishy Toys for Global Brands | LINHAO Toys",
    description:
      "OEM and ODM squishy toy design, sampling, manufacturing and packaging.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "LINHAO custom squishy toy manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Squishy Toy Manufacturer | LINHAO Toys",
    description:
      "OEM and ODM squishy toy design, sampling, manufacturing and packaging.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.ico"),
    email: "sales@lh-industrial.com",
    description:
      "OEM and ODM manufacturer of custom squishy toys, plush accessories and creative gifts for global brands and buyers.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
