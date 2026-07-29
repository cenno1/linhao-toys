import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Custom Squishy Toy Manufacturer",
    description:
      "LINHAO Toys provides OEM and ODM squishy toy design, sampling, manufacturing, packaging and worldwide export support for brands, retailers and promotional campaigns.",
    path: "/",
  }),
  title: {
    default: "Custom Squishy Toy Manufacturer | LINHAO Toys",
    template: "%s | LINHAO Toys",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
