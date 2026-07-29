import Link from "next/link";
import { INQUIRY_EMAIL } from "@/lib/product-utils";

export default function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <b className="footer-brand">LINHAO TOYS</b>
          <p>
            Creative squishy, plush accessory and emotional-value gift
            manufacturing for global brands and buyers.
          </p>
        </div>
        <div>
          <b>Collections</b>
          <Link href="/products">Squishy Toys</Link>
          <Link href="/products">Plush Bag Charms</Link>
          <Link href="/products">Emotional Gifts</Link>
        </div>
        <div>
          <b>Resources</b>
          <Link href="/resources">Buyer guides</Link>
          <Link href="/cases">Case studies</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Get a quote</Link>
        </div>
        <div>
          <b>Company</b>
          <Link href="/about">About</Link>
          <Link href="/oem">OEM / ODM</Link>
          <Link href="/factory">Factory</Link>
          <Link href="/#compliance">Compliance</Link>
        </div>
        <div>
          <b>Contact</b>
          <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>
          <Link href="/contact">Request quotation</Link>
        </div>
      </div>
      <div className="shell copyright">© 2026 LINHAO Toys. All rights reserved.</div>
    </footer>
  );
}
