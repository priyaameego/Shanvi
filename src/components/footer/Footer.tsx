import { Link } from '@tanstack/react-router'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import logoUrl from '../../assets/logo.png'

// Inline SVG social icons (lucide-react v1.48+ removed social icons)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="relative bg-navy-950 overflow-hidden pt-20 border-t border-white/5">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Luxury CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-[#0a1a33] to-navy-950 border border-gold/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] mb-20 group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/20 transition-colors duration-1000" />
          <div className="px-10 py-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">Ready to transform your workforce?</h2>
              <p className="text-gold font-sans text-sm md:text-base tracking-[0.2em] uppercase">Join industry leaders who trust Shanvi Global.</p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gold text-navy-950 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(201,166,70,0.4)] rounded-sm group/btn">
                Start the journey
                <ArrowRight size={16} className="ml-3 group-hover/btn:translate-x-2 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-700" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 pb-20">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block mb-10 bg-white/95 backdrop-blur px-6 py-4 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 border border-white/20">
              <img src={logoUrl} alt="Shanvi Global" className="h-12 w-auto object-contain mix-blend-multiply" style={{ clipPath: 'inset(10% 0 10% 0)' }} />
            </Link>
            <p className="text-gray-400 text-sm leading-loose mb-10 pr-8 font-light">
              Connecting exceptional talent with unparalleled opportunities globally. Strategic partnerships built on trust, transparency, and a shared commitment to long-term success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-navy-950 transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 text-gray-400 hover:-translate-y-1 shadow-lg"><FacebookIcon /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-navy-950 transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 text-gray-400 hover:-translate-y-1 shadow-lg"><TwitterIcon /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-navy-950 transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 text-gray-400 hover:-translate-y-1 shadow-lg"><LinkedinIcon /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-navy-950 transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 text-gray-400 hover:-translate-y-1 shadow-lg"><InstagramIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h5 className="text-[11px] font-bold text-white mb-8 uppercase tracking-[0.2em]">
              Company
            </h5>
            <ul className="space-y-4 text-[13px] font-sans font-light">
              {[
                { name: 'About Us', path: '/aboutus' },
                { name: 'Our Services', path: '/ourservices' },
                { name: 'Clients', path: '/clients' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path as any} className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] text-gold">—</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidates */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-bold text-white mb-8 uppercase tracking-[0.2em]">
              Candidates
            </h5>
            <ul className="space-y-4 text-[13px] font-sans font-light">
              {[
                { name: 'Current Openings', path: '/career#current-jobs' },
                { name: 'Submit Resume', path: '/career#register' },
                { name: 'Career Path', path: '/career' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path as any} className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] text-gold">—</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h5 className="text-[11px] font-bold text-white mb-8 uppercase tracking-[0.2em]">
              Get in Touch
            </h5>
            <div className="space-y-6 text-[13px] font-light">
              <a href="tel:+919871500770" className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 group-hover:bg-gold group-hover:border-gold transition-all duration-500 flex-shrink-0">
                  <Phone size={14} className="text-gold group-hover:text-navy-950 transition-colors duration-500" />
                </div>
                <div className="pt-1 text-gray-400 group-hover:text-white transition-colors duration-500">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-1 font-semibold">Call Us</span>
                  <span className="tracking-wider">+91 - 9871500770</span>
                </div>
              </a>
              <a href="mailto:hiring@shanviglobal.com" className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 group-hover:bg-gold group-hover:border-gold transition-all duration-500 flex-shrink-0">
                  <Mail size={14} className="text-gold group-hover:text-navy-950 transition-colors duration-500" />
                </div>
                <div className="pt-1 text-gray-400 group-hover:text-white transition-colors duration-500">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-1 font-semibold">Email Us</span>
                  <span className="tracking-wider">hiring@shanviglobal.com</span>
                </div>
              </a>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 group-hover:bg-gold group-hover:border-gold transition-all duration-500 flex-shrink-0">
                  <MapPin size={14} className="text-gold group-hover:text-navy-950 transition-colors duration-500" />
                </div>
                <div className="pt-1 text-gray-400 group-hover:text-white transition-colors duration-500">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-1 font-semibold">Head Office</span>
                  <span className="leading-relaxed">Shop No 5, Taimoor Nagar<br />New Delhi 110065</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-black/20 relative z-10">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.15em] font-light">
            &copy; {new Date().getFullYear()} Shanvi Global Recruitment Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.15em] font-light">
            <Link to="/" className="hover:text-gold transition-colors duration-500">Privacy Policy</Link>
            <Link to="/" className="hover:text-gold transition-colors duration-500">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
