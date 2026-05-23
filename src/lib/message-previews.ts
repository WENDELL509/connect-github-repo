import { FIRMS } from "@/lib/firms";

export const SEED_PREVIEWS: Record<string, { text: string; time: string; unread?: boolean }> = {
  vedua: { text: "Booking received — we'll confirm schedule by tomorrow.", time: "now", unread: true },
};

export const FALLBACK_PREVIEWS = [
  { text: "Thanks for reaching out. Sending the quote shortly.", time: "2h" },
  { text: "We're available this Friday for the site visit.", time: "1d" },
  { text: "Could you share the lot's TCT number?", time: "2d" },
  { text: "Survey completed — drafting the plan now.", time: "3d" },
  { text: "Welcome to Falcon. How can we help?", time: "5d" },
];

export function getPreviewFor(firmId: string) {
  if (SEED_PREVIEWS[firmId]) return SEED_PREVIEWS[firmId];
  const idx = FIRMS.findIndex((f) => f.id === firmId);
  return FALLBACK_PREVIEWS[(idx >= 0 ? idx : 0) % FALLBACK_PREVIEWS.length];
}
