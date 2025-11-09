import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/homes/Home'
import About from './pages/about/About'
import Nav from './components/Nav'
import ParticlesBackground from './components/ParticlesBackground'
import Achievement from './pages/achievement/Achievement'
import Gallery from './pages/gallery/Gallery'
import BackgroundMusic from './components/BackgroundMusic';
import musicFile1 from './assets/music/background.mp3';
import musicFile2 from './assets/music/background2.mp3'; 
import musicFile6 from './assets/music/CHAND.mp3'; 
import musicFile3 from './assets/music/background3.mp3'; 
import musicFile4 from './assets/music/background4.mp3'; 
import musicFile5 from './assets/music/background5.mp3'; // Example of a second song

const songPlaylist = [musicFile1,musicFile6, musicFile2, musicFile3, musicFile4, musicFile5 ];

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <ParticlesBackground />
      <BackgroundMusic srcs={songPlaylist} />
      <Nav />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="bg-transparent border-t border-white/10 py-4 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-white/80">© 2025 <i>saddam</i></div>
      </footer>
    </div>
  )
}
