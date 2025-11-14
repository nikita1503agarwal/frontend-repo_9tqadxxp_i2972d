import { useState } from 'react'

export default function Services(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', service_type:'Tailoring', preferred_date:'', preferred_time:'', notes:'' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('Submitting...')
    try{
      const res = await fetch(`${baseUrl}/api/bookings`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      const data = await res.json()
      if(res.ok){ setStatus('✅ Booking received. We will contact you shortly.') } else { setStatus(`❌ ${data.detail || 'Something went wrong'}`) }
    }catch(err){ setStatus(`❌ ${err.message}`)}
  }

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-light">Tailoring & Custom Design</h1>
        <p className="text-neutral-600 mt-2 max-w-2xl">Experience bespoke craftsmanship with a simple, guided process — from consultation to final fitting.</p>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <div>
            <ol className="space-y-4">
              {[
                { step:'01', title:'Consultation', desc:'Discuss your vision, fabrics, and timeline with our stylist.'},
                { step:'02', title:'Measurement', desc:'Precise body measurements for a flawless, comfortable fit.'},
                { step:'03', title:'Fittings', desc:'Prototype fitting and refinement for perfect drape and movement.'},
                { step:'04', title:'Final Delivery', desc:'Your bespoke garment, finished to perfection.'},
              ].map((s)=> (
                <li key={s.step} className="flex gap-4">
                  <span className="text-neutral-400 w-10">{s.step}</span>
                  <div>
                    <div className="font-medium">{s.title}</div>
                    <p className="text-sm text-neutral-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 bg-[#faf8f5] p-6 rounded-xl border border-neutral-200">
              <h3 className="font-medium">Measurement Guide</h3>
              <p className="text-sm text-neutral-600 mt-2">Use a soft tape to measure bust, waist, hips, shoulder, sleeve length, and dress length. Keep tape parallel to the floor and comfortable — not tight.</p>
            </div>
          </div>
          <form onSubmit={submit} className="bg-[#faf8f5] p-6 rounded-xl border border-neutral-200">
            <h3 className="font-medium">Book a Tailoring Appointment</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <input required placeholder="Name" className="px-3 py-2 rounded border border-neutral-300 bg-white" value={form.name} onChange={(e)=> setForm({ ...form, name:e.target.value })}/>
              <input type="email" required placeholder="Email" className="px-3 py-2 rounded border border-neutral-300 bg-white" value={form.email} onChange={(e)=> setForm({ ...form, email:e.target.value })}/>
              <input required placeholder="Phone" className="px-3 py-2 rounded border border-neutral-300 bg-white" value={form.phone} onChange={(e)=> setForm({ ...form, phone:e.target.value })}/>
              <select className="px-3 py-2 rounded border border-neutral-300 bg-white" value={form.service_type} onChange={(e)=> setForm({ ...form, service_type:e.target.value })}>
                {['Tailoring','Custom Design','Alterations'].map((s)=> <option key={s}>{s}</option>)}
              </select>
              <input type="date" className="px-3 py-2 rounded border border-neutral-300 bg-white" value={form.preferred_date} onChange={(e)=> setForm({ ...form, preferred_date:e.target.value })}/>
              <input type="time" className="px-3 py-2 rounded border border-neutral-300 bg-white" value={form.preferred_time} onChange={(e)=> setForm({ ...form, preferred_time:e.target.value })}/>
              <textarea placeholder="Notes (optional)" className="sm:col-span-2 px-3 py-2 rounded border border-neutral-300 bg-white" rows={4} value={form.notes} onChange={(e)=> setForm({ ...form, notes:e.target.value })}/>
            </div>
            <button className="mt-4 bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-neutral-800">Book Now</button>
            {status && <p className="text-sm mt-3 text-neutral-700">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  )
}
