const fs = require('fs');
const path = require('path');

// 1. Update Tailwind config
const twPath = path.join(__dirname, 'tailwind.config.js');
let tw = fs.readFileSync(twPath, 'utf8');
tw = tw.replace(
  /colors: \{[\s\S]*?fontFamily:/,
  `colors: {
        background: '#FFFFFF',
        foreground: '#465467',
        navy: {
          800: '#162A46',
          900: '#0B1B33',
        },
        charcoal: {
          DEFAULT: '#465467'
        },
        ivory: {
          DEFAULT: '#F7F9FB',
          dark: '#FAFBFC',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D8BD82',
        },
        muted: {
          DEFAULT: '#667085'
        },
        border: {
          light: '#E8ECF1',
          medium: '#D9E0E8'
        }
      },
      fontFamily:`
);
fs.writeFileSync(twPath, tw);

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

// 2. Global replacements in src
walk(path.join(__dirname, 'src'), (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix global css
    if (filePath.endsWith('index.css')) {
      content = content.replace(/--background: #FFFFFF; \/\* White \*\//, '--background: #FFFFFF;');
    }

    // Replace dark text classes on light bg
    content = content.replace(/text-gray-400/g, 'text-muted');
    content = content.replace(/text-gray-300/g, 'text-muted');
    content = content.replace(/text-gray-500/g, 'text-muted');
    content = content.replace(/border-white\/[0-9]+/g, 'border-border-light');
    
    // Fix Footer.tsx specifically
    if (filePath.endsWith('Footer.tsx')) {
      content = content.replace(/bg-navy-900/g, 'bg-ivory');
      content = content.replace(/text-white/g, 'text-navy-900');
      content = content.replace(/bg-gradient-to-br from-navy-800 via-\[#122238\] to-navy-900/g, 'bg-white');
      content = content.replace(/bg-white\/5/g, 'bg-white');
      content = content.replace(/bg-black\/20/g, 'bg-white');
      content = content.replace(/hover:text-white/g, 'hover:text-navy-900');
    }

    // Fix Home.tsx Action Boxes
    if (filePath.endsWith('Home.tsx')) {
      content = content.replace(/bg-navy-900 text-white p-16 md:p-20 text-center shadow-2xl rounded-3xl relative overflow-hidden group/g, 'bg-white text-navy-900 p-16 md:p-20 text-center shadow-xl border border-border-light rounded-3xl relative overflow-hidden group');
      content = content.replace(/bg-gradient-to-t from-navy-900 via-navy-900\/90 to-navy-900\/80/g, 'bg-gradient-to-t from-white via-white/90 to-white/80');
      content = content.replace(/bg-transparent border border-white\/30 text-white/g, 'bg-white border border-navy-900 text-navy-900');
    }

    // Fix Navbar
    if (filePath.endsWith('Navbar.tsx')) {
      content = content.replace(/border-navy-900\/5/g, 'border-border-light');
    }

    // Inner Pages Hero replacements
    if (['About.tsx', 'Career.tsx', 'Clients.tsx', 'Contact.tsx', 'Services.tsx'].some(p => filePath.endsWith(p))) {
      // White breadcrumb instead of dark section
      content = content.replace(/<section className="relative pt-40 pb-28 bg-navy-900 overflow-hidden">/g, '<section className="relative pt-32 pb-20 bg-white overflow-hidden">');
      
      // Fix text colors in breadcrumb
      content = content.replace(/text-white mb-8/g, 'text-navy-900 mb-8');
      content = content.replace(/text-gray-300 font-sans/g, 'text-muted font-sans');
      
      // Breadcrumb nav links
      content = content.replace(/text-gray-400 hover:text-white/g, 'text-muted hover:text-navy-900');
      content = content.replace(/<span className="text-gold\/50 mx-1">•<\/span>/g, '<span className="text-gold mx-2">›</span>');
      
      // Fix gradients in inner hero
      content = content.replace(/bg-gradient-to-r from-navy-900 via-navy-900\/80 to-transparent mix-blend-multiply/g, 'bg-gradient-to-r from-white via-white/80 to-transparent');
      content = content.replace(/bg-gradient-to-t from-navy-900 via-transparent to-transparent/g, 'bg-gradient-to-t from-white via-transparent to-transparent');
      content = content.replace(/mix-blend-luminosity/g, ''); // Remove dark blend
      content = content.replace(/opacity-30/g, 'opacity-10'); // Make bg image very subtle

      // Replace other dark sections in inner pages
      content = content.replace(/bg-navy-900 text-white/g, 'bg-white text-navy-900');
      content = content.replace(/bg-navy-900 p-8/g, 'bg-white border border-border-light p-8');
      content = content.replace(/text-white/g, 'text-navy-900');
      content = content.replace(/bg-navy-900/g, 'bg-ivory');
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
