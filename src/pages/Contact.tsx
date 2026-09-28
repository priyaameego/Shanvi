import { Link } from '@tanstack/react-router';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full">
      <section className="relative pt-36 pb-20 bg-ivory overflow-hidden border-b border-gray-100">
        
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none opacity-10 md:opacity-30">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" alt="Contact Us Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-ivory" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase mb-6"
            >
              <Link to="/" className="text-navy-500 hover:text-navy-900 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]">Home</Link>
              <span className="text-navy-300">•</span>
              <span className="text-navy-900 font-semibold">Contact</span>
            </motion.nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif text-navy-900 mb-8 leading-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-navy-700 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              We are always ready to help you. Reach out to our global offices.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-stretch">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white text-navy-900 p-16 shadow-2xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-bl-full pointer-events-none transform group-hover:scale-110 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-700" />
              <h2 className="text-4xl font-serif text-navy-900 mb-12 border-b border-gold/30 pb-6">Contact Information</h2>
              
              <div className="space-y-12">
                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Contact Number</h3>
                    <p className="text-navy-700 font-sans text-lg font-light"><a href="tel:+919871500770" className="hover:text-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]">+91 - 9871500770</a></p>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Email Address</h3>
                    <p className="text-navy-700 font-sans font-light mb-2"><a href="mailto:hiring@shanviglobal.com" className="hover:text-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] block">• hiring@shanviglobal.com</a></p>
                    <p className="text-navy-700 font-sans font-light"><a href="mailto:anupama@shanviglobal.com" className="hover:text-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] block">• anupama@shanviglobal.com</a></p>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-4">Address</h3>
                    <div className="space-y-6">
                      <p className="text-navy-700 font-sans leading-relaxed font-light">
                        <span className="font-semibold block mb-2 text-navy-900">Gurgaon Office:</span>
                        704, 7th Floor, MG Road, Palm Court Sector 16 - Gurgaon, Haryana, 122007
                      </p>
                      <div className="w-full h-[1px] bg-gray-100" />
                      <p className="text-navy-700 font-sans leading-relaxed font-light">
                        <span className="font-semibold block mb-2 text-navy-900">Kolkata Office:</span>
                        301-B, Shanvi House, Genexx Valley, Joka, Kolkata - WB - 702301
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Working Hours</h3>
                    <p className="text-navy-700 font-sans font-light mb-1">Mon - Sat 9.30 - 18.00</p>
                    <p className="text-navy-700 font-sans font-light">Sunday <span className="font-medium text-navy-900">CLOSED</span></p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white text-navy-900 p-6 sm:p-12 md:p-16 shadow-2xl border border-gray-100 relative"
            >
              <h2 className="text-4xl font-serif text-navy-900 mb-8 border-b border-gold/30 pb-6">Send a Message</h2>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="thank-you"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 bg-navy-50/50 rounded-sm border border-gold/20"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-soft mb-6">
                      <CheckCircle className="text-gold" size={40} />
                    </div>
                    <h3 className="text-3xl font-serif text-navy-900 mb-4">Thank You!</h3>
                    <p className="text-navy-700 font-sans text-lg font-light max-w-md mx-auto">
                      Your message has been successfully sent. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-8 py-3 border border-navy-900 text-navy-900 font-sans font-semibold uppercase tracking-widest text-xs hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:text-white transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 rounded-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6" 
                    onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">First Name</label>
                        <input type="text" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Last Name</label>
                        <input type="text" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Email Address</label>
                        <input type="email" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Phone Number</label>
                        <input type="tel" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="+91 98765 43210" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Message</label>
                      <textarea rows={5} className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm resize-none" placeholder="How can we help you?" required></textarea>
                    </div>

                    <button type="submit" className="w-full bg-navy-900 text-white font-sans font-semibold uppercase tracking-[0.2em] text-sm py-5 hover:bg-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 mt-8 rounded-sm flex items-center justify-center group">
                      Submit Message
                      <svg className="ml-3 transform group-hover:translate-x-2 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-700" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
