"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Github, Layers3 } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { t, projects } = useLanguage();
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      <section className="page-hero">
        <Link href="/projects" className="btn-muted" style={{ marginBottom: "2rem" }}>
          <ArrowLeft size={17} /> {t.projectDetail.allProjects}
        </Link>

        <div className="card-head">
          <div>
            <div className="page-kicker">{project.index}</div>
            <h1 className="page-title">{project.name}</h1>
          </div>
          <span className={`tag tag-${project.type}`}>{project.typeLabel}</span>
        </div>

        <p className="lede">{project.short}</p>
      </section>

      <section className="page-section compact">
        <div className="detail-grid">
          <article className="detail-panel">
            <div className="section-label">
              <Layers3 size={16} />
              {t.projectDetail.overview}
            </div>
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {project.highlights ? (
              <>
                <div className="section-label" style={{ marginTop: "2rem" }}>
                  <CheckCircle2 size={16} />
                  {t.projectDetail.highlights}
                </div>
                <ul className="clean-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </article>

          <aside className="detail-sidebar">
            <div className="detail-panel">
              <h2>{t.projectDetail.techStack}</h2>
              <div className="stack-list" style={{ marginTop: 0 }}>
                {project.stack.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github size={18} /> {t.projectDetail.github}
              </Link>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="page-section compact">
        <div className="soft-divider" />
        <div className="prev-next">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="btn-muted">
              <ArrowLeft size={17} /> {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/projects/${next.slug}`} className="btn-muted">
              {next.name} <ArrowRight size={17} />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
