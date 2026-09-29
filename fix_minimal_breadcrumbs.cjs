const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Revert and Minimalize Breadcrumb
  const navRegex = /<motion\.nav[\s\S]*?className="inline-flex items-center gap-3 px-5 py-2\.5 bg-white\/80 backdrop-blur-md border border-\[\#E4EAF0\] rounded-full shadow-\[0_4px_20px_rgba\(16,42,67,0\.04\)\] text-\[10px\] md:text-\[11px\] font-sans tracking-\[0\.2em\] uppercase mb-10"[\s\S]*?<Link to="\/" className="text-\[\#475467\] hover:text-\[\#0CBF9F\] font-bold transition-colors duration-300">Home<\/Link>\s*<span className="text-\[\#0CBF9F\]">›<\/span>\s*<span className="text-\[\#102A43\] font-extrabold tracking-\[0\.25em\]">(.*?)<\/span>\s*<\/motion\.nav>/g;

  content = content.replace(navRegex, (match, pageName) => {
    return `<motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 text-[13px] font-sans font-medium tracking-[0.1em] uppercase mb-8"
            >
              <Link to="/" className="text-[#6B7280] hover:text-[#0CBF9F] transition-colors duration-300">Home</Link>
              <span className="text-[#0CBF9F] mx-2 text-lg leading-none">›</span>
              <span className="text-[#13294B] tracking-[0.15em]">${pageName}</span>
            </motion.nav>`;
  });

  // 2. Increase Hero Image visibility
  // Look for the background image in the hero section. Usually has opacity-10 or opacity-20.
  const imgRegex = /<img src="[^"]+" alt="[^"]+" className="w-full h-full object-cover opacity-(10|20)[^"]*"/g;
  content = content.replace(imgRegex, (match, opacityVal) => {
    return match.replace(`opacity-${opacityVal}`, 'opacity-25');
  });

  fs.writeFileSync(filePath, content);
}

console.log('Breadcrumbs simplified and background visibility increased on all inner pages.');
