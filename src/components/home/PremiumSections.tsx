import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, Zap, ShieldCheck, Users2, Building2, Briefcase, Star, UserCheck } from 'lucide-react';

export function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-[#E4EAF0] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#6B7280] mb-8">Trusted by Leading Businesses</p>
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16 opacity-60">
          {['TATA', 'RELIANCE', 'WIPRO', 'INFOSYS', 'HDFC', 'AMAZON'].map((brand, i) => (
            <span key={i} className="text-xl md:text-2xl font-serif font-bold text-[#9CA3AF] hover:text-[#0CBF9F] transition-colors duration-300">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyStats() {
  const stats = [
    { value: "500+", label: "Clients Served", icon: <Building2 size={24} /> },
    { value: "10+", label: "Countries", icon: <Globe2 size={24} /> },
    { value: "50K+", label: "Candidates Placed", icon: <Briefcase size={24} /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star size={24} /> }
  ];
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white border border-[#E4EAF0] p-8 rounded-[24px] shadow-[0_4px_20px_rgba(16,42,67,0.03)] text-center group hover:-translate-y-1 hover:border-[#0CBF9F]/30 hover:shadow-[0_10px_30px_rgba(16,42,67,0.06)] transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-[14px] bg-[#EEF8F6] border border-[#0CBF9F]/10 flex items-center justify-center mb-6 group-hover:bg-[#0CBF9F] group-hover:text-white text-[#0CBF9F] transition-colors duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-[#102A43] mb-2">{stat.value}</h3>
              <p className="text-[#475467] font-sans font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const features = [
    { title: "Global Recruitment", icon: <Globe2 /> },
    { title: "Fast Hiring", icon: <Zap /> },
    { title: "Verified Candidates", icon: <UserCheck /> },
    { title: "Industry Experts", icon: <Briefcase /> },
    { title: "Compliance Support", icon: <ShieldCheck /> },
    { title: "Dedicated Managers", icon: <Users2 /> }
  ];
  return (
    <section className="py-24 bg-[#F6F8FB]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#102A43] mb-6">Why Choose Shanvi Global</h2>
          <div className="w-16 h-1 bg-[#0CBF9F] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-[24px] border border-[#E4EAF0] shadow-[0_4px_20px_rgba(16,42,67,0.03)] hover:-translate-y-1 hover:border-[#0CBF9F]/30 hover:shadow-[0_10px_30px_rgba(16,42,67,0.06)] transition-all duration-300 group flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#EEF8F6] border border-[#0CBF9F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0CBF9F] group-hover:text-white text-[#0CBF9F] transition-colors duration-300">
                {feat.icon}
              </div>
              <div>
                <h3 className="font-serif text-[#102A43] text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-[#475467] font-sans font-light text-sm leading-relaxed">Delivering excellence with tailored solutions that perfectly match your corporate requirements and growth objectives.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HiringProcess() {
  const steps = ["Consultation", "Talent Search", "Screening", "Interview", "Selection", "Onboarding"];
  return (
    <section className="py-24 bg-white border-t border-[#E4EAF0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#102A43] mb-6">Our Hiring Process</h2>
          <div className="w-16 h-1 bg-[#0CBF9F] mx-auto rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute top-6 left-[8%] w-[84%] h-[2px] bg-[#E4EAF0] z-0" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-white border-2 border-[#E4EAF0] flex items-center justify-center text-[#102A43] font-bold mb-4 shadow-[0_0_0_4px_white] group-hover:border-[#0CBF9F] group-hover:text-[#0CBF9F] transition-colors duration-300">
                  {i + 1}
                </div>
                <h4 className="font-sans font-bold text-[#102A43] text-sm uppercase tracking-[0.05em] group-hover:text-[#0CBF9F] transition-colors duration-300">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialCarousel() {
  const reviews = [
    { name: "Sarah Jenkins", role: "HR Director", company: "TechCorp", text: "Shanvi Global transformed our hiring process. Their candidates are always top-tier and their team is a pleasure to work with.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" },
    { name: "Michael Chen", role: "CEO", company: "Innovate AI", text: "We found our entire leadership team through Shanvi. Exceptionally professional service that understands exactly what modern businesses need.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
    { name: "Priya Sharma", role: "VP Operations", company: "Global Logistics", text: "The speed and accuracy of their recruitment is unmatched in the industry. They are our go-to partners for all executive hiring.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" }
  ];
  
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F6F8FB] border-t border-[#E4EAF0]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#102A43] mb-16">Client Testimonials</h2>
        <div className="max-w-4xl mx-auto relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white p-10 md:p-14 rounded-[32px] border border-[#E4EAF0] shadow-[0_10px_30px_rgba(16,42,67,0.06)] flex flex-col items-center justify-center text-center"
            >
              <div className="flex gap-1 text-[#0CBF9F] mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
              </div>
              <p className="text-[#475467] font-sans font-light text-lg md:text-xl leading-relaxed mb-8 italic">"{reviews[current].text}"</p>
              <div className="flex items-center gap-4">
                <img src={reviews[current].img} alt={reviews[current].name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                <div className="text-left">
                  <h4 className="font-serif text-[#102A43] font-bold text-lg">{reviews[current].name}</h4>
                  <p className="text-xs font-sans font-medium text-[#6B7280] uppercase tracking-[0.05em]">{reviews[current].role}, {reviews[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === i ? 'bg-[#0CBF9F] w-8' : 'bg-[#E4EAF0] hover:bg-[#0CBF9F]/50'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#102A43] relative overflow-hidden rounded-t-[40px] md:rounded-t-[80px] mt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/90 to-[#102A43]/80" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
        >
          Ready to Build Your Workforce?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white/80 font-sans text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
        >
          Partner with Shanvi Global Recruitment Services to hire the right talent faster.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#0CBF9F] text-white font-sans font-bold uppercase tracking-[0.1em] text-xs hover:bg-[#0A9F84] transition-all duration-300 rounded-[12px] shadow-[0_6px_18px_rgba(12,191,159,0.18)] hover:shadow-[0_8px_25px_rgba(12,191,159,0.25)] hover:-translate-y-[2px]">
            Contact Us
          </a>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-sans font-bold uppercase tracking-[0.1em] text-xs hover:bg-white hover:text-[#102A43] transition-all duration-300 rounded-[12px]">
            Get Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function PremiumSections() {
  return (
    <>
      <TrustedBy />
      <CompanyStats />
      <WhyChooseUs />
      <HiringProcess />
      <TestimonialCarousel />
      <FinalCTA />
    </>
  );
}
