const fs = require('fs');
const path = require('path');

const careerPath = path.join(__dirname, 'src', 'pages', 'Career.tsx');
let content = fs.readFileSync(careerPath, 'utf8');

// 1. Feature Cards
content = content.replace(
  /className="bg-background p-12 text-center rounded-sm border border-gray-100 shadow-sm hover:shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.1\)\] transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-1000 group"/g,
  'className="group relative bg-white border border-[#E4EAF0] p-10 lg:p-12 text-center rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:-translate-y-1 hover:border-[#159A83]/30 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] transition-all duration-300"'
);

// Feature Icons
content = content.replace(
  /className="w-16 h-16 rounded-full bg-background text-navy-900 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-1000"/g,
  'className="inline-flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#EEF8F6] border border-[#159A83]/10 text-[#159A83] mx-auto mb-6 group-hover:bg-[#159A83] group-hover:text-white transition-colors duration-300"'
);

// CheckCircle in Feature Icons is already text-accent, but we need to ensure it's colored properly or let the parent hover handle it
content = content.replace(
  /<CheckCircle className="text-accent" size=\{28\} \/>/g,
  '<CheckCircle size={28} className="text-[#159A83] group-hover:text-white transition-colors duration-300" />'
);

// 2. Job Cards
content = content.replace(
  /className="bg-background text-navy-900 border border-gray-100 p-6 md:p-10 hover:-translate-y-1 hover:shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.1\)\] hover:border-accent\/30 transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-1000 group rounded-sm flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start md:items-center"/g,
  'className="group relative bg-white border border-[#E4EAF0] p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] hover:border-[#159A83]/30 transition-all duration-300 rounded-[24px] flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start md:items-center"'
);

// Apply Now Buttons
content = content.replace(
  /className="inline-block text-center w-full md:w-auto px-8 py-4 bg-background border border-transparent text-navy-900 font-sans font-semibold uppercase tracking-widest text-xs hover:bg-accent hover:border-accent transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-700 rounded-sm whitespace-nowrap"/g,
  'className="group inline-flex items-center justify-center px-8 py-4 bg-[#159A83] text-white text-xs md:text-sm uppercase tracking-[0.1em] font-bold transition-all duration-250 rounded-[12px] shadow-[0_6px_18px_rgba(21,154,131,0.18)] hover:shadow-[0_8px_25px_rgba(21,154,131,0.25)] hover:-translate-y-[2px] hover:bg-[#117D6B] whitespace-nowrap w-full md:w-auto"'
);

// 3. Form Wrapper
content = content.replace(
  /className="max-w-4xl mx-auto bg-background text-navy-900 p-6 sm:p-12 md:p-20 shadow-2xl rounded-sm border border-gray-100 relative overflow-hidden"/g,
  'className="max-w-4xl mx-auto bg-white p-6 sm:p-12 md:p-20 border border-[#E4EAF0] rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] relative overflow-hidden"'
);

// Form Icon
content = content.replace(
  /className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-50 mb-8 shadow-sm"/g,
  'className="inline-flex items-center justify-center w-20 h-20 rounded-[16px] bg-[#EEF8F6] border border-[#159A83]/10 text-[#159A83] mb-8 shadow-sm"'
);
content = content.replace(
  /<Upload className="text-accent" size=\{32\} \/>/g,
  '<Upload size={32} className="text-[#159A83]" />'
);

// Input Fields
content = content.replace(
  /className="w-full bg-background border border-gray-200 px-6 py-4 focus:outline-none focus:border-accent transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] font-sans rounded-sm"/g,
  'className="w-full bg-[#F6F8FB] border border-[#E4EAF0] px-6 py-4 focus:outline-none focus:border-[#159A83] transition-colors duration-300 font-sans rounded-[12px]"'
);

// File Upload box
content = content.replace(
  /className="w-full bg-background border-2 border-dashed border-gray-300 px-6 py-12 text-center rounded-sm hover:border-accent transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] cursor-pointer group flex flex-col items-center justify-center relative block"/g,
  'className="w-full bg-[#F6F8FB] border-2 border-dashed border-[#E4EAF0] px-6 py-12 text-center rounded-[12px] hover:border-[#159A83] hover:bg-[#EEF8F6] transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center relative block"'
);

// Submit Button
content = content.replace(
  /className=\{`w-full text-navy-900 font-sans font-semibold uppercase tracking-\[0\.2em\] text-sm py-5 transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-700 mt-8 rounded-sm flex items-center justify-center group \$\{/g,
  'className={`w-full font-sans font-bold uppercase tracking-[0.1em] text-sm py-5 transition-all duration-300 mt-8 rounded-[12px] flex items-center justify-center group ${'
);

// Submit Button Conditionals
content = content.replace(
  /isSubmitted \? 'bg-green-600 cursor-default' :[\s\n]*isSubmitting \? 'bg-navy-700 cursor-wait' :[\s\n]*'bg-background hover:bg-accent'/g,
  "isSubmitted ? 'bg-[#18A889] text-white cursor-default' : \n                  isSubmitting ? 'bg-[#102A43] text-white cursor-wait' : \n                  'bg-[#159A83] text-white hover:bg-[#117D6B] hover:-translate-y-1 shadow-[0_6px_18px_rgba(21,154,131,0.18)]'"
);


fs.writeFileSync(careerPath, content);
console.log('Successfully upgraded Career page cards and buttons.');
