import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { cn } from '../../lib/utils'
import logoUrl from '../../assets/logo.png'

const links: { href: string; label: string; external?: boolean }[] = [
  { href: '/', label: 'Home' },
  { href: '/aboutus', label: 'About Us' },
  { href: '/ourservices', label: 'Services' },
  { href: '/clients', label: 'Clients' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col',
        scrolled ? 'bg-white backdrop-blur-md shadow-soft border-b border-navy-900/5' : 'bg-white border-b border-navy-900/5'
      )}
    >
      {/* Alert Bar */}
      <div className={cn(
        "w-full bg-[#071426] text-white py-2 px-6 md:px-12 transition-all duration-300 flex justify-between items-center text-xs font-sans tracking-widest",
        scrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
      )}>
        <div className="flex items-center gap-6">
          <a href="tel:+919871500770" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone size={14} className="text-gold" /> +91 - 9871500770
          </a>
          <a href="https://www.shanviglobal.com" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 hover:text-gold transition-colors">
            <Globe size={14} className="text-gold" /> www.shanviglobal.com
          </a>
        </div>
        <div className="hidden md:flex gap-4">
          <span className="text-gray-300 uppercase tracking-[0.15em] opacity-80 font-medium">SHANVI GLOBAL RECRUITMENT SERVICES</span>
        </div>
      </div>

      <div className={cn(
        "container mx-auto px-6 md:px-12 flex items-center justify-between transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700",
        scrolled ? "py-1" : "py-2"
      )}>
        <Link to="/" className="flex items-center transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 h-12 md:h-14">
          <img src={logoUrl} alt="Shanvi Global" className={cn("w-auto object-contain mix-blend-multiply transition-all duration-700 h-full scale-[1.4] md:scale-[1.6] origin-left")} style={{ clipPath: 'inset(10% 0 10% 0)' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:text-gold transition-colors duration-500"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href as any}
                className="group relative text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:text-gold transition-colors duration-500 [&.active]:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full [.active_&]:w-full"></span>
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-soft py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xl font-serif text-navy-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href as any}
                  className="text-xl font-serif text-navy-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
