import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X, ShoppingBag, Phone, Instagram, MapPin, Clock } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/collections', label: 'Collections' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
  { to: '/shop', label: 'Shop' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ cartCount }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    const titles = {
      '/': 'EFMODE — Modest Fashion, Custom Tailoring, Ready-to-Wear',
      '/about': 'About EFMODE — Premium Modest Fashion',
      '/services': 'Tailoring & Custom Design — EFMODE',
      '/collections': 'Collections — EFMODE',
      '/reviews': 'Client Reviews — EFMODE',
      '/gallery': 'Gallery — EFMODE',
      '/contact': 'Contact EFMODE — Boutique & Tailoring',
      '/shop': 'Shop — EFMODE',
    }
    document.title = titles[location.pathname] || 'EFMODE'

    const description = document.querySelector('meta[name="description"]')
    if (!description) {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'EFMODE is a premium fashion brand specializing in modest wear, custom tailoring, and ready-to-wear collections.'
      document.head.appendChild(meta)
    } else {
      description.setAttribute('content', 'EFMODE is a premium fashion brand specializing in modest wear, custom tailoring, and ready-to-wear collections.')
    }
  }, [location])

  return (
    <div className="min-h-screen bg-[#faf8f5] text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-[0.2em] text-sm sm:text-base">EFMODE</Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => classNames(
                  'text-sm hover:text-neutral-700 transition-colors',
                  isActive ? 'text-neutral-900 font-medium' : 'text-neutral-600'
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/shop" className="relative p-2 rounded-full hover:bg-neutral-100">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="px-4 py-3 flex flex-col">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="py-2 text-neutral-700" onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold tracking-[0.2em]">EFMODE</h3>
            <p className="text-sm text-neutral-600 mt-3">Premium modest fashion, made-to-measure tailoring, and ready-to-wear essentials crafted with elegance and precision.</p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://instagram.com/efmode_store" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200"><Instagram className="h-4 w-4" /></a>
              <a href="tel:+123456789" className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200"><Phone className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Visit Us</h4>
            <p className="text-sm text-neutral-600 flex items-center gap-2"><MapPin className="h-4 w-4"/> 123 Boutique Lane, City</p>
            <p className="text-sm text-neutral-600 flex items-center gap-2 mt-2"><Clock className="h-4 w-4"/> Mon–Sat: 10am – 7pm</p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <div className="flex flex-col text-sm text-neutral-700 gap-2">
              {navItems.map((n)=> (
                <Link key={n.to} to={n.to} className="hover:underline">{n.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-xs text-neutral-500 text-center py-4">© {new Date().getFullYear()} EFMODE. All rights reserved.</div>
      </footer>

      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
        <Phone className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  )
}
