"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInquirySubmission } from "@/lib/use-inquiry-submission";
import InquiryActions from "@/components/InquiryActions";
import { wholesaleStyles } from "./wholesale-styles";

const examples = [
  { slug: "caramel-pudding-building-block-clay-squishy", name: "Caramel pudding", packing: "12 individual packs per counter display" },
  { slug: "sweet-corn-petroleum-jelly-filled-squishy", name: "Sweet corn", packing: "Individually bagged in a countertop display" },
  { slug: "grape-building-block-clay-squishy", name: "Grape bunch", packing: "Clear individual boxes in a display tray" },
];

export default function WholesaleOrder() {
  const [error, setError] = useState("");
  const inquiry = useInquirySubmission("Wholesale clay-filled squishy selection", "wholesale_first_order");
  async function prepareQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;
    const form = new FormData(element);
    const items = wholesaleStyles.flatMap(({name, cartons}) => {
      const qty = form.get(name);
      return qty ? [{ name, quantity: Number(qty), cartons }] : [];
    });
    if (!items.length || items.some(item => !Number.isInteger(item.quantity) || item.quantity < 500 || item.quantity > 99999999)) {
      setError("Enter at least 500 pieces for each selected style.");
      inquiry.markInvalid();
      element.querySelector<HTMLInputElement>('input[type="number"]')?.focus();
      return;
    }
    const destination = String(form.get("destination") || "").trim();
    if (!destination) {
      setError("Enter your delivery country and postcode.");
      inquiry.markInvalid();
      element.querySelector<HTMLInputElement>('input[name="destination"]')?.focus();
      return;
    }
    const notes = String(form.get("notes") || "").trim();
    const message = ["Please quote these wholesale clay-filled squishies for resale:", ...items.map(item => `${item.name}: ${item.quantity} pieces; packing reference: ${item.cartons.join(" / ")} pieces per outer carton.`),
      "Deliver to: " + destination, notes, "Please confirm unit prices, colour availability, carton packing, freight and dispatch timing."];
    if (items.length > 1) message.push("Can these styles share an outer carton or ship together in separate cartons?");
    setError("");
    if (await inquiry.submit({
      company: "", email: String(form.get("email") || "").trim(),
      projectType: "Wholesale existing products", quantity: String(items.reduce((total, item) => total + item.quantity, 0)) + " pieces total",
      market: destination, timeline: "", packaging: "", referenceUrl: "", requirements: message.filter(Boolean).join("\n"),
    }, String(form.get("website") || ""))) element.reset();
  }
  return (
    <section id="first-wholesale-order" className="scroll-mt-24 bg-white py-14" aria-labelledby="first-order-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <h2 id="first-order-title" className="text-3xl font-black tracking-tight">Build your first wholesale squishy order</h2>
        <p className="mt-3 max-w-3xl leading-7">Choose from 21 building block clay squishy styles. The minimum is <strong>500 pieces per style</strong>. The table shows how many toys fit in each outer shipping carton. Ask us to confirm colour splits, mixed cartons and packing for any balance below a full carton.</p>
        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {examples.map(({slug, name, packing}) => <Link key={slug} href={"/products/" + slug} className="rounded-xl border border-slate-200 p-3 hover:border-blue-500">
            <Image src={"/images/products/" + slug + "/catalog-display.jpg"} alt={name + " retail packaging"} width={280} height={180} className="h-32 w-full object-contain" />
            <strong className="mt-2 block text-blue-700">{name}</strong><span className="text-sm">{packing}</span>
          </Link>)}
        </div>
        <form onSubmit={prepareQuote} onChange={() => { setError(""); inquiry.markStarted(); }} onInvalidCapture={inquiry.markInvalid} aria-busy={inquiry.status === "sending"}>
          <fieldset disabled={inquiry.status === "sending"} className="min-w-0">
          <label className="hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="py-3 text-left text-lg font-bold">Select styles and quantities</caption>
            <thead><tr className="bg-slate-100">
              <th scope="col" className="p-2">Style</th><th scope="col" className="p-2">Pieces per outer carton</th><th scope="col" className="p-2">Pieces wanted</th>
            </tr></thead>
            <tbody>{wholesaleStyles.map(({name, cartons}) => <tr key={name} className="border-b border-slate-200">
              <th scope="row" className="p-2 font-semibold">{name}</th>
              <td className="p-2">{cartons.join(" / ")}</td>
              <td className="p-2"><input name={name} aria-label={"Pieces of " + name} type="number" min="500" max="99999999" step="1" placeholder="500+" className="w-20 rounded-md border border-slate-400 p-2" /></td>
            </tr>)}</tbody>
          </table>
          <div className="my-5 grid gap-4 sm:grid-cols-2">
            <label className="font-semibold">Email<input type="email" name="email" autoComplete="email" required maxLength={320} placeholder="you@company.com" className="mt-2 block w-full rounded-lg border border-slate-400 p-3 font-normal" /></label>
            <label className="font-semibold">Delivery country and postcode<input name="destination" required maxLength={120} placeholder="e.g. United States, 10001" className="mt-2 block w-full rounded-lg border border-slate-400 p-3 font-normal" /></label>
            <label className="font-semibold sm:col-span-2">Colours, packing or receiving date (optional)<input name="notes" maxLength={300} className="mt-2 block w-full rounded-lg border border-slate-400 p-3 font-normal" /></label>
          </div>
          {error && <p role="alert" className="mb-3 text-red-700">{error}</p>}
          </fieldset>
          <InquiryActions status={inquiry.status} fallbackHref={inquiry.fallbackHref} location="wholesale_first_order" label="Send wholesale quote request" />
        </form>
      </div>
    </section>
  );
}
