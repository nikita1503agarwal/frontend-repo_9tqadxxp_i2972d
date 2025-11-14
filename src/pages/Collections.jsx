import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Collections(){
  const [collections, setCollections] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ (async()=>{
    try{ const r = await fetch(`${baseUrl}/api/collections`); const d = await r.json(); setCollections(Array.isArray(d)? d:[]) }catch(e){ console.error(e)}
  })() },[])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light">Collections</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {collections.map((c)=> (
          <Link key={c.name} to="/shop" className="group bg-white rounded-xl overflow-hidden border border-neutral-200">
            <img src={c.banner || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop'} alt={c.name} className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform"/>
            <div className="p-4">
              <h3 className="font-medium">{c.name}</h3>
              <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{c.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
