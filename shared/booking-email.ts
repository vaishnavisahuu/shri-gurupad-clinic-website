export type BookingPayload = {
  source: string;
  fields: Record<string, string>;
};

type BookingResult = {
  status: number;
  message: string;
};

const MAX_FIELDS = 30;
const MAX_FIELD_NAME_LENGTH = 80;
const MAX_FIELD_VALUE_LENGTH = 2000;
const MAX_TOTAL_LENGTH = 10000;
const BOOKING_RECIPIENT = "vaishnavisahuu@gmail.com";

export function parseBookingPayload(value: unknown): BookingPayload | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const input = value as Record<string, unknown>;
  if (!input.fields || typeof input.fields !== "object" || Array.isArray(input.fields)) return null;
  if (typeof input.website === "string" && input.website.trim()) return null;

  const entries = Object.entries(input.fields as Record<string, unknown>);
  if (entries.length === 0 || entries.length > MAX_FIELDS) return null;

  const fields: Record<string, string> = {};
  let totalLength = 0;
  for (const [key, rawValue] of entries) {
    if (typeof rawValue !== "string") continue;
    const name = key.trim().slice(0, MAX_FIELD_NAME_LENGTH);
    const fieldValue = rawValue.trim();
    if (!name || fieldValue.length > MAX_FIELD_VALUE_LENGTH) return null;
    if (name.toLowerCase() === "website") {
      if (fieldValue) return null;
      continue;
    }
    totalLength += name.length + fieldValue.length;
    if (totalLength > MAX_TOTAL_LENGTH) return null;
    fields[name] = fieldValue;
  }

  if (Object.keys(fields).length < 2) return null;
  const source = typeof input.source === "string" ? input.source.trim().slice(0, 120) : "Website booking form";
  return { source: source || "Website booking form", fields };
}

export async function sendBookingEmail(value: unknown): Promise<BookingResult> {
  const booking = parseBookingPayload(value);
  if (!booking) return { status: 400, message: "Please check the form details and try again." };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Booking email is not configured: RESEND_API_KEY and RESEND_FROM_EMAIL are required.");
    return { status: 503, message: "Booking email is temporarily unavailable. Please call the clinic instead." };
  }

  const details = Object.entries(booking.fields)
    .map(([key, fieldValue]) => `${key}: ${fieldValue || "Not provided"}`)
    .join("\n");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [BOOKING_RECIPIENT],
      subject: `New appointment booking — ${booking.source}`,
      text: `A new appointment booking was submitted on the clinic website.\n\nForm: ${booking.source}\n\n${details}`,
    }),
  }).catch((error: unknown) => {
    console.error("Booking email delivery request failed.", error);
    return null;
  });

  if (!response) return { status: 502, message: "We couldn't send your request. Please try again or call the clinic." };
  if (!response.ok) {
    console.error(`Booking email provider returned HTTP ${response.status}.`);
    return { status: 502, message: "We couldn't send your request. Please try again or call the clinic." };
  }

  return { status: 200, message: "Your booking request was sent. The clinic will contact you shortly." };
}
