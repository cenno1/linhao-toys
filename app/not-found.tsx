import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="grid min-h-[65vh] place-items-center px-5 text-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">404</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">Page not found.</h1>
          <p className="mt-5 text-lg text-slate-600">The page may have moved or does not exist.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-4 font-black text-white">
            Return Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
