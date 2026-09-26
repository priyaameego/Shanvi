import { Hero } from '../components/hero/Hero'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Search, CheckCircle, Settings, Briefcase, ChevronRight, User, Building } from 'lucide-react'
import { useState } from 'react'

export function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const assignments = [
    { title: "Finance Manager for FMCG Company", desc: "Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas" },
    { title: "Reginal Head for Retail industry at Delhi", desc: "Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas" },
    { title: "Head HR for Finance Industry at Gaziyabad.", desc: "Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas" },
    { title: "Account Manager for Manufacturing company", desc: "Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas" }
  ]

  return (
    <div className="w-full font-sans">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-32 md:py-48 bg-ivory relative z-20 -mt-12 md:-mt-24 shadow-[0_-30px_60px_rgba(0,0,0,0.15)] rounded-t-[40px] md:rounded-t-[80px]">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 relative z-20 lg:-mr-12 xl:-mr-24 pt-10">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className="w-24 h-[2px] bg-gold mb-8 origin-left"
              />
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 leading-tight mb-8"
              >
                Best Recruitment <span className="italic font-light text-gold">consulting</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-navy-700 font-sans leading-relaxed mb-6 font-light"
              >
                Over the last 8 years we have partnered with some of the leading names in the industry in their growth and success, from large diversified Indian groups to MNCs and SMEs.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-navy-700 font-sans leading-relaxed mb-12 font-light"
              >
                Seasoned recruiters now focusing on Recruitment Research. We can do research + full cycle recruitment i.e. from Research to Recruitment to On Boarding.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a 
                  href="/aboutus"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-navy-900 text-white text-xs md:text-sm uppercase tracking-[0.2em] font-semibold overflow-hidden transition-all shadow-xl hover:shadow-gold/20"
                >
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10 flex items-center transition-colors duration-500 group-hover:text-navy-900">
                    Read More 
                    <ArrowRight size={16} className="ml-4 transform group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-7 relative z-10"
            >
              <div className="relative aspect-square lg:aspect-[5/4] w-full max-w-[600px] ml-auto">
                <div className="absolute top-10 -left-10 w-full h-full border border-gold/30 z-0 rounded-2xl hidden md:block" />
                <div className="absolute inset-0 bg-navy-900 rounded-2xl overflow-hidden shadow-2xl z-10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
                    alt="Professional Team" 
                    className="object-cover w-full h-full opacity-90 transform group-hover:scale-110 transition-transform duration-[3s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/60 to-transparent mix-blend-multiply transition-opacity duration-700 group-hover:opacity-40" />
                </div>
                
                {/* Floating Glassmorphism Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-8 md:-left-12 bg-white/90 backdrop-blur-xl p-6 shadow-2xl border border-white z-30 rounded-xl max-w-[200px]"
                >
                  <p className="text-4xl md:text-5xl font-serif text-navy-900 mb-1 flex items-start">
                    8<span className="text-gold text-3xl mt-1">+</span>
                  </p>
                  <p className="text-xs font-sans text-navy-600 uppercase tracking-widest font-semibold leading-snug">Years of<br/>Excellence</p>
                  <div className="w-8 h-[2px] bg-gold mt-4" />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Services Highlight Section */}
      <section className="py-32 md:py-40 bg-[#050B14] text-white relative overflow-hidden">
        {/* Dynamic mesh gradients for premium feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3 mix-blend-screen" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-end justify-between mb-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="w-24 h-[2px] bg-gold mb-8 origin-left"
              />
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-serif text-white mb-6"
              >
                Our <span className="italic font-light text-gold">Services</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed font-light"
              >
                From our experience we have learned that every company has its own culture, values and expectations of its employees. Our workforce spread over India has one mission to fulfill, to find the right people to meet our clients' specific requirements.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <a href="/ourservices" className="inline-flex items-center gap-4 text-gold uppercase tracking-widest text-sm font-semibold hover:text-white transition-colors group">
                View All Services
                <div className="w-12 h-[1px] bg-gold group-hover:bg-white group-hover:w-20 transition-all duration-500" />
              </a>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
            {[
              { icon: Search, title: "Recruitment and Staffing", desc: "Our team of seasoned recruiters specializes in identifying and attracting top-tier talent tailored to the unique needs of our clients. We offer comprehensive recruitment services across various industries." },
              { icon: Settings, title: "Recruitment Process Outsourcing (RPO)", desc: "Our RPO services redefine the hiring process, optimizing it for efficiency. By partnering with us for your recruitment needs, you gain access to a strategic solution that enhances your workforce management." },
              { icon: Briefcase, title: "Executive Search", desc: "For senior-level positions, our executive search services focus on identifying and recruiting top executives who possess the leadership qualities needed to drive organizational success." },
              { icon: CheckCircle, title: "Background Checks", desc: "At post offer stage, under background check services, we reach out to past employers and graduating institutes to verify the authenticity of the candidate's credentials on behalf of clients." }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="group relative bg-navy-900/30 backdrop-blur-md border border-white/5 p-12 lg:p-16 hover:bg-navy-900/60 transition-all duration-700 overflow-hidden rounded-2xl"
              >
                {/* Hover gradient effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/10 transition-all duration-700 group-hover:-translate-y-2">
                      <service.icon size={28} className="text-white group-hover:text-gold transition-colors duration-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-gold transition-colors duration-500">{service.title}</h3>
                    <p className="text-gray-400 font-sans leading-relaxed font-light">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Organization */}
      <section className="py-32 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-ivory rounded-3xl -rotate-3 z-0 hidden md:block" />
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl rotate-3 z-0 hidden md:block" />
              <div className="aspect-[4/3] bg-navy-950 overflow-hidden relative shadow-2xl z-10 group rounded-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="About Us" className="w-full h-full object-cover opacity-90 transform group-hover:scale-105 transition-transform duration-[3s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-lg font-serif italic mb-2 font-light">"Converting solutions into long term strategic advantages."</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="w-24 h-[2px] bg-gold mb-8 origin-left"
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-navy-900 leading-tight">
                Our <span className="italic font-light text-gold">Organization</span>
              </h2>
              <p className="text-navy-700 font-sans text-lg font-light leading-relaxed mb-8">
                Established in 2003 as Shanvi Staffing &amp; Training Services, has earn vast experience in recruitment sector. We have experties to fulfill our clients requirements easily. Shanvi Staffing is now most preferred recruitment and staffing service provider among our clients.
              </p>
              <p className="text-navy-700 font-sans text-lg leading-relaxed mb-12 font-light">
                We have well-demonstrated track record of delivering high-value, low-cost outsourcing process solutions that can highly benefit your business. We have dedicated, experienced recruiter team who work hard towards providing you the best resources for your company.
              </p>
              
              <div className="bg-ivory p-8 md:p-10 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-serif text-navy-900 mb-6">Top reasons to prefer our services</h3>
                <ul className="space-y-4">
                  {[
                    "10+ Years Experience in Recruitment",
                    "4,00,000+ Active Candidate Database from our region",
                    "Effective, Efficient & Result Oriented Recruitment Process",
                    "Ethical, Responsible & Thoughtful Approach"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-navy-700 font-sans group">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-gold transition-colors duration-300 flex-shrink-0">
                        <span className="text-gold group-hover:text-white transition-colors duration-300 text-[10px]">✦</span>
                      </div>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accordion & Testimonials */}
      <section className="py-32 md:py-48 bg-ivory border-t border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 lg:col-span-6"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6 leading-tight">Latest Completed <br/><span className="text-gold italic font-light">Assignments</span></h3>
              <div className="w-16 h-[2px] bg-gold mb-12" />
              <div className="space-y-6">
                {assignments.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden border border-gray-100">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left group bg-white"
                    >
                      <span className="font-serif text-lg md:text-xl text-navy-900 group-hover:text-gold transition-colors duration-300 pr-6">{item.title}</span>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${activeAccordion === i ? 'bg-gold text-white' : 'bg-navy-50 text-navy-400 group-hover:bg-gold/10 group-hover:text-gold'}`}>
                        <ChevronRight className={`transform transition-transform duration-500 ${activeAccordion === i ? 'rotate-90' : ''}`} size={20} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeAccordion === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-navy-50/50"
                        >
                          <div className="p-8 pt-4 text-navy-700 font-sans leading-relaxed font-light text-[15px]">
                            {item.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 lg:col-span-5 lg:col-start-8 flex items-center"
            >
              <div className="w-full relative">
                <div className="absolute top-10 -right-10 w-full h-full bg-gold/10 rounded-3xl z-0 hidden lg:block" />
                <div className="bg-navy-950 p-12 md:p-16 text-white relative shadow-2xl overflow-hidden group rounded-3xl z-10">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-bl-full pointer-events-none transform group-hover:scale-125 transition-transform duration-1000" />
                  <span className="text-8xl text-gold/20 font-serif absolute -top-2 left-6 leading-none">"</span>
                  <h3 className="text-2xl font-serif text-white mb-8 relative z-10">What our clients say</h3>
                  <blockquote className="relative z-10 font-sans text-gray-300 leading-loose mb-12 mt-6 text-lg font-light italic">
                    Lorem ipsum dolor met consectetur adipisicing. Aorem psum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua.
                  </blockquote>
                  <div className="flex items-center gap-6 border-t border-white/10 pt-8 relative z-10">
                    <div className="relative">
                      <div className="absolute inset-0 border-2 border-gold rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" alt="Marc Cooper" className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-white mb-1">Marc Cooper</h4>
                      <p className="text-gold text-xs font-sans uppercase tracking-[0.2em] font-semibold">Technical Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Action Boxes */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-navy-900 text-white p-16 md:p-20 text-center shadow-2xl rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-luminosity group-hover:scale-110 transition-transform duration-[3s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-900/80" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm mb-10 border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500 shadow-xl">
                  <User className="text-gold" size={40} />
                </div>
                <h3 className="text-4xl font-serif mb-6">Job Seekers</h3>
                <p className="text-gray-300 font-sans mb-12 font-light text-lg">Grow your career with us. Our experts helps you navigate opportunities.</p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <a href="/career" className="px-8 py-4 bg-gold text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-navy-900 transition-colors duration-300 rounded-sm">
                    Current Jobs
                  </a>
                  <a href="/career#register" className="px-8 py-4 bg-transparent border border-white/30 text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-colors duration-300 rounded-sm">
                    Register Now
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-ivory p-16 md:p-20 text-center shadow-xl border border-gray-100 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-navy-900/5 mb-10 border border-navy-900/10 group-hover:border-gold/30 group-hover:bg-white transition-all duration-500 shadow-sm group-hover:shadow-xl">
                  <Building className="text-navy-900 group-hover:text-gold transition-colors duration-500" size={40} />
                </div>
                <h3 className="text-4xl font-serif text-navy-900 mb-6">Clients</h3>
                <p className="text-navy-700 font-sans mb-12 font-light text-lg">Inquire about our professional services &amp; discuss your strategic requirements.</p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <a href="/ourservices" className="px-8 py-4 bg-navy-900 text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-gold transition-colors duration-300 rounded-sm">
                    Services
                  </a>
                  <a href="/contact" className="px-8 py-4 bg-transparent border border-navy-900/30 text-navy-900 font-sans font-semibold uppercase tracking-widest text-xs hover:bg-navy-900 hover:text-white transition-colors duration-300 rounded-sm">
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}
