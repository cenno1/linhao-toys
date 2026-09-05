import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { buyerGuides, getBuyerGuide } from "@/lib/guides";
import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return buyerGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getBuyerGuide((await params).slug);
  if (!guide) return {};
  const title = guide.seoTitle ?? guide.title;
  return {
    title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/resources/${guide.slug}` },
    openGraph: {
      title,
      description: guide.description,
      type: "article",
      url: `/resources/${guide.slug}`,
      modifiedTime: guide.updated,
      images: [{ url: DEFAULT_OG_IMAGE, alt: `${guide.title} by ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: guide.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const guide = getBuyerGuide((await params).slug);
  if (!guide) notFound();

  const url = absoluteUrl(`/resources/${guide.slug}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      dateModified: guide.updated,
      mainEntityOfPage: url,
      image: absoluteUrl(DEFAULT_OG_IMAGE),
      keywords: guide.keywords.join(", "),
      about: guide.keywords,
      author: { "@id": `${absoluteUrl("/")}#organization` },
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      isPartOf: { "@type": "CollectionPage", "@id": `${absoluteUrl("/resources")}#collection` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Resources", item: absoluteUrl("/resources") },
        { "@type": "ListItem", position: 3, name: guide.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article>
        <header className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <nav className="text-sm font-bold text-slate-400">
              <Link href="/resources" className="text-blue-400 hover:underline">Buyer resources</Link>
              <span className="mx-2">/</span>
              <span>{guide.eyebrow}</span>
            </nav>
            <h1 className="mt-7 text-4xl font-black tracking-[-0.045em] sm:text-6xl">{guide.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{guide.description}</p>
            <p className="mt-6 text-sm text-slate-400">
              Updated {guide.updated} · {guide.readTime}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
          <section className="mb-14 rounded-[2rem] border border-blue-100 bg-blue-50/70 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Quick answer</p>
            <p className="mt-4 text-lg font-bold leading-8 text-slate-800">{guide.quickAnswer}</p>
          </section>
          <div className="space-y-14">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black tracking-tight text-slate-950">{section.heading}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">{paragraph}</p>
                  ))}
                </div>
                {section.checklist && (
                  <ul className="mt-6 grid gap-3 rounded-3xl bg-[#f4f7fb] p-7 sm:grid-cols-2">
                    {section.checklist.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <span className="font-black text-blue-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-16">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Buyer FAQ</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              Questions buyers ask about this topic.
            </h2>
            <div className="mt-7 space-y-3">
              {guide.faqs.map(({ question, answer }) => (
                <details key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-black text-slate-950">
                    {question}<span className="float-right text-blue-600">+</span>
                  </summary>
                  <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <aside className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Next steps</p>
            <h2 className="mt-4 text-2xl font-black text-slate-950">Continue your sourcing research.</h2>
            <div className="mt-6 flex flex-col gap-3">
              {guide.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-bold text-blue-600 hover:underline">
                  {link.label} →
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </article>
      <CTA />
      <Footer />
    </main>
  );
}
