import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-black/40 backdrop-blur-sm shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-cyan-100"><i>Saddam</i></Link>
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="text-cyan-200 hover:text-cyan-50">Home</Link>
          <Link to="/achievement" className="text-cyan-200 hover:text-cyan-50">Achievement</Link>
          <Link to="/gallery" className="text-cyan-200 hover:text-cyan-50">Gallery</Link>
          <Link to="/about" className="text-cyan-200 hover:text-cyan-50">About</Link>
        </nav>
        <button
          className="md:hidden p-2 rounded bg-cyan-900/30 text-cyan-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/30 border-t">
          <div className="px-4 py-2 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="text-cyan-200">Home</Link>
            <Link to="/achievement" onClick={() => setOpen(false)} className="text-cyan-200">Achievement</Link>
            <Link to="/gallery" onClick={() => setOpen(false)} className="text-cyan-200">Gallery</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="text-cyan-200">About</Link>
          </div>
        </div>
      )}
    </header>
  )
}
