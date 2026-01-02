import { useEffect } from 'react'

export default function Lightbox({ isOpen, title, images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen) return null

  const src = images?.[index]

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={title ?? 'Galeria'}>
      <button className="lb__backdrop" aria-label="Zamknij" onClick={onClose} />

      <div className="lb__panel">
        <div className="lb__top">
          <div className="lb__title">{title}</div>
          <button className="btn btn--ghost" onClick={onClose} aria-label="Zamknij galerię">
            Zamknij
          </button>
        </div>

        <div className="lb__media">
          <button className="lb__nav" onClick={onPrev} aria-label="Poprzednie zdjęcie">
            ‹
          </button>
          <img className="lb__img" src={src} alt="" />
          <button className="lb__nav" onClick={onNext} aria-label="Następne zdjęcie">
            ›
          </button>
        </div>

        <div className="lb__meta">
          <span>
            {index + 1} / {images?.length ?? 0}
          </span>
        </div>
      </div>
    </div>
  )
}
