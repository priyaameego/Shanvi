const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

function makePremium(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace background container and padding
  content = content.replace(/<section className="relative pt-36 pb-20 bg-ivory overflow-hidden border-b border-gray-100">/g, 
    '<section className="relative pt-40 pb-28 bg-navy-950 overflow-hidden">');

  // Replace the image structure
  content = content.replace(/<div className="absolute top-0 right-0 w-full md:w-1\/2 h-full pointer-events-none opacity-10 md:opacity-30">\s*<img src="([^"]+)" alt="([^"]+)" className="w-full h-full object-cover" \/>\s*<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-ivory" \/>\s*<\/div>/g,
    `<div className="absolute inset-0 z-0">
          <img src="$1" alt="$2" className="w-full h-full object-cover opacity-30 mix-blend-luminosity gpu-layer" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>`
  );

  // Update Breadcrumbs Styles
  content = content.replace(/className="text-navy-500 hover:text-navy-900 transition-colors/g, 'className="text-gray-400 hover:text-white transition-colors');
  content = content.replace(/<span className="text-navy-300">•<\/span>/g, '<span className="text-gold/50 mx-1">•</span>');
  content = content.replace(/<span className="text-navy-900 font-semibold">/g, '<span className="text-gold font-semibold tracking-[0.25em]">');

  // Update H1 and P Styles
  content = content.replace(/className="text-5xl md:text-7xl font-serif text-navy-900 mb-8 leading-tight"/g, 'className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"');
  content = content.replace(/className="text-navy-700 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"/g, 'className="text-gray-300 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"');

  fs.writeFileSync(filePath, content, 'utf8');
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(filePath)) {
    makePremium(filePath);
    console.log(`Made premium banner in ${file}`);
  }
}
