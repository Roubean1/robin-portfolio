import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

const channels = [
  {
    label: "Email",
    value: "robin.tokarsky@gmail.com",
    href: "mailto:robin.tokarsky@gmail.com",
    note: "Fastest response",
    accent: "var(--accent)",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Roubean1",
    href: "https://github.com/Roubean1",
    note: "Code and projects",
    accent: "var(--text)",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/robintokarsky",
    href: "https://linkedin.com/in/robintokarsky",
    note: "Professional profile",
    accent: "var(--accent-3)",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="page-kicker">
          <MessageCircle size={16} />
          Contact
        </div>
        <h1 className="page-title">
          Let&apos;s build something calm, useful, and polished.
        </h1>
        <p className="lede">
          I am open to full-time roles, internships, and focused freelance projects.
          Send the context, the problem, or the repo, and I will reply with a practical
          next step.
        </p>
      </section>

      <section className="page-section compact">
        <div className="contact-grid">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-card"
              >
                <span className="contact-icon" style={{ background: channel.accent }}>
                  <Icon size={21} />
                </span>
                <h2>{channel.label}</h2>
                <p>{channel.value}</p>
                <span className="card-link">
                  {channel.note} <ArrowRight size={16} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="availability-panel">
          <span className="status-dot" />
          <div>
            <h2>Currently available</h2>
            <p>Open to full-time positions, internships, and contract work starting ASAP.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
