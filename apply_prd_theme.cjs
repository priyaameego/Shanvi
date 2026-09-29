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
          DEFAULT: '#F6F8FB',
          alt: '#FAFBFD',
          white: '#FFFFFF'
        },
        foreground: '#102A43',
        navy: {
          800: '#1464A5',
          900: '#102A43',
          footer: '#102A43'
        },
        charcoal: {
          DEFAULT: '#475467'
        },
        ivory: {
          DEFAULT: '#F1F5F9'
        },
        accent: {
          DEFAULT: '#0CBF9F',
          hover: '#0A9F84',
          light: '#EEF8F6',
          green: '#18A889'
        },
        gold: {
          DEFAULT: '#C6A15B'
        },
        muted: {
          DEFAULT: '#667085'
        },
        border: {
          light: '#E2E8F0',
          medium: '#E4EAF0'
        }
      },
      fontFamily:`);
fs.writeFileSync(twPath, tw);

// 2. Fix TSX Files
const files = walkSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Revert Naukri Blue and text colors
  content = content.replace(/#275DF5/ig, '#0CBF9F');
  content = content.replace(/#1D4ED8/ig, '#0A9F84');
  content = content.replace(/#121224/ig, '#102A43');
  content = content.replace(/#474D6A/ig, '#475467');
  
  // Revert background and borders
  content = content.replace(/#F8F9FF/ig, '#F6F8FB');
  content = content.replace(/#E7EDF3/ig, '#E4EAF0');
  
  // Card replacements (from the crazy long classes)
  // Let's replace the whole card wrapper with the exact PRD spec
  // Find instances of cards (bg-white border ... rounded-[20px] or rounded-xl)
  const oldCardRegex = /className="[^"]*shadow-\[0_8px_20px_rgba\(0,0,0,0\.04\)\][^"]*"/g;
  content = content.replace(oldCardRegex, 'className="group relative bg-white border border-[#E4EAF0] p-10 lg:p-12 rounded-[24px] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:-translate-y-1 hover:border-[#0CBF9F]/30 hover:shadow-[0_15px_35px_rgba(16,42,67,0.08)] transition-all duration-300"');
  
  // Icon containers
  const oldIconRegex = /className="[^"]*bg-\[\#EBF0FF\][^"]*rounded-\[16px\][^"]*"/g;
  content = content.replace(oldIconRegex, 'className="inline-flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#EEF8F6] border border-[rgba(21,154,131,0.12)] text-[#0CBF9F] mb-8 group-hover:bg-[#0CBF9F] group-hover:text-white transition-colors duration-300"');

  // Fix buttons
  const btnRegex = /className="group inline-flex items-center justify-center px-8 py-4 bg-\[\#0CBF9F\] text-white[^"]*"/g;
  content = content.replace(btnRegex, 'className="group inline-flex items-center justify-center px-8 py-4 bg-[#0CBF9F] text-white text-xs md:text-sm uppercase tracking-[0.1em] font-bold transition-all duration-250 rounded-[12px] shadow-[0_6px_18px_rgba(21,154,131,0.18)] hover:shadow-[0_8px_25px_rgba(21,154,131,0.25)] hover:-translate-y-[2px] hover:bg-[#0A9F84]"');

  // Any remaining generic white backgrounds that should alternate to F6F8FB
  // We'll leave bg-white for now, but if there's bg-background it will map to F6F8FB from tailwind config.

  if (content !== original) {
    fs.writeFileSync(file, content);
  }
});

// Explicitly handle Home.tsx for background sections
const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
if (fs.existsSync(homePath)) {
  let home = fs.readFileSync(homePath, 'utf8');
  
  // Make "Our Organization" section use the alternate background
  home = home.replace(/{[\/\*]* Our Organization \*\/}\s*<section className="pt-0 pb-20 md:pb-28 bg-white relative overflow-hidden">/g,
    '{/* Our Organization */}\n      <section className="pt-0 pb-20 md:pb-28 bg-background relative overflow-hidden">');
  
  // Make Action boxes section use alternate background
  home = home.replace(/<section className="py-20 bg-white relative">/g, 
    '<section className="py-20 bg-background relative">');
    
  fs.writeFileSync(homePath, home);
}

console.log('Applied PRD Theme successfully.');
