const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

function fixBreadcrumbs(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Change Home link
  content = content.replace(/className="text-navy-700 hover:text-gold/g, 'className="text-navy-500 hover:text-navy-900');
  
  // Change Dot
  content = content.replace(/<span className="text-gold\/50">•<\/span>/g, '<span className="text-navy-300">•</span>');
  
  // Change Current Page
  content = content.replace(/<span className="text-gold font-medium">/g, '<span className="text-navy-900 font-semibold">');

  fs.writeFileSync(filePath, content, 'utf8');
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(filePath)) {
    fixBreadcrumbs(filePath);
    console.log(`Fixed breadcrumbs in ${file}`);
  }
}
