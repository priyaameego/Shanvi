const fs = require('fs');
const path = require('path');

const indianPhotos = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629904853716-f0bc54bea981?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop'
];

let photoIndex = 0;

const clientsPath = path.join(__dirname, 'src', 'pages', 'Clients.tsx');
let clientsContent = fs.readFileSync(clientsPath, 'utf8');

clientsContent = clientsContent.replace(/img:\s*['"]https:\/\/images\.unsplash\.com[^'"]+['"]/g, () => {
  const replacement = `img: '${indianPhotos[photoIndex % indianPhotos.length]}'`;
  photoIndex++;
  return replacement;
});

fs.writeFileSync(clientsPath, clientsContent, 'utf8');
console.log('Clients.tsx updated with Indian photos.');

const aboutPath = path.join(__dirname, 'src', 'pages', 'About.tsx');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(/import team1.*\nimport team2.*\nimport team3.*\nimport team4.*\n/g, '');
fs.writeFileSync(aboutPath, aboutContent, 'utf8');
console.log('About.tsx unused imports removed.');
