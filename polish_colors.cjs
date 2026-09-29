const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    content = content.replace(/bg-navy-950/g, 'bg-navy-900');
    content = content.replace(/text-navy-950/g, 'text-navy-900');
    content = content.replace(/from-navy-950/g, 'from-navy-900');
    content = content.replace(/via-navy-950/g, 'via-navy-900');
    content = content.replace(/to-navy-950/g, 'to-navy-900');
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
