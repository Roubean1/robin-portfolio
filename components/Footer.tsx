"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-name">Robin Tokarsky</div>
          <div className="footer-sub">{t.footer.subtitle}</div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/projects">{t.nav.projects}</Link>
          <Link href="/about">{t.nav.profile}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
          <Link href="https://github.com/Roubean1" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </nav>

        <div className="footer-sub">{t.footer.built}</div>
      </div>
    </footer>
  );
}
