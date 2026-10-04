import type { Plugin } from "vite";
import { sendBookingEmail } from "../shared/booking-email";

export function vitePluginBookingEmail(): Plugin {
  return {
    name: "booking-email",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.split("?")[0] !== "/api/bookings") {
          next();
          return;
        }
        if (req.method !== "POST") {
          res.setHeader("Allow", "POST");
          res.writeHead(405, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Method not allowed." }));
          return;
        }

        let rawBody = "";
        try {
          for await (const chunk of req) {
            rawBody += chunk.toString();
            if (rawBody.length > 12000) {
              res.writeHead(413, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ message: "The form submission is too large." }));
              return;
            }
          }

          let payload: unknown;
          try {
            payload = JSON.parse(rawBody);
          } catch {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid form submission." }));
            return;
          }

          const result = await sendBookingEmail(payload);
          res.writeHead(result.status, {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
          });
          res.end(JSON.stringify({ message: result.message }));
        } catch (error) {
          console.error("Booking email development endpoint failed.", error);
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "We couldn't send your request. Please try again or call the clinic." }));
        }
      });
    },
  };
}
