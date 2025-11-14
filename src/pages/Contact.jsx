import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('Sending...')
    try{
      const res = await fetch(`${baseUrl}/api/contact`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if(res.ok) setStatus('✅ Message sent. We will get back to you shortly.')
      else setStatus(`❌ ${data.detail || 'Something went wrong'}`)
    }catch(err){ setStatus(`❌ ${err.message}`) }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light">Contact Us</h1>
      <p className="text-neutral-600 mt-2">Have a question or a custom request? We’d love to hear from you.</p>

      <form onSubmit={submit} className="bg-white p-6 rounded-xl border border-neutral-200 mt-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="Name" className="px-3 py-2 rounded border border-neutral-300" value={form.name} onChange={(e)=> setForm({ ...form, name:e.target.value })}/>
          <input required type="email" placeholder="Email" className="px-3 py-2 rounded border border-neutral-300" value={form.email} onChange={(e)=> setForm({ ...form, email:e.target.value })}/>
          <input placeholder="Phone" className="px-3 py-2 rounded border border-neutral-300" value={form.phone} onChange={(e)=> setForm({ ...form, phone:e.target.value })}/>
          <input placeholder="Subject" className="px-3 py-2 rounded border border-neutral-300" value={form.subject} onChange={(e)=> setForm({ ...form, subject:e.target.value })}/>
          <textarea required rows={4} placeholder="Message" className="sm:col-span-2 px-3 py-2 rounded border border-neutral-300" value={form.message} onChange={(e)=> setForm({ ...form, message:e.target.value })}/>
        </div>
        <button className="mt-4 bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-neutral-800">Send Message</button>
        {status && <p className="text-sm mt-3">{status}</p>}
      </form>
    </div>
  )
}
