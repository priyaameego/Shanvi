const fs = require('fs');
const path = require('path');

const footerPath = path.join(__dirname, 'src', 'components', 'footer', 'Footer.tsx');
let content = fs.readFileSync(footerPath, 'utf8');

// Footer wrapper
content = content.replace(
  /className="relative bg-\[\#102A43\] overflow-hidden pt-20 border-t border-\[\#183B56\]"/,
  'className="relative bg-white overflow-hidden pt-20 border-t border-[#E4EAF0]"'
);

// Remove premium background dark blobs in footer
content = content.replace(
  /<div className="absolute top-0 right-0 w-\[600px\] h-\[600px\] bg-accent\/10 rounded-full blur-\[150px\] -translate-y-1\/2 translate-x-1\/3" \/>/g,
  '<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EEF8F6]/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />'
);
content = content.replace(
  /<div className="absolute bottom-0 left-0 w-\[600px\] h-\[600px\] bg-blue-900\/20 rounded-full blur-\[150px\] translate-y-1\/3 -translate-x-1\/4" \/>/g,
  '<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EEF8F6]/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />'
);

// CTA Banner
content = content.replace(
  /className="relative overflow-hidden rounded-2xl bg-\[\#102A43\] border border-\[\#183B56\] shadow-\[0_30px_60px_-15px_rgba\(0,0,0,0\.5\)\] mb-20 group"/g,
  'className="relative overflow-hidden rounded-[24px] bg-[#F6F8FB] border border-[#E4EAF0] shadow-[0_10px_30px_rgba(16,42,67,0.06)] mb-20 group"'
);
content = content.replace(
  /className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight"/g,
  'className="text-4xl md:text-5xl font-serif text-[#102A43] mb-4 leading-tight"'
);
// Make CTA Button a bit more modern rounded-xl instead of full
content = content.replace(
  /hover:-translate-y-2 hover:shadow-\[0_20px_40px_-10px_rgba\(39,93,245,0\.4\)\] rounded-full/g,
  'hover:-translate-y-[2px] shadow-[0_6px_18px_rgba(21,154,131,0.18)] hover:shadow-[0_8px_25px_rgba(21,154,131,0.25)] rounded-[12px]'
);

// Footer brand text
content = content.replace(
  /className="text-white\/70 font-sans font-light leading-relaxed mb-8"/g,
  'className="text-[#475467] font-sans leading-relaxed mb-8"'
);

// Social icons
content = content.replace(
  /className="w-10 h-10 rounded-full border border-white\/20 flex items-center justify-center text-white hover:bg-\[\#159A83\] hover:border-\[\#159A83\] transition-all duration-300 hover:-translate-y-1"/g,
  'className="w-10 h-10 rounded-[12px] bg-[#F6F8FB] border border-[#E4EAF0] flex items-center justify-center text-[#475467] hover:bg-[#159A83] hover:text-white hover:border-[#159A83] transition-all duration-300 hover:-translate-y-1"'
);

// Headings
content = content.replace(
  /className="text-lg font-serif text-white mb-6 uppercase tracking-widest"/g,
  'className="text-lg font-serif text-[#102A43] mb-6 uppercase tracking-widest"'
);
content = content.replace(
  /className="w-8 h-\[2px\] bg-\[\#159A83\] mb-6"/g,
  'className="w-8 h-[2px] bg-[#159A83] mb-6 rounded-full"'
);

// Links
content = content.replace(
  /className="text-white\/70 hover:text-white transition-colors duration-300 font-sans font-light flex items-center group"/g,
  'className="text-[#475467] hover:text-[#159A83] transition-all duration-300 font-sans flex items-center group"'
);
// Arrow in links
content = content.replace(
  /className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-2 text-\[\#159A83\] transition-all duration-300"/g,
  'className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-2 text-[#159A83] transition-all duration-300"'
);

// Contact info text
content = content.replace(
  /className="text-white\/70 font-sans font-light"/g,
  'className="text-[#475467] font-sans"'
);
content = content.replace(
  /className="text-\[\#159A83\] mt-1 flex-shrink-0"/g,
  'className="text-[#159A83] mt-1 flex-shrink-0"'
);

// Bottom bar
content = content.replace(
  /className="bg-\[\#0B1D2E\] py-6 border-t border-\[\#183B56\] relative z-10"/g,
  'className="bg-[#F6F8FB] py-6 border-t border-[#E4EAF0] relative z-10"'
);
content = content.replace(
  /className="text-white\/50 font-sans font-light text-sm text-center md:text-left"/g,
  'className="text-[#667085] font-sans text-sm text-center md:text-left"'
);
content = content.replace(
  /className="flex items-center gap-6 text-white\/50 font-sans font-light text-sm"/g,
  'className="flex items-center gap-6 text-[#667085] font-sans text-sm"'
);
content = content.replace(
  /className="hover:text-white transition-colors"/g,
  'className="hover:text-[#159A83] transition-colors"'
);

// The logo might need multiply blend mode if it's black text on white
content = content.replace(
  /<img src=\{logoUrl\} alt="Shanvi Global" className="h-16 mb-6 brightness-0 invert opacity-90" \/>/g,
  '<img src={logoUrl} alt="Shanvi Global" className="h-16 mb-6 mix-blend-multiply" style={{ clipPath: "inset(10% 0 10% 0)" }} />'
);

fs.writeFileSync(footerPath, content);
console.log('Successfully applied white premium theme to Footer.');
