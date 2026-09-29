const fs = require('fs');
const path = require('path');

// Colors from the screenshot:
// Accent Teal: #1A746B
// Light Mint Background: #E4EDE9
// Card Background: #FFFFFF (with thick top border)
// Dark Text: #0B1714

const twPath = path.join(__dirname, 'tailwind.config.js');
let tw = fs.readFileSync(twPath, 'utf8');
tw = tw.replace(
  /colors: \{[\s\S]*?fontFamily:/,
  `colors: {
        background: {
          DEFAULT: '#E4EDE9', // Soft mint grey from screenshot
          alt: '#DCE7E2',
          white: '#FFFFFF'
        },
        foreground: '#1B2623',
        navy: {
          800: '#152420',
          900: '#0B1714',
          footer: '#FFFFFF'
        },
        charcoal: {
          DEFAULT: '#3B4D48'
        },
        ivory: {
          DEFAULT: '#E4EDE9'
        },
        accent: {
          DEFAULT: '#1A746B', // Rich Teal from screenshot
          hover: '#125A52',
          light: '#D1E6E1',
        },
        gold: {
          DEFAULT: '#1A746B',
        },
        muted: {
          DEFAULT: '#5A736C'
        },
        border: {
          light: '#D1E6E1',
          medium: '#B4CCC6'
        }
      },
      fontFamily:`
);
fs.writeFileSync(twPath, tw);

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

walk(path.join(__dirname, 'src'), (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace old hex codes with new theme
  // Old blue #275DF5 -> #1A746B
  content = content.replace(/#275DF5/gi, '#1A746B');
  content = content.replace(/#1D4ED8/gi, '#125A52'); // hover
  content = content.replace(/#E8F7F3/gi, '#D1E6E1'); // light
  
  // Old slate/blue backgrounds -> Mint Background
  content = content.replace(/#F1F5F9/gi, '#E4EDE9');
  content = content.replace(/#F8FAFC/gi, '#FFFFFF'); // Make footer pure white again
  
  // Old borders -> Minty borders
  content = content.replace(/#CBD5E1/gi, '#B4CCC6');
  content = content.replace(/#E2E8F0/gi, '#D1E6E1');

  // Text colors
  content = content.replace(/#102A43/gi, '#0B1714');
  content = content.replace(/#0F172A/gi, '#0B1714');
  content = content.replace(/#1E293B/gi, '#152420');
  content = content.replace(/#4B5563/gi, '#3B4D48');
  content = content.replace(/#475569/gi, '#3B4D48');
  
  // Cards in Home.tsx and Services.tsx
  // User says "cards hover karne pr color de jis se accent brigher lage cards edam white acha nhi lag rha"
  // Let's add a thick top border to the cards like the screenshot, and a hover background color!
  if (filePath.endsWith('Home.tsx') || filePath.endsWith('Services.tsx')) {
    // Modify card container to have the thick top border and hover effect
    content = content.replace(/group relative bg-white border border-\[\#B4CCC6\] p-12 lg:p-16 hover:-translate-y-2 hover:border-\[\#1A746B\]\/50 shadow-\[0_8px_30px_rgba\(0,0,0,0\.06\)\] hover:shadow-\[0_20px_50px_rgba\(21,154,131,0\.15\)\] transition-all duration-300 overflow-hidden rounded-\[24px\]/g, 
      'group relative bg-white border border-[#D1E6E1] border-t-8 border-t-[#1A746B] p-12 lg:p-16 hover:-translate-y-2 hover:bg-[#F2F9F7] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.2)] transition-all duration-300 overflow-hidden rounded-[20px]');
      
    // Modify the card container in Services if it has the flex gap-8 attached
    content = content.replace(/group relative bg-white border border-\[\#B4CCC6\] p-12 lg:p-16 hover:-translate-y-2 hover:border-\[\#1A746B\]\/50 shadow-\[0_8px_30px_rgba\(0,0,0,0\.06\)\] hover:shadow-\[0_20px_50px_rgba\(21,154,131,0\.15\)\] transition-all duration-300 overflow-hidden rounded-\[24px\] flex gap-8/g, 
      'group relative bg-white border border-[#D1E6E1] border-t-8 border-t-[#1A746B] p-12 lg:p-16 hover:-translate-y-2 hover:bg-[#F2F9F7] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(26,116,107,0.2)] transition-all duration-300 overflow-hidden rounded-[20px] flex gap-8');

    // Also remove the explicit gradient inside the card to let the solid hover bg shine
    content = content.replace(/<div className="absolute inset-0 bg-gradient-to-br from-\[\#1A746B\]\/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" \/>/g, '');
    
    // Change the icon background on hover to match the strong accent
    content = content.replace(/bg-\[\#D1E6E1\] border border-\[\#1A746B\]\/20 flex items-center justify-center group-hover:bg-\[\#1A746B\]/g, 
      'bg-[#E4EDE9] border border-[#1A746B]/20 flex items-center justify-center group-hover:bg-[#1A746B]');
  }
  
  if (filePath.endsWith('Navbar.tsx')) {
    // Update navbar button to match the thick pill shape in screenshot
    content = content.replace(/bg-\[\#1A746B\] text-white text-\[10px\] font-bold uppercase tracking-\[0\.2em\] rounded-md shadow-md/g, 
      'bg-[#1A746B] text-white text-[11px] font-bold uppercase tracking-[0.1em] px-8 py-3 rounded-full shadow-md');
  }
  
  if (filePath.endsWith('Footer.tsx')) {
    // Update footer button to match pill shape
    content = content.replace(/rounded-md group\/btn/g, 'rounded-full group/btn');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated', filePath);
  }
});
