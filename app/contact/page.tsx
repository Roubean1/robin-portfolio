"use client";

import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

const channels = [
  {
    value: "r.tokarsky@seznam.cz",
    href: "mailto:r.tokarsky@seznam.cz",
    accent: "var(--accent)",
    icon: Mail,
  },
  {
    value: "github.com/Roubean1",
    href: "https://github.com/Roubean1",
    accent: "var(--text)",
    icon: Github,
  },
  {
    value: "linkedin.com/in/robintokarsky",
    href: "https://cz.linkedin.com/in/robin-tokarsk%C3%BD-794546211",
    accent: "var(--accent-3)",
    icon: Linkedin,
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="page-kicker">
          <MessageCircle size={16} />
          {t.contact.label}
        </div>
        <h1 className="page-title">{t.contact.title}</h1>
        <p className="lede">{t.contact.copy}</p>
      </section>

      <section className="page-section compact">
        <div className="contact-grid">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            const copy = t.contact.channels[index];
            return (
              <a
                key={copy.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-card"
              >
                <span className="contact-icon" style={{ background: channel.accent }}>
                  <Icon size={21} />
                </span>
                <h2>{copy.label}</h2>
                <p>{channel.value}</p>
                <span className="card-link">
                  {copy.note} <ArrowRight size={16} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="availability-panel">
          <span className="status-dot" />
          <div>
            <h2>{t.contact.availableTitle}</h2>
            <p>{t.contact.availableCopy}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
