import { Outlet, useRouterState } from '@tanstack/react-router'
import { Navbar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'
import { CustomCursor } from './CustomCursor'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Lenis from 'lenis'

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow pt-24">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
