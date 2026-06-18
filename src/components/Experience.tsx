import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { experiences } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="relative bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Work History</p>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">Real-world engineering experience shipping production features.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-violet-500/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="relative pl-20 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-violet-600 border-4 border-slate-950 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Briefcase size={10} className="text-white" />
              </div>

              <div className="card card-hover p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                    <p className="text-violet-400 font-semibold mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                      <Calendar size={13} className="text-violet-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                      <MapPin size={13} className="text-violet-400" />
                      {exp.location}
                    </span>
                    <span className="badge bg-violet-500/10 text-violet-300 border border-violet-500/20 w-fit">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-violet-400 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="badge bg-slate-700/60 text-slate-300 border border-slate-600/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative pl-20"
          >
            <div className="absolute left-5 top-5 w-6 h-6 rounded-full border-2 border-dashed border-violet-500/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-violet-500/40 animate-pulse" />
            </div>
            <div className="card p-5 border-dashed border-slate-700/30">
              <p className="text-slate-500 text-sm">
                🚀 <span className="text-slate-400 font-medium">Next chapter loading...</span> — Open to Full-Stack / AI
                Engineer roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
