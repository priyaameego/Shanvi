import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { CheckCircle, Settings, Search, Award } from 'lucide-react'

export function Services() {
  return (
    <div className="w-full">
      <section className="relative pt-28 pb-10 bg-white overflow-hidden">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.0, x: "0%", y: "0%" }}
            animate={{ scale: 1.1, x: "-1%", y: "-1%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
            alt="Services Background" 
            fetchPriority="high" 
            decoding="async" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:w-3/4 lg:w-2/3 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80 z-10" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-[13px] font-sans font-medium mb-10"
            >
              <Link to="/" className="text-[#6B7280] hover:text-[#165396] transition-colors duration-300">Home</Link>
              <span className="text-[#165396] text-[15px] leading-none">›</span>
              <span className="text-[#13294B]">Services</span>
            </motion.nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif text-navy-900 mb-8 leading-tight"
            >
              Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              Shanvi Global offers Best Staffing Services &amp; Executive Recruitment
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-left max-w-4xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              
              className="text-4xl md:text-5xl font-serif text-navy-900 mb-8"
            >
              Our Best <span className="text-accent italic font-light">Services</span>
            </motion.h2>
            <div className="w-24 h-[1px] bg-accent mb-8" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ delay: 0.2 }}
              className="text-charcoal font-sans text-lg leading-relaxed font-light"
            >
              From our experience we have learned that every company has its own culture, values and expectations of its employees. Our workforce spread over India has one mission to fulfill, to find the right people to meet our clients' specific requirements. Key features makes us different from others, We focus on quality work to provide best recruitment services, Staffing Services.
            </motion.p>
          </div>

          {/* New PDF Services + Legacy Background Checks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
            {[
              { icon: Search, title: "Recruitment and Staffing", desc: "Our team of seasoned recruiters specializes in identifying and attracting top-tier talent tailored to the unique needs of our clients. We offer comprehensive recruitment services across various industries, ensuring a perfect fit for each role." },
              { icon: Settings, title: "Recruitment Process Outsourcing (RPO)", desc: "Our Recruitment Process Outsourcing (RPO) services redefine the hiring process, optimizing it for efficiency and effectiveness. By partnering with us for your recruitment needs, you gain access to a strategic solution that enhances your workforce management." },
              { icon: Award, title: "Executive Search", desc: "For senior-level positions, our executive search services focus on identifying and recruiting top executives who possess the leadership qualities needed to drive organizational success." },
              { icon: CheckCircle, title: "Background Verification", desc: "At post offer stage, under background check services, we reach out to past employers and graduating institutes to verify the authenticity of the candidate's credentials on behalf of clients." }
            ].map((service) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                
                className="group relative bg-white border border-[#E4EAF0] p-10 lg:p-12 rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:-translate-y-1 hover:border-[#165396]/30 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-[16px] bg-[#EBF0FF] border border-[#165396]/20 flex items-center justify-center group-hover:bg-[#165396] transition-all duration-300">
                      <service.icon className="text-[#165396] group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                  <h3 className="text-2xl font-serif text-navy-900 mb-4 group-hover:text-navy-900 transition-colors duration-700">{service.title}</h3>
                    <div className="w-8 h-[2px] bg-gold mb-4 rounded-full opacity-80" />
                  <p className="text-charcoal font-sans leading-relaxed font-light">{service.desc}</p>
                </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Candidate Selection Process */}
          <div className="mt-40 mb-32">
            <div className="text-left max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-8">Candidate Selection <span className="text-accent italic font-light">Process</span></h2>
              <div className="w-24 h-[1px] bg-accent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-12 right-12 h-[2px] bg-accent/20 z-0"></div>
              
              {[
                { step: "1", title: "Assignment Understanding", points: ["Spend time comprehending key assignment pointers independently.", "Engage in detailed discussions with HR or technical manager if necessary."] },
                { step: "2", title: "Candidate Shortlisting", points: ["Identify suitable candidates from databank, social platforms, and other sources.", "Evaluate and shortlist candidates based on their qualifications and fit for the role."] },
                { step: "3", title: "Profile Discussion", points: ["Discuss candidate profiles, company details, and other pertinent information with shortlisted candidates.", "Confirm candidate interest in moving forward with the opportunity."] },
                { step: "4", title: "Client Relationship Building", points: ["Develop a business relationship with the client through effective communication and understanding their requirements.", "Share shortlisted and interested candidate profiles with the client for consideration."] },
                { step: "5", title: "Optimizing Offer Acceptance", points: ["Propose the best-matched and interested resumes to the client, minimizing uncertainties and reducing the likelihood of offer rejections.", "Foster a productive and efficient recruitment process that saves time and energy for all parties involved."] }
              ].map((process, i) => (
                <motion.div 
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  
                  transition={{ delay: i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex flex-col items-center text-center group bg-white border border-[#E4EAF0] p-8 rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:-translate-y-2 hover:border-[#165396]/30 hover:shadow-[0_20px_40px_rgba(16,42,67,0.1)] transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-[16px] bg-[#EBF2FA] border border-[#165396]/10 flex items-center justify-center mb-6 group-hover:bg-[#165396] transition-colors duration-300 shadow-sm">
                    <span className="text-2xl font-serif text-[#165396] font-bold group-hover:text-white transition-colors duration-300">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#102A43] mb-6 h-14 flex items-center justify-center uppercase tracking-widest">{process.title}</h3>
                  <ul className="text-left space-y-4 px-2 w-full">
                    {process.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start text-[#475467] font-sans text-sm font-light">
                        <span className="text-[#165396] mr-3 mt-1 flex-shrink-0 text-[10px]">●</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialized Sectors */}
          <div className="mt-40 border-t border-accent/20 pt-32">
            <div className="text-left max-w-4xl mx-auto mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                className="text-4xl md:text-5xl font-serif text-navy-900 mb-8 uppercase tracking-widest"
              >
                Our Specialized Sectors
              </motion.h2>
              <div className="w-24 h-[1px] bg-accent mb-8" />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ delay: 0.2 }}
                className="text-charcoal font-sans text-lg md:text-xl font-light leading-relaxed"
              >
                At Shanvi, our versatility extends across a myriad of sectors and industries, showcasing our ability to navigate diverse landscapes and deliver exceptional results. Our specialized expertise encompasses, but is not limited to:
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24 max-w-7xl mx-auto">
              {[
                "Automobile", "Auto Ancillary", "Power and Energy Sector", "Healthcare", 
                "IT Sector", "FMCG", "Start-ups", "Finance Sector", 
                "Shipping Industry", "Hospitality Industry", "Retail", "Media Industry", "Pharmaceuticals"
              ].map((sector, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className="group relative bg-white border border-[#E4EAF0] p-4 pr-6 hover:-translate-y-1 hover:border-[#165396]/30 shadow-[0_4px_20px_rgba(16,42,67,0.04)] hover:shadow-[0_10px_30px_rgba(16,42,67,0.08)] transition-all duration-300 rounded-[16px] flex items-center"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-[#EBF2FA] border border-[#165396]/10 flex items-center justify-center mr-4 group-hover:bg-[#165396] transition-colors duration-300 flex-shrink-0">
                    <span className="text-[#165396] group-hover:text-white transform group-hover:rotate-90 transition-all duration-500 text-lg leading-none">✦</span>
                  </div>
                  <span className="font-serif text-[#102A43] group-hover:text-[#165396] transition-colors duration-300 text-base md:text-lg">{sector}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-16 md:p-20 text-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-accent/20 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none group-hover:bg-accent/15 transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000" />
              <span className="text-6xl text-accent/20 font-serif absolute top-8 left-10 leading-none">"</span>
              <p className="text-navy-900 font-sans text-lg md:text-xl font-light leading-loose relative z-10 max-w-5xl mx-auto">
                Sectoral boundaries do not confine us; rather, they inspire us to delve into the intricacies of any industry we undertake. When we embark on an assignment, regardless of the sector, we meticulously understand its nuances, allowing us to source candidates strategically and effectively. Trust Shanvi for a comprehensive and tailored approach to recruitment across a spectrum of industries.
              </p>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}
