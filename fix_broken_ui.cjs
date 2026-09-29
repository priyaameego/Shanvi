const fs = require('fs');
const path = require('path');

// Fix Home.tsx (Button and Badge)
const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let home = fs.readFileSync(homePath, 'utf8');

// Fix Read More Button (replace broken complex hover with a clean premium pill)
home = home.replace(
  /<a\s+href="\/aboutus"\s+className="group relative inline-flex[\s\S]*?<\/a>/,
  `<a 
                  href="/aboutus"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#1A746B] text-white text-xs md:text-sm uppercase tracking-[0.1em] font-bold transition-all duration-300 rounded-full shadow-lg hover:shadow-[0_8px_25px_rgba(26,116,107,0.4)] hover:-translate-y-1 hover:bg-[#125A52]"
                >
                  <span className="flex items-center">
                    Read More 
                    <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </a>`
);

// Fix Badge
home = home.replace(
  /className="absolute -bottom-8 md:-left-12 bg-gradient-to-br from-accent to-\[\#115E55\] p-6 shadow-2xl border border-accent"/,
  'className="absolute -bottom-8 md:-left-12 bg-[#0B1727] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-t-4 border-[#1A746B] z-30 rounded-xl max-w-[220px]"'
);
// Ensure the text inside the badge is visible
home = home.replace(
  /<p className="text-4xl md:text-5xl font-serif text-white mb-1 flex items-start">/g,
  '<p className="text-4xl md:text-5xl font-serif text-white mb-1 flex items-start">' // it is white, but on dark #0B1727 background now
);

// We need to find if the badge replacement actually worked. If not, let's just do a regex replace on the whole badge block:
home = home.replace(
  /\{?\/\* Floating Glassmorphism Badge \*\/\}?[\s\S]*?<\/motion\.div>/,
  `{/* Floating Premium Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-8 md:-left-12 bg-[#0B1727] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-t-4 border-[#1A746B] z-30 rounded-xl max-w-[220px]"
                >
                  <p className="text-5xl font-serif text-white mb-1 flex items-start">
                    8<span className="text-[#1A746B] text-3xl mt-1">+</span>
                  </p>
                  <p className="text-xs font-sans text-gray-300 uppercase tracking-widest font-semibold leading-snug">Years of<br/>Excellence</p>
                </motion.div>`
);

// Restore the "Best Recruitment" text to not be completely navy if they want it premium.
// Actually they just complained about the button and the badge and the footer.

fs.writeFileSync(homePath, home);


// Fix Footer.tsx to be premium dark navy instead of plain white
const footerPath = path.join(__dirname, 'src', 'components', 'footer', 'Footer.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');

footer = footer.replace(
  /<footer className="relative bg-white overflow-hidden pt-20 border-t border-\[\#E2E8F0\]">/,
  '<footer className="relative bg-[#0B1727] overflow-hidden pt-20 border-t border-[#1A746B]">'
);

// Replace CTA banner background in footer
footer = footer.replace(
  /<div className="relative overflow-hidden rounded-2xl bg-\[\#F8FAFC\] border border-\[\#E2E8F0\] shadow-\[0_8px_30px_rgba\(0,0,0,0\.04\)\] mb-20 group">/,
  '<div className="relative overflow-hidden rounded-2xl bg-[#102A43] border border-[#183B56] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] mb-20 group">'
);

// Fix CTA banner text colors
footer = footer.replace(/text-\[\#0F172A\]/g, 'text-white');
footer = footer.replace(/text-\[\#1E293B\]/g, 'text-gray-300'); // other footer texts
footer = footer.replace(/text-\[\#475569\]/g, 'text-gray-400');
footer = footer.replace(/text-\[\#64748B\]/g, 'text-gray-500');

// Fix border colors in footer
footer = footer.replace(/border-\[\#E2E8F0\]/g, 'border-[#183B56]');
footer = footer.replace(/bg-gray-100/g, 'bg-[#183B56]'); // divider lines

fs.writeFileSync(footerPath, footer);

console.log('Fixed broken UI in Home and restored premium dark Footer');
