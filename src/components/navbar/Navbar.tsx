import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import logoUrl from '../../assets/sg.jpg'

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
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col',
        scrolled ? 'bg-ivory backdrop-blur-md shadow-soft border-b border-navy-900/5' : 'bg-ivory border-b border-navy-900/5'
      )}
    >
      {/* Alert Bar */}
      <div className={cn(
        "w-full bg-[#071426] text-white py-2 px-6 md:px-12 transition-all duration-300 flex justify-between items-center text-xs font-sans tracking-widest",
        scrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
      )}>
        <div className="flex items-center gap-6">
          <a href="tel:+919871500770" className="flex items-center gap-2 hover:text-gold transition-colors">
            <span className="text-gold">✆</span> +91 - 9871500770
          </a>
          <a href="https://www.shanviglobal.com" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 hover:text-gold transition-colors">
            <span className="text-gold">🌐</span> www.shanviglobal.com
          </a>
        </div>
        <div className="hidden md:flex gap-4">
          <span className="text-gray-300 uppercase tracking-[0.15em] opacity-80 font-medium">SHANVI GLOBAL RECRUITMENT SERVICES</span>
        </div>
      </div>

      <div className={cn(
        "container mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300",
        scrolled ? "py-2" : "py-3 border-b border-white/10"
      )}>
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="Shanvi Global" className="h-12 md:h-14 w-auto object-contain mix-blend-multiply contrast-[1.2] brightness-[1.1] scale-[1.2] md:scale-[1.4] origin-left transition-all duration-300" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-xs md:text-sm font-semibold uppercase tracking-widest text-navy-900 hover:text-gold transition-colors duration-500"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href as any}
                className="group relative text-xs md:text-sm font-semibold uppercase tracking-widest text-navy-900 hover:text-gold transition-colors duration-500 [&.active]:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full [.active_&]:w-full"></span>
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
