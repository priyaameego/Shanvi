import { Link } from '@tanstack/react-router'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import logoUrl from '../../assets/sg.jpg'

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
    <footer className="bg-[#040B14] text-gray-300 font-sans relative overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="bg-[#081526] border-b border-white/5 relative z-10 shadow-lg">
        <div className="container mx-auto px-6 md:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-serif text-white mb-2">Ready to transform your workforce?</h2>
              <p className="text-gray-400 font-sans text-sm md:text-base">Join industry leaders who trust Shanvi Global for their recruitment needs.</p>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gold text-white font-sans font-semibold uppercase tracking-widest text-sm hover:bg-gold-light transition-all flex items-center group">
                Contact Us
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-8 bg-white/5 p-3 rounded-sm hover:bg-white/10 transition-colors">
              <img src={logoUrl} alt="Shanvi Global" className="h-12 w-auto object-contain mix-blend-screen" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              Connecting exceptional talent with unparalleled opportunities globally. Strategic partnerships built on trust, transparency, and a shared commitment to success.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-gray-400">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-gray-400">
                <TwitterIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-gray-400">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-gray-400">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-serif text-white mb-8 uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-gold mr-3 inline-block"></span> Quick Links
            </h5>
            <ul className="space-y-4 text-sm font-sans">
              {[
                { name: 'About Us', path: '/aboutus' },
                { name: 'Our Services', path: '/ourservices' },
                { name: 'Clients', path: '/clients' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-gray-400 hover:text-gold transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidates */}
          <div>
            <h5 className="text-lg font-serif text-white mb-8 uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-gold mr-3 inline-block"></span> Candidates
            </h5>
            <ul className="space-y-4 text-sm font-sans">
              {[
                { name: 'Current Job Openings', path: '/career#current-jobs' },
                { name: 'Submit Resume', path: '/career#register' },
                { name: 'Career Opportunities', path: '/career' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path as any} 
                    className="group flex items-center text-gray-400 hover:text-gold transition-colors"
                  >
                    <span className="border-b border-transparent group-hover:border-gold transition-colors">{link.name}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-lg font-serif text-white mb-8 uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-gold mr-3 inline-block"></span> Contact
            </h5>
            <div className="space-y-6 text-sm">
              <a href="tel:+919871500770" className="flex items-start group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mr-4 group-hover:bg-gold/10 transition-colors flex-shrink-0">
                  <Phone size={14} className="text-gold" />
                </div>
                <div className="pt-1 text-gray-400 group-hover:text-white transition-colors">
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Call Us</span>
                  +91 - 9871500770
                </div>
              </a>
              <a href="mailto:hiring@shanviglobal.com" className="flex items-start group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mr-4 group-hover:bg-gold/10 transition-colors flex-shrink-0">
                  <Mail size={14} className="text-gold" />
                </div>
                <div className="pt-1 text-gray-400 group-hover:text-white transition-colors">
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email Us</span>
                  hiring@shanviglobal.com
                </div>
              </a>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div className="pt-1 text-gray-400 space-y-4">
                  <div>
                    <strong className="text-white font-medium block mb-1">Gurgaon Office:</strong>
                    704, 7th Floor, MG Road, Palm Court<br/>Sector 16, Haryana, 122007
                  </div>
                  <div>
                    <strong className="text-white font-medium block mb-1">Kolkata Office:</strong>
                    301-B, Shanvi House, Genexx Valley<br/>Joka, WB - 702301
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-[#02060C] py-6 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs tracking-widest uppercase text-gray-500 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Shanvi Global Recruitment Services. All rights reserved.</p>
          </div>
          <div className="text-xs tracking-widest uppercase text-gray-500 text-center md:text-right">
            <p>Developed By - <a href="https://ravargroup.com" className="text-gold hover:text-gold-light transition-colors hover:underline">Ravar Group</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
