const fs = require('fs');
const path = require('path');

function fixTitles(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // In Home.tsx and Services.tsx
  content = content.replace(
    /<h3 className="([^"]*)text-accent([^"]*)">{service.title}<\/h3>/g,
    '<h3 className="$1text-navy-900$2">{service.title}</h3>\n                    <div className="w-8 h-[2px] bg-gold mb-4 rounded-full opacity-60" />'
  );
  
  // Clean up any double gold lines if they exist
  content = content.replace(/(<div className="w-8 h-\[2px\] bg-gold mb-4 rounded-full opacity-60" \/>\s*){2,}/g, '<div className="w-8 h-[2px] bg-gold mb-4 rounded-full opacity-60" />\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed titles in', filePath);
  }
}

fixTitles(path.join(__dirname, 'src', 'pages', 'Home.tsx'));
fixTitles(path.join(__dirname, 'src', 'pages', 'Services.tsx'));
