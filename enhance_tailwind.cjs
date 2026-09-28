const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Make hover scales subtle: scale-105 -> scale-[1.02], scale-110 -> scale-105
  content = content.replace(/hover:scale-105/g, 'hover:scale-[1.02]');
  content = content.replace(/group-hover:scale-105/g, 'group-hover:scale-[1.02]');
  
  // Make durations longer and smoother
  content = content.replace(/duration-300/g, 'duration-700');
  content = content.replace(/duration-500/g, 'duration-1000');
  content = content.replace(/duration-\[3s\]/g, 'duration-[5s]'); // slower Ken Burns

  // Ensure transitions have nice easing
  content = content.replace(/transition-all/g, 'transition-all ease-[cubic-bezier(0.22,1,0.36,1)]');
  content = content.replace(/transition-transform/g, 'transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]');
  content = content.replace(/transition-colors/g, 'transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]');
  content = content.replace(/transition-opacity/g, 'transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)]');
  
  // Clean up double eases if they happen
  content = content.replace(/ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\] ease-out/g, 'ease-[cubic-bezier(0.22,1,0.36,1)]');
  
  // Better shadows on hover
  content = content.replace(/hover:shadow-xl/g, 'hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]');
  content = content.replace(/hover:shadow-2xl/g, 'hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]');

  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Tailwind Enhanced:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.jsx')) {
      processFile(full);
    }
  }
}

walk(path.join(__dirname, 'src'));
console.log('Done');
