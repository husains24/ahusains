import React, { useCallback, useEffect, useState } from 'react'
import './Gallery.css'

// Dynamically import all images from src/assets/images using Vite's glob (eager to get URLs)
const modules = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true }) as Record<string, any>

type Item = { src: string; title: string; desc: string }

const items: Item[] = Object.keys(modules)
  .sort()
  .map((k) => {
    const m = modules[k]
    const src = (m && (m.default || m)) as string
    // derive a title from filename
    const parts = k.split('/').pop() || k
    const name = parts.replace(/\.[^.]+$/, '')
    const title = name.replace(/[-_\d]+/g, ' ').replace(/\s+/g, ' ').trim()
      .replace(/(^|\s)\S/g, (t) => t.toUpperCase())
    const desc = `Screenshot / image of ${title}`
    return { src, title: title || 'Image', desc }
  })

export default function Gallery(): JSX.Element {
  // items is populated from the images folder at build time
  const [current, setCurrent] = useState<number | null>(null)

  const open = (i: number) => setCurrent(i)
  const close = () => setCurrent(null)
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrent((c) => (c === null ? 0 : (c - 1 + items.length) % items.length))
  }
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrent((c) => (c === null ? 0 : (c + 1) % items.length))
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (current === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setCurrent((c) => (c === null ? 0 : (c + 1) % items.length))
      if (e.key === 'ArrowLeft') setCurrent((c) => (c === null ? 0 : (c - 1 + items.length) % items.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, items.length])

  return (
    <div className="gallery-page px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Gallery</h1>

      {items.length === 0 ? (
        <p className="text-gray-300">No images found. Add images to <code>src/assets/images</code>.</p>
      ) : (
        <div className="gallery-grid">
          {items.map((it, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => open(i)}
              style={{ animationDelay: `${i * 0.05}s` }}
              aria-label={`Open ${it.title}`}
            >
              <figure className="figure">
                <img src={it.src} alt={it.title} loading="lazy" />
                <figcaption className="fig-overlay">
                  <div className="fig-title">{it.title}</div>
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      )}

      {current !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); close(); }} aria-label="Close">✕</button>
          <button className="lightbox-prev" onClick={prev} aria-label="Previous">‹</button>
          <img className="lightbox-image" src={items[current].src} alt={items[current].title} onClick={(e) => e.stopPropagation()} />
          <div className="lightbox-caption">
            <h3>{items[current].title}</h3>
          </div>
          <button className="lightbox-next" onClick={next} aria-label="Next">›</button>
        </div>
      )}
    </div>
  )
}