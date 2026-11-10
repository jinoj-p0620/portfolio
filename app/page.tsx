import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { certifications, education, experience, profile, projects, skills, stats } from "@/lib/data";

function SectionHeading({ tag, title, desc }: { tag: string; title: string; desc?: string }) {
  return (
    <Reveal className="section__head">
      <p className="eyebrow">{tag}</p>
      <h2>{title}</h2>
      {desc && <p className="section__desc">{desc}</p>}
    </Reveal>
  );
}

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__grid" aria-hidden />
          <div className="hero__glow" aria-hidden />
          <div className="container hero__inner">
            <div>
              <p className="hero__status">
                <span className="dot" /> Software Engineer @ Earthians Health Informatics
              </p>
              <h1 className="hero__name">{profile.name}</h1>
              <p className="hero__role">{profile.role}</p>
              <p className="hero__tagline">{profile.tagline}</p>
              <div className="hero__actions">
                <a href="#projects" className="btn btn--primary">
                  View projects
                </a>
                <a href="#contact" className="btn btn--ghost">
                  Get in touch
                </a>
              </div>
            </div>
            <ul className="stats">
              {stats.map((s) => (
                <li key={s.label} className="stat">
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section--alt">
          <div className="container about">
            <div>
              <SectionHeading tag="About" title="From models to production systems" />
              <Reveal className="about__text">
                {profile.summary.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
            </div>
            <Reveal className="facts" delay={100}>
              <div className="fact">
                <span className="fact__label">Current role</span>
                <span className="fact__value">Software Engineer · Earthians Health Informatics</span>
              </div>
              <div className="fact">
                <span className="fact__label">Focus</span>
                <span className="fact__value">Computer vision · Audio · Biosignals · Health informatics</span>
              </div>
              <div className="fact">
                <span className="fact__label">Education</span>
                <span className="fact__value">MCA — AI, ML & Data Science · Yenepoya University</span>
              </div>
              <div className="fact">
                <span className="fact__label">Location</span>
                <span className="fact__value">{profile.location}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="container">
            <SectionHeading
              tag="Experience"
              title="Where I've worked"
              desc="Shipping ML features end to end — from data preparation to deployed APIs and healthcare platforms."
            />
            <ol className="timeline">
              {experience.map((job, i) => (
                <Reveal as="li" key={job.company + job.period} className="timeline__item" delay={i * 60}>
                  <div className="timeline__meta">
                    <span className={`timeline__period ${job.current ? "is-current" : ""}`}>{job.period}</span>
                    <span className="timeline__location">{job.location}</span>
                  </div>
                  <div className="card timeline__card">
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                    <ul className="bullets">
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section section--alt">
          <div className="container">
            <SectionHeading
              tag="Projects"
              title="Selected work"
              desc="Deep learning systems built end to end, from dataset to trained model to web app."
            />
            <div className="projects">
              {projects.map((p, i) => (
                <Reveal as="article" key={p.title} className="card project" delay={i * 80}>
                  <div className="project__top">
                    <span className="project__index">0{i + 1}</span>
                    <div className="project__metric">
                      <span className="project__metric-value">{p.metric.value}</span>
                      <span className="project__metric-label">{p.metric.label}</span>
                    </div>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="project__subtitle">{p.subtitle}</p>
                  <ul className="bullets bullets--compact">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="project__link">
                    View on GitHub <ArrowUpRight />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container">
            <SectionHeading tag="Skills" title="Technical toolkit" />
            <div className="skills">
              {skills.map((s, i) => (
                <Reveal key={s.group} className="card skill" delay={i * 50}>
                  <h3>{s.group}</h3>
                  <div className="tags">
                    {s.items.map((it) => (
                      <span key={it} className="tag">
                        {it}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTS */}
        <section id="education" className="section section--alt">
          <div className="container">
            <SectionHeading tag="Education" title="Education & certifications" />
            <div className="edu">
              <div className="edu__col">
                {education.map((e, i) => (
                  <Reveal key={e.degree} className="card edu__item" delay={i * 60}>
                    <span className="edu__period">{e.period}</span>
                    <h3>{e.degree}</h3>
                    {e.focus && <p className="edu__focus">{e.focus}</p>}
                    <p className="edu__school">{e.school}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal className="certs" delay={100}>
                {certifications.map((c) => (
                  <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer" className="cert">
                    <div>
                      <span className="cert__name">{c.name}</span>
                      <span className="cert__issuer">{c.issuer}</span>
                    </div>
                    <span className="cert__verify">
                      Verify <ArrowUpRight />
                    </span>
                  </a>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="container">
            <Reveal className="contact__box">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something together</h2>
              <p className="section__desc">
                Open to roles, collaborations and interesting problems in applied AI and health tech.
              </p>
              <div className="contact__links">
                <a href={`mailto:${profile.email}`} className="btn btn--primary">
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  LinkedIn <ArrowUpRight />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  GitHub <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {year} Jinoj P</span>
          <span>AI Engineer · Kochi, Kerala</span>
        </div>
      </footer>
    </>
  );
}
