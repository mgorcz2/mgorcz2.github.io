import { useMemo, useState } from 'react'
import './App.css'
import Lightbox from './components/Lightbox.jsx'
import * as pl from './data/portfolio.js'
import * as en from './data/portfolio.en.js'

function App() {
  const [lang, setLang] = useState('pl')
  const [isLangSwitching, setIsLangSwitching] = useState(false)
  const [lightbox, setLightbox] = useState({ open: false, projectId: null, index: 0 })

  const data = lang === 'pl' ? pl : en
  const { experience, profile, projects, skills, ui } = data

  const activeProject = useMemo(
    () => projects.find((p) => p.id === lightbox.projectId) ?? null,
    [lightbox.projectId],
  )

  function openGallery(projectId, index = 0) {
    setLightbox({ open: true, projectId, index })
  }

  function closeGallery() {
    setLightbox({ open: false, projectId: null, index: 0 })
  }

  function prevImage() {
    const total = activeProject?.images?.length ?? 0
    if (!total) return
    setLightbox((s) => ({ ...s, index: (s.index - 1 + total) % total }))
  }

  function nextImage() {
    const total = activeProject?.images?.length ?? 0
    if (!total) return
    setLightbox((s) => ({ ...s, index: (s.index + 1) % total }))
  }

  function toggleLang() {
    if (isLangSwitching) return

    const next = lang === 'pl' ? 'en' : 'pl'
    setIsLangSwitching(true)

    // Show overlay, then swap language mid-animation.
    window.setTimeout(() => setLang(next), 120)
    window.setTimeout(() => setIsLangSwitching(false), 340)
  }

  return (
    <div className="page">
      {isLangSwitching ? <div className="langOverlay" aria-hidden="true" /> : null}
      <header className="nav">
        <div className="container nav__inner">
          <a className="nav__brand" href="#top" aria-label={ui.homeAria}>
            <span className="nav__dot" />
            <span>{profile.name}</span>
          </a>
          <nav className="nav__links" aria-label={ui.navAria}>
            <a href="#projects">{ui.nav.projects}</a>
            <a href="#skills">{ui.nav.skills}</a>
            <a href="#experience">{ui.nav.experience}</a>
            <a href="#contact" className="pill">
              {ui.nav.contact}
            </a>
            <button
              type="button"
              className="btn btn--ghost btn--small"
              aria-label={ui.langAria}
              onClick={toggleLang}
              title={ui.langAria}
            >
              {ui.langShort}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <div className="kicker">{profile.role}</div>
              <h1 className="hero__title">
                {ui.hero.titlePrefix} <span className="grad">{profile.name}</span>.
              </h1>
              <p className="hero__subtitle">{profile.summary}</p>
              <div className="chips" aria-label={ui.hero.highlightsAria}>
                {profile.highlights.map((h) => (
                  <span key={h} className="chip">
                    {h}
                  </span>
                ))}
              </div>
              <div className="hero__cta">
                <a className="btn" href="#projects">
                  {ui.hero.ctaProjects}
                </a>
                <a className="btn btn--ghost" href={`mailto:${profile.links.email}`}>
                  {ui.hero.ctaEmail}
                </a>
              </div>
              <div className="hero__links">
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span className="sep" aria-hidden="true">
                  •
                </span>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="hero__card" aria-label={ui.summaryAria}>
              <div className="stat">
                <div className="stat__label">{ui.stats.location}</div>
                <div className="stat__value">{profile.location}</div>
              </div>
              <div className="stat">
                <div className="stat__label">{ui.stats.specialization}</div>
                <div className="stat__value">{ui.stats.specializationValue}</div>
              </div>
              <div className="stat">
                <div className="stat__label">{ui.stats.availability}</div>
                <div className="stat__value">{ui.stats.availabilityValue}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section__head">
              <h2>{ui.sections.projectsTitle}</h2>
              <p>{ui.sections.projectsSubtitle}</p>
            </div>

            <div className="grid">
              {projects.map((p) => (
                <article key={p.id} className="card">
                  <button
                    type="button"
                    className="card__media"
                    onClick={() => openGallery(p.id, 0)}
                    aria-label={`${ui.projects.gallery} — ${p.title}`}
                  >
                    <img src={p.images[0]} alt="" />
                  </button>
                  <div className="card__body">
                    <div className="card__titleRow">
                      <h3>{p.title}</h3>
                      <span className="muted">{p.subtitle}</span>
                    </div>
                    <p className="card__desc">{p.description}</p>
                    <div className="tags" aria-label={ui.projects.techAria}>
                      {p.tech.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="card__actions">
                      <button className="btn btn--small" onClick={() => openGallery(p.id, 0)}>
                        {ui.projects.gallery}
                      </button>
                      <a className="btn btn--ghost btn--small" href={p.links.repo} target="_blank" rel="noreferrer">
                        {ui.projects.repo}
                      </a>
                    </div>

                    <div className="thumbs" aria-label={ui.projects.thumbsAria}>
                      {p.images.map((src, idx) => (
                        <button
                          key={`${p.id}-${idx}`}
                          className="thumb"
                          onClick={() => openGallery(p.id, idx)}
                          aria-label={`${ui.projects.openImageAriaPrefix} ${idx + 1}`}
                        >
                          <img src={src} alt="" />
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section__head">
              <h2>{ui.sections.skillsTitle}</h2>
              <p>{ui.sections.skillsSubtitle}</p>
            </div>

            <div className="skillGrid">
              {skills.map((s) => (
                <div key={s.title} className="panel">
                  <h3>{s.title}</h3>
                  <ul className="list">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section__head">
              <h2>{ui.sections.experienceTitle}</h2>
            </div>

            <div className="timeline">
              {experience.map((e) => (
                <div key={`${e.title}-${e.company}`} className="panel">
                  <div className="timeline__top">
                    <div>
                      <div className="timeline__title">{e.title}</div>
                      <div className="muted">{e.company}</div>
                    </div>
                    <div className="pill pill--muted">{e.period}</div>
                  </div>
                  <ul className="list">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section__head">
              <h2>{ui.sections.contactTitle}</h2>
            </div>

            <div className="contact">
              <div className="panel">
                <div className="contact__row">
                  <div>
                    <div className="muted">{ui.contact.emailLabel}</div>
                    <div className="contact__value">{profile.links.email}</div>
                  </div>
                  <a className="btn" href={`mailto:${profile.links.email}`}>
                    {ui.contact.emailCta}
                  </a>
                </div>

                <div className="contact__links">
                  <a href={profile.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>

             
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="muted">© {new Date().getFullYear()} {profile.name}</span>
          <a className="muted" href="#top">{ui.footer.top}</a>
        </div>
      </footer>

      <Lightbox
        isOpen={lightbox.open}
        title={activeProject?.title}
        images={activeProject?.images ?? []}
        index={lightbox.index}
        labels={ui.lightbox}
        onClose={closeGallery}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  )
}

export default App
