"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  method: "quote" | "email" | "whatsapp";
  location: string;
  productName?: string;
};

export default function TrackedLink({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
  method,
  location,
  productName,
}: TrackedLinkProps) {
  const eventName = `${method}_click`;

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() =>
        trackEvent(eventName, {
          contact_method: method,
          contact_location: location,
          ...(productName ? { product_name: productName } : {}),
        })
      }
    >
      {children}
    </a>
  );
}
