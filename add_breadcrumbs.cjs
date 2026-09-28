const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];
const pageTitles = {
  'About.tsx': 'About Us',
  'Services.tsx': 'Services',
  'Clients.tsx': 'Clients',
  'Career.tsx': 'Career',
  'Contact.tsx': 'Contact'
};

function addBreadcrumbs(filePath, pageName) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Ensure Link is imported
  if (!content.includes('import { Link }') && !content.includes('import {Link}')) {
    content = content.replace(/import \{ motion \} from 'framer-motion'/, `import { motion } from 'framer-motion'\nimport { Link } from '@tanstack/react-router'`);
  }

  const title = pageTitles[pageName] || pageName;

  const breadcrumbHtml = `<motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 text-[10px] md:text-xs font-sans tracking-widest uppercase mb-6"
            >
              <Link to="/" className="text-navy-700 hover:text-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]">Home</Link>
              <span className="text-gold/50">•</span>
              <span className="text-gold font-medium">${title}</span>
            </motion.nav>`;

  // Check if we already have the gold line and subtitle
  if (content.includes('<motion.div \n              initial={{ opacity: 0, scaleX: 0 }}')) {
    // Replace the line and subtitle with breadcrumbs
    content = content.replace(/<motion\.div \s*initial=\{\{ opacity: 0, scaleX: 0 \}\}[\s\S]*?className="text-gold uppercase tracking-\[0\.3em\] text-sm font-sans mb-4 font-medium"\s*>\s*[^<]+\s*<\/motion\.p>/m, breadcrumbHtml);
  } else {
    // If not, just insert before the h1
    content = content.replace(/(<motion\.h1[^>]*>)/, breadcrumbHtml + '\n            $1');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (fs.existsSync(filePath)) {
    addBreadcrumbs(filePath, file);
    console.log(`Added breadcrumbs to ${file}`);
  }
}
