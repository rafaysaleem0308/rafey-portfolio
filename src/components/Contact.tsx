import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { personal } from '../data/portfolio'

const CONTACT_LINKS = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Github, label: 'GitHub', value: '@rafaysaleem0308', href: personal.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'Rafey Saleem', href: personal.linkedin },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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

        <div className="max-w-3xl mx-auto">
          {/* Availability card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="card p-6 mb-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>
            <h3 className="text-slate-100 font-semibold text-lg mb-2">Open to new roles</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
              Actively seeking Full-Stack Developer, MERN Developer, AI Engineer, or Flutter Developer roles.
              Also open to freelance projects and collaborations.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm">
              <MapPin size={14} className="text-violet-400" />
              <span className="text-slate-400">{personal.location}</span>
            </div>
          </motion.div>

          {/* Contact links grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
                className="card card-hover flex items-center gap-4 p-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <Icon size={20} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-slate-200 text-sm font-medium group-hover:text-violet-300 transition-colors">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
