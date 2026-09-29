const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(homePath, 'utf8');

// Reduce vertical gaps
content = content.replace(/py-32 md:py-48/g, 'py-20 md:py-28');
content = content.replace(/py-32 md:py-40/g, 'py-20 md:py-28');
content = content.replace(/py-32 bg-background/g, 'py-20 bg-background');
content = content.replace(/py-32 bg-white/g, 'py-20 bg-white');

// The floating badge / alert update
content = content.replace(
  /className="absolute -bottom-8 md:-left-12 bg-white\/90 backdrop-blur-xl p-6 shadow-2xl border border-white z-30 rounded-xl max-w-\[200px\]"/g,
  'className="absolute -bottom-8 md:-left-12 bg-gradient-to-br from-[#26735E] to-[#154D3D] p-6 shadow-[0_20px_40px_rgba(21,77,61,0.3)] border border-[#308A72] z-30 rounded-xl max-w-[200px]"'
);

content = content.replace(
  /className="text-4xl md:text-5xl font-serif text-\[\#0B1714\] mb-1 flex items-start"/g,
  'className="text-4xl md:text-5xl font-serif text-white mb-1 flex items-start"'
);

content = content.replace(
  /<span className="text-\[\#1A746B\] text-3xl mt-1">\+<\/span>/g,
  '<span className="text-[#89E6CC] text-3xl mt-1">+</span>'
);

content = content.replace(
  /className="text-xs font-sans text-navy-600 uppercase tracking-widest font-semibold leading-snug"/g,
  'className="text-xs font-sans text-[#B3ECD9] uppercase tracking-widest font-semibold leading-snug"'
);

content = content.replace(
  /className="w-8 h-\[2px\] bg-\[\#1A746B\] mt-4" \/>/g,
  'className="w-8 h-[2px] bg-[#89E6CC] mt-4" />'
);


fs.writeFileSync(homePath, content);
console.log('Fixed gaps and alert in Home.tsx');
