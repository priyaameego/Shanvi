const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(homePath, 'utf8');

// The section start
const sectionStart = `      {/* Action Boxes */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">`;

const replacement = `      {/* Action Boxes */}
      <section className="py-32 bg-[#F6F8FB] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Job Seekers */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-12 md:p-16 text-center shadow-[0_10px_30px_rgba(16,42,67,0.06)] border border-[#E4EAF0] rounded-[32px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,42,67,0.1)] hover:border-[#0CBF9F]/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-[16px] bg-[#EEF8F6] mb-8 border border-[#0CBF9F]/10 group-hover:bg-[#0CBF9F] transition-all duration-500 shadow-sm">
                  <User size={32} className="text-[#0CBF9F] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-serif text-[#102A43] mb-4">Job Seekers</h3>
                <p className="text-[#475467] font-sans mb-10 font-light text-base leading-relaxed">Grow your career with us. Our experts helps you navigate opportunities.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/career" className="group/btn inline-flex items-center justify-center px-8 py-4 bg-[#0CBF9F] text-white font-sans font-bold uppercase tracking-[0.1em] text-xs hover:bg-[#0A9F84] transition-all duration-300 rounded-[12px] shadow-[0_6px_18px_rgba(12,191,159,0.18)] hover:shadow-[0_8px_25px_rgba(12,191,159,0.25)] hover:-translate-y-[2px]">
                    Current Jobs
                  </a>
                  <a href="/career#register" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#E4EAF0] text-[#102A43] font-sans font-bold uppercase tracking-[0.1em] text-xs hover:border-[#0CBF9F] hover:text-[#0CBF9F] transition-all duration-300 rounded-[12px]">
                    Register Now
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Clients */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="bg-white p-12 md:p-16 text-center shadow-[0_10px_30px_rgba(16,42,67,0.06)] border border-[#E4EAF0] rounded-[32px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,42,67,0.1)] hover:border-[#0CBF9F]/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-[16px] bg-[#EEF8F6] mb-8 border border-[#0CBF9F]/10 group-hover:bg-[#0CBF9F] transition-all duration-500 shadow-sm">
                  <Building size={32} className="text-[#0CBF9F] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-serif text-[#102A43] mb-4">Clients</h3>
                <p className="text-[#475467] font-sans mb-10 font-light text-base leading-relaxed">Inquire about our professional services & discuss your strategic requirements.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ourservices" className="group/btn inline-flex items-center justify-center px-8 py-4 bg-[#0CBF9F] text-white font-sans font-bold uppercase tracking-[0.1em] text-xs hover:bg-[#0A9F84] transition-all duration-300 rounded-[12px] shadow-[0_6px_18px_rgba(12,191,159,0.18)] hover:shadow-[0_8px_25px_rgba(12,191,159,0.25)] hover:-translate-y-[2px]">
                    Services
                  </a>
                  <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#E4EAF0] text-[#102A43] font-sans font-bold uppercase tracking-[0.1em] text-xs hover:border-[#0CBF9F] hover:text-[#0CBF9F] transition-all duration-300 rounded-[12px]">
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>`;

// We will use regex to replace the entire Action Boxes section in Home.tsx
const regex = /\{\/\* Action Boxes \*\/\}.*?<\/section>/s;
if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(homePath, content);
  console.log('Successfully updated action boxes.');
} else {
  console.log('Regex failed to match.');
}
