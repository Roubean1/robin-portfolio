import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="page-kicker">
          <FolderKanban size={16} />
          Projects
        </div>
        <h1 className="page-title">Work shaped into case studies.</h1>
        <p className="lede">
          Thesis, internship work, school projects, and older personal builds. The range
          is intentionally visible: AI systems, team products, graphics, backend APIs,
          and classic web fundamentals.
        </p>
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
