"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { INQUIRY_EMAIL } from "@/lib/product-utils";
import { wholesaleStyles } from "./wholesale-styles";

const examples = [
  { slug: "caramel-pudding-building-block-clay-squishy", name: "Caramel pudding", packing: "12 individual packs per counter display" },
  { slug: "sweet-corn-petroleum-jelly-filled-squishy", name: "Sweet corn", packing: "Individually bagged in a countertop display" },
  { slug: "grape-building-block-clay-squishy", name: "Grape bunch", packing: "Clear individual boxes in a display tray" },
];

export default function WholesaleOrder() {
  const [error, setError] = useState("");
  function prepareQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const items = wholesaleStyles.flatMap(({name}) => {
      const qty = form.get(name);
      return qty ? [name + " — " + qty + " pieces"] : [];
    });
    if (!items.length) {
      setError("Enter a quantity for at least one style.");
      event.currentTarget.querySelector<HTMLInputElement>('input[type="number"]')?.focus();
      return;
    }
    const destination = String(form.get("destination") || "").trim();
    if (!destination) {
      setError("Enter your delivery country and postcode.");
      event.currentTarget.querySelector<HTMLInputElement>('input[name="destination"]')?.focus();
      return;
    }
    const notes = String(form.get("notes") || "").trim();
    const message = ["Hello LINHAO,", "Please quote these wholesale clay-filled squishies for resale:", ...items,
      "Deliver to: " + destination, notes, "Please confirm unit prices, colour availability, carton packing, freight and dispatch timing."];
    if (items.length > 1) message.push("Can these styles share an outer carton or ship together in separate cartons?");
    setError("");
    trackEvent("email_click", { contact_method: "email", contact_location: "wholesale_first_order" });
    window.location.href = "mailto:" + INQUIRY_EMAIL + "?subject=Wholesale%20squishy%20order&body=" + encodeURIComponent(message.filter(Boolean).join("\n"));
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
        <form onSubmit={prepareQuote} onChange={() => setError("")}>
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
            <label className="font-semibold">Delivery country and postcode<input name="destination" required maxLength={120} className="mt-2 block w-full rounded-lg border border-slate-400 p-3 font-normal" /></label>
            <label className="font-semibold">Colours, packing or receiving date (optional)<input name="notes" maxLength={300} className="mt-2 block w-full rounded-lg border border-slate-400 p-3 font-normal" /></label>
          </div>
          {error && <p role="alert" className="mb-3 text-red-700">{error}</p>}
          <button className="btn btn-primary" type="submit">Open wholesale quote email</button>
          <p className="mt-2 text-sm text-slate-600">Review the itemised request in your email app before sending. You can also <Link className="underline" href="/contact">contact sales online</Link>.</p>
        </form>
      </div>
    </section>
  );
}
