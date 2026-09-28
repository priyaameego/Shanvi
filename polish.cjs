const fs = require('fs');
const path = require('path');

const innerPages = ['About.tsx', 'Services.tsx', 'Clients.tsx', 'Career.tsx', 'Contact.tsx'];

function polishHero(content, pageName) {
  // We'll look for the first <section> ... </section> in the file and replace it.
  return content.replace(/<section className="[^"]*pt-[^>]+>([\s\S]*?)<\/section>/, (match) => {
    // Extract title and subtitle from the existing hero
    let titleMatch = match.match(/<motion\.h1[^>]*>([^<]+)<\/motion\.h1>/) || match.match(/<h1[^>]*>([^<]+)<\/h1>/);
    let title = titleMatch ? titleMatch[1].trim() : pageName.replace('.tsx', '');
    
    let subMatch = match.match(/<motion\.p[^>]*className="[^"]*uppercase[^>]*>([^<]+)<\/motion\.p>/);
    let subTitle = subMatch ? subMatch[1].trim() : '';

    let descMatch = match.match(/<motion\.p[^>]*max-w[^>]*>([^<]+)<\/motion\.p>/);
    let desc = descMatch ? descMatch[1].trim() : '';

    let imgMatch = match.match(/<img[^>]*src="([^"]+)"/);
    let imgSrc = imgMatch ? imgMatch[1] : '';

    let imageMarkup = '';
    if (imgSrc) {
      imageMarkup = `
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none opacity-10 md:opacity-30">
          <img src="${imgSrc}" alt="${title} Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-white" />
        </div>`;
    }

    return `<section className="relative pt-48 pb-32 bg-white overflow-hidden border-b border-gray-100">
        ${imageMarkup}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            ${subTitle ? `<motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-[1px] bg-gold mb-6 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-gold uppercase tracking-[0.3em] text-sm font-sans mb-4 font-medium"
            >
              ${subTitle}
            </motion.p>` : ''}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif text-navy-900 mb-8 leading-tight"
            >
              ${title}
            </motion.h1>
            ${desc ? `<motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-navy-700 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              ${desc}
            </motion.p>` : ''}
          </div>
        </div>
      </section>`;
  });
}

function polishCards(content) {
  // Replace dark card backgrounds or generic white cards with ultra-premium white cards
  content = content.replace(/bg-navy-900\/50/g, 'bg-white');
  content = content.replace(/bg-navy-950/g, 'bg-navy-950'); // Keep deep navy where intentional
  content = content.replace(/bg-white/g, 'bg-white'); // standard
  
  // Refine shadows, borders, rounded corners
  content = content.replace(/rounded-xl/g, 'rounded-sm');
  content = content.replace(/rounded-2xl/g, 'rounded-sm');
  content = content.replace(/rounded-3xl/g, 'rounded-sm');
  
  // Typography refinements for cards
  content = content.replace(/text-gray-300/g, 'text-navy-700');
  content = content.replace(/text-gray-400/g, 'text-navy-600');
  content = content.replace(/border-white\/10/g, 'border-gray-100');
  
  // Card hovers
  content = content.replace(/hover:bg-navy-900/g, 'hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]');
  
  return content;
}

for (const file of innerPages) {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = polishHero(content, file);
  content = polishCards(content);

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Polished ${file}`);
  }
}
