const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

function fixWhiteCards(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace bg-white with bg-white text-navy-900 in cards, if not already there
  content = content.replace(/className="([^"]*\bbg-white\b[^"]*)"/g, (match, classes) => {
    // Only if it doesn't already have text-navy-something and it's likely a card (has padding or border)
    if (!classes.includes('text-navy-') && !classes.includes('text-gray-') && (classes.includes('p-') || classes.includes('border'))) {
      return `className="${classes.replace('bg-white', 'bg-white text-navy-900')}"`;
    }
    return match;
  });

  // Also fix any explicitly white buttons inside those cards
  content = content.replace(/bg-white\/5 border border-white\/20 text-white/g, 'bg-navy-900 border border-transparent text-white');

  fs.writeFileSync(filePath, content, 'utf8');
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(filePath)) {
    fixWhiteCards(filePath);
    console.log(`Fixed ${file}`);
  }
}
