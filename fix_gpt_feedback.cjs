const fs = require('fs');
const path = require('path');

// 1. Update Contact.tsx Hero Section
const contactPath = path.join(__dirname, 'src', 'pages', 'Contact.tsx');
let contact = fs.readFileSync(contactPath, 'utf8');

const newHeroSection = `      <section className="relative pt-32 pb-20 bg-[#F6F8FB] overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" alt="Contact Us Background" className="w-full h-full object-cover opacity-20 gpu-layer" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F8FB] via-[#F6F8FB]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8FB] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <motion.nav 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase mb-8"
              >
                <Link to="/" className="text-muted hover:text-[#102A43] transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]">Home</Link>
                <span className="text-gold mx-2">›</span>
                <span className="text-[#102A43] font-semibold tracking-[0.25em]">Contact</span>
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
      </section>`;

// Replace Contact Hero
const contactRegex = /<section className="relative pt-32 pb-20 bg-white overflow-hidden">.*?<\/section>/s;
contact = contact.replace(contactRegex, newHeroSection);
fs.writeFileSync(contactPath, contact);


// 2. Update Navbar.tsx
const navPath = path.join(__dirname, 'src', 'components', 'navbar', 'Navbar.tsx');
let nav = fs.readFileSync(navPath, 'utf8');

// Replace Follow Us
nav = nav.replace(
  /<div className="hidden md:flex gap-4">\s*<span className="text-white\/90 uppercase tracking-\[0\.15em\] font-medium">SHANVI GLOBAL RECRUITMENT SERVICES<\/span>\s*<\/div>/g,
  `<div className="hidden md:flex items-center gap-4">
          <span className="text-white/80 uppercase tracking-[0.15em] font-medium mr-2">Follow Us</span>
          <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
          <a href="#" className="text-white hover:text-white/80 transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div>`
);

// Replace Contact Button
nav = nav.replace(
  /className="ml-2 px-6 py-2\.5 bg-\[\#0CBF9F\] text-white text-\[11px\] font-bold uppercase tracking-\[0\.1em\] px-8 py-3 rounded-full shadow-md transition-all duration-500 hover:bg-navy-900 shadow-sm"/g,
  'className="ml-2 group/btn inline-flex items-center justify-center px-8 py-3 bg-[#0CBF9F] text-white text-[11px] font-bold uppercase tracking-[0.1em] rounded-[12px] shadow-[0_6px_18px_rgba(12,191,159,0.18)] hover:shadow-[0_8px_25px_rgba(12,191,159,0.25)] hover:-translate-y-[2px] hover:bg-[#0A9F84] transition-all duration-300"'
);

fs.writeFileSync(navPath, nav);
console.log('Successfully applied GPT feedback to Contact page and Navbar.');
