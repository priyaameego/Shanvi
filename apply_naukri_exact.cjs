const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory()
        ? walkSync(dirFile, filelist)
        : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT') return;
      throw err;
    }
  });
  return filelist;
};

// 1. Update tailwind.config.js
const twPath = path.join(__dirname, 'tailwind.config.js');
let tw = fs.readFileSync(twPath, 'utf8');
tw = tw.replace(/colors: \{[\s\S]*?fontFamily:/, 
`colors: {
        background: {
          DEFAULT: '#F8F9FF', // Naukri light background
          alt: '#FFFFFF',
          white: '#FFFFFF'
        },
        foreground: '#121224',
        navy: {
          800: '#1A233A',
          900: '#121224', // Naukri Main Dark Text
          footer: '#0B1320'
        },
        charcoal: {
          DEFAULT: '#474D6A' // Naukri Gray Text
        },
        ivory: {
          DEFAULT: '#F1F5F9'
        },
        accent: {
          DEFAULT: '#275DF5', // EXACT NAUKRI BLUE
          hover: '#1D4ED8',
          light: '#EBF0FF',
        },
        gold: {
          DEFAULT: '#275DF5', // Re-route gold to Naukri Blue so existing classes turn blue
        },
        muted: {
          DEFAULT: '#717B9E'
        },
        border: {
          light: '#F1F5FF',
          medium: '#E7EDF3'
        }
      },
      fontFamily:`);
fs.writeFileSync(twPath, tw);

// 2. Fix hardcoded Hex colors in all TSX files
const files = walkSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace Mint/Teal backgrounds with Naukri White Card
  content = content.replace(/bg-\[\#F2F9F7\]/g, 'bg-white');
  
  // Replace Teal Borders with Naukri Blue Borders or subtle gray
  content = content.replace(/border-t-\[\#1A746B\]/g, 'border-t-[#275DF5]');
  content = content.replace(/border-l-\[\#1A746B\]/g, 'border-l-[#275DF5]');
  content = content.replace(/border-\[\#D1E6E1\]/g, 'border-[#E7EDF3]');
  content = content.replace(/border-\[\#1A746B\]/g, 'border-[#275DF5]');
  
  // Replace Teal text/icons with Naukri Blue
  content = content.replace(/text-\[\#1A746B\]/g, 'text-[#275DF5]');
  
  // Replace hover states
  content = content.replace(/hover:bg-\[\#E4EDE9\]/g, 'hover:bg-[#F8F9FF]');
  content = content.replace(/hover:bg-\[\#125A52\]/g, 'hover:bg-[#1D4ED8]');
  content = content.replace(/bg-\[\#1A746B\]/g, 'bg-[#275DF5]');
  
  // Replace shadows using Teal to use Blue
  content = content.replace(/rgba\(26,116,107,/g, 'rgba(39,93,245,'); // 26,116,107 is #1A746B RGB. 39,93,245 is #275DF5 RGB
  content = content.replace(/rgba\(21,154,131,/g, 'rgba(39,93,245,'); 

  // Fix badges/gradient backgrounds
  content = content.replace(/bg-gradient-to-br from-accent to-\[\#115E55\]/g, 'bg-gradient-to-br from-[#275DF5] to-[#1D4ED8]');
  content = content.replace(/bg-\[\#0B1727\]/g, 'bg-[#121224]');
  
  // Fix Icon wrappers
  content = content.replace(/bg-\[\#EFF6FF\]/g, 'bg-[#EBF0FF]'); // Naukri light blue
  
  if (content !== original) {
    fs.writeFileSync(file, content);
  }
});

console.log('Successfully applied exact Naukri.com #275DF5 theme globally.');
