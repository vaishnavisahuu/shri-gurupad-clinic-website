import type { IncomingMessage, ServerResponse } from "node:http";
import { sendBookingEmail } from "../shared/booking-email.js";

type BookingRequest = IncomingMessage & { body?: unknown };

export default async function handler(req: BookingRequest, res: ServerResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.statusCode = 405;
    res.end(JSON.stringify({ message: "Method not allowed." }));
    return;
  }

  let body = req.body;
  if (body === undefined) {
    let rawBody = "";
    for await (const chunk of req) {
      rawBody += chunk.toString();
      if (rawBody.length > 12000) {
        res.statusCode = 413;
        res.end(JSON.stringify({ message: "The form submission is too large." }));
        return;
      }
    }
    try {
      body = JSON.parse(rawBody);
    } catch {
      res.statusCode = 400;
      res.end(JSON.stringify({ message: "Invalid form submission." }));
      return;
    }
  }

  const result = await sendBookingEmail(body);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.statusCode = result.status;
  res.end(JSON.stringify({ message: result.message }));
}
