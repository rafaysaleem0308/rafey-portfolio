import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { personal } from '../data/portfolio'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const CONTACT_LINKS = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Github, label: 'GitHub', value: '@rafaysaleem0308', href: personal.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'Rafey Saleem', href: personal.linkedin },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Using mailto as fallback (replace with EmailJS for production)
      const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`)
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" ref={ref} className="relative bg-slate-900/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-slate-100 font-semibold mb-2">Open to opportunities</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm actively seeking Full-Stack Developer, MERN Developer, AI Engineer, or Flutter Developer roles.
                I'm also open to freelance projects and collaborations.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-violet-400" />
                <span className="text-slate-400">{personal.location}</span>
              </div>
            </div>

            <div className="space-y-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="card card-hover flex items-center gap-4 p-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <Icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
                    <p className="text-slate-300 text-sm font-medium group-hover:text-violet-300 transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 lg:p-8 space-y-4">
              <h3 className="text-slate-100 font-semibold text-lg mb-2">Send a message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Rafey Saleem" value={form.name} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              </div>

              <Field label="Subject" name="subject" placeholder="Job opportunity / Project collaboration" value={form.subject} onChange={handleChange} />

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-1.5">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent! Your email client should open.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label, name, type = 'text', placeholder, value, onChange, required,
}: {
  label: string; name: string; type?: string; placeholder: string
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; required?: boolean
}) {
  return (
    <div>
      <label className="block text-slate-400 text-sm font-medium mb-1.5">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
      />
    </div>
  )
}
