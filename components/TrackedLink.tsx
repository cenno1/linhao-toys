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
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => trackEvent("contact_click", { method, location })}
    >
      {children}
    </a>
  );
}
