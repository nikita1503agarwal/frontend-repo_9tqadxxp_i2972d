import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  const heroImage = 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop'
  const secondaryImage = 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1600&auto=format&fit=crop'

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img src={heroImage} alt="EFMODE Hero" className="h-[80vh] w-full object-cover"/>
        <div className="absolute inset-0 bg-black/30"/>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="max-w-xl text-white">
              <p className="tracking-[0.3em] text-xs mb-3">EFMODE</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">Modern Modest Fashion & Bespoke Tailoring</h1>
              <p className="mt-4 text-neutral-100">Discover ready-to-wear essentials and made-to-measure pieces tailored to your silhouette.</p>
              <div className="mt-6 flex gap-3">
                <Link to="/shop" className="bg-white text-neutral-900 px-5 py-2 rounded-full hover:bg-neutral-100">Shop Now</Link>
                <Link to="/services" className="bg-transparent border border-white px-5 py-2 rounded-full hover:bg-white/10">Tailoring Service</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium">Why Choose EFMODE</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Made-to-Measure', desc: 'Precision tailoring crafted to your measurements and preferences.'},
              { title: 'Quality Craftsmanship', desc: 'Premium fabrics and meticulous construction for long-lasting wear.'},
              { title: 'Customer Satisfaction', desc: 'Hundreds of clients trusting our fit, finish, and service.'},
            ].map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-xl border border-neutral-200">
                <h3 className="font-medium">{f.title}</h3>
                <p className="text-sm text-neutral-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured collection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <img src={secondaryImage} alt="Collection" className="rounded-xl object-cover w-full h-[420px]"/>
          <div>
            <h2 className="text-3xl font-light">Latest Collection</h2>
            <p className="text-neutral-600 mt-3">A curated selection of modest silhouettes, refined textures, and contemporary lines — designed to move with you.</p>
            <Link to="/collections" className="inline-block mt-6 underline underline-offset-4">Explore Collections</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {["The tailoring was impeccable.", "Beautiful and comfortable modest pieces.", "Seamless booking and great service!"].map((t, i)=> (
              <blockquote key={i} className="p-6 bg-[#faf8f5] rounded-xl border border-neutral-200 text-neutral-700">“{t}”<div className="text-xs text-neutral-500 mt-3">— Client {i+1}</div></blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
