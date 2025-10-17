'use client'
import { useState, useEffect } from 'react'

const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [spotlightSize, setSpotlightSize] = useState(600)
  const [brandColor, setBrandColor] = useState('168, 85, 247') // purple-500 default

  // Color mapping
  const colorMap = {
    cyan: '6, 182, 212',
    blue: '59, 130, 246',
    indigo: '99, 102, 241',
    violet: '139, 92, 246',
    purple: '168, 85, 247',
    magenta: '217, 70, 239',
    pink: '236, 72, 153',
    red: '239, 68, 68',
    orange: '249, 115, 22',
    yellow: '234, 179, 8',
    green: '34, 197, 94',
    emerald: '16, 185, 129'
  }

  useEffect(() => {
    // Get the brand color from data attribute
    const updateBrandColor = () => {
      const brandAttr = document.body.getAttribute('data-brand')
      if (brandAttr && colorMap[brandAttr]) {
        setBrandColor(colorMap[brandAttr])
      }
    }

    // Initial color update
    updateBrandColor()

    // Watch for changes to the data-brand attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-brand') {
          updateBrandColor()
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-brand']
    })

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
      observer.disconnect()
    }
  }, [spotlightSize])

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-50 transition-all duration-200"
      style={{
        background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, rgba(${brandColor}, 0.20), rgba(${brandColor}, 0.1) 60%, rgba(${brandColor}, 0.07) 70%, transparent 100%)`,
      }}
    />
  )
}

export default CursorSpotlight