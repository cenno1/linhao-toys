import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import GuideArticle from "@/components/GuideArticle";
import JsonLd from "@/components/JsonLd";
import { getGuideBySlug, guides } from "@/lib/guides";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/resources/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main>
      <JsonLd
        data={[
          articleJsonLd(guide),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: guide.title, path: `/resources/${guide.slug}` },
          ]),
        ]}
      />
      <Header />
      <GuideArticle
        title={guide.title}
        description={guide.description}
        publishedAt={guide.publishedAt}
        readMinutes={guide.readMinutes}
        sections={guide.sections}
      />
      <CTA />
      <Footer />
    </main>
  );
}
