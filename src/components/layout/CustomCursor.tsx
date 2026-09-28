import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouch()
    window.addEventListener('resize', checkTouch)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = target.closest('a') || target.closest('button') || target.closest('input') || target.closest('.cursor-pointer')
      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateHoverState)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateHoverState)
      window.removeEventListener('resize', checkTouch)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gold rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(201, 166, 70, 0.1)' : 'transparent'
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />
    </>
  )
}
