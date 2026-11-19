export type AiTrafficSource = {
  platform: string;
  basis: "referrer" | "campaign" | "unidentified";
};

const aiHosts: ReadonlyArray<readonly [string, string]> = [
  ["chatgpt.com", "ChatGPT"],
  ["chat.openai.com", "ChatGPT"],
  ["perplexity.ai", "Perplexity"],
  ["claude.ai", "Claude"],
  ["gemini.google.com", "Gemini"],
  ["copilot.microsoft.com", "Microsoft Copilot"],
];

const campaignNames: Record<string, string> = {
  chatgpt: "ChatGPT", "chatgpt.com": "ChatGPT",
  perplexity: "Perplexity", "perplexity.ai": "Perplexity",
  claude: "Claude", "claude.ai": "Claude",
  gemini: "Gemini", "gemini.google.com": "Gemini",
  copilot: "Microsoft Copilot", "copilot.microsoft.com": "Microsoft Copilot",
};

// Report available attribution signals, not proof that an AI recommended the business.
export function identifyAiTrafficSource(referrerHost = "", utmSource = ""): AiTrafficSource {
  const host = referrerHost.trim().toLowerCase().replace(/\.$/, "");
  if (/^[a-z0-9.-]+$/.test(host)) {
    const match = aiHosts.find(([domain]) => host === domain || host.endsWith(`.${domain}`));
    if (match) return { platform: match[1], basis: "referrer" };
  }
  const campaign = utmSource.trim().toLowerCase();
  if (Object.hasOwn(campaignNames, campaign)) {
    return { platform: campaignNames[campaign], basis: "campaign" };
  }
  return { platform: "Not identified", basis: "unidentified" };
}

export function describeAiTrafficSource(referrerHost = "", utmSource = "") {
  const result = identifyAiTrafficSource(referrerHost, utmSource);
  if (result.basis === "referrer") return `${result.platform} — reported referrer; recommendation not verified`;
  if (result.basis === "campaign") return `${result.platform} — UTM source label only; referral not verified`;
  return "Not identified — missing or non-AI source does not rule out an AI-assisted visit";
}
