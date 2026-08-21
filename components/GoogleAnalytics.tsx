"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { captureConsentedSessionAttribution } from "@/lib/inquiry-attribution";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function PageViewTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    function sendPageView() {
      if (
        !window.gtag ||
        window.localStorage.getItem("linhao_analytics_consent") !== "accepted"
      ) {
        return;
      }
      const query = searchParams.toString();
      captureConsentedSessionAttribution(pathname, searchParams);
      window.gtag("event", "page_view", {
        page_path: query ? `${pathname}?${query}` : pathname,
      });
    }

    sendPageView();
    window.addEventListener("linhao-consent-accepted", sendPageView);
    return () => window.removeEventListener("linhao-consent-accepted", sendPageView);
  }, [measurementId, pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}

