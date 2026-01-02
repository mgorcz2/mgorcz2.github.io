import { useEffect } from 'react'

export default function Lightbox({ isOpen, title, images, index, labels, onClose, onPrev, onNext }) {
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

  const resolvedLabels = {
    dialogLabel: labels?.dialogLabel ?? 'Gallery',
    close: labels?.close ?? 'Close',
    closeAria: labels?.closeAria ?? 'Close gallery',
    prevAria: labels?.prevAria ?? 'Previous image',
    nextAria: labels?.nextAria ?? 'Next image',
  }

  const src = images?.[index]

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={title ?? resolvedLabels.dialogLabel}>
      <button className="lb__backdrop" aria-label={resolvedLabels.close} onClick={onClose} />

      <div className="lb__panel">
        <div className="lb__top">
          <div className="lb__title">{title}</div>
          <button className="btn btn--ghost" onClick={onClose} aria-label={resolvedLabels.closeAria}>
            {resolvedLabels.close}
          </button>
        </div>

        <div className="lb__media">
          <button className="lb__nav" onClick={onPrev} aria-label={resolvedLabels.prevAria}>
            ‹
          </button>
          <img className="lb__img" src={src} alt="" />
          <button className="lb__nav" onClick={onNext} aria-label={resolvedLabels.nextAria}>
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
