import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Robin Tokarsky - Full-stack Developer",
  description:
    "Portfolio of Robin Tokarsky, a full-stack developer focused on React, TypeScript, Python, AI integrations, and product-minded web apps.",
  openGraph: {
    title: "Robin Tokarsky - Full-stack Developer",
    description: "Full-stack developer focused on tactile web apps and AI integrations.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
