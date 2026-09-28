const fs = require('fs');
const path = require('path');

const indianPhotos = [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786',
  'https://images.unsplash.com/photo-1573164574572-cb89e39749b4',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  'https://images.unsplash.com/photo-1573167440381-8b0101b0b7ab',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a'
];
let photoIndex = 0;
function getNextPhoto(match) {
  // Extract query parameters if any
  const urlParts = match.split('?');
  const query = urlParts.length > 1 ? '?' + urlParts[1] : '?auto=format&fit=crop&q=80';
  
  const photo = indianPhotos[photoIndex] + query;
  photoIndex = (photoIndex + 1) % indianPhotos.length;
  return photo;
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace all unsplash URLs
      const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+(?:\?[^"'\s]*)?/g;
      
      const newContent = content.replace(regex, getNextPhoto);
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated images in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
