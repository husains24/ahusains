import React, { useRef, useEffect, useState } from 'react';

interface BackgroundMusicProps {
  srcs: string[];
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ srcs }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    
    // This is the most reliable way to handle autoplay.
    // 1. Mute the element.
    audioEl.muted = true;
    // 2. Call play(). This will start the music, but silently.
    const playPromise = audioEl.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.warn("Autoplay was prevented.", error);
        setIsPlaying(false);
      });
    }
    
    const handleFirstUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        setIsMuted(false); // Unmute on first interaction
      }
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
    };
    
    const handleSongEnd = () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % srcs.length);
    };
    
    audioEl.addEventListener('ended', handleSongEnd);
    window.addEventListener('click', handleFirstUserInteraction);
    window.addEventListener('keydown', handleFirstUserInteraction);
    
    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      audioEl.removeEventListener('ended', handleSongEnd);
    };
  }, []); // This effect should only run once on mount.

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
    // If the user unmutes and the audio is paused (and has interacted), try playing it.
    if (userInteracted && !isMuted && audioRef.current?.paused) {
      audioRef.current?.play().catch(() => setIsPlaying(false));
    }
  }, [isMuted, userInteracted]);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl && isPlaying) {
      // When the track index changes, play the new source if we were already playing.
      audioEl.play().catch(error => {
        console.warn("Could not play next track automatically:", error);
      });
    }
  }, [currentTrackIndex, isPlaying]);

  const togglePlayPause = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play().catch(() => setIsPlaying(false));
    }
    setIsPlaying(!isPlaying);
    setUserInteracted(true); // Manually muting/unmuting counts as an interaction
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % srcs.length);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + srcs.length) % srcs.length);
    setIsPlaying(true);
  };

  return (
    <>
      <audio ref={audioRef} src={srcs[currentTrackIndex]} preload="auto" />
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <button onClick={handlePrevTrack} className="rounded-lg bg-gray-800/50 p-2 text-white backdrop-blur-sm hover:bg-gray-700/70">
          {/* Previous Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8.445 14.832A1 1 0 0010 14.17V5.83a1 1 0 00-1.555-.832L4.12 8.168a1 1 0 000 1.664l4.325 3.001zM13.445 14.832A1 1 0 0015 14.17V5.83a1 1 0 00-1.555-.832L9.12 8.168a1 1 0 000 1.664l4.325 3.001z" /></svg>
        </button>
        <button
          onClick={togglePlayPause}
          className="h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-violet-700 hover:shadow-xl hover:shadow-black/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )}
        </button>
        <button onClick={handleNextTrack} className="rounded-lg bg-gray-800/50 p-2 text-white backdrop-blur-sm hover:bg-gray-700/70">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11.555 5.168A1 1 0 0010 5.83v8.34a1 1 0 001.555.832l4.325-3.001a1 1 0 000-1.664l-4.325-3.001zM6.555 5.168A1 1 0 005 5.83v8.34a1 1 0 001.555.832l4.325-3.001a1 1 0 000-1.664l-4.325-3.001z" /></svg>
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;