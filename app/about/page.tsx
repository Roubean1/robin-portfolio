"use client";

import Image from "next/image";
import { GraduationCap, Layers3, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t, education, experience, skills } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="about-grid">
          <div>
            <div className="page-kicker">
              <Sparkles size={16} />
              {t.about.label}
            </div>
            <h1 className="page-title">
              Robin <span className="accent-text">Tokarský</span>
            </h1>
            <p className="lede">{t.about.intro}</p>

            <div className="content-copy" style={{ marginTop: "2rem" }}>
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="stat-row">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="profile-card" aria-label={t.about.profilePhoto}>
            <div className="profile-frame">
              <Image
                src="/profile.jpg"
                alt="Robin Tokarsky"
                fill
                priority
                sizes="(max-width: 1050px) 100vw, 360px"
              />
            </div>
            <div className="profile-caption">
              <span>{t.about.location}</span>
              <span>{t.about.openToWork}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section compact">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <Layers3 size={16} />
              {t.about.skillsLabel}
            </div>
            <h2>{t.about.skillsTitle}</h2>
          </div>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h3>{category}</h3>
              <div className="stack-list" style={{ marginTop: 0 }}>
                {items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section compact">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <Sparkles size={16} />
              {t.about.experienceLabel}
            </div>
            <h2>{t.about.experienceTitle}</h2>
          </div>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.period}-${item.company}`} className="timeline-card">
              <div>
                <div className="timeline-meta">{item.period}</div>
                <div className="timeline-location">{item.location}</div>
              </div>
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <ul className="clean-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section compact">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <GraduationCap size={16} />
              {t.about.educationLabel}
            </div>
            <h2>{t.about.educationTitle}</h2>
          </div>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article key={`${item.period}-${item.school}`} className="timeline-card">
              <div>
                <div className="timeline-meta">{item.period}</div>
              </div>
              <div>
                <h3>{item.degree}</h3>
                <h4>{item.school}</h4>
                <p className="mini-copy">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
