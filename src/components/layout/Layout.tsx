import { Outlet, useRouterState } from '@tanstack/react-router'
import { Navbar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'
import { motion } from 'framer-motion'

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
