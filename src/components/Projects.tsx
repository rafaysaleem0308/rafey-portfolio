import { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star, Search, X, Layers } from 'lucide-react'
import { projects } from '../data/portfolio'
import type { ProjectCategory } from '../types'
import { cn } from '../lib/utils'

const CATEGORIES: ['All', ...ProjectCategory[]] = ['All', 'Full-Stack', 'AI/ML', 'Mobile', 'Algorithms', 'Systems', 'Web']

const CATEGORY_COLORS: Record<string, string> = {
  'Full-Stack': 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'AI/ML': 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  'Mobile': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'Algorithms': 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  'Systems': 'bg-red-500/10 text-red-300 border-red-500/20',
  'Web': 'bg-green-500/10 text-green-300 border-green-500/20',
}

const CARD_GRADIENTS = [
  'from-violet-600/20 to-blue-600/10',
  'from-cyan-600/20 to-violet-600/10',
  'from-blue-600/20 to-cyan-600/10',
  'from-fuchsia-600/20 to-violet-600/10',
  'from-indigo-600/20 to-blue-600/10',
  'from-violet-600/15 to-fuchsia-600/10',
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All')
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchCat = activeCategory === 'All' || p.category.includes(activeCategory as ProjectCategory)
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(query.toLowerCase()))
      return matchCat && matchQuery
    })
  }, [activeCategory, query])

  const displayed = showAll ? filtered : filtered.slice(0, 9)

  return (
    <section id="projects" ref={ref} className="relative bg-slate-900/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">My Work</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            {projects.length} projects spanning full-stack apps, AI/ML systems, algorithms &amp; more.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects, tech..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-800/60 border border-slate-700/50 rounded-xl text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowAll(false) }}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-700/60 border border-slate-700/40'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          key={`${activeCategory}-${query}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-500 text-sm mb-6"
        >
          Showing <span className="text-violet-400 font-medium">{filtered.length}</span> projects
          {query && <> matching "<span className="text-slate-300">{query}</span>"</>}
        </motion.p>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <Layers size={40} className="text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400">No projects found. Try a different search or category.</p>
          </motion.div>
        )}

        {/* Show more */}
        {filtered.length > 9 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              Show all {filtered.length} projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }: { project: (typeof projects)[0]; index: number; inView: boolean }) {
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: Math.min(index * 0.07, 0.5), duration: 0.4 }}
      className="card card-hover flex flex-col group overflow-hidden"
    >
      {/* Card header gradient */}
      <div className={`h-2 bg-gradient-to-r ${gradient} opacity-70`} />

      <div className="p-5 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {project.category.slice(0, 2).map(cat => (
              <span key={cat} className={`badge border text-xs ${CATEGORY_COLORS[cat] ?? 'bg-slate-700/60 text-slate-300 border-slate-600/40'}`}>
                {cat}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 text-slate-500 text-xs flex-shrink-0">
            <Star size={12} className={project.stars > 0 ? 'text-yellow-400 fill-yellow-400' : ''} />
            <span>{project.stars}</span>
          </div>
        </div>

        <h3 className="font-bold text-slate-100 group-hover:text-violet-300 transition-colors mb-2 leading-tight">
          {project.title}
          {project.featured && (
            <span className="ml-2 badge bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[10px]">Featured</span>
          )}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map(t => (
            <span key={t} className="badge bg-slate-700/50 text-slate-400 border border-slate-600/30 text-[11px]">
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="badge bg-slate-700/50 text-slate-500 border border-slate-600/30 text-[11px]">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-700/30">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-100 transition-colors"
          >
            <Github size={14} />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors font-medium"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
