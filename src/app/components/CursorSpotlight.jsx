'use client'
import { useState, useEffect } from 'react'

const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [spotlightSize, setSpotlightSize] = useState(600)

  useEffect(() => {
    // Calculate 40% of screen diagonal
    const updateSpotlightSize = () => {
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
      setSpotlightSize(diagonal * 0.4)
    }

    updateSpotlightSize()
    window.addEventListener('resize', updateSpotlightSize)

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = (e) => {
      // Get the direction the cursor left
      const x = e.clientX
      const y = e.clientY
      const width = window.innerWidth
      const height = window.innerHeight

      // Determine edge and position spotlight halfway
      if (x <= 0) {
        // Left edge
        setPosition({ x: spotlightSize / 4, y: e.clientY })
      } else if (x >= width) {
        // Right edge
        setPosition({ x: width - spotlightSize / 4, y: e.clientY })
      } else if (y <= 0) {
        // Top edge
        setPosition({ x: e.clientX, y: spotlightSize / 4 })
      } else if (y >= height) {
        // Bottom edge
        setPosition({ x: e.clientX, y: height - spotlightSize / 4 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', updateSpotlightSize)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [spotlightSize])

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-50 transition-all duration-200"
      style={{
        background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.30), rgba(168, 85, 247, 0.1) 60%, rgba(168, 85, 247, 0.07) 70%, transparent 100%)`,
      }}
    />
  )
}

export default CursorSpotlight