import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { getCaseBySlug, caseStudies } from "@/lib/cases";
import { breadcrumbJsonLd, buildPageMetadata, caseStudyJsonLd } from "@/lib/seo";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    return {};
  }

  return buildPageMetadata({
    title: item.title,
    description: item.summary,
    path: `/cases/${item.slug}`,
    ogImage: item.image,
  });
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <JsonLd
        data={[
          caseStudyJsonLd(item),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/cases" },
            { name: item.title, path: `/cases/${item.slug}` },
          ]),
        ]}
      />
      <Header />
      <section className="bg-[#f4f7fb] py-12 sm:py-16">
        <div className="shell">
          <nav className="text-sm font-bold text-slate-500">
            <Link href="/cases" className="text-blue-600 hover:underline">
              Case studies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{item.title}</span>
          </nav>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-[2rem] border border-slate-200 object-cover shadow-sm"
          />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">
              {item.clientType} · {item.market}
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{item.summary}</p>

            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-lg font-black text-slate-950">Challenge</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.challenge}</p>
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-950">LINHAO solution</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.solution}</p>
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-950">Results</h2>
                <ul className="mt-3 space-y-2">
                  {item.results.map((result) => (
                    <li key={result} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-600">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href={`/products/${item.productSlug}`}
              className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              View related product →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
