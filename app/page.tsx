"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t, projects } = useLanguage();
  const featured = projects.find((p) => p.featured)!;
  const recent = projects.filter((p) => !p.featured).slice(0, 3);

  return (
    <>
      <ParallaxHero />

      <section className="page-section compact">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <Sparkles size={16} />
              {t.home.featuredLabel}
            </div>
            <h2>{t.home.featuredTitle}</h2>
          </div>
          <p>{t.home.featuredCopy}</p>
        </div>

        <div className="featured-grid">
          <Link href={`/projects/${featured.slug}`} className="project-card featured-card">
            <div className="card-head">
              <div>
                <span className="project-index">{featured.index}</span>
                <h3>{featured.name}</h3>
              </div>
              <span className={`tag tag-${featured.type}`}>{featured.typeLabel}</span>
            </div>
            <p>{featured.short}</p>
            <div className="stack-list">
              {featured.stack.slice(0, 7).map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
            <span className="card-link">
              {t.home.viewCaseStudy} <ArrowRight size={17} />
            </span>
          </Link>

          <div className="neo-card case-visual" aria-hidden="true">
            <div className="case-window">
              <div className="case-screen">
                <div className="chat-row">
                  <span className="chat-dot" />
                  <span className="chat-bubble" />
                </div>
                <div className="chat-row">
                  <span className="chat-dot" style={{ background: "var(--accent-3)" }} />
                  <span className="chat-bubble" style={{ minHeight: 86 }} />
                </div>
                <div className="signal-bars" style={{ height: 116 }}>
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "74%" }} />
                  <span style={{ height: "52%" }} />
                  <span style={{ height: "88%" }} />
                  <span style={{ height: "64%" }} />
                  <span style={{ height: "92%" }} />
                </div>
                <div className="stack-list">
                  <span className="skill-pill">STT</span>
                  <span className="skill-pill">RAG</span>
                  <span className="skill-pill">LLM</span>
                  <span className="skill-pill">TTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section compact">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <BriefcaseBusiness size={16} />
              {t.home.recentLabel}
            </div>
            <h2>{t.home.recentTitle}</h2>
          </div>
          <Link href="/projects" className="btn-muted">
            {t.home.allProjects} <ArrowRight size={17} />
          </Link>
        </div>

        <div className="project-grid">
          {recent.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card">
              <span className="project-index">{project.index}</span>
              <div className="card-head">
                <h3>{project.name}</h3>
                <span className={`tag tag-${project.type}`}>{project.typeLabel}</span>
              </div>
              <p>{project.short}</p>
              <div className="stack-list">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section compact">
        <div className="bio-band">
          <div>
            <div className="section-label">{t.home.profileLabel}</div>
            <h2>{t.home.bioTitle}</h2>
            <p>{t.home.bioCopy}</p>
          </div>
          <div className="button-row" style={{ marginTop: 0 }}>
            <Link href="/about" className="btn-ghost">
              {t.home.profile} <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="btn-primary">
              {t.home.contact} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
