import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Star, GitFork, Book, Activity } from 'lucide-react'
import { personal, projects } from '../data/portfolio'

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Dart: '#00b4ab',
  'Jupyter Notebook': '#da5b0b',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  Java: '#b07219',
  TypeScript: '#3178c6',
}

const LANG_COUNTS: Record<string, number> = {
  JavaScript: 3,
  Python: 6,
  Dart: 2,
  'Jupyter Notebook': 4,
  HTML: 3,
  'C++': 1,
  Java: 1,
}

export default function GitHubStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [user, setUser] = useState<GitHubUser | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/rafaysaleem0308')
      .then(r => r.json())
      .then(setUser)
      .catch(() => {})
  }, [])

  const totalLangs = Object.values(LANG_COUNTS).reduce((a, b) => a + b, 0)
  const totalStars = projects.reduce((a, p) => a + p.stars, 0)

  const stats = [
    { icon: Book, label: 'Repositories', value: user?.public_repos ?? '18+', color: 'text-violet-400' },
    { icon: Star, label: 'Total Stars', value: totalStars, color: 'text-yellow-400' },
    { icon: Activity, label: 'Languages', value: Object.keys(LANG_COUNTS).length, color: 'text-cyan-400' },
    { icon: Github, label: 'Followers', value: user?.followers ?? 0, color: 'text-green-400' },
  ]

  return (
    <section id="github-stats" ref={ref} className="relative bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Open Source</p>
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
              @rafaysaleem0308
            </a>{' '}
            — building in public.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map(({ icon: Icon, label, value, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="card card-hover p-6 text-center group"
            >
              <Icon size={24} className={`${color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
              <p className={`text-3xl font-extrabold ${color}`}>{value}</p>
              <p className="text-slate-500 text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Language breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="card p-6 lg:p-8"
        >
          <h3 className="text-slate-100 font-semibold mb-6 flex items-center gap-2">
            <Activity size={18} className="text-violet-400" />
            Language Breakdown
          </h3>

          {/* Bar */}
          <div className="flex rounded-full overflow-hidden h-3 mb-6 gap-0.5">
            {Object.entries(LANG_COUNTS).map(([lang, count]) => (
              <motion.div
                key={lang}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  width: `${(count / totalLangs) * 100}%`,
                  backgroundColor: LANG_COLORS[lang] ?? '#6b7280',
                  transformOrigin: 'left',
                }}
                className="h-full first:rounded-l-full last:rounded-r-full"
                title={`${lang}: ${Math.round((count / totalLangs) * 100)}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {Object.entries(LANG_COUNTS).map(([lang, count]) => (
              <div key={lang} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: LANG_COLORS[lang] ?? '#6b7280' }}
                />
                <span className="text-slate-300">{lang}</span>
                <span className="text-slate-500">{Math.round((count / totalLangs) * 100)}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub contribution streak image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 card p-4 overflow-hidden"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=rafaysaleem0308&show_icons=true&theme=transparent&title_color=8b5cf6&icon_color=8b5cf6&text_color=94a3b8&border_color=1e293b&ring_color=7c3aed"
            alt="GitHub Stats"
            className="w-full max-w-lg mx-auto block rounded-xl"
            loading="lazy"
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
