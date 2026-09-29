const fs = require('fs');
const path = require('path');

// Helper
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

walk(path.join(__dirname, 'src'), (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Make Footer premium dark
    if (filePath.endsWith('Footer.tsx')) {
      content = content.replace(/<footer className="relative bg-white overflow-hidden pt-20 border-t border-border-light">/, '<footer className="relative bg-navy-900 overflow-hidden pt-20 border-t border-navy-800">');
      
      // Update text colors for dark footer
      content = content.replace(/text-navy-900/g, 'text-white');
      content = content.replace(/text-muted/g, 'text-slate-300');
      content = content.replace(/bg-white\/95/g, 'bg-navy-800');
      content = content.replace(/border-border-light/g, 'border-navy-800');
      
      // Update CTA banner in footer
      content = content.replace(/bg-white border border-accent\/20/g, 'bg-gradient-to-br from-navy-800 to-navy-900 border border-accent/20');
      
      // Social icons
      content = content.replace(/bg-white border border-navy-800/g, 'bg-navy-800 border-none');
      
      // Footer copyright bar
      content = content.replace(/border-t border-navy-800 bg-white/g, 'border-t border-navy-800 bg-[#0B1120]');
    }

    // Give Home cards a premium color
    if (filePath.endsWith('Home.tsx')) {
      // Services Highlight Cards
      content = content.replace(/bg-white border border-border-light hover:border-accent\/30/g, 'bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-accent/40');
      
      // The "Our Organization" floating card
      content = content.replace(/bg-white p-8 md:p-10 rounded-2xl border border-border-light/, 'bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm');
      
      // The Accordion & Testimonial cards
      content = content.replace(/bg-white rounded-xl shadow-sm hover:shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0.1\)\]/g, 'bg-gradient-to-r from-slate-50 to-white rounded-xl shadow-sm border border-slate-200');
      content = content.replace(/bg-white border border-border-light p-12 md:p-16 text-navy-900/g, 'bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-12 md:p-16 text-navy-900');
      
      // Action boxes (Job seekers & Clients)
      // First is Job Seekers (Make it dark premium)
      content = content.replace(/bg-white text-navy-900 p-16 md:p-20 text-center shadow-lg border border-border-light/g, 'bg-navy-900 text-white p-16 md:p-20 text-center shadow-2xl border border-navy-800');
      content = content.replace(/from-white via-white\/90 to-white\/80/g, 'from-navy-900 via-navy-900/90 to-navy-900/80');
      
      // Second is Clients (Make it colored premium light)
      content = content.replace(/bg-white p-16 md:p-20 text-center shadow-lg border border-border-light/g, 'bg-gradient-to-br from-blue-50 to-slate-50 p-16 md:p-20 text-center shadow-xl border border-blue-100/50');
      
      // Fix Job Seekers text since it's dark now
      content = content.replace(/<h3 className="text-4xl font-serif mb-6">Job Seekers<\/h3>\s*<p className="text-slate-300 font-sans mb-12 font-light text-lg">/g, '<h3 className="text-4xl font-serif mb-6 text-white">Job Seekers</h3>\n                <p className="text-slate-300 font-sans mb-12 font-light text-lg">');
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
