import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, Upload, ArrowRight, CheckCircle } from 'lucide-react'

export function Career() {
  const jobs = [
    { title: "Senior HR Consultant", location: "Gurgaon", type: "Full-Time", desc: "We are looking for an experienced HR Consultant to lead executive search mandates for our top-tier clients in the IT and Finance sectors." },
    { title: "Technical Recruiter", location: "Kolkata", type: "Full-Time", desc: "Join our fast-growing technical team to source and recruit the best engineering talent for high-growth startups and established tech giants." },
    { title: "Business Development Manager", location: "Remote", type: "Full-Time", desc: "Drive growth by acquiring new corporate clients and establishing strategic partnerships across the APAC region." },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop" alt="Career Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-sans mb-4"
          >
            Join The Future
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Careers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto font-sans text-lg font-light"
          >
            Grow your career with us. Explore exciting opportunities and let our experts help you navigate your professional journey.
          </motion.p>
        </div>
      </section>

      {/* Why Shanvi Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-navy-900 mb-6"
            >
              Why Choose <span className="text-gold italic font-light">Shanvi?</span>
            </motion.h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy-700 font-sans text-lg leading-relaxed font-light"
            >
              We believe that finding the right career path is about more than just matching skills to a job description. It's about aligning values, culture, and long-term goals. Here is why top talent trusts us.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Premium Network", desc: "Access exclusive opportunities with top-tier MNCs and fast-growing startups." },
              { title: "Expert Guidance", desc: "Our seasoned recruiters provide tailored advice to help you navigate your career path." },
              { title: "Confidentiality", desc: "We maintain the highest level of privacy and discretion throughout your job search." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-ivory p-12 text-center rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle className="text-gold" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-navy-700 font-sans font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-32 bg-navy-950 text-white relative overflow-hidden" id="current-jobs">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif mb-6"
              >
                Current <span className="text-gold italic font-light">Openings</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="w-24 h-[2px] bg-gold origin-left"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 font-sans font-light max-w-md"
            >
              Discover roles that match your expertise. We are constantly updating our board with exclusive opportunities.
            </motion.p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-navy-900/50 border border-white/10 p-8 md:p-10 hover:bg-navy-900 hover:border-gold/30 transition-all duration-500 group rounded-xl flex flex-col md:flex-row justify-between gap-8 items-center"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm font-sans text-gray-400 mb-4 font-light uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" /> {job.type}</span>
                  </div>
                  <p className="text-gray-300 font-sans font-light leading-relaxed">{job.desc}</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <button className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/20 text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-gold hover:border-gold transition-colors duration-300 rounded-sm whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Register / Submit Resume */}
      <section className="py-32 bg-ivory" id="register">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 shadow-2xl rounded-3xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-bl-full pointer-events-none" />
            
            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-50 mb-8 shadow-sm">
                <Upload className="text-gold" size={32} />
              </div>
              <h2 className="text-4xl font-serif text-navy-900 mb-4">Register Your <span className="text-gold italic font-light">Profile</span></h2>
              <p className="text-navy-700 font-sans font-light text-lg">Don't see a role that fits? Submit your resume and our experts will contact you when a matching opportunity arises.</p>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors font-sans rounded-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors font-sans rounded-sm" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors font-sans rounded-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-ivory border border-gray-200 px-6 py-4 focus:outline-none focus:border-gold transition-colors font-sans rounded-sm" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Upload Resume</label>
                <div className="w-full bg-ivory border-2 border-dashed border-gray-300 px-6 py-12 text-center rounded-sm hover:border-gold transition-colors cursor-pointer group">
                  <Briefcase className="mx-auto text-gray-400 mb-4 group-hover:text-gold transition-colors" size={32} />
                  <p className="text-navy-700 font-sans font-light">Drag and drop your resume here, or <span className="text-gold font-medium">browse</span></p>
                  <p className="text-xs text-gray-400 mt-2">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>

              <button className="w-full bg-navy-900 text-white font-sans font-semibold uppercase tracking-[0.2em] text-sm py-5 hover:bg-gold transition-colors duration-300 mt-4 rounded-sm flex items-center justify-center group">
                Submit Profile
                <ArrowRight size={18} className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
