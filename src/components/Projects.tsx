import { useRef, useState, useMemo, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star, Search, X, Layers, CheckCircle2, Sparkles, Code2, Info, PlayCircle, Briefcase } from 'lucide-react'
import { projects } from '../data/portfolio'
import type { Project, ProjectCategory } from '../types'
import { cn } from '../lib/utils'

const CATEGORIES: ['All', ...ProjectCategory[]] = [
  'All',
  'Full-Stack',
  'MERN',
  'Mobile',
  'AI/ML',
  'Algorithms',
  'Systems',
  'Web',
]

const CATEGORY_COLORS: Record<string, string> = {
  'Full-Stack': 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  MERN: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  Mobile: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  'AI/ML': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  Algorithms: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  Systems: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  Web: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
}

const CARD_GRADIENTS = [
  'from-violet-600/30 via-indigo-600/20 to-blue-600/10',
  'from-cyan-600/30 via-teal-600/20 to-emerald-600/10',
  'from-emerald-600/30 via-cyan-600/20 to-blue-600/10',
  'from-blue-600/30 via-violet-600/20 to-fuchsia-600/10',
  'from-fuchsia-600/30 via-purple-600/20 to-indigo-600/10',
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All')
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [videoModalProject, setVideoModalProject] = useState<Project | null>(null)

  const featuredProjects = useMemo(() => {
    return projects.filter(p => p.featured)
  }, [])

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
    <section id="projects" ref={ref} className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Engineering Portfolio &amp; Projects
          </div>
          <h2 className="section-title text-4xl sm:text-5xl">
            Featured <span className="gradient-text">Software Engineering</span> Work
          </h2>
          <p className="section-subtitle text-slate-400 text-base sm:text-lg mt-4">
            Production-grade MERN &amp; PostgreSQL backends, cross-platform Flutter applications, and AI/ML architectures.
          </p>
        </motion.div>

        {/* FEATURED PROJECTS SHOWCASE (TOP PRIORITY) */}
        {activeCategory === 'All' && !query && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                Featured Flagship Projects
              </h3>
              <span className="text-xs text-slate-400 font-medium">Recruiter Priority Showcase</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.slice(0, 4).map((project, idx) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onSelect={() => setSelectedProject(project)}
                  onWatchDemo={p => setVideoModalProject(p)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* SEARCH & CATEGORY FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8"
        >
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects, technologies (e.g. React, Flutter, Node)..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                aria-label="Clear search query"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setShowAll(false)
                }}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1',
                  activeCategory === cat
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25 ring-1 ring-violet-400/50'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800/80'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-500 text-xs sm:text-sm">
            Showing <span className="text-violet-400 font-semibold">{filtered.length}</span> projects
            {activeCategory !== 'All' && <> in <span className="text-slate-300 font-medium">{activeCategory}</span></>}
            {query && <> matching "<span className="text-slate-300">{query}</span>"</>}
          </p>
        </div>

        {/* MAIN PROJECTS GRID */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                onSelect={() => setSelectedProject(project)}
                onWatchDemo={p => setVideoModalProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800">
            <Layers size={44} className="text-slate-600 mx-auto mb-3" />
            <h3 className="text-slate-300 font-semibold text-base mb-1">No matching projects found</h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto mb-4">Try resetting your category filter or searching for a different technology stack.</p>
            <button
              onClick={() => {
                setActiveCategory('All')
                setQuery('')
              }}
              className="btn-secondary text-xs"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Show More Button */}
        {filtered.length > 9 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <button onClick={() => setShowAll(true)} className="btn-secondary text-sm px-8 py-3.5">
              Show All {filtered.length} Engineering Projects
            </button>
          </motion.div>
        )}
      </div>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onWatchDemo={p => {
              setSelectedProject(null)
              setVideoModalProject(p)
            }}
          />
        )}
      </AnimatePresence>

      {/* VIDEO DEMO MODAL */}
      <AnimatePresence>
        {videoModalProject && (
          <VideoDemoModal project={videoModalProject} onClose={() => setVideoModalProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function FeaturedProjectCard({
  project,
  index,
  onSelect,
  onWatchDemo,
}: {
  project: Project
  index: number
  onSelect: () => void
  onWatchDemo: (p: Project) => void
}) {
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card relative flex flex-col bg-slate-900/90 border-slate-800 hover:border-violet-500/40 transition-all duration-300 overflow-hidden group shadow-xl"
    >
      {/* Decorative top border */}
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Category Badges & Featured / Internship pill */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5 items-center">
            {project.category.map(cat => (
              <span
                key={cat}
                className={`badge text-[11px] font-semibold border ${
                  CATEGORY_COLORS[cat] ?? 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {cat}
              </span>
            ))}
            {project.internshipLabel && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                <Briefcase size={11} className="text-cyan-400" />
                {project.internshipLabel}
              </span>
            )}
          </div>
          {project.featured && !project.internshipLabel && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
              <Star size={10} className="fill-amber-400" />
              Top Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={onSelect}
          className="text-xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors cursor-pointer mb-1 leading-snug flex items-center justify-between"
        >
          <span>{project.title}</span>
        </h3>

        {/* Role if present */}
        {project.internshipRole && (
          <p className="text-xs font-semibold text-violet-400 mb-3">
            Role: <span className="text-slate-300 font-medium">{project.internshipRole}</span>
          </p>
        )}

        {/* Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-4 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Code2 size={12} className="text-violet-400" /> Key Engineering Architecture
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.architectureHighlights.map((arch, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-xs text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/50"
                >
                  <CheckCircle2 size={10} className="text-emerald-400" />
                  {arch}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span
              key={t}
              className="badge bg-slate-800 text-slate-300 border border-slate-700/60 text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-auto flex-wrap gap-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            {project.demoVideoUrl && (
              <button
                onClick={() => onWatchDemo(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-3.5 py-1.5 rounded-lg shadow-md shadow-violet-600/20 transition-all transform hover:scale-[1.02]"
              >
                <PlayCircle size={15} />
                Watch Demo
              </button>
            )}

            {!project.hideGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                <Github size={14} />
                Source Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white bg-violet-600/20 hover:bg-violet-600/40 px-3 py-1.5 rounded-lg border border-violet-500/30 transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onSelect}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-violet-300 transition-colors ml-auto"
          >
            <Info size={14} />
            Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({
  project,
  index,
  inView,
  onSelect,
  onWatchDemo,
}: {
  project: Project
  index: number
  inView: boolean
  onSelect: () => void
  onWatchDemo: (p: Project) => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.3 }}
      className="card bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 flex flex-col group overflow-hidden"
    >
      <div className="p-5 flex flex-col flex-1">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {project.category.slice(0, 2).map(cat => (
              <span
                key={cat}
                className={`badge text-[10px] font-semibold border ${
                  CATEGORY_COLORS[cat] ?? 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {cat}
              </span>
            ))}
            {project.internshipLabel && (
              <span className="badge text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Internship
              </span>
            )}
          </div>
          {project.featured && !project.internshipLabel && (
            <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full flex-shrink-0">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={onSelect}
          className="font-bold text-slate-100 group-hover:text-violet-300 transition-colors cursor-pointer mb-1 text-base leading-snug"
        >
          {project.title}
        </h3>

        {/* Role */}
        {project.internshipRole && (
          <p className="text-[11px] font-semibold text-violet-400 mb-2">
            Role: <span className="text-slate-300">{project.internshipRole}</span>
          </p>
        )}

        {/* Description */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 4).map(t => (
            <span
              key={t}
              className="badge bg-slate-800/80 text-slate-400 border border-slate-700/50 text-[10px]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="badge bg-slate-800/80 text-slate-500 border border-slate-700/50 text-[10px]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Bottom links */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs mt-auto flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {project.demoVideoUrl && (
              <button
                onClick={() => onWatchDemo(project)}
                className="flex items-center gap-1 font-semibold text-violet-300 hover:text-white bg-violet-600/20 hover:bg-violet-600/40 px-2.5 py-1 rounded-md border border-violet-500/30 transition-colors"
              >
                <PlayCircle size={13} />
                Watch Demo
              </button>
            )}
            {!project.hideGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
              >
                <Github size={13} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onSelect}
            className="text-slate-500 hover:text-slate-300 text-xs transition-colors ml-auto"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectDetailModal({
  project,
  onClose,
  onWatchDemo,
}: {
  project: Project
  onClose: () => void
  onWatchDemo: (p: Project) => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap gap-2 mb-3 items-center">
          {project.category.map(cat => (
            <span
              key={cat}
              className={`badge text-xs font-semibold border ${
                CATEGORY_COLORS[cat] ?? 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              {cat}
            </span>
          ))}
          {project.internshipLabel && (
            <span className="badge bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold">
              {project.internshipLabel}
            </span>
          )}
          {project.featured && !project.internshipLabel && (
            <span className="badge bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
              Top Featured Project
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
        {project.internshipRole && (
          <p className="text-xs font-semibold text-violet-400 mb-3">
            Role: <span className="text-slate-200">{project.internshipRole}</span>
          </p>
        )}

        <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.longDescription}</p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
            <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span
                key={t}
                className="badge bg-slate-800 text-slate-200 border border-slate-700 text-xs px-3 py-1 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800 flex-wrap">
          {project.demoVideoUrl && (
            <button
              onClick={() => onWatchDemo(project)}
              className="btn-primary text-xs sm:text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-none shadow-lg shadow-violet-600/25"
            >
              <PlayCircle size={16} />
              Watch Video Demo
            </button>
          )}

          {!project.hideGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs sm:text-sm"
            >
              <Github size={16} />
              View GitHub Repository
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs sm:text-sm"
            >
              <ExternalLink size={16} />
              Open Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function VideoDemoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Save current body overflow style and lock scrolling
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // ESC key listener to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90">
          <div>
            {project.internshipLabel && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                {project.internshipLabel}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <PlayCircle size={20} className="text-violet-400 flex-shrink-0" />
              {project.title} — Video Demo
            </h3>
            {project.internshipRole && (
              <p className="text-xs text-slate-400 mt-0.5">
                Role: <span className="text-slate-200 font-medium">{project.internshipRole}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Close demo modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 min-h-[300px] max-h-[75vh]">
          <video
            ref={videoRef}
            src={project.demoVideoUrl}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[70vh] rounded-lg shadow-2xl object-contain bg-black"
          >
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-300">Tech Stack:</span>
            <div className="flex flex-wrap gap-1">
              {project.tech.map(t => (
                <span key={t} className="badge bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg transition-colors ml-auto"
          >
            Close Demo
          </button>
        </div>
      </motion.div>
    </div>
  )
}
