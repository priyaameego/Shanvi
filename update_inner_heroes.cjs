const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

function updateHero(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Make the inner page banner smaller (pt-48 pb-32 -> pt-36 pb-20)
  content = content.replace(/pt-48 pb-32/g, 'pt-36 pb-20');
  
  // 2. Change background to Deep Navy to separate from Navbar
  content = content.replace(/<section className="relative pt-36 pb-20 bg-ivory"/g, '<section className="relative pt-36 pb-20 bg-navy-950 text-white"');
  // Just in case it's still bg-white
  content = content.replace(/<section className="relative pt-36 pb-20 bg-white"/g, '<section className="relative pt-36 pb-20 bg-navy-950 text-white"');

  // 3. Change gradient to match Navy
  content = content.replace(/to-ivory/g, 'to-navy-950');
  content = content.replace(/to-white/g, 'to-navy-950');

  // 4. Change the text colors in the hero since background is now dark
  // The hero title is usually <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-navy-900 mb-6">
  content = content.replace(/text-navy-900 mb-6/g, 'text-white mb-6');
  
  // The hero description is usually <p className="text-navy-700 font-sans font-light text-lg max-w-xl">
  content = content.replace(/text-navy-700 font-sans font-light text-lg max-w-xl/g, 'text-gray-300 font-sans font-light text-lg max-w-xl');

  // Also fix the breadcrumbs color if needed (it was probably inheriting or explicitly gray)
  // Breadcrumbs might have text-gray-500, we can make it text-gray-400

  fs.writeFileSync(filePath, content, 'utf8');
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(filePath)) {
    updateHero(filePath);
    console.log(`Updated ${file}`);
  }
}
