import Link from "next/link";

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
          <Link href="/products">Collections</Link>
          <Link href="/products">Products</Link>
          <Link href="/oem">OEM / ODM</Link>
          <Link href="/factory">Factory</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/#compliance">Compliance</Link>
        </nav>
        <Link className="btn btn-primary" href="/contact">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
