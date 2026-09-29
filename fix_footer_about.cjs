const fs = require('fs');
const path = require('path');

// 1. Fix Footer.tsx text colors that were hiding on hover
const footerPath = path.join(__dirname, 'src', 'components', 'footer', 'Footer.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');

footer = footer.replace(
  /className="text-\[11px\] font-bold text-white mb-8 uppercase tracking-\[0\.2em\]"/g,
  'className="text-[11px] font-bold text-[#102A43] mb-8 uppercase tracking-[0.2em]"'
);

footer = footer.replace(
  /className="group inline-flex items-center text-gray-400 hover:text-white transition-colors duration-500"/g,
  'className="group inline-flex items-center text-[#475467] hover:text-[#159A83] transition-colors duration-500"'
);

footer = footer.replace(
  /className="w-10 h-10 rounded-full bg-white border-none flex items-center justify-center mr-4 group-hover:bg-accent group-hover:border-accent transition-all duration-500 flex-shrink-0"/g,
  'className="w-10 h-10 rounded-[12px] bg-[#F6F8FB] border border-[#E4EAF0] flex items-center justify-center mr-4 group-hover:bg-[#159A83] group-hover:border-[#159A83] transition-all duration-500 flex-shrink-0"'
);

footer = footer.replace(
  /className="text-accent group-hover:text-white transition-colors duration-500"/g,
  'className="text-[#159A83] group-hover:text-white transition-colors duration-500"'
);

footer = footer.replace(
  /className="pt-1 text-gray-400 group-hover:text-white transition-colors duration-500"/g,
  'className="pt-1 text-[#475467] group-hover:text-[#159A83] transition-colors duration-500"'
);

fs.writeFileSync(footerPath, footer);

// 2. Fix About.tsx Intro
const aboutPath = path.join(__dirname, 'src', 'pages', 'About.tsx');
let about = fs.readFileSync(aboutPath, 'utf8');

about = about.replace(
  /<section className="py-16 bg-white">\s*<div className="container mx-auto px-6 md:px-12">\s*<div className="max-w-4xl mx-auto text-center space-y-8">/g,
  `<section className="py-20 bg-[#F6F8FB] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-[24px] border border-[#E4EAF0] shadow-[0_10px_30px_rgba(16,42,67,0.06)] space-y-8 text-center">
            <h2 className="text-3xl font-serif text-[#102A43] mb-6">About Us</h2>
            <div className="w-12 h-[2px] bg-[#C6A15B] mx-auto mb-8 rounded-full" />`
);

about = about.replace(
  /<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* Founder Section \*\/\}/,
  `</div>\n        </div>\n      </section>\n\n      {/* Founder Section */}`
);

fs.writeFileSync(aboutPath, about);
console.log('Fixed Footer and About page.');
