"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const HERO_VIDEO = "/videos/oem-market-squishy-showcase.mp4";
const HERO_POSTER = "/images/products/glitter-bao-bun/hero.png";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const desktop = window.matchMedia("(min-width: 769px)");
    if (!video) return;

    const startVideo = () => {
      if (!desktop.matches) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        return;
      }

      if (!video.src) {
        video.poster = HERO_POSTER;
        video.src = HERO_VIDEO;
        video.load();
      }

      void video.play().catch(() => {
        // The canplay listener below retries once enough video data is available.
      });
    };

    video.addEventListener("canplay", startVideo);
    desktop.addEventListener("change", startVideo);
    startVideo();

    return () => {
      video.removeEventListener("canplay", startVideo);
      desktop.removeEventListener("change", startVideo);
    };
  }, []);

  return (
    <section className="v7-hero v7-hero-video">
      <div className="v7-hero-bg" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* The mobile LCP image is intentionally served directly from the CDN.
            This avoids a cold Next Image optimization request before first paint. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="v7-hero-bg-fallback"
          src={HERO_POSTER}
          alt=""
          fetchPriority="high"
          decoding="sync"
        />
      </div>
      <div className="v7-hero-overlay" aria-hidden="true" />

      <div className="shell v7-hero-content">
        <div className="v7-copy">
          <span className="eyebrow">REAL PRODUCTS · TREND-LED OEM</span>
          <h1>
            Products buyers
            <br />
            <span>want to pick up.</span>
          </h1>
          <p>
            Real LINHAO sample photography across glitter squishies, food shapes, mini
            sensory toys, plush gifts and bag accessories—supported by custom colors,
            faces, packaging and private label development.
          </p>
          <div className="hero-actions">
            <WhatsAppButton context="hero" />
            <a className="btn btn-primary btn-lg" href="#products">
              Browse real products
            </a>
            <Link
              className="btn btn-outline btn-lg v7-hero-btn-outline"
              href="/contact"
            >
              Start an OEM project
            </Link>
          </div>
          <div className="v7-proof">
            <div>
              <b>OEM / ODM</b>
              <span>development support</span>
            </div>
            <div>
              <b>Custom</b>
              <span>products & packaging</span>
            </div>
            <div>
              <b>Export</b>
              <span>buyer coordination</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
