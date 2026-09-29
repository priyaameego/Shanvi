import { Link } from '@tanstack/react-router';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['ALL', 'MANUFACTURING', 'PHARMA / HOSPITALITY', 'FMCG', 'OIL & GAS, POWER', 'INFRASTRUCTURE']

const clients = [
  // MANUFACTURING
  {
    category: 'MANUFACTURING',
    title: 'Auto & Engineering',
    img: 'https://images.unsplash.com/photo-1596495577943-421112ee56c2?q=80&w=800&auto=format&fit=crop',
    desc: 'Precision engineering & automotive manufacturing solutions'
  },
  {
    category: 'MANUFACTURING',
    title: 'Heavy Industries',
    img: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=800&auto=format&fit=crop',
    desc: 'Steel, metals & heavy machinery manufacturing'
  },
  {
    category: 'MANUFACTURING',
    title: 'Electronics & Assemblies',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
    desc: 'Electronics components and circuit board manufacturing'
  },
  {
    category: 'MANUFACTURING',
    title: 'Textile & Apparel',
    img: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop',
    desc: 'Garment and textile manufacturing facilities'
  },

  // PHARMA / HOSPITALITY
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Pharmaceutical Research',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127d09e?q=80&w=800&auto=format&fit=crop',
    desc: 'Drug research, development & clinical trials'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Luxury Hotels & Resorts',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop',
    desc: 'World-class hospitality & hotel management'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Medical Devices',
    img: 'https://images.unsplash.com/photo-1621252179027-9d784a6018bf?q=80&w=800&auto=format&fit=crop',
    desc: 'Surgical instruments and medical device manufacturing'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'F&B & Catering',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    desc: 'Food & beverage industry and institutional catering'
  },

  // FMCG
  {
    category: 'FMCG',
    title: 'Consumer Goods',
    img: 'https://images.unsplash.com/photo-1573167440381-8b0101b0b7ab?q=80&w=800&auto=format&fit=crop',
    desc: 'Packaged consumer goods and personal care'
  },
  {
    category: 'FMCG',
    title: 'Food & Beverages',
    img: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=800&auto=format&fit=crop',
    desc: 'Processed food and bottled beverage brands'
  },
  {
    category: 'FMCG',
    title: 'Retail & Distribution',
    img: 'https://images.unsplash.com/photo-1604732646637-293699c2d159?q=80&w=800&auto=format&fit=crop',
    desc: 'Retail chains and last-mile distribution networks'
  },
  {
    category: 'FMCG',
    title: 'FMCG Supply Chain',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    desc: 'Logistics, warehousing and supply chain management'
  },

  // OIL & GAS, POWER
  {
    category: 'OIL & GAS, POWER',
    title: 'Oil & Gas Exploration',
    img: 'https://images.unsplash.com/photo-1573167582101-7667ffeb8a5d?q=80&w=800&auto=format&fit=crop',
    desc: 'Upstream oil exploration and drilling operations'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Power Generation',
    img: 'https://images.unsplash.com/photo-1542314831-c53cd3b8534f?q=80&w=800&auto=format&fit=crop',
    desc: 'Thermal, solar and wind energy generation plants'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Refineries',
    img: 'https://images.unsplash.com/photo-1587840171670-8b850147754e?q=80&w=800&auto=format&fit=crop',
    desc: 'Petroleum refining and petrochemical facilities'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Renewable Energy',
    img: 'https://images.unsplash.com/photo-1596495577943-421112ee56c2?q=80&w=800&auto=format&fit=crop',
    desc: 'Solar farms, wind turbines and clean energy projects'
  },

  // INFRASTRUCTURE
  {
    category: 'INFRASTRUCTURE',
    title: 'Civil & Construction',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    desc: 'Roads, bridges and large-scale civil construction'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Real Estate',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    desc: 'Residential, commercial and industrial real estate'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Smart Cities & Urban Dev',
    img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop',
    desc: 'Smart infrastructure and urban development projects'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Telecom & IT Infra',
    img: 'https://images.unsplash.com/photo-1620803450974-949392e21de3?q=80&w=800&auto=format&fit=crop',
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
      <section className="relative pt-40 pb-28 bg-navy-950 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80" alt="Our Clientele Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity gpu-layer" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase mb-6"
            >
              <Link to="/" className="text-gray-400 hover:text-white transition-colors ease-[cubic-bezier(0.22,1,0.36,1)]">Home</Link>
              <span className="text-gold/50 mx-1">•</span>
              <span className="text-gold font-semibold tracking-[0.25em]">Clients</span>
            </motion.nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
            >
              Our Clientele
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-300 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              Strategic partnerships built on trust, transparency, and a shared commitment to success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h2 className="text-3xl font-serif text-navy-900">
              Valuable clients to whom we are serving
            </h2>
            <p className="text-navy-700 font-sans text-lg leading-relaxed">
              We serve to most of reputed organizations among the industry.
            </p>
            <p className="text-navy-700 font-sans leading-relaxed">
              At Shanvi Global Recruitment Services, we take pride in our rich tapestry of clientele, encompassing a diverse array of industry leaders and innovative enterprises. Our client relationships extend beyond mere transactions — they are <strong className="text-navy-900">strategic partnerships</strong> built on trust, transparency, and a shared <strong className="text-navy-900">commitment to success.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-white text-navy-900 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:divide-x md:divide-gray-200 border border-gray-200 rounded-sm overflow-hidden mb-14 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 text-xs uppercase tracking-widest font-sans font-semibold transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-200 flex-shrink-0
                  ${activeCategory === cat
                    ? 'bg-navy-950 text-white'
                    : 'bg-white text-navy-700 hover:bg-navy-50 hover:text-navy-900'
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
                  className="group relative overflow-hidden bg-navy-950 shadow-soft cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] duration-400 flex flex-col justify-end p-5">
                    <span className="text-gold text-xs uppercase tracking-widest font-sans mb-1">
                      {client.category}
                    </span>
                    <h3 className="text-white font-serif text-lg mb-1">{client.title}</h3>
                    <p className="text-navy-700 font-sans text-xs leading-relaxed">{client.desc}</p>
                  </div>

                  {/* Bottom label (always visible) */}
                  <div className="p-4 bg-white text-navy-900 border-t border-gray-100">
                    <h3 className="font-serif text-navy-900 text-sm">{client.title}</h3>
                    <p className="text-gold text-xs uppercase tracking-wider font-sans mt-0.5">{client.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-ivory text-center border-t border-gold/10">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-navy-900">Join Our Growing Client Network</h2>
          <p className="text-navy-700 font-sans max-w-xl mx-auto mb-8 text-lg">
            As we continue to evolve and expand our horizons, we look forward to adding your esteemed organization to our list of satisfied clients.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-navy-900 text-white font-sans font-semibold uppercase tracking-widest text-sm hover:bg-gold transition-colors ease-[cubic-bezier(0.22,1,0.36,1)] duration-700"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  )
}
