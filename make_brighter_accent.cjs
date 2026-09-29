const fs = require('fs');
const path = require('path');

const OLD_ACCENT = '#159A83';
const NEW_ACCENT = '#0CBF9F'; // Brighter Teal/Green

const OLD_HOVER = '#117D6B';
const NEW_HOVER = '#0A9F84'; // Brighter Hover

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Replace case insensitive
  const regexAccent = new RegExp(OLD_ACCENT, 'gi');
  const regexHover = new RegExp(OLD_HOVER, 'gi');

  newContent = newContent.replace(regexAccent, NEW_ACCENT);
  newContent = newContent.replace(regexHover, NEW_HOVER);

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
replaceInFile(path.join(__dirname, 'apply_prd_theme.cjs'));

console.log('Global Accent Color Updated to Brighter Premium Teal!');
