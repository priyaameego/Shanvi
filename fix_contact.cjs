const fs = require('fs');
const path = require('path');

const contactPath = path.join(__dirname, 'src', 'pages', 'Contact.tsx');
let content = fs.readFileSync(contactPath, 'utf8');

// Update Left Card
content = content.replace(
  /className="bg-gradient-to-br from-slate-50 to-white text-navy-900 p-16 shadow-xl border border-slate-200 border border-gray-100 relative overflow-hidden group"/g,
  'className="group relative bg-white border border-[#D1E6E1] border-t-[6px] border-t-[#1A746B] p-16 hover:-translate-y-2 hover:bg-[#F0F7F5] shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.15)] transition-all duration-500 overflow-hidden rounded-[20px]"'
);

// Update Right Card
content = content.replace(
  /className="bg-gradient-to-br from-slate-50 to-white text-navy-900 p-6 sm:p-12 md:p-16 shadow-2xl border border-slate-200 relative"/g,
  'className="group relative bg-white border border-[#D1E6E1] border-t-[6px] border-t-[#1A746B] p-6 sm:p-12 md:p-16 hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.15)] transition-all duration-500 overflow-hidden rounded-[20px]"'
);

// Update text colors to match Mint Theme
content = content.replace(/text-navy-900/g, 'text-[#0B1714]');
content = content.replace(/text-charcoal/g, 'text-[#3B4D48]');
content = content.replace(/bg-navy-50/g, 'bg-[#E4EDE9]');
content = content.replace(/text-accent/g, 'text-[#1A746B]');
content = content.replace(/bg-accent/g, 'bg-[#1A746B]');

// Update section backgrounds to #E4EDE9 (Mint) explicitly
content = content.replace(/bg-background/g, 'bg-[#E4EDE9]');

// Update inputs to have a softer border
content = content.replace(/border-border-medium/g, 'border-[#B4CCC6]');
content = content.replace(/focus:border-navy-900/g, 'focus:border-[#1A746B] focus:ring-[#1A746B]');

fs.writeFileSync(contactPath, content);
console.log('Fixed Contact.tsx explicitly');
