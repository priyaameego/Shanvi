const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

function updateHero(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Make breadcrumbs smaller: text-[10px] md:text-xs -> text-[9px] md:text-[10px]
  content = content.replace(/text-\[10px\] md:text-xs font-sans tracking-widest/g, 'text-[9px] md:text-[10px] font-sans tracking-[0.2em]');

  // 2. Fix the stark white background in hero sections
  // Replace bg-white with bg-ivory in the hero section
  content = content.replace(/<section className="relative pt-48 pb-32 bg-white/g, '<section className="relative pt-48 pb-32 bg-ivory');
  
  // Replace to-white with to-ivory in the gradient
  content = content.replace(/from-transparent to-white/g, 'from-transparent to-ivory');

  fs.writeFileSync(filePath, content, 'utf8');
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(filePath)) {
    updateHero(filePath);
    console.log(`Updated ${file}`);
  }
}
