import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/Nav";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Robin Tokarsky - Technical Portfolio",
  description:
    "Technical portfolio and CV overview of Robin Tokarsky: projects, internships, education, React, TypeScript, Python, FastAPI, Three.js, and AI integrations.",
  openGraph: {
    title: "Robin Tokarsky - Technical Portfolio",
    description: "Projects, internships, education, full-stack development, and AI integrations.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Nav />
          <main className="site-main">{children}</main>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
