const fs = require('fs');
const path = require('path');

function flipBackgroundAndCards(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Change the section backgrounds from Mint (#E4EDE9) to Pure White (bg-white or #FFFFFF)
  content = content.replace(/bg-\[\#E4EDE9\]/g, 'bg-white');

  // 2. Change the Card backgrounds from Pure White (bg-white) to Tinted Mint (#F0F7F5)
  // Because they asked "cards pr color rakho" (put color on cards)
  
  // Home & Services Cards
  // currently: group relative bg-white border border-[#D1E6E1] border-t-[6px] border-t-[#1A746B] p-12 lg:p-16 hover:-translate-y-2 hover:bg-[#F0F7F5] shadow-[0_8px_20px_rgba(0,0,0,0.04)]
  content = content.replace(/group relative bg-white border border-\[\#D1E6E1\]/g, 'group relative bg-[#F2F9F7] border border-[#D1E6E1]');
  
  // Modify hover effect: since base is tinted, on hover let's make it slightly darker mint or pure white. Let's make it slightly more vibrant mint
  content = content.replace(/hover:bg-\[\#F0F7F5\]/g, 'hover:bg-[#E4EDE9]');

  // Contact Cards (Left and Right)
  // currently: group relative bg-white border border-[#D1E6E1] border-t-[6px] border-t-[#1A746B] p-16 ...
  content = content.replace(/bg-white border border-\[\#D1E6E1\] border-t-\[6px\] border-t-\[\#1A746B\]/g, 'bg-[#F2F9F7] border border-[#D1E6E1] border-t-[6px] border-t-[#1A746B]');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Flipped background and cards in', filePath);
  }
}

flipBackgroundAndCards(path.join(__dirname, 'src', 'pages', 'Home.tsx'));
flipBackgroundAndCards(path.join(__dirname, 'src', 'pages', 'Services.tsx'));
flipBackgroundAndCards(path.join(__dirname, 'src', 'pages', 'Contact.tsx'));
