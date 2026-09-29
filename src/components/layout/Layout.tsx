import { Outlet, useRouterState } from '@tanstack/react-router'
import { Navbar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'
import { motion } from 'framer-motion'

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans gpu-layer">
      <Navbar />
      <main className="flex-grow pt-24">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

