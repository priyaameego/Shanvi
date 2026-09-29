const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(homePath, 'utf8');

// Add imports
if (!content.includes("PremiumSections")) {
  content = content.replace(
    "import { useState } from 'react'",
    "import { useState } from 'react'\nimport { TrustedBy, CompanyStats, WhyChooseUs, HiringProcess, TestimonialCarousel, FinalCTA } from '../components/home/PremiumSections'"
  );
}

// 1. Inject TrustedBy right below Hero
content = content.replace(
  /<Hero \/>\s*\{\/\* Introduction Section \*\/\}/s,
  `<Hero />\n      <TrustedBy />\n      \n      {/* Introduction Section */}`
);

// 2. Inject CompanyStats, WhyChooseUs, HiringProcess, TestimonialCarousel before the Action Boxes
// Wait, there's already a "What our clients say" in the Introduction Section? 
// The user asked to add "Testimonial Carousel". I will just append all these above Action Boxes.
content = content.replace(
  /\{\/\* Action Boxes \*\/\}/s,
  `      <CompanyStats />
      <WhyChooseUs />
      <HiringProcess />
      <TestimonialCarousel />
      {/* Action Boxes */}`
);

// 3. Inject FinalCTA just after the Action Boxes section
// Find the end of Action Boxes section
// <section className="py-32 bg-[#F6F8FB] relative"> ... </section> ... </div>
// Wait, replacing it safely using regex:
content = content.replace(
  /(\{\/\* Action Boxes \*\/\}[\s\S]*?<\/section>\s*)\s*<\/div>\s*\)\s*\}/,
  `$1\n      <FinalCTA />\n    </div>\n  )\n}`
);

fs.writeFileSync(homePath, content);
console.log('Successfully injected Premium Sections into Home.tsx');
