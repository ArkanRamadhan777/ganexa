import { useEffect, useRef, useState } from 'react'

const HyperspeedBackground = () => {
  const canvasRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: false })
    let animationFrameId
    let stars = []
    let resizeTimeout

    const checkMobile = () => window.innerWidth < 640

    const getStarCount = () => {
      const width = window.innerWidth
      if (width < 640) return 80 // mobile - reduce for performance
      if (width < 1024) return 150 // tablet
      return 250 // desktop
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      // Reset and apply scale
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      
      setIsMobile(checkMobile())
    }

    const createStars = () => {
      stars = []
      const count = getStarCount()
      const w = window.innerWidth
      const h = window.innerHeight
      
      for (let i = 0; i < count; i++) {
        stars.push({
          x: (Math.random() - 0.5) * w * 2,
          y: (Math.random() - 0.5) * h * 2,
          z: Math.random() * w,
          size: Math.random() * 1.5 + 0.5,
        })
      }
    }

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const mobile = checkMobile()
      
      // Clear with fade effect
      ctx.fillStyle = 'rgba(15, 17, 23, 0.15)'
      ctx.fillRect(0, 0, w, h)

      stars.forEach((star) => {
        // Animate speed (slower on mobile for smoothness)
        star.z -= mobile ? 2 : 3

        // Reset star when it passes camera
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * w * 2
          star.y = (Math.random() - 0.5) * h * 2
          star.z = w
        }

        // 3D projection
        const k = 128.0 / star.z
        const px = star.x * k + w / 2
        const py = star.y * k + h / 2

        // Only draw if on screen
        if (px >= -20 && px <= w + 20 && py >= -20 && py <= h + 20) {
          const size = (1 - star.z / w) * star.size * (mobile ? 2 : 3)
          const opacity = Math.min(1 - star.z / w, 0.9)
          
          // Color gradient: blue/cyan
          const colorR = Math.floor(100 + (100 * opacity))
          const colorG = Math.floor(180 + (75 * opacity))
          const colorB = 255
          
          // Draw star (no glow on mobile for performance)
          if (!mobile) {
            ctx.shadowBlur = size * 3
            ctx.shadowColor = `rgba(${colorR}, ${colorG}, ${colorB}, ${opacity * 0.6})`
          }
          
          ctx.beginPath()
          ctx.fillStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${opacity})`
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fill()

          // Draw trail line
          const oldZ = star.z + (mobile ? 2 : 3)
          if (oldZ < w) {
            const oldK = 128.0 / oldZ
            const oldPx = star.x * oldK + w / 2
            const oldPy = star.y * oldK + h / 2

            ctx.shadowBlur = 0
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${opacity * 0.3})`
            ctx.lineWidth = size
            ctx.moveTo(oldPx, oldPy)
            ctx.lineTo(px, py)
            ctx.stroke()
          }
          
          if (!mobile) {
            ctx.shadowBlur = 0
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initial setup
    resizeCanvas()
    createStars()
    animate()

    // Handle resize with debounce
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
        createStars()
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ 
        background: '#0f1117',
        imageRendering: 'auto',
        WebkitTransform: 'translateZ(0)',
        willChange: 'transform'
      }}
    />
  )
}

export default HyperspeedBackground
