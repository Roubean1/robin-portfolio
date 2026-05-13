"use client";

import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Mail,
  Mic,
  Sparkles,
  Volume2,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function ParallaxHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top, -120), 520);
      section.style.setProperty("--scroll", `${progress}px`);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      section.style.setProperty("--mx", `${x}px`);
      section.style.setProperty("--my", `${y}px`);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    section.addEventListener("pointermove", onPointerMove);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      section.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <div className="hero-inner">
        <div>
          <div className="eyebrow">
            <Sparkles size={16} />
            Full-stack developer
          </div>
          <h1 className="hero-title">
            Tactile web apps with AI under the hood.
          </h1>
          <p className="hero-copy">
            I build React, TypeScript, Python, and Three.js products that feel clear,
            polished, and useful. Current focus: AI integrations, RAG pipelines, and
            interfaces that make complex systems feel simple.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="btn-primary">
              View projects <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-ghost">
              <Mail size={18} /> Get in touch
            </Link>
            <Link
              href="https://github.com/Roubean1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-muted"
            >
              <Github size={18} /> GitHub
            </Link>
          </div>

          <div className="hero-meta" aria-label="Portfolio highlights">
            <div className="metric-card">
              <span className="metric-number">6+</span>
              <span className="metric-label">projects across AI, web, and graphics</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">3</span>
              <span className="metric-label">internships in real product teams</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">BSc</span>
              <span className="metric-label">informatics, VSB-TUO</span>
            </div>
          </div>
        </div>

        <div className="parallax-stage" aria-hidden="true">
          <div className="soft-plate one parallax-layer" />
          <div className="soft-plate two parallax-layer" />

          <div className="dashboard-shell parallax-layer">
            <div className="dashboard-topbar">
              <span>portfolio system</span>
              <Code2 size={18} />
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-card tall">
                <h2 className="card-title">Voice RAG Avatar</h2>
                <p className="mini-copy">
                  Speech, retrieval, language model output, generated voice, lipsync,
                  and emotion animation in one full-stack thesis.
                </p>

                <div className="pipeline">
                  <div className="pipeline-step">
                    <span className="pipeline-icon" style={{ background: "var(--accent)" }}>
                      <Mic size={16} />
                    </span>
                    Whisper STT
                  </div>
                  <div className="pipeline-step">
                    <span className="pipeline-icon" style={{ background: "var(--accent-3)" }}>
                      <Database size={16} />
                    </span>
                    Vector context
                  </div>
                  <div className="pipeline-step">
                    <span className="pipeline-icon" style={{ background: "var(--accent-4)" }}>
                      <BrainCircuit size={16} />
                    </span>
                    LLM response
                  </div>
                  <div className="pipeline-step">
                    <span className="pipeline-icon" style={{ background: "var(--accent-2)" }}>
                      <Volume2 size={16} />
                    </span>
                    TTS + lipsync
                  </div>
                </div>
              </div>

              <div>
                <div className="dashboard-card">
                  <h2 className="card-title">Stack</h2>
                  <div className="stack-list" style={{ marginTop: 0 }}>
                    <span className="skill-pill">React</span>
                    <span className="skill-pill">Next.js</span>
                    <span className="skill-pill">FastAPI</span>
                    <span className="skill-pill">Three.js</span>
                  </div>
                </div>

                <div className="dashboard-card" style={{ marginTop: "0.9rem" }}>
                  <h2 className="card-title">Signal</h2>
                  <div className="signal-bars">
                    <span style={{ height: "28%" }} />
                    <span style={{ height: "54%" }} />
                    <span style={{ height: "38%" }} />
                    <span style={{ height: "72%" }} />
                    <span style={{ height: "86%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="focus-card parallax-layer">
            <div className="contact-icon" style={{ background: "var(--accent-3)", marginBottom: "0.8rem" }}>
              <AudioLines size={20} />
            </div>
            <h2 className="card-title">Open to work</h2>
            <p className="mini-copy">Full-time roles, internships, and focused web projects.</p>
          </div>

          <div className="code-tile parallax-layer">
            <h2 className="card-title">ship.tsx</h2>
            <p className="mini-copy">
              product thinking
              <br />
              clean architecture
              <br />
              useful AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
