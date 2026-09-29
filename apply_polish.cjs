const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walk(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walk(path.join(__dirname, 'src', 'pages'), (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Breadcrumbs fix
    content = content.replace(/<span className="text-accent mx-2">›<\/span>\s*<span className="text-accent font-semibold tracking-\[0\.25em\]">([^<]+)<\/span>/g, '<span className="text-gold mx-2">›</span>\n              <span className="text-navy-900 font-semibold tracking-[0.25em]">$1</span>');

    // Add subtle gold line under headings in Service cards (both Home and Services page)
    // The heading is typically <h3 className="text-xl md:text-2xl font-serif text-navy-900 mb-4
    // We can add a border bottom or a small div
    content = content.replace(/(<h3 className="text-xl md:text-2xl font-serif text-navy-900 mb-4[^>]*>[^<]+<\/h3>)/g, '$1\n                  <div className="w-8 h-[2px] bg-gold mb-4 rounded-full opacity-60" />');
    
    // Also cover regular text-xl headings in cards
    content = content.replace(/(<h3 className="text-xl font-serif text-navy-900 mb-4[^>]*>[^<]+<\/h3>)\n(?!\s*<div className="w-8)/g, '$1\n                  <div className="w-8 h-[2px] bg-gold mb-4 rounded-full opacity-60" />\n');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
