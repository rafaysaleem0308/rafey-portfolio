import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'
import { personal } from '../data/portfolio'

const ROLES = ['Full-Stack Developer', 'MERN Developer', 'AI/ML Engineer', 'Flutter Developer']

function useTypewriter(words: string[]) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const word = words[wordIdx]
    if (!deleting && displayed.length < word.length) {
      timeout.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90)
    } else if (!deleting && displayed.length === word.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    return () => clearTimeout(timeout.current)
  }, [displayed, deleting, wordIdx, words])

  return displayed
}

const TECH_STACK = ['React', 'Node.js', 'Flutter', 'MongoDB', 'Python', 'Express', 'PyTorch', 'Flask']

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-900/5 blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative section-container flex flex-col lg:flex-row items-center gap-16 pt-24">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Rafey</span>
            <br />
            <span className="text-slate-100">Saleem</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-xl sm:text-2xl font-semibold text-slate-400 h-8"
          >
            <span className="text-violet-400">{role}</span>
            <span className="animate-blink text-violet-400 ml-0.5">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <ExternalLink size={16} />
              View Projects
            </button>
            <a href={personal.resumeUrl} download className="btn-secondary">
              <Download size={16} />
              Download Resume
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: personal.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 text-slate-500 hover:text-violet-400 hover:bg-violet-500/10 rounded-xl transition-all border border-slate-800 hover:border-violet-500/30"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Terminal card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="card glow-sm p-0 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500 font-mono">rafey@portfolio ~ </span>
            </div>
            {/* Terminal body */}
            <div className="p-5 font-mono text-sm space-y-2">
              <Line delay={0.5} color="text-green-400" prefix="$">
                whoami
              </Line>
              <Line delay={0.7} color="text-slate-300">
                Rafey Saleem — Full-Stack &amp; AI Developer
              </Line>
              <Line delay={1.0} color="text-green-400" prefix="$">
                cat skills.txt
              </Line>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {TECH_STACK.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.07 }}
                    className="px-2 py-0.5 bg-violet-500/15 text-violet-300 rounded text-xs border border-violet-500/20"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <Line delay={1.9} color="text-green-400" prefix="$">
                ls projects/
              </Line>
              <Line delay={2.1} color="text-cyan-400">
                18 projects found ✓
              </Line>
              <Line delay={2.3} color="text-green-400" prefix="$">
                status
              </Line>
              <Line delay={2.5} color="text-yellow-400">
                🔥 Open to Full-Stack / AI roles
              </Line>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.7 }}
                className="flex items-center gap-1 text-green-400 pt-1"
              >
                <span>$</span>
                <span className="animate-blink">▋</span>
              </motion.div>
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {['MERN', 'Flutter', 'PyTorch', 'REST API', 'spaCy', 'MongoDB', 'Flask', 'Agile'].map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="text-center py-1.5 px-2 bg-slate-800/60 border border-slate-700/40 rounded-lg text-xs text-slate-400 hover:text-violet-300 hover:border-violet-500/30 transition-all cursor-default"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 2.5 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="text-xs font-medium">Scroll down</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}

function Line({ children, delay, color, prefix }: { children: React.ReactNode; delay: number; color: string; prefix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`flex gap-2 ${color}`}
    >
      {prefix && <span className="text-green-500">{prefix}</span>}
      <span>{children}</span>
    </motion.div>
  )
}
