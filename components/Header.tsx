import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/">
          <span className="brand-mark">LH</span>
          <span>
            <b>LINHAO <em>TOYS</em></b>
            <small>CREATIVE TOYS &amp; GIFT MANUFACTURER</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/trending-squishy-toys">Trending</Link>
          <Link href="/wholesale-squishy-toys">Wholesale</Link>
          <Link href="/custom-squishy-toy-manufacturer">Custom</Link>
          <Link href="/products">Products</Link>
          <Link href="/oem">OEM / ODM</Link>
          <Link href="/factory">Factory</Link>
          <Link href="/resources">Guides</Link>
        </nav>
        <TrackedLink className="btn btn-primary" href="/contact" method="quote" location="header">
          Get a Quote
        </TrackedLink>
      </div>
    </header>
  );
}

