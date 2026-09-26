import { motion } from 'framer-motion'
import { Eye, Target, Users, Award, Shield, Lightbulb } from 'lucide-react'

export function About() {
  return (
    <div className="w-full">
      <section className="pt-32 pb-20 bg-navy-950 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto font-sans text-lg"
          >
            A dynamic and innovative force in the realm of talent acquisition.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-navy-700 leading-relaxed text-lg font-sans">
              Welcome to Shanvi Global Recruitment Services, a dynamic and innovative force in the realm of talent acquisition. Established in 2005, we have evolved into a trusted partner, adept at connecting exceptional talent with unparalleled opportunities. Our journey commenced as a local recruitment service provider, and through steadfast commitment and unwavering dedication, we have expanded our footprint to serve organizations nationwide, reaching across borders to the USA, Middle East, and LATAM countries.
            </p>
            <p className="text-navy-700 leading-relaxed text-lg font-sans">
              At Shanvi Global, we embody a commitment to excellence that goes beyond traditional recruitment. Our focus is on bridging the gap between top-tier professionals and organizations aspiring for success. We take pride in our rapid growth, a testament to our ability to understand the evolving dynamics of the talent landscape and provide tailored solutions.
            </p>
            <p className="text-navy-700 leading-relaxed text-lg font-sans">
              As a trusted partner, we stand at the forefront of connecting organizations with the right talent and empowering individuals to shape successful careers. Our dedication to innovation, coupled with a global perspective, sets us apart in the competitive realm of recruitment services. Join us on a journey where exceptional talent meets outstanding opportunities, and let Shanvi Global Recruitment Services be your gateway to success.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif text-navy-900 mb-12 text-center">Our Founder</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-navy-700 leading-relaxed font-sans">
                  Meet the driving force behind Shanvi – Ms. Anupama, a stalwart in the recruitment industry, boasting over two decades of invaluable experience. Prior to the inception of Shanvi in 2003, she contributed her expertise to distinguished entities such as Life Skills, Global Staffing Services, and Areva T&amp;D.
                </p>
                <p className="text-navy-700 leading-relaxed font-sans">
                  Ms. Anupama's profound knowledge spans a spectrum of industries, including but not limited to Automobiles, Hospitality, Engineering, FMCG, Oil &amp; Gas, Power, and Infrastructures. This multifaceted experience forms the bedrock of Shanvi's strategic and comprehensive approach to talent acquisition.
                </p>
                <p className="text-navy-700 leading-relaxed font-sans">
                  Her academic prowess is evident through an MBA from IMT Ghaziabad, underscoring not only her practical expertise but also her commitment to continuous learning. Ms. Anupama has further honed her skills through Facilitation training conducted by Aims Insight and ISTD, enhancing her ability to navigate the dynamic landscape of recruitment with finesse.
                </p>
                <p className="text-navy-700 leading-relaxed font-sans">
                  At Shanvi, Ms. Anupama's vision and leadership drive our commitment to excellence, ensuring that we not only meet but exceed the expectations of our clients. With a blend of experience, education, and a passion for delivering exceptional recruitment solutions, Ms. Anupama epitomizes the ethos of Shanvi as a trailblazer in the world of talent acquisition.
                </p>
              </div>
              <div className="relative aspect-[3/4] bg-navy-900 shadow-soft">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Ms. Anupama - Founder" 
                  className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gold/10" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy-950 to-transparent">
                  <h3 className="text-2xl font-serif text-white mb-1">Ms. Anupama</h3>
                  <p className="text-gold font-sans uppercase tracking-widest text-sm">Founder &amp; Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy-900/50 p-12 border border-white/10 relative overflow-hidden"
            >
              <Eye className="absolute top-12 right-12 text-white/5" size={120} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-8">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6">Our Vision</h3>
                <p className="text-gray-300 font-sans leading-relaxed text-lg">
                  To be the foremost catalyst in shaping successful careers and fostering organizational growth by delivering unparalleled staffing solutions globally. We envision a future where every talent finds its perfect match, propelling businesses to new heights of success.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-navy-900/50 p-12 border border-white/10 relative overflow-hidden"
            >
              <Target className="absolute top-12 right-12 text-white/5" size={120} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-8">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6">Mission Statement</h3>
                <p className="text-gray-300 font-sans leading-relaxed text-lg">
                  Our mission at Shanvi Global Staffing Services is to create lasting value for our clients and candidates. Through reliable, flexible, and personalized staffing solutions, we aim to exceed expectations, promote organizational excellence, and contribute to the overall advancement of the industries we serve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-navy-900 mb-16 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Collaboration", desc: "Building strong, collaborative partnerships with clients, candidates, and our team." },
                { icon: Award, title: "Excellence", desc: "Striving for exceptional quality in all our services to consistently surpass expectations." },
                { icon: Shield, title: "Integrity", desc: "Upholding the highest standards of honesty and transparency in every interaction." },
                { icon: Lightbulb, title: "Innovation", desc: "Embracing creativity and leveraging cutting-edge solutions to stay ahead in a dynamic market." }
              ].map((value, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 text-center shadow-soft border border-gray-100 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-50 text-navy-900 mb-6 mx-auto">
                    <value.icon size={36} />
                  </div>
                  <h3 className="text-xl font-serif text-navy-900 mb-4">{value.title}</h3>
                  <p className="text-navy-700 font-sans leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Merged Legacy + PDF) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-navy-900 mb-6">Why Choose Shanvi Global?</h2>
            <p className="text-navy-700 font-sans text-lg leading-relaxed">
              We have a well-demonstrated track record of delivering high-value, low-cost outsourcing process solutions that can highly benefit your business. The specialty of our services is that the solutions delivered by us convert into long term strategic advantages for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: "Expertise", desc: "Our team comprises industry specialists with a profound understanding of market trends and client needs." },
              { title: "Personalized Service", desc: "We tailor our services to meet the unique requirements of each client, ensuring a customized approach." },
              { title: "Global Reach", desc: "With a vast network and international partnerships, we source talent locally & globally to meet diverse business needs." },
              { title: "Technology-Driven", desc: "Leveraging cutting-edge technology, our processes are streamlined for efficient and effective staffing solutions." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-ivory p-8 border border-gray-100 hover:border-gold/50 transition-colors"
              >
                <h3 className="text-xl font-serif text-navy-900 mb-4">{item.title}</h3>
                <p className="text-navy-700 font-sans leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-serif text-navy-900 mb-8 border-b border-gold/30 pb-4">Our USPs</h3>
              <div className="space-y-6">
                {[
                  { title: "1. Comprehensive Industry Insight", desc: "With a profound understanding of the Recruitment Business, Shanvi navigates the intricacies of diverse industries and positions, ensuring a holistic approach to talent acquisition." },
                  { title: "2. Versatility Across Industries", desc: "Our exposure to a spectrum of industries and positions equips us to tailor recruitment solutions to varying organizational needs, from entry-level to executive positions." },
                  { title: "3. Organic Databank", desc: "Powered by an organic databank, Shanvi possesses a wealth of talent resources, facilitating swift and targeted placements." },
                  { title: "4. Strategic Position Selection", desc: "We adopt a selective approach in choosing positions to work on, allowing us to channel our expertise and resources effectively, delivering the highest quality service." }
                ].map((usp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-navy-50 p-6 rounded-sm border-l-4 border-gold"
                  >
                    <h4 className="font-serif text-navy-900 text-lg mb-2">{usp.title}</h4>
                    <p className="text-navy-700 font-sans text-sm">{usp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-serif text-navy-900 mb-8 border-b border-gold/30 pb-4">Commitment to Excellence</h3>
              <div className="space-y-6 mb-12">
                {[
                  { title: "5. Professional Commitment", desc: "We adhere to a professional approach, ensuring unwavering commitment to our clients and their unique requirements." },
                  { title: "6. Availability on Demand", desc: "We understand the importance of being available when needed. At Shanvi, our team is ready to respond promptly, ensuring seamless collaboration with our clients." },
                  { title: "7. Responsive Communication", desc: "Our commitment to excellent service extends to prompt responses to queries, fostering transparent and efficient communication throughout the recruitment process." }
                ].map((usp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-navy-50 p-6 rounded-sm border-l-4 border-gold"
                  >
                    <h4 className="font-serif text-navy-900 text-lg mb-2">{usp.title}</h4>
                    <p className="text-navy-700 font-sans text-sm">{usp.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-navy-950 p-8 text-white shadow-soft">
                <h4 className="font-serif text-xl mb-4 text-gold">The Shanvi Advantage</h4>
                <ul className="space-y-3 font-sans text-sm text-gray-300">
                  <li>✦ 10+ Years Experience in Recruitment</li>
                  <li>✦ 4,00,000+ Active Candidate Database from our region</li>
                  <li>✦ Effective, Efficient &amp; Result Oriented Recruitment Process</li>
                  <li>✦ Ethical, Responsible &amp; Thoughtful Approach</li>
                  <li>✦ Provide Key Support to the Line Manager on Recruitment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto bg-ivory p-8 border border-gold/20">
             <p className="text-navy-900 font-serif text-xl italic">
               Choose Shanvi for a partner dedicated to understanding your specific needs, providing tailored solutions, and delivering exceptional results in the dynamic landscape of talent acquisition.
             </p>
          </div>

          {/* Our Team */}
            <div className="mt-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-serif text-navy-900">Our Team</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: "Johne Doe", role: "Creative", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
                  { name: "Jennifer", role: "Programmer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
                  { name: "Christean", role: "CEO", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" },
                  { name: "Kerinele rase", role: "Manager", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" }
                ].map((member, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="overflow-hidden mb-6 aspect-[4/5]">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                    </div>
                    <h4 className="text-xl font-serif text-navy-900 mb-1">{member.name}</h4>
                    <span className="text-sm font-sans uppercase tracking-widest text-gold">{member.role}</span>
                  </motion.div>
                ))}
              </div>
            </div>

        </div>
      </section>
    </div>
  )
}
