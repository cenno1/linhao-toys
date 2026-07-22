import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://linhaotoys.com"),
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "Custom Squishy Toys for Global Brands | LINHAO Toys",
    description:
      "OEM and ODM squishy toy design, sampling, manufacturing and packaging.",
    type: "website",
    locale: "en_US",
    siteName: "LINHAO Toys",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
