"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Image from "next/image";
import { products, type ProductFilterGroup } from "@/lib/products";

type FilterOption = { label: string; value: "all" | ProductFilterGroup };

const filters: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Squishy", value: "squishy" },
  { label: "Plush", value: "plush" },
  { label: "Bag Charms", value: "bag-charms" },
  { label: "Emotional Gifts", value: "emotional-gifts" },
  { label: "OEM", value: "oem" },
];

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterOption["value"]>("all");

  const visibleProducts = useMemo(
    () =>
      activeFilter === "all"
        ? products
        : products.filter((p) => p.filterGroup === activeFilter),
    [activeFilter],
  );

  return (
    <section id="products" className="section v7-products">
      <div className="shell">
        <div className="v7-heading">
          <div>
            <span className="eyebrow">REAL SAMPLE GALLERY</span>
            <h2>Hot-looking products, not placeholder illustrations.</h2>
          </div>
          <p>
            These images come from LINHAO&apos;s supplied product catalogue and existing
            sample photography. Current market research is used to prioritize food
            squishies, glitter formats, sensory assortments, emotional plush and bag
            accessories.
          </p>
        </div>
        <div className="v7-filters">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              aria-pressed={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="v7-product-grid">
          {visibleProducts.map((p) => {
            const index = products.findIndex((item) => item.slug === p.slug);

            return (
              <article className="v7-card" key={p.slug}>
                <Link href={`/products/${p.slug}`} className="v7-photo">
                  <Image
                    src={p.images.hero}
                    alt={p.alt ?? p.name}
                    width={1200}
                    height={900}
                  />
                  <b>{p.tag}</b>
                  <em>{String(index + 1).padStart(2, "0")}</em>
                </Link>
                <div className="v7-card-copy">
                  <span>{p.category}</span>
                  <h3>
                    <Link href={`/products/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p>{p.note}</p>
                  <Link href={`/products/${p.slug}`}>View details →</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
