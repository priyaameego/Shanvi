import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

// Professional Corporate/Recruitment Images
const slides = [
  "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1200&auto=format&fit=crop", // Professional work
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop", // Job interview
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop", // Handshake close up
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop", // Business people talking
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200&auto=format&fit=crop"  // Modern office discussion
]



export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // 6 seconds per slide
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] min-h-[600px] flex items-center overflow-hidden bg-navy-900">
      
      {/* Cinematic Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0 overflow-hidden gpu-layer"
        >
          <motion.img 
            initial={{ scale: 1.0, x: "0%", y: "0%" }}
            animate={{ scale: 1.15, x: "-3%", y: "-1%" }}
            transition={{ duration: 10, ease: "linear" }}
            src={slides[currentSlide]} 
            alt="Corporate Scene" 
            decoding="async"
            className="w-full h-full object-cover origin-center gpu-layer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Layered Cinematic Overlay - Lightened */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-900/40 via-navy-900/10 to-navy-900/60" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-900/60 via-navy-900/20 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-60" />



      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
        <div className="max-w-[700px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1],  }}
            className="text-accent uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-semibold mb-6 font-sans"
          >
            PREMIUM EXECUTIVE SEARCH
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1],  }}
            className="font-serif leading-[1.1] mb-10 text-[clamp(48px,6vw,90px)]"
          >
            <span className="text-white block">Defining the Future of</span>
            <span className="italic text-ivory/90 font-light block">Leadership.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1],  }}
            className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center"
          >
            <Link
              to="/ourservices"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-background text-navy-900 text-xs md:text-sm uppercase tracking-widest font-semibold overflow-hidden transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 duration-700 border-b-2 border-transparent hover:border-accent"
            >
              <span className="relative z-10">DISCOVER OUR SERVICES</span>
              <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-100 transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] duration-700" />
            </Link>
            <Link
              to="/aboutus"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-navy-900/30 backdrop-blur-sm border border-border-light text-white text-xs md:text-sm uppercase tracking-widest font-semibold hover:border-accent hover:bg-navy-900/50 hover:text-accent transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700"
            >
              OUR PHILOSOPHY
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-700" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Slider Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex items-center gap-4 text-white font-sans text-sm tracking-widest">
        <span>{String(currentSlide + 1).padStart(2, '0')}</span>
        <div className="w-16 md:w-32 h-[1px] bg-background/20 relative">
          <motion.div 
            key={currentSlide}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute top-0 left-0 h-full bg-accent"
          />
        </div>
        <span className="text-white/50">{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex flex-col items-center gap-3">
        <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-12 bg-background/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </div>
    </section>
  )
}
