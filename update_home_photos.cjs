const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const indianPhotos = [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
];

let photoIndex = 0;
content = content.replace(/src="https:\/\/images\.unsplash\.com\/[^"]+"/g, () => 'src="' + indianPhotos[photoIndex++ % indianPhotos.length] + '"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated Home.tsx photos');
