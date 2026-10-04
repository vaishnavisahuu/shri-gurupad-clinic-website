import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import { vitePluginBookingEmail } from "./server/booking-vite-plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, "RESEND_");
  if (!process.env.RESEND_API_KEY && env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  if (!process.env.RESEND_FROM_EMAIL && env.RESEND_FROM_EMAIL) process.env.RESEND_FROM_EMAIL = env.RESEND_FROM_EMAIL;

  return {
    root: path.resolve(import.meta.dirname, "dist/public"),
    plugins: [vitePluginBookingEmail()],
    server: {
      host: true,
    },
  };
});
