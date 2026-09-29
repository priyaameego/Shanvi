const fs = require('fs');
const path = require('path');

const twPath = path.join(__dirname, 'tailwind.config.js');
let tw = fs.readFileSync(twPath, 'utf8');
tw = tw.replace(
  /colors: \{[\s\S]*?fontFamily:/,
  `colors: {
        background: {
          DEFAULT: '#F7F9FC',
          alt: '#FFFFFF',
          white: '#FFFFFF'
        },
        foreground: '#334155',
        navy: {
          800: '#183B56',
          900: '#102A43',
          footer: '#0B1727'
        },
        charcoal: {
          DEFAULT: '#4B5563'
        },
        ivory: {
          DEFAULT: '#F1F5F9'
        },
        accent: {
          DEFAULT: '#1A746B', // Keep the Teal accent for buttons/cards
          hover: '#125A52',
          light: '#E8F7F3',
        },
        gold: {
          DEFAULT: '#C6A15B', // Restore Gold!
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

// Fix Home.tsx to restore original Navy/Gold + Fix gaps
const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let home = fs.readFileSync(homePath, 'utf8');

// Restore Gold lines
home = home.replace(/bg-accent/g, 'bg-gold'); 
home = home.replace(/bg-\[\#1A746B\]/g, 'bg-gold'); 
home = home.replace(/bg-\[\#89E6CC\] mt-4/g, 'bg-gold mt-4'); // Alert line

// Restore text colors
home = home.replace(/text-\[\#0B1714\]/g, 'text-navy-900');
home = home.replace(/text-\[\#3B4D48\]/g, 'text-charcoal');
home = home.replace(/text-\[\#152420\]/g, 'text-navy-900');

// Fix the gap between Services and Organization by removing padding
home = home.replace(/\{\/\* Our Organization \*\/\}\n\s*<section className="py-16 md:py-24/g, '{/* Our Organization */}\n      <section className="pt-0 pb-16 md:pb-24');

// Fix Cards to have the teal border/hover but with restored background
// Make the card background very light, but the cards stand out.
home = home.replace(/bg-\[\#F2F9F7\] border border-\[\#D1E6E1\] border-t-\[6px\] border-t-gold/g, 
  'bg-white border border-border-medium border-t-[6px] border-t-accent'); // Wait, bg-gold replaced the border-t-#1A746B above.

// Let's do a safer card replacement
home = home.replace(/bg-gold text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-navy-900/g,
  'bg-accent text-white font-sans font-semibold uppercase tracking-widest text-xs hover:bg-navy-900 hover:text-white');

home = home.replace(/text-gold italic font-light/g, 'text-accent italic font-light');

// Floating badge fix
home = home.replace(/bg-gradient-to-br from-\[\#26735E\] to-\[\#154D3D\] p-6 shadow-\[0_20px_40px_rgba\(21,77,61,0\.3\)\] border border-\[\#308A72\]/g,
  'bg-gradient-to-br from-accent to-[#115E55] p-6 shadow-2xl border border-accent');

fs.writeFileSync(homePath, home);

console.log('Restored Gold/Navy and fixed massive gap');
