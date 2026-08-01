import Link from "next/link";
import { INQUIRY_EMAIL } from "@/lib/product-utils";

export default function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <b className="footer-brand">LINHAO TOYS</b>
          <p>
            Creative squishy, plush accessory and emotional-value gift manufacturing
            for global brands and buyers.
          </p>
        </div>
        <div>
          <b>Collections</b>
          <Link href="/trending-squishy-toys">Trending Squishy Toys</Link>
          <Link href="/wholesale-squishy-toys">Wholesale Squishy Toys</Link>
          <Link href="/taba-squishy-manufacturer">Taba Squishy</Link>
          <Link href="/custom-plush-bag-charms">Plush Bag Charms</Link>
          <Link href="/products">Emotional Gifts</Link>
        </div>
        <div>
          <b>Company</b>
          <Link href="/oem">OEM / ODM</Link>
          <Link href="/factory">Factory</Link>
          <Link href="/about">About LINHAO</Link>
          <Link href="/resources">Buyer Resources</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div>
          <b>Contact</b>
          <Link href="/contact">Contact us</Link>
          <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>
        </div>
      </div>
      <div className="shell copyright">© 2026 LINHAO Toys. All rights reserved.</div>
    </footer>
  );
}
