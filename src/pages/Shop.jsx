import { useEffect, useState } from 'react'

export default function Shop(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ fetchProducts() },[])

  const fetchProducts = async ()=>{
    setLoading(true)
    try{
      const res = await fetch(`${baseUrl}/api/products`)
      const data = await res.json()
      setProducts(Array.isArray(data) ? data : [])
    }catch(e){ console.error(e) }
    setLoading(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light">Shop</h1>
      {loading ? (
        <p className="text-neutral-600 mt-6">Loading products...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((p) => (
            <div key={p.title + p.price} className="bg-white rounded-xl overflow-hidden border border-neutral-200">
              <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-72 object-cover"/>
              <div className="p-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-medium">{p.title}</h3>
                  <span className="text-neutral-700">${p.price?.toFixed?.(2) || p.price}</span>
                </div>
                <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{p.description}</p>
                {p.sizes && p.sizes.length > 0 && (
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {p.sizes.map((s)=> (<span key={s} className="px-2 py-1 text-xs border border-neutral-300 rounded">{s}</span>))}
                  </div>
                )}
                <button className="mt-4 w-full bg-neutral-900 text-white py-2 rounded-full hover:bg-neutral-800">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
