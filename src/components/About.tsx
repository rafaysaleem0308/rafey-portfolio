import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Code2, Brain, Rocket, Users } from 'lucide-react'
import { personal } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const highlights = [
  { icon: Code2, label: 'Full-Stack Dev', desc: 'MERN stack production apps' },
  { icon: Brain, label: 'AI/ML Engineer', desc: 'PyTorch, spaCy, scikit-learn' },
  { icon: Rocket, label: 'Mobile Dev', desc: 'Cross-platform Flutter apps' },
  { icon: Users, label: 'Team Leader', desc: 'President of E-Gaming Society' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative bg-slate-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p custom={0} variants={fadeUp} className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">
            About Me
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="section-title">
            Turning ideas into{' '}
            <span className="gradient-text">real products</span>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="section-subtitle max-w-2xl mx-auto">
            {personal.summary}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — avatar + info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 p-1">
                <img
                  src={personal.avatar}
                  alt="Rafey Saleem"
                  className="w-full h-full object-cover rounded-[22px] bg-slate-900"
                  onError={e => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                    el.parentElement!.innerHTML = `<div class="w-full h-full rounded-[22px] bg-slate-800 flex items-center justify-center text-6xl font-bold text-violet-400">RS</div>`
                  }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-violet-600 rounded-2xl px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                FYP 🎓
              </div>
            </div>

            <div className="space-y-3 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-100">{personal.name}</h3>
              <p className="text-violet-400 font-medium">{personal.title}</p>
              <div className="flex items-center gap-2 text-slate-400 text-sm justify-center lg:justify-start">
                <MapPin size={14} className="text-violet-400" />
                {personal.location}
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                {['MERN Stack', 'Flutter', 'AI/ML', 'CS Graduate'].map(tag => (
                  <span key={tag} className="badge bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — highlights + stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="card card-hover p-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-3 group-hover:bg-violet-500/20 transition-colors">
                    <Icon size={20} className="text-violet-400" />
                  </div>
                  <p className="font-semibold text-slate-100 text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="card p-6"
            >
              <div className="grid grid-cols-4 gap-4">
                {personal.stats.map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-extrabold gradient-text">{value}</p>
                    <p className="text-slate-500 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Journey text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="card p-6 space-y-3 text-slate-400 text-sm leading-relaxed"
            >
              <p>
                I'm a Computer Science graduate from <span className="text-violet-400 font-medium">FAST-NUCES</span>, passionate
                about building software that solves real problems. My journey started with C++ and DSA, evolved through
                the MERN stack and Flutter, and now extends into AI/ML with PyTorch and NLP.
              </p>
              <p>
                My <span className="text-slate-100 font-medium">FYP — IndieLife</span> — was a multi-service
                Flutter app with an AI-powered budget planner, backed by a Node.js API and a Python/Flask microservice. I've
                also interned at <span className="text-violet-400 font-medium">Nextbridge Ltd.</span> contributing to 3+
                production modules.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
