const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'src', 'pages', 'About.tsx');
let about = fs.readFileSync(aboutPath, 'utf8');

// Upgrade USPs lists
about = about.replace(
  /className="bg-navy-50 p-6 rounded-sm border-l-4 border-accent"/g,
  'className="group relative bg-[#F2F9F7] border border-[#D1E6E1] border-l-[4px] border-l-accent p-6 rounded-xl hover:-translate-y-1 hover:bg-[#E4EDE9] hover:shadow-[0_10px_20px_rgba(26,116,107,0.1)] transition-all duration-300"'
);

fs.writeFileSync(aboutPath, about);
console.log('Upgraded USPs cards');
