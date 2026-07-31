"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "declined" | null;

function updateGoogleConsent(choice: Exclude<ConsentChoice, null>) {
  if (!window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: choice === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function ConsentBanner() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(
      "linhao_analytics_consent",
    ) as ConsentChoice;
    if (stored === "accepted" || stored === "declined") {
      setChoice(stored);
      updateGoogleConsent(stored);
    }
    setReady(true);
  }, []);

  function save(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem("linhao_analytics_consent", nextChoice);
    setChoice(nextChoice);
    setEditing(false);
    updateGoogleConsent(nextChoice);

    if (nextChoice === "accepted") {
      window.dispatchEvent(new Event("linhao-consent-accepted"));
    }
  }

  if (!ready) return null;

  if (choice && !editing) {
    return (
      <button
        className="privacy-settings-button"
        type="button"
        onClick={() => setEditing(true)}
      >
        Privacy settings
      </button>
    );
  }

  return (
    <aside className="consent-banner" aria-label="Analytics privacy choices">
      <div>
        <b>Analytics privacy</b>
        <p>
          We use optional Google Analytics to understand which products and
          buyer resources are useful. It is off until you choose “Allow
          analytics.” See our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="consent-decline" onClick={() => save("declined")}>
          Necessary only
        </button>
        <button type="button" className="consent-accept" onClick={() => save("accepted")}>
          Allow analytics
        </button>
      </div>
    </aside>
  );
}
