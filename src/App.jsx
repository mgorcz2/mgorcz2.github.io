import { useMemo, useState } from 'react'
import './App.css'
import Lightbox from './components/Lightbox.jsx'
import { experience, profile, projects, skills } from './data/portfolio.js'

function App() {
  const [lightbox, setLightbox] = useState({ open: false, projectId: null, index: 0 })

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

  return (
    <div className="page">
      <header className="nav">
        <div className="container nav__inner">
          <a className="nav__brand" href="#top" aria-label="Strona główna">
            <span className="nav__dot" />
            <span>{profile.name}</span>
          </a>
          <nav className="nav__links" aria-label="Nawigacja">
            <a href="#projects">Projekty</a>
            <a href="#skills">Umiejętności</a>
            <a href="#experience">Doświadczenie</a>
            <a href="#contact" className="pill">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <div className="kicker">{profile.role}</div>
              <h1 className="hero__title">
                Cześć, jestem <span className="grad">{profile.name}</span>.
              </h1>
              <p className="hero__subtitle">{profile.summary}</p>
              <div className="chips" aria-label="Najważniejsze technologie">
                {profile.highlights.map((h) => (
                  <span key={h} className="chip">
                    {h}
                  </span>
                ))}
              </div>
              <div className="hero__cta">
                <a className="btn" href="#projects">
                  Zobacz projekty
                </a>
                <a className="btn btn--ghost" href={`mailto:${profile.links.email}`}>
                  Napisz maila
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

            <div className="hero__card" aria-label="Podsumowanie">
              <div className="stat">
                <div className="stat__label">Lokalizacja</div>
                <div className="stat__value">{profile.location}</div>
              </div>
              <div className="stat">
                <div className="stat__label">Specjalizacja</div>
                <div className="stat__value">Fullstack dev</div>
              </div>
              <div className="stat">
                <div className="stat__label">Dostępność</div>
                <div className="stat__value">Open to work</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section__head">
              <h2>Projekty</h2>
              <p>Wybrane prace — z opisem i krótką galerią.</p>
            </div>

            <div className="grid">
              {projects.map((p) => (
                <article key={p.id} className="card">
                  <div className="card__media">
                    <img src={p.images[0]} alt="" />
                  </div>
                  <div className="card__body">
                    <div className="card__titleRow">
                      <h3>{p.title}</h3>
                      <span className="muted">{p.subtitle}</span>
                    </div>
                    <p className="card__desc">{p.description}</p>
                    <div className="tags" aria-label="Technologie">
                      {p.tech.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="card__actions">
                      <button className="btn btn--small" onClick={() => openGallery(p.id, 0)}>
                        Galeria
                      </button>
                      <a className="btn btn--ghost btn--small" href={p.links.repo} target="_blank" rel="noreferrer">
                        Repo
                      </a>
                    </div>

                    <div className="thumbs" aria-label="Podgląd galerii">
                      {p.images.map((src, idx) => (
                        <button
                          key={`${p.id}-${idx}`}
                          className="thumb"
                          onClick={() => openGallery(p.id, idx)}
                          aria-label={`Otwórz zdjęcie ${idx + 1}`}
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
              <h2>Umiejętności</h2>
              <p>Technologie i narzędzia, z których korzystam najczęściej.</p>
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
              <h2>Doświadczenie</h2>
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
              <h2>Kontakt</h2>
            </div>

            <div className="contact">
              <div className="panel">
                <div className="contact__row">
                  <div>
                    <div className="muted">Email</div>
                    <div className="contact__value">{profile.links.email}</div>
                  </div>
                  <a className="btn" href={`mailto:${profile.links.email}`}>
                    Wyślij wiadomość
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
          <a className="muted" href="#top">
            Do góry
          </a>
        </div>
      </footer>

      <Lightbox
        isOpen={lightbox.open}
        title={activeProject?.title}
        images={activeProject?.images ?? []}
        index={lightbox.index}
        onClose={closeGallery}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  )
}

export default App
