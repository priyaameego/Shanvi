const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match the entire motion.nav block
  const navRegex = /<motion\.nav\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*10\s*\}\}\s+animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s+transition=\{\{\s*duration:\s*1\.2,\s*ease:\s*\[0\.22,\s*1,\s*0\.36,\s*1\]\s*\}\}\s+className="[^"]*"\s*>\s*<Link to="\/" className="[^"]*">Home<\/Link>\s*<span className="[^"]*">›<\/span>\s*<span className="[^"]*">(.*?)<\/span>\s*<\/motion\.nav>/g;

  content = content.replace(navRegex, (match, pageName) => {
    return `<motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-[#E4EAF0] rounded-full shadow-[0_4px_20px_rgba(16,42,67,0.04)] text-[10px] md:text-[11px] font-sans tracking-[0.2em] uppercase mb-10"
            >
              <Link to="/" className="text-[#475467] hover:text-[#0CBF9F] font-bold transition-colors duration-300">Home</Link>
              <span className="text-[#0CBF9F]">›</span>
              <span className="text-[#102A43] font-extrabold tracking-[0.25em]">${pageName}</span>
            </motion.nav>`;
  });

  // Specifically for Contact which has slightly different classes due to GPT edits
  const contactNavRegex = /<motion\.nav\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*10\s*\}\}\s+animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s+transition=\{\{\s*duration:\s*1\.2,\s*ease:\s*\[0\.22,\s*1,\s*0\.36,\s*1\]\s*\}\}\s+className="flex items-center gap-2 text-\[9px\] md:text-\[10px\] font-sans tracking-\[0\.2em\] uppercase mb-8"\s*>\s*<Link to="\/" className="text-muted hover:text-\[\#102A43\] transition-colors ease-\[cubic-bezier\(0\.22,1,0\.36,1\)\]">Home<\/Link>\s*<span className="text-gold mx-2">›<\/span>\s*<span className="text-\[\#102A43\] font-semibold tracking-\[0\.25em\]">Contact<\/span>\s*<\/motion\.nav>/s;
  
  content = content.replace(contactNavRegex, `<motion.nav 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-[#E4EAF0] rounded-full shadow-[0_4px_20px_rgba(16,42,67,0.04)] text-[10px] md:text-[11px] font-sans tracking-[0.2em] uppercase mb-10"
              >
                <Link to="/" className="text-[#475467] hover:text-[#0CBF9F] font-bold transition-colors duration-300">Home</Link>
                <span className="text-[#0CBF9F]">›</span>
                <span className="text-[#102A43] font-extrabold tracking-[0.25em]">Contact</span>
              </motion.nav>`);

  fs.writeFileSync(filePath, content);
}

console.log('Breadcrumbs upgraded on all inner pages.');
