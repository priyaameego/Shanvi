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
  if (filePath.endsWith('.tsx') && !filePath.endsWith('Home.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Apply premium card backgrounds to inner pages
    content = content.replace(/bg-white text-navy-900 p-12 border border-gray-100/g, 'bg-gradient-to-br from-slate-50 to-slate-100 text-navy-900 p-12 border border-slate-200 shadow-sm');
    content = content.replace(/bg-white text-navy-900 p-10 text-center shadow-soft border border-gray-100/g, 'bg-gradient-to-b from-white to-slate-50 text-navy-900 p-10 text-center shadow-md border border-slate-200');
    content = content.replace(/bg-white p-8 border border-gray-100/g, 'bg-gradient-to-br from-slate-50 to-white p-8 border border-slate-200 shadow-sm');
    content = content.replace(/bg-white border border-border-light p-8 text-navy-900 shadow-soft/g, 'bg-gradient-to-br from-blue-50/50 to-slate-50 border border-slate-200 p-8 text-navy-900 shadow-md');
    
    // Services / Clients cards
    content = content.replace(/bg-white text-navy-900 p-12 shadow-2xl/g, 'bg-gradient-to-br from-slate-50 to-white text-navy-900 p-12 shadow-xl border border-slate-200');
    content = content.replace(/bg-white text-navy-900 p-16 shadow-2xl/g, 'bg-gradient-to-br from-slate-50 to-white text-navy-900 p-16 shadow-xl border border-slate-200');

    // Make Contact form premium card
    content = content.replace(/bg-white text-navy-900 p-6 sm:p-12 md:p-16 shadow-2xl border border-gray-100/g, 'bg-gradient-to-br from-slate-50 to-white text-navy-900 p-6 sm:p-12 md:p-16 shadow-2xl border border-slate-200');

    // Fix inner pages inputs - we made them bg-white, let's keep them white but just ensure they look premium
    // They are fine.

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
