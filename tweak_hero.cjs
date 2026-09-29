const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Reduce padding (height) of hero section
  content = content.replace(/className="relative pt-32 pb-20/g, 'className="relative pt-28 pb-10');

  // 2. Reduce white overlay by another 10%
  // Standard inner pages
  content = content.replace(/from-white\/85 via-white\/65/g, 'from-white/75 via-white/50');
  content = content.replace(/from-white\/85 via-transparent/g, 'from-white/75 via-transparent');
  
  // Contact page
  content = content.replace(/from-\[\#F6F8FB\]\/85 via-\[\#F6F8FB\]\/65/g, 'from-[#F6F8FB]/75 via-[#F6F8FB]/50');
  content = content.replace(/from-\[\#F6F8FB\]\/85 via-transparent/g, 'from-[#F6F8FB]/75 via-transparent');

  fs.writeFileSync(filePath, content);
}

console.log('Reduced hero height and white overlay on inner pages.');
