import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'
import { education } from '../data/portfolio'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="relative bg-slate-900/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">Where the foundation was built.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-violet-500/30 to-transparent" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
              className="relative pl-20 mb-8 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-violet-600 border-4 border-slate-950 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <GraduationCap size={10} className="text-white" />
              </div>

              <div className="card card-hover p-6 lg:p-8">
                <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                    <p className="text-violet-400 font-semibold mt-0.5">{edu.institution}</p>
                  </div>
                  {edu.id === 'fast-nuces' && (
                    <span className="badge bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      Graduated ✓
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-violet-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-violet-400" />
                    {edu.location}
                  </span>
                </div>

                {edu.status === 'current' && (
                  <div className="mt-4 p-3 bg-violet-500/5 border border-violet-500/15 rounded-xl">
                    <p className="text-sm text-slate-400 flex items-start gap-2">
                      <BookOpen size={14} className="text-violet-400 mt-0.5 flex-shrink-0" />
                      FYP: <span className="text-violet-300 font-medium ml-1">IndieLife</span> —
                      a multi-service Flutter platform with AI-powered expense planning, faculty-supervised.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
