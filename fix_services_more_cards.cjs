const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src', 'pages', 'Services.tsx');
let services = fs.readFileSync(servicesPath, 'utf8');

// Upgrade Candidate Selection Process
services = services.replace(
  /className="relative z-10 flex flex-col items-center text-center group"/g,
  'className="relative z-10 flex flex-col items-center text-center group bg-[#F2F9F7] border border-[#D1E6E1] border-t-[6px] border-t-accent p-8 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.15)] hover:-translate-y-2 hover:bg-[#E4EDE9] transition-all duration-500"'
);

services = services.replace(
  /className="w-24 h-24 rounded-full bg-white text-navy-900 border border-accent\/30 shadow-soft flex items-center justify-center mb-8 group-hover:border-accent group-hover:bg-white transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-1000"/g,
  'className="w-16 h-16 rounded-[16px] bg-[#EFF6FF] border border-[#1A746B]/20 flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300"'
);

services = services.replace(
  /className="text-3xl font-serif text-accent font-light">\{process\.step\}<\/span>/g,
  'className="text-2xl font-serif text-accent font-bold group-hover:text-white transition-colors duration-300">{process.step}</span>'
);

// Upgrade Specialized Sectors
services = services.replace(
  /className="bg-white text-navy-900 hover:bg-white hover:text-navy-900 transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-1000 p-6 rounded-sm flex items-center border border-gray-100 shadow-sm hover:shadow-\[0_30px_60px_-15px_rgba\(0,0,0,0\.15\)\] group"/g,
  'className="group relative bg-[#F2F9F7] border border-[#D1E6E1] border-l-[4px] border-l-accent p-6 hover:-translate-y-1 hover:bg-[#E4EDE9] shadow-sm hover:shadow-[0_10px_20px_rgba(26,116,107,0.15)] transition-all duration-300 rounded-xl flex items-center"'
);

// Fix the long line hiding logic behind Process cards
// Actually z-0 vs z-10 will handle it nicely, but just in case, let's adjust top position of line to match the new 16x16 icon
services = services.replace(
  /className="hidden md:block absolute top-12 left-12 right-12 h-\[1px\] bg-accent\/30 z-0"/,
  'className="hidden md:block absolute top-8 left-12 right-12 h-[2px] bg-accent/20 z-0"' // top-8 matches center of 16 h-16 + padding (8 + 8? No, it's inside a p-8 container. Actually, we can leave the line where it is, or slightly adjust it.)
);

fs.writeFileSync(servicesPath, services);
console.log('Upgraded Process and Sector cards in Services.tsx');
