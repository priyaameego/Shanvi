import { Link } from '@tanstack/react-router';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full">
            <section className="relative pt-28 pb-10 bg-[#F6F8FB] overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" alt="Contact Us Background" className="w-full h-full object-cover opacity-25 gpu-layer" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F8FB]/75 via-[#F6F8FB]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8FB]/75 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-[13px] font-sans font-medium mb-10"
            >
              <Link to="/" className="text-[#6B7280] hover:text-[#0CBF9F] transition-colors duration-300">Home</Link>
              <span className="text-[#0CBF9F] text-[15px] leading-none">›</span>
              <span className="text-[#13294B]">Contact</span>
            </motion.nav>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-serif text-[#102A43] mb-10 leading-tight"
              >
                Contact Us
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#475467] font-sans text-lg md:text-xl font-light leading-relaxed mb-6"
              >
                Have questions about hiring, staffing, or career opportunities? Our team is available to assist you worldwide.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block relative h-[400px]"
            >
              <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80" alt="World Map Illustration" className="w-full h-full object-contain mix-blend-multiply opacity-80 animate-float" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0CBF9F]/20 rounded-full blur-[50px]"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-stretch">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-[#E4EAF0] p-10 lg:p-12 rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:-translate-y-1 hover:border-[#0CBF9F]/30 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0CBF9F]/5 rounded-bl-full pointer-events-none transform group-hover:scale-110 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-700" />
              <h2 className="text-4xl font-serif text-navy-900 mb-12 border-b border-gold/30 pb-6">Contact Information</h2>
              
              <div className="space-y-12">
                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-white transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <Phone className="text-[#0CBF9F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Contact Number</h3>
                    <p className="text-charcoal font-sans text-lg font-light"><a href="tel:+919871500770" className="hover:text-[#0CBF9F] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]">+91 - 9871500770</a></p>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-white transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <Mail className="text-[#0CBF9F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Email Address</h3>
                    <p className="text-charcoal font-sans font-light mb-2"><a href="mailto:hiring@shanviglobal.com" className="hover:text-[#0CBF9F] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] block">• hiring@shanviglobal.com</a></p>
                    <p className="text-charcoal font-sans font-light"><a href="mailto:anupama@shanviglobal.com" className="hover:text-[#0CBF9F] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] block">• anupama@shanviglobal.com</a></p>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-white transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <MapPin className="text-[#0CBF9F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-4">Address</h3>
                    <div className="space-y-6">
                      <p className="text-charcoal font-sans leading-relaxed font-light">
                        <span className="font-semibold block mb-2 text-navy-900">Gurgaon Office:</span>
                        704, 7th Floor, MG Road, Palm Court Sector 16 - Gurgaon, Haryana, 122007
                      </p>
                      <div className="w-full h-[1px] bg-gray-100" />
                      <p className="text-charcoal font-sans leading-relaxed font-light">
                        <span className="font-semibold block mb-2 text-navy-900">Kolkata Office:</span>
                        301-B, Shanvi House, Genexx Valley, Joka, Kolkata - WB - 702301
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-white transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000">
                    <Clock className="text-[#0CBF9F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Working Hours</h3>
                    <p className="text-charcoal font-sans font-light mb-1">Mon - Sat 9.30 - 18.00</p>
                    <p className="text-charcoal font-sans font-light">Sunday <span className="font-medium text-navy-900">CLOSED</span></p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-[#E4EAF0] p-10 lg:p-12 rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:-translate-y-1 hover:border-[#0CBF9F]/30 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] transition-all duration-300"
            >
              <h2 className="text-4xl font-serif text-navy-900 mb-8 border-b border-gold/30 pb-6">Send a Message</h2>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="thank-you"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 bg-white/50 rounded-sm border border-accent/20"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-soft mb-6">
                      <CheckCircle className="text-[#0CBF9F]" size={40} />
                    </div>
                    <h3 className="text-3xl font-serif text-navy-900 mb-4">Thank You!</h3>
                    <p className="text-charcoal font-sans text-lg font-light max-w-md mx-auto">
                      Your message has been successfully sent. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-8 py-3 border border-navy-900 text-navy-900 font-sans font-semibold uppercase tracking-widest text-xs hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:text-navy-900 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 rounded-sm"
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
                        <input type="text" className="w-full bg-white border border-[#B4CCC6] text-navy-900 placeholder-[#8A96A6] px-6 py-4 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-[#0CBF9F] focus:ring-[#1A746B] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Last Name</label>
                        <input type="text" className="w-full bg-white border border-[#B4CCC6] text-navy-900 placeholder-[#8A96A6] px-6 py-4 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-[#0CBF9F] focus:ring-[#1A746B] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Email Address</label>
                        <input type="email" className="w-full bg-white border border-[#B4CCC6] text-navy-900 placeholder-[#8A96A6] px-6 py-4 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-[#0CBF9F] focus:ring-[#1A746B] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Phone Number</label>
                        <input type="tel" className="w-full bg-white border border-[#B4CCC6] text-navy-900 placeholder-[#8A96A6] px-6 py-4 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-[#0CBF9F] focus:ring-[#1A746B] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm" placeholder="+91 98765 43210" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Message</label>
                      <textarea rows={5} className="w-full bg-white border border-[#B4CCC6] text-navy-900 placeholder-[#8A96A6] px-6 py-4 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-[#0CBF9F] focus:ring-[#1A746B] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] font-sans rounded-sm resize-none" placeholder="How can we help you?" required></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#0CBF9F] text-white font-sans font-bold uppercase tracking-[0.1em] text-sm py-5 hover:bg-[#0A9F84] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-700 mt-8 rounded-full shadow-[0_4px_20px_rgba(39,93,245,0.3)] hover:shadow-[0_8px_30px_rgba(39,93,245,0.4)] hover:-translate-y-1 flex items-center justify-center group">
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
