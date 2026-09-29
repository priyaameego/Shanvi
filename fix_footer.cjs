const fs = require('fs');
const path = require('path');

const footerPath = path.join(__dirname, 'src', 'components', 'footer', 'Footer.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');

// Force Footer Background
footer = footer.replace(/<footer className="[^"]*">/, '<footer className="relative bg-[#0B1727] overflow-hidden pt-20 border-t border-[#183B56]">');

// Force CTA Banner
footer = footer.replace(/<div className="relative overflow-hidden rounded-2xl bg-\[\#FFFFFF\] border border-\[\#D1E6E1\] shadow-\[0_8px_30px_rgba\(0,0,0,0\.04\)\] mb-20 group">/,
  '<div className="relative overflow-hidden rounded-2xl bg-[#102A43] border border-[#183B56] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] mb-20 group">');

// Force Text Colors in CTA Banner
footer = footer.replace(/text-\[\#0B1714\]/g, 'text-white'); // CTA Heading
footer = footer.replace(/text-gray-800/g, 'text-gray-300'); // if present

// Main Footer Texts
footer = footer.replace(/text-\[\#152420\]/g, 'text-white'); // Headings
footer = footer.replace(/text-\[\#1E293B\]/g, 'text-white');
footer = footer.replace(/text-\[\#3B4D48\]/g, 'text-gray-400'); // Body
footer = footer.replace(/text-\[\#475569\]/g, 'text-gray-400');
footer = footer.replace(/text-\[\#0F172A\]/g, 'text-white');

// Dividers
footer = footer.replace(/border-\[\#D1E6E1\]/g, 'border-[#183B56]');
footer = footer.replace(/bg-gray-100/g, 'bg-[#183B56]');
footer = footer.replace(/border-gray-200/g, 'border-[#183B56]');

fs.writeFileSync(footerPath, footer);
console.log('Forced Dark Footer explicitly');
