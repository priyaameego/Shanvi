import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Briefcase, MapPin, Clock, Upload, ArrowRight, CheckCircle, FileText } from 'lucide-react'

export function Career() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFileName(null);
      }, 5000);
    }, 1500);
  };
  const jobs = [
    { title: "Senior HR Consultant", location: "Gurgaon", type: "Full-Time", desc: "We are looking for an experienced HR Consultant to lead executive search mandates for our top-tier clients in the IT and Finance sectors." },
    { title: "Technical Recruiter", location: "Kolkata", type: "Full-Time", desc: "Join our fast-growing technical team to source and recruit the best engineering talent for high-growth startups and established tech giants." },
    { title: "Business Development Manager", location: "Remote", type: "Full-Time", desc: "Drive growth by acquiring new corporate clients and establishing strategic partnerships across the APAC region." },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-28 pb-10 bg-background overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80" alt="Careers Background" className="w-full h-full object-cover opacity-25  gpu-layer" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent" />
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
              <span className="text-[#13294B]">Career</span>
            </motion.nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif text-navy-900 mb-8 leading-tight"
            >
              Careers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              Grow your career with us. Explore exciting opportunities and let our experts help you navigate your professional journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Shanvi Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-left max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              
              className="text-4xl md:text-5xl font-serif text-navy-900 mb-6"
            >
              Why Choose <span className="text-accent italic font-light">Shanvi?</span>
            </motion.h2>
            <div className="w-24 h-[1px] bg-accent mb-8" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ delay: 0.2 }}
              className="text-charcoal font-sans text-lg leading-relaxed font-light"
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
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-[#E4EAF0] p-10 lg:p-12 text-center rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:-translate-y-1 hover:border-[#165396]/30 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#EBF2FA] border border-[#165396]/10 text-[#165396] mx-auto mb-6 group-hover:bg-[#165396] group-hover:text-white transition-colors duration-300">
                  <CheckCircle size={28} className="text-[#165396] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-charcoal font-sans font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-32 bg-background text-navy-900 relative overflow-hidden" id="current-jobs">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                
                className="text-4xl md:text-5xl font-serif mb-6"
              >
                Current <span className="text-accent italic font-light">Openings</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                
                className="w-24 h-[2px] bg-accent origin-left"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              
              className="text-navy-600 font-sans font-light max-w-md"
            >
              Discover roles that match your expertise. We are constantly updating our board with exclusive opportunities.
            </motion.p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative bg-white border border-[#E4EAF0] p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] hover:border-[#165396]/30 transition-all duration-300 rounded-[24px] flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start md:items-center"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm font-sans text-navy-600 mb-4 font-light uppercase tracking-[0.1em]">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-accent" /> {job.type}</span>
                  </div>
                  <p className="text-charcoal font-sans font-light leading-relaxed">{job.desc}</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <a href="#register" className="group inline-flex items-center justify-center px-8 py-4 bg-[#165396] text-white text-xs md:text-sm uppercase tracking-[0.1em] font-bold transition-all duration-250 rounded-[12px] shadow-[0_6px_18px_rgba(21,154,131,0.18)] hover:shadow-[0_8px_25px_rgba(21,154,131,0.25)] hover:-translate-y-[2px] hover:bg-[#104075] whitespace-nowrap w-full md:w-auto">
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Register / Submit Resume */}
      <section className="py-32 bg-background" id="register">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-12 md:p-20 border border-[#E4EAF0] rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-bl-full pointer-events-none" />
            
            <div className="text-left mb-12 relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-[16px] bg-[#EBF2FA] border border-[#165396]/10 text-[#165396] mb-8 shadow-sm">
                <Upload size={32} className="text-[#165396]" />
              </div>
              <h2 className="text-4xl font-serif text-navy-900 mb-4">Register Your <span className="text-accent italic font-light">Profile</span></h2>
              <p className="text-charcoal font-sans font-light text-lg">Don't see a role that fits? Submit your resume and our experts will contact you when a matching opportunity arises.</p>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full bg-[#F6F8FB] border border-[#E4EAF0] px-6 py-4 focus:outline-none focus:border-[#165396] transition-colors duration-300 font-sans rounded-[12px]" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full bg-[#F6F8FB] border border-[#E4EAF0] px-6 py-4 focus:outline-none focus:border-[#165396] transition-colors duration-300 font-sans rounded-[12px]" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-[#F6F8FB] border border-[#E4EAF0] px-6 py-4 focus:outline-none focus:border-[#165396] transition-colors duration-300 font-sans rounded-[12px]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-[#F6F8FB] border border-[#E4EAF0] px-6 py-4 focus:outline-none focus:border-[#165396] transition-colors duration-300 font-sans rounded-[12px]" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans font-semibold text-navy-900 mb-2 uppercase tracking-widest">Upload Resume</label>
                <label className="w-full bg-[#F6F8FB] border-2 border-dashed border-[#E4EAF0] px-6 py-12 text-center rounded-[12px] hover:border-[#165396] hover:bg-[#EBF2FA] transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center relative block">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept=".pdf,.doc,.docx" 
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)} 
                  />
                  {fileName ? (
                    <>
                      <FileText className="mx-auto text-accent mb-4" size={32} />
                      <p className="text-charcoal font-sans font-medium">{fileName}</p>
                      <p className="text-xs text-accent mt-2 font-medium">Click to change file</p>
                    </>
                  ) : (
                    <>
                      <Briefcase className="mx-auto text-navy-600 mb-4 group-hover:text-accent transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]" size={32} />
                      <p className="text-charcoal font-sans font-light">Drag and drop your resume here, or <span className="text-accent font-semibold tracking-[0.25em]">browse</span></p>
                      <p className="text-xs text-navy-600 mt-2">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </>
                  )}
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`w-full font-sans font-bold uppercase tracking-[0.1em] text-sm py-5 transition-all duration-300 mt-8 rounded-[12px] flex items-center justify-center group ${
                  isSubmitted ? 'bg-[#18A889] text-white cursor-default' : 
                  isSubmitting ? 'bg-[#102A43] text-white cursor-wait' : 
                  'bg-[#165396] text-white hover:bg-[#104075] hover:-translate-y-1 shadow-[0_6px_18px_rgba(21,154,131,0.18)]'
                }`}
              >
                {isSubmitted ? (
                  <>
                    Submitted Successfully
                    <CheckCircle size={18} className="ml-3" />
                  </>
                ) : isSubmitting ? (
                  <>
                    Submitting...
                    <div className="w-4 h-4 border-2 border-border-light border-t-white rounded-full animate-spin ml-3" />
                  </>
                ) : (
                  <>
                    Submit Profile
                    <ArrowRight size={18} className="ml-3 transform group-hover:translate-x-2 transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-700" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
