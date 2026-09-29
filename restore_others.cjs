const fs = require('fs');
const path = require('path');

function restoreTheme(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Restore text colors to Navy
  content = content.replace(/text-\[\#0B1714\]/g, 'text-navy-900');
  content = content.replace(/text-\[\#3B4D48\]/g, 'text-charcoal');
  content = content.replace(/text-\[\#152420\]/g, 'text-navy-900');

  // Restore lines and accents to Gold (except for the cards where accent is Teal)
  // We'll replace bg-[#1A746B] in general dividers back to bg-gold
  content = content.replace(/className="w-24 h-\[2px\] bg-accent/g, 'className="w-24 h-[2px] bg-gold');
  content = content.replace(/className="w-8 h-\[2px\] bg-\[\#1A746B\]/g, 'className="w-8 h-[2px] bg-gold');

  // If there are other places where bg-accent is used for decorative lines, make them gold
  content = content.replace(/border-b border-accent\/30/g, 'border-b border-gold/30');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Restored colors in', filePath);
  }
}

restoreTheme(path.join(__dirname, 'src', 'pages', 'Services.tsx'));
restoreTheme(path.join(__dirname, 'src', 'pages', 'Contact.tsx'));
