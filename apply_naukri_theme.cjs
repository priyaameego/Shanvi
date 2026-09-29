const fs = require('fs');
const path = require('path');

// 1. Update tailwind.config.js
const twPath = path.join(__dirname, 'tailwind.config.js');
let tw = fs.readFileSync(twPath, 'utf8');
tw = tw.replace(
  /colors: \{[\s\S]*?fontFamily:/,
  `colors: {
        background: {
          DEFAULT: '#F1F5F9', // slightly darker slate for contrast
          alt: '#F8FAFC',
          white: '#FFFFFF'
        },
        foreground: '#334155',
        navy: {
          800: '#1E293B',
          900: '#0F172A',
          footer: '#FFFFFF'
        },
        charcoal: {
          DEFAULT: '#475569'
        },
        ivory: {
          DEFAULT: '#F1F5F9'
        },
        accent: {
          DEFAULT: '#275DF5', // Naukri Blue
          hover: '#1D4ED8',
          light: '#EFF6FF',
        },
        gold: {
          DEFAULT: '#275DF5', // Replaced gold with blue for consistency
        },
        muted: {
          DEFAULT: '#64748B'
        },
        border: {
          light: '#E2E8F0',
          medium: '#CBD5E1'
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
      if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
        callback(dirPath);
      }
    }
  });
}

const naukriBlue = '#275DF5';
const lightBlue = '#EFF6FF';
const slate800 = '#1E293B';
const slate600 = '#475569';
const slate300 = '#CBD5E1';

walk(path.join(__dirname, 'src'), (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Fix Navbar Contact button explicitly just in case tailwind caching fails
  if (filePath.endsWith('Navbar.tsx')) {
    content = content.replace(/bg-accent text-white([^"]*)rounded-sm/g, `bg-[#275DF5] text-white$1rounded-md shadow-md`);
  }

  // Footer changes (White footer)
  if (filePath.endsWith('Footer.tsx')) {
    // Replace deep navy background with white
    content = content.replace(/bg-navy-footer border-t border-accent\/20/g, 'bg-white border-t border-[#E2E8F0]');
    content = content.replace(/bg-navy-footer/g, 'bg-white');
    // Replace text colors for white background
    content = content.replace(/text-white/g, 'text-[#1E293B]');
    content = content.replace(/text-\[#CBD5E1\]/g, 'text-[#475569]');
    content = content.replace(/text-\[#E2E8F0\]/g, 'text-[#64748B]');
    // Footer button
    content = content.replace(/bg-accent text-\[#1E293B\]/g, `bg-[#275DF5] text-white`);
    // Ensure headings in footer are dark
    content = content.replace(/text-lg font-serif mb-6 uppercase tracking-widest text-[#1E293B]/g, 'text-lg font-serif mb-6 uppercase tracking-widest text-[#0F172A]');
    // Divider lines in footer
    content = content.replace(/border-navy-800/g, 'border-[#E2E8F0]');
    content = content.replace(/border-slate-800/g, 'border-[#E2E8F0]');
    content = content.replace(/border-\[#1E293B\]/g, 'border-[#E2E8F0]');
  }

  // Cards in Home and Services
  if (filePath.endsWith('Home.tsx') || filePath.endsWith('Services.tsx')) {
    // Strip explicit hex colors from previous step and replace with Naukri Blue & slate
    content = content.replace(/text-\[#159A83\]/g, `text-[${naukriBlue}]`); // teal to blue
    content = content.replace(/bg-\[#159A83\]/g, `bg-[${naukriBlue}]`);
    content = content.replace(/border-\[#159A83\]/g, `border-[${naukriBlue}]`);
    content = content.replace(/bg-\[#E8F7F3\]/g, `bg-[${lightBlue}]`); // light teal to light blue
    
    // Replace Navy text with Professional Slate
    content = content.replace(/text-\[#102A43\]/g, `text-[${slate800}]`); 
    content = content.replace(/text-\[#4B5563\]/g, `text-[${slate600}]`);
    
    // Replace gold line with blue line
    content = content.replace(/bg-\[#C6A15B\]/g, `bg-[${naukriBlue}]`);
    
    // Softer shadow to match Naukri premium professional style
    content = content.replace(/shadow-\[0_8px_30px_rgba\(0,0,0,0\.06\)\]/g, 'shadow-[0_4px_20px_rgba(0,0,0,0.04)]');
    content = content.replace(/hover:shadow-\[0_20px_50px_rgba\(21,154,131,0\.15\)\]/g, `hover:shadow-[0_12px_35px_rgba(39,93,245,0.1)]`);
  }

  // Globally swap any leftover teal/gold to Naukri blue
  content = content.replace(/#159A83/gi, naukriBlue);
  content = content.replace(/#C6A15B/gi, naukriBlue);
  
  // Globally swap deep navy to slate 800/900
  content = content.replace(/#102A43/gi, slate800);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated', filePath);
  }
});
