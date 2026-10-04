# Booking form behavior

The homepage and Appointment page booking forms open WhatsApp with a pre-filled appointment message to `+91 7999771845`. Patients review and send the message themselves. Form submissions are not sent to Resend or stored in a database.

The existing Resend endpoint remains available but is not used by the booking forms. The WhatsApp booking flow requires no API key or mail configuration.

If the email feature is intentionally retired later, its unused pieces can be removed together: `api/bookings.ts`, `shared/booking-email.ts`, `server/booking-vite-plugin.ts`, and `vite.booking.config.ts`, along with the booking plugin import in `vite.config.ts` and the `dev` script/config references in `package.json`. Then remove `RESEND_API_KEY` and `RESEND_FROM_EMAIL` from local and Vercel environment settings if no other feature uses them. They are kept for now and are not exposed to the browser.
