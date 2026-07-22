import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "OEM & ODM Squishy Toy Development",
  description: "OEM and ODM custom squishy toy development by LINHAO Toys.",
};

const cards = [["Concept Review", "We clarify product size, shape, finish, target market and commercial requirements."], ["Design & Mold", "Your reference is converted into a production-ready structure and mold plan."], ["Sampling", "Samples are developed and revised before final production approval."], ["Color & Printing", "Custom colors, faces, logos and graphic details are matched to approved artwork."], ["Packaging", "Retail boxes, bags, labels and promotional packaging can be coordinated."], ["Mass Production", "The approved sample becomes the reference for production and quality checks."]];

export default function Page() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">OEM & ODM</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">A structured path from your idea to a finished custom squishy.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">We support concept review, 3D development, mold creation, sampling, revision, printing, packaging and production coordination.</p>
        </div>
      </section>
      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {cards.map(([title, text], index) => (
            <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-8 text-2xl font-black tracking-tight text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
