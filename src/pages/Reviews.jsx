import { useEffect, useState } from 'react'

export default function Reviews(){
  const [reviews, setReviews] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ (async()=>{
    try{ const r = await fetch(`${baseUrl}/api/reviews`); const d = await r.json(); setReviews(Array.isArray(d)? d:[]) }catch(e){ console.error(e)}
  })() },[])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light">Reviews</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {reviews.map((r, i)=> (
          <blockquote key={i} className="p-6 bg-white rounded-xl border border-neutral-200">
            <div className="text-neutral-700">“{r.comment}”</div>
            <div className="text-xs text-neutral-500 mt-3">— {r.name} · {r.rating}/5</div>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
