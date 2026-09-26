import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['ALL', 'MANUFACTURING', 'PHARMA / HOSPITALITY', 'FMCG', 'OIL & GAS, POWER', 'INFRASTRUCTURE']

const clients = [
  // MANUFACTURING
  {
    category: 'MANUFACTURING',
    title: 'Auto & Engineering',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    desc: 'Precision engineering & automotive manufacturing solutions'
  },
  {
    category: 'MANUFACTURING',
    title: 'Heavy Industries',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop',
    desc: 'Steel, metals & heavy machinery manufacturing'
  },
  {
    category: 'MANUFACTURING',
    title: 'Electronics & Assemblies',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    desc: 'Electronics components and circuit board manufacturing'
  },
  {
    category: 'MANUFACTURING',
    title: 'Textile & Apparel',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    desc: 'Garment and textile manufacturing facilities'
  },

  // PHARMA / HOSPITALITY
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Pharmaceutical Research',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    desc: 'Drug research, development & clinical trials'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Luxury Hotels & Resorts',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    desc: 'World-class hospitality & hotel management'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'Medical Devices',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop',
    desc: 'Surgical instruments and medical device manufacturing'
  },
  {
    category: 'PHARMA / HOSPITALITY',
    title: 'F&B & Catering',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    desc: 'Food & beverage industry and institutional catering'
  },

  // FMCG
  {
    category: 'FMCG',
    title: 'Consumer Goods',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    desc: 'Packaged consumer goods and personal care'
  },
  {
    category: 'FMCG',
    title: 'Food & Beverages',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    desc: 'Processed food and bottled beverage brands'
  },
  {
    category: 'FMCG',
    title: 'Retail & Distribution',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    desc: 'Retail chains and last-mile distribution networks'
  },
  {
    category: 'FMCG',
    title: 'FMCG Supply Chain',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
    desc: 'Logistics, warehousing and supply chain management'
  },

  // OIL & GAS, POWER
  {
    category: 'OIL & GAS, POWER',
    title: 'Oil & Gas Exploration',
    img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=800&auto=format&fit=crop',
    desc: 'Upstream oil exploration and drilling operations'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Power Generation',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    desc: 'Thermal, solar and wind energy generation plants'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Refineries',
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop',
    desc: 'Petroleum refining and petrochemical facilities'
  },
  {
    category: 'OIL & GAS, POWER',
    title: 'Renewable Energy',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    desc: 'Solar farms, wind turbines and clean energy projects'
  },

  // INFRASTRUCTURE
  {
    category: 'INFRASTRUCTURE',
    title: 'Civil & Construction',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    desc: 'Roads, bridges and large-scale civil construction'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Real Estate',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    desc: 'Residential, commercial and industrial real estate'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Smart Cities & Urban Dev',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop',
    desc: 'Smart infrastructure and urban development projects'
  },
  {
    category: 'INFRASTRUCTURE',
    title: 'Telecom & IT Infra',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
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
      <section className="pt-32 pb-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-900/80 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-sans mb-4"
          >
            Trusted by Industry Leaders
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Our Clientele
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto font-sans text-lg"
          >
            Strategic partnerships built on trust, transparency, and a shared commitment to success.
          </motion.p>
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:divide-x md:divide-gray-200 border border-gray-200 rounded-sm overflow-hidden mb-14 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-200 flex-shrink-0
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                    <span className="text-gold text-xs uppercase tracking-widest font-sans mb-1">
                      {client.category}
                    </span>
                    <h3 className="text-white font-serif text-lg mb-1">{client.title}</h3>
                    <p className="text-gray-300 font-sans text-xs leading-relaxed">{client.desc}</p>
                  </div>

                  {/* Bottom label (always visible) */}
                  <div className="p-4 bg-white border-t border-gray-100">
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
            className="inline-flex items-center px-10 py-4 bg-navy-900 text-white font-sans font-semibold uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  )
}
