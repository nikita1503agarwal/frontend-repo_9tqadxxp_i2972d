import { useEffect, useState } from 'react'

export default function Gallery(){
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ (async()=>{
    try{ const r = await fetch(`${baseUrl}/api/gallery`); const d = await r.json(); setItems(Array.isArray(d)? d:[]) }catch(e){ console.error(e) }
  })() },[])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
        {items.map((g,i)=> (
          <div key={i} className="aspect-square overflow-hidden rounded-lg">
            <img src={g.image_url} alt={g.caption || 'Gallery'} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
          </div>
        ))}
      </div>
    </div>
  )
}
