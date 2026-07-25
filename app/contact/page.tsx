import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact LINHAO Toys",
  description: "Send your custom squishy toy inquiry to LINHAO Toys.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-400">Contact</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-6xl">
            Tell us about your custom squishy project.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Include your product reference, target quantity, size, destination market and preferred packaging.
          </p>
        </div>
      </section>
      <section className="bg-[#f8fafc] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Email inquiry</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Send your project details.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Attach your design or reference image and include the quantity, size, market and deadline.
            </p>
            <a href="mailto:info@lh-industrial.com" className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-4 font-black text-white shadow-lg shadow-blue-600/20">
              info@lh-industrial.com
            </a>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-400">Helpful details</p>
            <ul className="mt-7 space-y-4 text-slate-300">
              <li>• Product drawing or reference image</li>
              <li>• Estimated quantity</li>
              <li>• Product size and material requirements</li>
              <li>• Target market and delivery country</li>
              <li>• Packaging and deadline</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
