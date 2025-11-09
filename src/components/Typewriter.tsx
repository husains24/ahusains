import React, { useEffect, useState } from 'react'

type TypewriterProps = {
  text: string
  speed?: number // ms per character when typing
  deleteSpeed?: number // ms per character when deleting
  pause?: number // ms pause after finishing before deleting
  loop?: boolean
  className?: string
  cursor?: string
}

export default function Typewriter({
  text,
  speed = 60,
  deleteSpeed = 40,
  pause = 1600,
  loop = true,
  className = '',
  cursor = '|',
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let mounted = true
    let typing = true
    let i = 0

    function tick() {
      if (!mounted) return

      if (typing) {
        if (i < text.length) {
          i += 1
          setDisplayed(text.slice(0, i))
          setTimeout(tick, speed)
        } else {
          if (loop) {
            setTimeout(() => {
              typing = false
              setTimeout(tick, deleteSpeed)
            }, pause)
          }
        }
      } else {
        if (i > 0) {
          i -= 1
          setDisplayed(text.slice(0, i))
          setTimeout(tick, deleteSpeed)
        } else {
          typing = true
          setTimeout(tick, speed)
        }
      }
    }

    // start
    setDisplayed('')
    i = 0
    setTimeout(tick, speed)

    return () => {
      mounted = false
    }
  }, [text, speed, deleteSpeed, pause, loop])

  return (
    <span className={className}>
      {displayed}
      <span className="typewriter-caret" aria-hidden>
        {cursor}
      </span>
    </span>
  )
}
