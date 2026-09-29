const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(homePath, 'utf8');

// Force background to white globally for Home
content = content.replace(/bg-background/g, 'bg-white');

// Fix gaps by changing any py-32 or py-48
content = content.replace(/py-32 md:py-48/g, 'py-16 md:py-24');
content = content.replace(/py-32/g, 'py-16');

fs.writeFileSync(homePath, content);

const servicesPath = path.join(__dirname, 'src', 'pages', 'Services.tsx');
let sContent = fs.readFileSync(servicesPath, 'utf8');
sContent = sContent.replace(/bg-background/g, 'bg-white');
sContent = sContent.replace(/py-32 md:py-48/g, 'py-16 md:py-24');
sContent = sContent.replace(/py-32/g, 'py-16');
fs.writeFileSync(servicesPath, sContent);

const contactPath = path.join(__dirname, 'src', 'pages', 'Contact.tsx');
let cContent = fs.readFileSync(contactPath, 'utf8');
cContent = cContent.replace(/bg-background/g, 'bg-white');
cContent = cContent.replace(/py-32 md:py-48/g, 'py-16 md:py-24');
cContent = cContent.replace(/py-32/g, 'py-16');
fs.writeFileSync(contactPath, cContent);

console.log('Force applied white background and reduced gaps across all pages');
