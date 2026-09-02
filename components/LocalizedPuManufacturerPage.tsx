import Image from "next/image";
import Link from "next/link";
import {
  FaqList,
  LocalizedCta,
  LocalizedFooter,
  LocalizedHeader,
} from "@/components/LocalizedMarketPages";
import type { LocalizedMarketCopy, Locale } from "@/lib/localized-catalog";
import type { LocalizedPuPageCopy } from "@/lib/localized-pu";

export default function LocalizedPuManufacturerPage({
  locale,
  marketCopy,
  page,
}: {
  locale: Locale;
  marketCopy: LocalizedMarketCopy;
  page: LocalizedPuPageCopy;
}) {
  return (
    <main lang={locale}>
      <LocalizedHeader
        locale={locale}
        copy={marketCopy}
        pagePath="/custom-pu-squishy-manufacturer"
      />

      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">
              {page.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-[-0.055em] sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              {page.introduction}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-7 py-4 font-black text-white hover:bg-blue-500"
              >
                {page.ctaLabel}
              </Link>
              <Link
                href="#pu-brief"
                className="rounded-full border border-slate-600 px-7 py-4 font-black text-white hover:border-white"
              >
                {locale === "es" ? "Preparar el brief" : "Briefing vorbereiten"}
              </Link>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/images/products/custom-pu-fruit-animal-figures/hero.png"
              alt={page.examples[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <p className="rounded-3xl border border-blue-100 bg-white p-7 text-lg font-bold leading-8 text-slate-800 shadow-sm">
            {page.directAnswer}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {page.commercialHeading}
          </h2>
          <ul className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.commercialFacts.map((fact) => (
              <li
                key={fact}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-bold leading-7 text-slate-700 shadow-sm"
              >
                <span className="mr-3 text-blue-600">✓</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {page.capabilityHeading}
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {page.processHeading}
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step) => (
              <article key={step.title} className="rounded-3xl bg-slate-950 p-7 text-white">
                <h3 className="text-xl font-black text-blue-400">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pu-brief" className="bg-blue-600 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {page.checklistHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {page.checklist.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm font-bold leading-7"
              >
                <span className="mr-3 text-blue-100">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {page.examplesHeading}
          </h2>
          <div className="mt-9 grid gap-7 md:grid-cols-3">
            {page.examples.map((example) => (
              <article
                key={example.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-square bg-slate-100">
                  <Image
                    src={example.image}
                    alt={example.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="p-6 text-xl font-black leading-tight text-slate-950">
                  {example.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqList heading={page.faqHeading} faqs={page.faqs} />
      <LocalizedCta
        title={page.ctaTitle}
        text={page.ctaText}
        label={page.ctaLabel}
      />
      <LocalizedFooter locale={locale} />
    </main>
  );
}
