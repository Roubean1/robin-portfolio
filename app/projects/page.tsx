"use client";

import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t, projects } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="page-kicker">
          <FolderKanban size={16} />
          {t.projectsPage.label}
        </div>
        <h1 className="page-title">{t.projectsPage.title}</h1>
        <p className="lede">{t.projectsPage.copy}</p>
      </section>

      <section className="page-section compact">
        <div className="project-list">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card project-row">
              <span className="project-index">{project.index}</span>
              <div>
                <div className="card-head" style={{ marginBottom: 0 }}>
                  <h2>{project.name}</h2>
                  <span className={`tag tag-${project.type}`}>{project.typeLabel}</span>
                </div>
                <p>{project.short}</p>
                <div className="stack-list">
                  {project.stack.slice(0, 6).map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                  {project.stack.length > 6 ? (
                    <span className="skill-pill">+{project.stack.length - 6}</span>
                  ) : null}
                </div>
              </div>
              <span className="btn-muted" aria-hidden="true">
                <ArrowRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
