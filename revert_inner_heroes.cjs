const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

// Some great Indian corporate photos from Unsplash
const indianPhotos = [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
];
let photoIndex = 0;
function getNextPhoto() {
  const photo = indianPhotos[photoIndex];
  photoIndex = (photoIndex + 1) % indianPhotos.length;
  return photo;
}

function revertHero(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Revert background to Ivory
  content = content.replace(/<section className="relative pt-36 pb-20 bg-navy-950 text-white"/g, '<section className="relative pt-48 pb-32 bg-ivory"');
  
  // Revert gradients
  content = content.replace(/to-navy-950/g, 'to-ivory');

  // Revert text colors
  content = content.replace(/<h1 className="([^"]*)text-white mb-6([^"]*)">/g, '<h1 className="$1text-navy-900 mb-6$2">');
  content = content.replace(/text-gray-300 font-sans font-light text-lg max-w-xl/g, 'text-navy-700 font-sans font-light text-lg max-w-xl');

  // Replace all generic placeholder images with Indian corporate photos
  content = content.replace(/src="https:\/\/images\.unsplash\.com\/[^"]+"/g, () => `src="${getNextPhoto()}"`);

  fs.writeFileSync(filePath, content, 'utf8');
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(filePath)) {
    revertHero(filePath);
    console.log(`Reverted and updated photos in ${file}`);
  }
}
