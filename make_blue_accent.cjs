const fs = require('fs');
const path = require('path');

const OLD_ACCENT = '#0CBF9F';
const NEW_ACCENT = '#165396'; // Corporate Blue from Logo

const OLD_HOVER = '#0A9F84';
const NEW_HOVER = '#104075'; // Darker Blue for hover

const OLD_LIGHT_BG = '#EEF8F6'; // Light mint background
const NEW_LIGHT_BG = '#EBF2FA'; // Light blue background

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Replace case insensitive globally
  const regexAccent = new RegExp(OLD_ACCENT, 'gi');
  const regexHover = new RegExp(OLD_HOVER, 'gi');
  const regexLightBg = new RegExp(OLD_LIGHT_BG, 'gi');

  newContent = newContent.replace(regexAccent, NEW_ACCENT);
  newContent = newContent.replace(regexHover, NEW_HOVER);
  newContent = newContent.replace(regexLightBg, NEW_LIGHT_BG);

  // Also catch any instances where I used rgba with the old color in shadows
  // rgba(12,191,159,...) -> rgba(22,83,150,...)
  const regexRgba = new RegExp('12,191,159', 'g');
  newContent = newContent.replace(regexRgba, '22,83,150');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log('Updated:', filePath);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.cjs')) {
        replaceInFile(fullPath);
      }
    }
  });
}

walkDir(path.join(__dirname, 'src'));
replaceInFile(path.join(__dirname, 'tailwind.config.js'));

console.log('Global Accent Color Updated to Corporate Blue!');
