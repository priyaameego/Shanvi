const fs = require('fs');
const path = require('path');

const premiumEase = 'ease: [0.22, 1, 0.36, 1]';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace duration: 0.8 with duration: 1.2 and the premium ease (if no ease is present)
  content = content.replace(/transition=\{\{([^}]*)duration:\s*0\.8([^}]*)\}\}/g, (match, p1, p2) => {
    if (match.includes('ease:')) {
      // replace existing ease
      return `transition={{${p1}duration: 1.2${p2}}}`.replace(/ease:\s*["'][^"']+["']/, premiumEase).replace(/ease:\s*\[[^\]]+\]/, premiumEase);
    } else {
      return `transition={{${p1}duration: 1.2, ${premiumEase}${p2}}}`;
    }
  });

  // Replace easeOut with premium ease
  content = content.replace(/ease:\s*["']easeOut["']/g, premiumEase);
  content = content.replace(/ease:\s*["']circOut["']/g, premiumEase);
  content = content.replace(/ease:\s*["']easeInOut["']/g, premiumEase);

  // Increase duration: 1 to duration: 1.4 + premium ease
  content = content.replace(/transition=\{\{([^}]*)duration:\s*1([^.\d])/g, (match, p1, p2) => {
    if (match.includes('ease:')) {
       return `transition={{${p1}duration: 1.4${p2}`;
    }
    return `transition={{${p1}duration: 1.4, ${premiumEase}${p2}`;
  });

  // Make viewport slightly delayed (trigger when 10% inside)
  content = content.replace(/viewport=\{\{\s*once:\s*true\s*\}\}/g, 'viewport={{ once: true, margin: "-10%" }}');
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Enhanced:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.tsx')) {
      processFile(full);
    }
  }
}

walk(path.join(__dirname, 'src'));
console.log('Done');
