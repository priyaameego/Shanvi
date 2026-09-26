import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, Building } from 'lucide-react'

export function Contact() {
  return (
    <div className="w-full">
      <section className="relative pt-40 pb-32 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Contact Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-sans mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto font-sans text-lg font-light"
          >
            We are always ready to help you. Reach out to our global offices.
          </motion.p>
        </div>
      </section>

      <section className="py-32 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-stretch">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-16 shadow-2xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-bl-full pointer-events-none transform group-hover:scale-110 transition-transform duration-700" />
              <h2 className="text-4xl font-serif text-navy-900 mb-12 border-b border-gold/30 pb-6">Contact Information</h2>
              
              <div className="space-y-12">
                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors duration-500">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Contact Number</h3>
                    <p className="text-navy-700 font-sans text-lg font-light"><a href="tel:+919871500770" className="hover:text-gold transition-colors">+91 - 9871500770</a></p>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors duration-500">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-2">Email Address</h3>
                    <p className="text-navy-700 font-sans font-light mb-2"><a href="mailto:hiring@shanviglobal.com" className="hover:text-gold transition-colors block">• hiring@shanviglobal.com</a></p>
                    <p className="text-navy-700 font-sans font-light"><a href="mailto:anupama@shanviglobal.com" className="hover:text-gold transition-colors block">• anupama@shanviglobal.com</a></p>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors duration-500">
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
                  <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mr-6 flex-shrink-0 group-hover/item:bg-navy-950 transition-colors duration-500">
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-8 justify-between"
            >
              <div className="bg-navy-900 text-white p-16 text-center shadow-2xl relative overflow-hidden group flex-1 flex flex-col justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 to-navy-950 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-8 border border-white/10 group-hover:border-gold/30 transition-colors duration-500">
                    <Users className="text-gold" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">Job Seekers</h3>
                  <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
                  <p className="text-gray-300 font-sans mb-10 font-light">Grow your career with us. Our experts helps you.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/career" className="px-8 py-4 bg-gold text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-navy-900 transition-colors duration-300">
                      Current Jobs
                    </a>
                    <a href="/career#register" className="px-8 py-4 bg-transparent border border-white/30 text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-colors duration-300">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-16 text-center shadow-2xl border border-gold/10 relative overflow-hidden group hover:border-gold/30 transition-colors duration-500 flex-1 flex flex-col justify-center">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-900/5 mb-8 border border-navy-900/10 group-hover:border-gold/30 transition-colors duration-500">
                    <Building className="text-navy-900 group-hover:text-gold transition-colors duration-500" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">Clients</h3>
                  <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
                  <p className="text-navy-700 font-sans mb-10 font-light">Inquire about our professional services &amp; discuss what you require.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/ourservices" className="px-8 py-4 bg-navy-900 text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-gold transition-colors duration-300">
                      Services
                    </a>
                    <a href="/contact" className="px-8 py-4 bg-transparent border border-navy-900/30 text-navy-900 font-sans font-semibold uppercase tracking-widest text-xs hover:bg-navy-900 hover:text-white transition-colors duration-300">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
