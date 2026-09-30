import { Link } from '@tanstack/react-router';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['ALL', 'MANUFACTURING', 'PHARMA / HOSPITALITY', 'FMCG', 'OIL & GAS, POWER', 'INFRASTRUCTURE']

const clients = [
  // MANUFACTURING
  {
    category: 'MANUFACTURING',
    title: 'Auto & Engineering',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    desc: 'Precision engineering & automotive manufacturing solutions'
  },
  {
    category: 'MANUFACTURING',
    title: 'Heavy Industries',
    img: 'https://images.unsplash.com/photo-1504917595222-38d5d4d3cc85?auto=format&fit=crop&w=800&q=80',
    desc: 'Steel, metals & heavy machinery manufacturing'
  },
  {
    category: 'MANUFACTURING',
    title: 'Electronics & Assemblies',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    desc: 'Electronics components and circuit board manufacturing'
  },
  {
    category: 'MANUFACTURING',
    title: 'Textile & Apparel',
    img: 'https://images.unsplash.com/photo-1558024920-b41e1887dc32?auto=format&fit=crop&w=800&q=80',
    desc: 'Garment and textile manufacturing facilities'
  },

  // PHARMA / HOSPITALITY
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Pharmaceutical Research',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9db090b85?auto=format&fit=crop&w=800&q=80',
    desc: 'Drug research, development & clinical trials'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Luxury Hotels & Resorts',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    desc: 'World-class hospitality & hotel management'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Medical Devices',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    desc: 'Surgical instruments and medical device manufacturing'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'F&B & Catering',
    img: 'https://images.unsplash.com/photo-1555244162-803834f87a4d?auto=format&fit=crop&w=800&q=80',
    desc: 'Food & beverage industry and institutional catering'
  },

  // FMCG
  {
    category: 'FMCG',
    title: 'Consumer Goods',
    img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
    desc: 'Packaged consumer goods and personal care'
  },
  {
    category: 'FMCG',
    title: 'Food & Beverages',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    desc: 'Processed food and bottled beverage brands'
  },
  {
    category: 'FMCG',
    title: 'Retail & Distribution',
    img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
    desc: 'Retail chains and last-mile distribution networks'
  },
  {
    category: 'FMCG',
    title: 'FMCG Supply Chain',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8ed74514f4?auto=format&fit=crop&w=800&q=80',
    desc: 'Logistics, warehousing and supply chain management'
  },

  // OIL & GAS, POWER
  {
    category: 'OIL & GAS, POWER',
    title: 'Oil & Gas Exploration',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    desc: 'Upstream oil exploration and drilling operations'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Power Generation',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    desc: 'Thermal, solar and wind energy generation plants'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Refineries',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    desc: 'Petroleum refining and petrochemical facilities'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Renewable Energy',
    img: 'https://images.unsplash.com/photo-1509391366360-5993e36e61f2?auto=format&fit=crop&w=800&q=80',
    desc: 'Solar farms, wind turbines and clean energy projects'
  },

  // INFRASTRUCTURE
  {
    category: 'INFRASTRUCTURE',
    title: 'Civil & Construction',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    desc: 'Roads, bridges and large-scale civil construction'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Real Estate',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    desc: 'Residential, commercial and industrial real estate'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Smart Cities & Urban Dev',
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80',
    desc: 'Smart infrastructure and urban development projects'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Telecom & IT Infra',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    desc: 'Telecom towers, data centers and IT infrastructure'
  },
]

export function Clients() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filtered = activeCategory === 'ALL'
    ? clients
    : clients.filter(c => c.category === activeCategory)

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-28 pb-10 bg-background overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" alt="Our Clientele Background" className="w-full h-full object-cover opacity-25  gpu-layer" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-[13px] font-sans font-medium mb-10"
            >
              <Link to="/" className="text-[#6B7280] hover:text-[#165396] transition-colors duration-300">Home</Link>
              <span className="text-[#165396] text-[15px] leading-none">›</span>
              <span className="text-[#13294B]">Clients</span>
            </motion.nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif text-navy-900 mb-8 leading-tight"
            >
              Our Clientele
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              Strategic partnerships built on trust, transparency, and a shared commitment to success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-left space-y-5">
            <h2 className="text-3xl font-serif text-navy-900">
              Valuable clients to whom we are serving
            </h2>
            <p className="text-charcoal font-sans text-lg leading-relaxed">
              We serve to most of reputed organizations among the industry.
            </p>
            <p className="text-charcoal font-sans leading-relaxed">
              At Shanvi Global Recruitment Services, we take pride in our rich tapestry of clientele, encompassing a diverse array of industry leaders and innovative enterprises. Our client relationships extend beyond mere transactions — they are <strong className="text-navy-900">strategic partnerships</strong> built on trust, transparency, and a shared <strong className="text-navy-900">commitment to success.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-background text-navy-900 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:divide-x md:divide-gray-200 border border-gray-200 rounded-sm overflow-hidden mb-14 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 text-xs uppercase tracking-widest font-sans font-semibold transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-200 flex-shrink-0
                  ${activeCategory === cat
                    ? 'bg-background text-navy-900'
                    : 'bg-background text-charcoal hover:bg-navy-50 hover:text-navy-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((client, i) => (
                <motion.div
                  key={`${client.category}-${client.title}`}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group relative overflow-hidden bg-background shadow-soft cursor-pointer"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={client.img}
                      alt={client.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0 gpu-layer"
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] duration-400 flex flex-col justify-end p-5">
                    <span className="text-accent text-xs uppercase tracking-widest font-sans mb-1">
                      {client.category}
                    </span>
                    <h3 className="text-navy-900 font-serif text-lg mb-1">{client.title}</h3>
                    <p className="text-charcoal font-sans text-xs leading-relaxed">{client.desc}</p>
                  </div>

                  {/* Bottom label (always visible) */}
                  <div className="p-4 bg-background text-navy-900 border-t border-gray-100">
                    <h3 className="font-serif text-navy-900 text-sm">{client.title}</h3>
                    <p className="text-accent text-xs uppercase tracking-wider font-sans mt-0.5">{client.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-background text-left border-t border-accent/10">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-navy-900">Join Our Growing Client Network</h2>
          <p className="text-charcoal font-sans max-w-xl mx-auto mb-8 text-lg">
            As we continue to evolve and expand our horizons, we look forward to adding your esteemed organization to our list of satisfied clients.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-background text-navy-900 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-accent transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-700"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  )
}
