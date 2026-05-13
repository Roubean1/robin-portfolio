import Image from "next/image";
import { GraduationCap, Layers3, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { education, experience, skills } from "@/lib/data";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="about-grid">
          <div>
            <div className="page-kicker">
              <Sparkles size={16} />
              Profile
            </div>
            <h1 className="page-title">
              Robin <span className="accent-text">Tokarsky</span>
            </h1>
            <p className="lede">
              Full-stack developer from Ostrava, currently finishing Informatics at
              VSB-TUO. I like practical products, clear interfaces, and AI systems that
              solve real user problems instead of just looking impressive in a demo.
            </p>

            <div className="content-copy" style={{ marginTop: "2rem" }}>
              <p>
                My Bachelor thesis is a voice-enabled 3D avatar backed by a full AI
                pipeline: Whisper speech recognition, retrieval augmented generation,
                language model responses, ElevenLabs voice output, and Three.js lipsync
                with emotion-driven animation.
              </p>
              <p>
                I have worked through three internships, contributed to an open-source
                Slack polling app, and built projects across C, C++, PHP, React,
                TypeScript, Python, OpenGL, and Firebase.
              </p>
            </div>

            <div className="stat-row">
              <div className="stat-card">
                <strong>3</strong>
                <span>internships</span>
              </div>
              <div className="stat-card">
                <strong>6+</strong>
                <span>portfolio projects</span>
              </div>
              <div className="stat-card">
                <strong>B2</strong>
                <span>English level</span>
              </div>
            </div>
          </div>

          <aside className="profile-card" aria-label="Profile photo">
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
              <span>Ostrava, CZ</span>
              <span>Open to work</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-section compact">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <Layers3 size={16} />
              Skills
            </div>
            <h2>Stack I can actually ship with.</h2>
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
              Experience
            </div>
            <h2>Internships and product work.</h2>
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
              Education
            </div>
            <h2>Formal path and exchange semester.</h2>
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
