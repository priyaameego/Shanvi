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
        scrolled ? 'bg-background backdrop-blur-md shadow-soft border-b border-border-light' : 'bg-background border-b border-border-light'
      )}
    >
      {/* Alert Bar */}
      <div className={cn(
        "w-full bg-[#0CBF9F] text-white py-2 px-6 md:px-12 transition-all duration-300 flex justify-between items-center text-xs font-sans tracking-widest",
        scrolled ? "h-0 py-0 opacity-0 overflow-hidden border-none" : "h-auto opacity-100"
      )}>
        <div className="flex items-center gap-6">
          <a href="tel:+919871500770" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Phone size={14} className="text-white" /> +91 - 9871500770
          </a>
          <a href="https://www.shanviglobal.com" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 hover:text-white/80 transition-colors">
            <Globe size={14} className="text-white" /> www.shanviglobal.com
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-white/80 uppercase tracking-[0.15em] font-medium mr-2">Follow Us</span>
          <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
          <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
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
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            if (link.label === 'Contact') {
              return (
                <Link
                  key={link.href}
                  to={link.href as any}
                  className="ml-2 group/btn inline-flex items-center justify-center px-8 py-3 bg-[#0CBF9F] text-white text-[11px] font-bold uppercase tracking-[0.1em] rounded-[12px] shadow-[0_6px_18px_rgba(12,191,159,0.18)] hover:shadow-[0_8px_25px_rgba(12,191,159,0.25)] hover:-translate-y-[2px] hover:bg-[#0A9F84] transition-all duration-300"
                >
                  {link.label}
                </Link>
              )
            }
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:text-accent transition-colors duration-500"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href as any}
                className="group relative text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:text-accent transition-colors duration-500 [&.active]:text-accent"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full [.active_&]:w-full"></span>
              </Link>
            )
          })}
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
            className="absolute top-full left-0 right-0 bg-background shadow-soft py-8 px-6 md:hidden flex flex-col gap-6"
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
