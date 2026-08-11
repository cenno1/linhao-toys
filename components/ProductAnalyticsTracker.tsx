"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type ProductAnalyticsTrackerProps = {
  slug: string;
  name: string;
  category: string;
};

export default function ProductAnalyticsTracker({
  slug,
  name,
  category,
}: ProductAnalyticsTrackerProps) {
  useEffect(() => {
    const sendViewItem = () => {
      trackEvent("view_item", {
        items: [
          {
            item_id: slug,
            item_name: name,
            item_category: category,
          },
        ],
      });
    };

    sendViewItem();
    window.addEventListener("linhao-consent-accepted", sendViewItem);
    return () => window.removeEventListener("linhao-consent-accepted", sendViewItem);
  }, [category, name, slug]);

  return null;
}
