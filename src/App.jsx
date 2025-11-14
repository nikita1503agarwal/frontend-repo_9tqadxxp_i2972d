import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Collections from './pages/Collections'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Shop from './pages/Shop'

function App() {
  return (
    <Routes>
      <Route element={<Layout cartCount={0} /> }>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutLazy />} />
        <Route path="services" element={<Services />} />
        <Route path="collections" element={<Collections />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

const AboutLazy = () => {
  const Comp = require('./pages/About').default
  return <Comp />
}

export default App
