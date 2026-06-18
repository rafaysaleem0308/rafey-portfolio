import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Calendar, Gamepad2 } from 'lucide-react'
import { leadershipRoles } from '../data/portfolio'

const ROLE_ICONS: Record<string, string> = {
  president: '👑',
  'gen-sec': '📋',
  'fifa-head': '⚽',
}

const ROLE_COLORS: Record<string, string> = {
  president: 'from-yellow-500/20 to-orange-500/10 border-yellow-500/20',
  'gen-sec': 'from-violet-500/20 to-blue-500/10 border-violet-500/20',
  'fifa-head': 'from-green-500/20 to-cyan-500/10 border-green-500/20',
}

export default function Leadership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leadership" ref={ref} className="relative bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Campus Impact</p>
          <h2 className="section-title">
            Leadership &amp; <span className="gradient-text">Involvement</span>
          </h2>
          <p className="section-subtitle">Building communities beyond the codebase.</p>
        </motion.div>

        {/* Society banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="card p-6 mb-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0 text-3xl shadow-lg shadow-violet-500/20">
            <Gamepad2 size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">FAST E-Gaming Society</h3>
            <p className="text-violet-400 text-sm font-medium">FAST-NUCES Chiniot-Faisalabad Campus</p>
            <p className="text-slate-400 text-sm mt-1">
              University's official e-gaming society — organizing inter-university tournaments, FIFA competitions,
              and growing a campus gaming community.
            </p>
          </div>
        </motion.div>

        {/* Roles */}
        <div className="grid sm:grid-cols-3 gap-4">
          {leadershipRoles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className={`card bg-gradient-to-br ${ROLE_COLORS[role.id]} border p-5 group hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="text-4xl mb-3">{ROLE_ICONS[role.id]}</div>
              <h3 className="text-slate-100 font-bold text-lg">{role.role}</h3>
              <p className="text-slate-400 text-sm mt-1 flex items-center gap-1.5">
                <Calendar size={12} className="text-violet-400" />
                {role.period}
              </p>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
