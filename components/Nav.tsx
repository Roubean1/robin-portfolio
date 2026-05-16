"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.profile },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="brand-mark" aria-label={t.nav.brandLabel}>
          <span className="brand-badge">RT</span>
          <span>
            Robin <span className="brand-sub">{t.nav.brandSub}</span>
          </span>
        </Link>

        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link className={`nav-link ${active ? "is-active" : ""}`} href={href}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-status">
          <span className="status-dot" />
          {t.nav.status}
        </div>

        <button
          className="language-switch"
          type="button"
          role="switch"
          aria-label={t.nav.languageLabel}
          aria-checked={language === "cz"}
          onClick={() => setLanguage(language === "en" ? "cz" : "en")}
        >
          <span className={language === "en" ? "is-active" : ""}>EN</span>
          <span className={language === "cz" ? "is-active" : ""}>CZ</span>
        </button>

        <button
          className="nav-menu-button"
          type="button"
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}
