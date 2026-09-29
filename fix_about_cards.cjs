const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'src', 'pages', 'About.tsx');
let about = fs.readFileSync(aboutPath, 'utf8');

// Global background fix for About page
about = about.replace(/bg-background/g, 'bg-white');

// Vision & Mission Cards
about = about.replace(
  /className="bg-white text-navy-900 p-12 border border-slate-200 shadow-sm relative overflow-hidden"/g,
  'className="group relative bg-[#F2F9F7] border border-[#D1E6E1] border-t-[6px] border-t-accent p-12 hover:-translate-y-2 hover:bg-[#E4EDE9] shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.15)] transition-all duration-500 overflow-hidden rounded-[20px]"'
);

// Icon inside Vision & Mission
about = about.replace(
  /className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent\/20 text-accent mb-8"/g,
  'className="inline-flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#EFF6FF] border border-[#1A746B]/20 text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300"'
);

// Core Values Cards
about = about.replace(
  /className="bg-gradient-to-b from-white to-slate-50 text-navy-900 p-10 text-center shadow-md border border-slate-200 hover:border-accent\/50 transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-700"/g,
  'className="group relative bg-[#F2F9F7] border border-[#D1E6E1] border-t-[6px] border-t-accent p-10 text-center shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.15)] hover:-translate-y-2 hover:bg-[#E4EDE9] transition-all duration-500 overflow-hidden rounded-[20px]"'
);

// Icon inside Core Values
about = about.replace(
  /className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-50 text-navy-900 mb-6 mx-auto"/g,
  'className="inline-flex items-center justify-center w-20 h-20 rounded-[20px] bg-[#EFF6FF] border border-[#1A746B]/20 text-accent mb-6 mx-auto group-hover:bg-accent group-hover:text-white transition-all duration-300"'
);

// Why Choose Us Cards
about = about.replace(
  /className="bg-white text-navy-900 p-10 border border-slate-200 hover:border-accent\/30 hover:shadow-xl transition-all duration-700 group"/g,
  'className="group relative bg-[#F2F9F7] border border-[#D1E6E1] border-t-[6px] border-t-accent p-10 hover:-translate-y-2 hover:bg-[#E4EDE9] shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.15)] transition-all duration-500 overflow-hidden rounded-[20px]"'
);

// Lines in cards
about = about.replace(
  /className="w-8 h-\[2px\] bg-gold mb-4 rounded-full opacity-60"/g,
  'className="w-8 h-[2px] bg-gold mb-4 rounded-full opacity-80"'
);

// Section padding gap reduction (for consistency with Home)
about = about.replace(/py-24/g, 'py-16');
about = about.replace(/py-32/g, 'py-20');

fs.writeFileSync(aboutPath, about);
console.log('Premium cards applied to About page');
