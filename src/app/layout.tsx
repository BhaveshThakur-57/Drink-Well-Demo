import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrinkWell Customs — Premium Branded Water Bottles for Businesses & Events",
  description: "Turn every water bottle into a marketing asset. Custom branding, printing, filling and bulk delivery for hotels, restaurants, weddings, corporate events and more.",
  keywords: "custom branded water bottles, branded water, event water bottles, corporate water branding, custom label water, bulk water delivery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
