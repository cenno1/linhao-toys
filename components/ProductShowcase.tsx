"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Image from "next/image";
import { products, type ProductFilterGroup } from "@/lib/products";

type FilterOption = { label: string; value: "all" | ProductFilterGroup };

type ProductShowcaseProps = {
  initialFilter?: FilterOption["value"];
  productSlugs?: string[];
  showFilters?: boolean;
  limit?: number;
  showCatalogLink?: boolean;
  eyebrow?: string;
  heading?: string;
  description?: string;
};

const filters: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Squishy", value: "squishy" },
  { label: "Plush", value: "plush" },
  { label: "Bag Charms", value: "bag-charms" },
  { label: "Emotional Gifts", value: "emotional-gifts" },
  { label: "OEM", value: "oem" },
];

export default function ProductShowcase({
  initialFilter = "all",
  productSlugs,
  showFilters = true,
  limit,
  showCatalogLink = false,
  eyebrow = "REAL SAMPLE GALLERY",
  heading = "Wholesale-ready squishy & plush SKUs for Amazon, retail and OEM.",
  description = "Review real product directions for wholesale, private-label and custom development projects.",
}: ProductShowcaseProps = {}) {
  const [activeFilter, setActiveFilter] =
    useState<FilterOption["value"]>(initialFilter);

  const visibleProducts = useMemo(
    () => {
      const filtered =
        activeFilter === "all"
          ? products
          : products.filter((p) => p.filterGroup === activeFilter);

      const selectedProducts = productSlugs
        ? filtered.filter((product) => productSlugs.includes(product.slug))
        : filtered;

      return limit ? selectedProducts.slice(0, limit) : selectedProducts;
    },
    [activeFilter, limit, productSlugs],
  );

  return (
    <section id="products" className="section v7-products">
      <div className="shell">
        <div className="v7-heading">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{heading}</h2>
          </div>
          <p>
            {description}
          </p>
        </div>
        {showFilters && <div className="v7-filters">
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
        </div>}
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
                    sizes="(max-width: 620px) 50vw, (max-width: 980px) 50vw, 25vw"
                    unoptimized={p.images.hero.includes("ready-stock-halloween-butter-bar-squishy")}
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
        {showCatalogLink && (
          <div className="mt-10 text-center">
            <Link className="btn btn-outline" href="/products">
              View the complete product catalog
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
