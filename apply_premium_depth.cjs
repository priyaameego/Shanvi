const fs = require('fs');
const path = require('path');

// 1. Update Tailwind config
const twPath = path.join(__dirname, 'tailwind.config.js');
let tw = fs.readFileSync(twPath, 'utf8');
tw = tw.replace(
  /colors: \{[\s\S]*?fontFamily:/,
  `colors: {
        background: {
          DEFAULT: '#F7F9FC',
          alt: '#FAFBFD',
          white: '#FFFFFF'
        },
        foreground: '#4B5563',
        navy: {
          800: '#183B56',
          900: '#102A43',
          footer: '#0F2238'
        },
        charcoal: {
          DEFAULT: '#4B5563'
        },
        ivory: {
          DEFAULT: '#F7F9FC'
        },
        accent: {
          DEFAULT: '#159A83',
          hover: '#117D6B',
          light: '#E8F7F3',
        },
        gold: {
          DEFAULT: '#C6A15B',
        },
        muted: {
          DEFAULT: '#6B7280'
        },
        border: {
          light: '#E6EBF0',
          medium: '#E2E8F0'
        }
      },
      fontFamily:`
);
fs.writeFileSync(twPath, tw);

// 2. Global replacements in src
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
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Reset backgrounds to off-white where they were made completely white
    content = content.replace(/bg-white/g, 'bg-background');
    content = content.replace(/bg-background\/95/g, 'bg-white/95'); // Keep navbar white if it was
    content = content.replace(/bg-background border border-border-light/g, 'bg-white border border-border-light'); // Keep cards white

    // Footer Updates
    if (filePath.endsWith('Footer.tsx')) {
      content = content.replace(/bg-navy-900/g, 'bg-navy-footer');
      content = content.replace(/bg-navy-800/g, 'bg-navy-footer');
      content = content.replace(/bg-\[#0B1120\]/g, 'bg-navy-footer');
      content = content.replace(/bg-background/g, 'bg-navy-footer'); // Reset any stray bgs
      content = content.replace(/text-slate-300/g, 'text-[#CBD5E1]');
      content = content.replace(/text-muted/g, 'text-[#CBD5E1]');
      
      // Footer links
      content = content.replace(/text-[#CBD5E1] hover:text-navy-900/g, 'text-[#E2E8F0] hover:text-accent');
      content = content.replace(/text-[#CBD5E1] hover:text-accent/g, 'text-[#E2E8F0] hover:text-accent');
      
      // CTA in Footer
      content = content.replace(/bg-gradient-to-br from-navy-800 to-navy-900 border border-accent\/20/g, 'bg-navy-footer border-t border-accent/20');
      content = content.replace(/bg-accent text-white font-sans font-bold uppercase tracking-\[0\.2em\] text-xs hover:bg-navy-900 transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-700 hover:-translate-y-2 hover:shadow-\[0_20px_40px_-10px_rgba\(20,160,119,0\.4\)\]/g, 'bg-accent text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#117D6B] rounded-[10px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(21,154,131,0.18)]');
    }

    // Home / Cards updates
    if (filePath.endsWith('Home.tsx') || filePath.endsWith('Services.tsx') || filePath.endsWith('About.tsx')) {
      
      // Revert cards to white with specific styling
      content = content.replace(/bg-gradient-to-br from-slate-50 to-white/g, 'bg-white');
      content = content.replace(/bg-gradient-to-br from-slate-50 to-slate-100/g, 'bg-white');
      content = content.replace(/bg-gradient-to-r from-slate-50 to-white/g, 'bg-white');
      content = content.replace(/bg-gradient-to-br from-blue-50\/50 to-slate-50/g, 'bg-white');
      content = content.replace(/bg-gradient-to-br from-blue-50 to-slate-50/g, 'bg-white');
      
      // Services Card specific styling
      content = content.replace(/group relative bg-background border border-border-light p-12 lg:p-16 hover:border-accent\/30 hover:shadow-\[0_8px_30px_rgb\(20,160,119,0\.12\)\]/g, 'group relative bg-white border border-[#E6EBF0] rounded-[24px] p-12 lg:p-16 shadow-[0_12px_35px_rgba(16,42,67,0.06)] hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_15px_40px_rgba(21,154,131,0.1)] transition-all duration-300');
      
      // Services Card Icon container
      content = content.replace(/w-16 h-16 rounded-2xl bg-background border border-gray-200 flex items-center justify-center group-hover:border-accent\/30 group-hover:bg-accent\/5 transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-700 group-hover:-translate-y-2 shadow-sm/g, 'w-16 h-16 rounded-[16px] bg-accent-light border border-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300');
      content = content.replace(/text-navy-900 group-hover:text-accent transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-1000/g, 'text-accent group-hover:text-white transition-colors duration-300');

      // Buttons in Home
      content = content.replace(/bg-accent text-white text-xs md:text-sm uppercase tracking-\[0\.2em\] font-semibold overflow-hidden transition-all ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] shadow-xl hover:shadow-accent\/20/g, 'bg-accent text-white text-xs md:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[10px] hover:bg-[#117D6B] hover:shadow-[0_8px_20px_rgba(21,154,131,0.18)]');
      
      content = content.replace(/bg-accent text-white font-sans font-semibold uppercase tracking-widest text-xs hover:text-accent transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-700 rounded-sm/g, 'bg-accent text-white font-sans font-semibold uppercase tracking-widest text-xs rounded-[10px] transition-all duration-300 hover:bg-[#117D6B] hover:shadow-[0_8px_20px_rgba(21,154,131,0.18)]');
      
      // Secondary Buttons
      content = content.replace(/bg-transparent border border-navy-900\/30 text-navy-900 font-sans font-semibold uppercase tracking-widest text-xs hover:bg-navy-900 hover:text-white transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] duration-700 rounded-sm/g, 'bg-white border border-navy-900 text-navy-900 font-sans font-semibold uppercase tracking-widest text-xs rounded-[10px] transition-all duration-300 hover:bg-navy-900 hover:text-white');
    }

    // Ensure sections have the light background #F7F9FC instead of plain white
    // In React className, bg-background is #F7F9FC
    content = content.replace(/<section className="([^"]*)bg-background([^"]*)">/g, '<section className="$1bg-background$2">'); // No-op, just ensuring

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
