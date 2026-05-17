"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Github,
  Globe2,
  Images,
  Layers3,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { t, projects } = useLanguage();
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [imageZoom, setImageZoom] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const activeImage = activeImageIndex === null ? null : project.gallery?.[activeImageIndex];
  const galleryCount = project.gallery?.length ?? 0;

  const showPreviousImage = () => {
    if (!galleryCount) return;
    setActiveImageIndex((current) => (current === null ? 0 : (current - 1 + galleryCount) % galleryCount));
  };

  const showNextImage = () => {
    if (!galleryCount) return;
    setActiveImageIndex((current) => (current === null ? 0 : (current + 1) % galleryCount));
  };

  const showControls = () => setControlsVisible(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImageIndex(null);
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImageIndex, galleryCount]);

  useEffect(() => {
    if (activeImageIndex === null) return;
    setImageZoom(1);
    setControlsVisible(true);
  }, [activeImageIndex]);

  useEffect(() => {
    if (activeImageIndex === null || !controlsVisible) return;

    const timeout = window.setTimeout(() => setControlsVisible(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [activeImageIndex, controlsVisible, imageZoom]);

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

            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Globe2 size={18} /> {t.projectDetail.liveSite}
              </Link>
            ) : null}
          </aside>
        </div>
      </section>

      {project.gallery?.length ? (
        <section className="page-section compact">
          <div className="section-label">
            <Images size={16} />
            {t.projectDetail.gallery}
          </div>
          <div className="project-gallery">
            {project.gallery.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                className="gallery-item"
                onClick={() => setActiveImageIndex(imageIndex)}
                aria-label={`${t.projectDetail.gallery}: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {activeImage && isMounted
        ? createPortal(
        <div
          className={`gallery-lightbox ${controlsVisible ? "controls-visible" : "controls-hidden"}`}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onMouseMove={showControls}
          onTouchStart={showControls}
          onClick={() => setActiveImageIndex(null)}
        >
          <div className="lightbox-toolbar" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-counter">
              <span>{activeImage.alt}</span>
              <span>
                {(activeImageIndex ?? 0) + 1} / {galleryCount}
              </span>
            </div>

            <div className="lightbox-controls">
              {galleryCount > 1 ? (
                <button
                  type="button"
                  className="lightbox-control"
                  onClick={showPreviousImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
              ) : null}

              <button
                type="button"
                className="lightbox-control"
                onClick={() => setImageZoom((current) => Math.max(0.65, Number((current - 0.15).toFixed(2))))}
                aria-label="Zoom out"
              >
                <Minus size={18} />
              </button>

              <span className="lightbox-zoom">{Math.round(imageZoom * 100)}%</span>

              <button
                type="button"
                className="lightbox-control"
                onClick={() => setImageZoom((current) => Math.min(2.25, Number((current + 0.15).toFixed(2))))}
                aria-label="Zoom in"
              >
                <Plus size={18} />
              </button>

              <button
                type="button"
                className="lightbox-control"
                onClick={() => setImageZoom(1)}
                aria-label="Reset zoom"
              >
                <RotateCcw size={18} />
              </button>

              {galleryCount > 1 ? (
                <button
                  type="button"
                  className="lightbox-control"
                  onClick={showNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              ) : null}

              <button
                type="button"
                className="lightbox-return"
                onClick={() => setActiveImageIndex(null)}
              >
                <X size={18} />
                {t.projectDetail.closeGallery}
              </button>
            </div>
          </div>

          <div className="lightbox-stage">
            <figure className="lightbox-frame" onClick={(event) => event.stopPropagation()}>
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                style={{ transform: `scale(${imageZoom})` }}
              />
            </figure>
          </div>

        </div>
          ,
          document.body,
        )
        : null}

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
