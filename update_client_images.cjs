const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Clients.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const indianImages = [
  'https://images.unsplash.com/photo-1596495577943-421112ee56c2?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1582750433449-648ed127d09e?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1621252179027-9d784a6018bf?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1573167440381-8b0101b0b7ab?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1604732646637-293699c2d159?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1573167582101-7667ffeb8a5d?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1542314831-c53cd3b8534f?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1587840171670-8b850147754e?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1596495577943-421112ee56c2?q=80&w=800&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620803450974-949392e21de3?q=80&w=800&auto=format&fit=crop'
];

let imageIndex = 0;

content = content.replace(/img: 'https:\/\/images\.unsplash\.com\/photo-[^']+'/g, () => {
  const replacement = "img: '" + indianImages[imageIndex % indianImages.length] + "'";
  imageIndex++;
  return replacement;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacing images in Clients.tsx');
