"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductGalleryItem } from "@/lib/product-utils";

type ProductGalleryProps = {
  productName: string;
  items: ProductGalleryItem[];
  videoSrc?: string;
};

export default function ProductGallery({ productName, items, videoSrc }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const useOriginalImage = active.src.includes("ready-stock-halloween-butter-bar-squishy");

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
        <Image
          key={active.src}
          src={active.src}
          alt={`${productName} 鈥?${active.label}`}
          width={1200}
          height={900}
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="h-full w-full object-cover"
          priority
          unoptimized={useOriginalImage}
        />
      </div>
      {items.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-2xl border bg-white transition ${
                activeIndex === index
                  ? "border-blue-600 ring-2 ring-blue-600/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={`${productName} 鈥?${item.label}`}
                  width={400}
                  height={300}
                  sizes="(max-width: 1024px) 25vw, 13vw"
                  className="h-full w-full object-cover"
                  unoptimized={item.src.includes("ready-stock-halloween-butter-bar-squishy")}
                />
              </div>
              <span className="block px-2 py-2 text-[10px] font-bold leading-tight text-slate-600">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      )}
      {videoSrc && (
        <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-sm">
          <video
            controls
            playsInline
            preload="metadata"
            poster={items[0].src}
            aria-label={`${productName} squeeze and product demonstration video`}
            className="aspect-video w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <p className="px-5 py-3 text-xs font-bold text-slate-300">
            Product demonstration 路 appearance, squeeze feel and recovery
          </p>
        </div>
      )}
    </div>
  );
}
