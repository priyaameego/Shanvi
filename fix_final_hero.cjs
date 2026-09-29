const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Fix Breadcrumb (remove uppercase, fix chevron alignment, increase spacing)
  const navRegex = /<motion\.nav[\s\S]*?className="flex items-center gap-2 text-\[13px\] font-sans font-medium tracking-\[0\.1em\] uppercase mb-8"[\s\S]*?<Link to="\/" className="text-\[\#6B7280\] hover:text-\[\#0CBF9F\] transition-colors duration-300">Home<\/Link>\s*<span className="text-\[\#0CBF9F\] mx-2 text-lg leading-none">›<\/span>\s*<span className="text-\[\#13294B\] tracking-\[0\.15em\]">(.*?)<\/span>\s*<\/motion\.nav>/g;

  content = content.replace(navRegex, (match, pageName) => {
    return `<motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-[13px] font-sans font-medium mb-10"
            >
              <Link to="/" className="text-[#6B7280] hover:text-[#0CBF9F] transition-colors duration-300">Home</Link>
              <span className="text-[#0CBF9F] text-[15px] leading-none">›</span>
              <span className="text-[#13294B]">${pageName}</span>
            </motion.nav>`;
  });

  // 2. Fix the White Overlay to actually make the background visible
  // The original was: bg-gradient-to-r from-white via-white/80 to-transparent
  content = content.replace(/from-white via-white\/80 to-transparent/g, 'from-white/85 via-white/65 to-transparent');
  content = content.replace(/from-white via-transparent to-transparent/g, 'from-white/85 via-transparent to-transparent');
  
  // For Contact page which has #F6F8FB
  content = content.replace(/from-\[\#F6F8FB\] via-\[\#F6F8FB\]\/80 to-transparent/g, 'from-[#F6F8FB]/85 via-[#F6F8FB]/65 to-transparent');
  content = content.replace(/from-\[\#F6F8FB\] via-transparent to-transparent/g, 'from-[#F6F8FB]/85 via-transparent to-transparent');


  fs.writeFileSync(filePath, content);
}

console.log('Fixed breadcrumb typography and reduced white overlay opacity.');
