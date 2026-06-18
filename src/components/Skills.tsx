import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)

  const active = skillCategories[activeTab]

  return (
    <section id="skills" ref={ref} className="relative bg-slate-900/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">Technical Arsenal</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">A curated toolkit built from real projects and hands-on experience.</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === i
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 border border-slate-700/40'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {active.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="card card-hover p-4 text-center group cursor-default"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {getSkillEmoji(skill.name)}
              </div>
              <p className="text-slate-300 text-sm font-medium leading-tight">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* All skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 card p-6"
        >
          <p className="text-slate-400 text-sm font-medium mb-4 text-center">All Technologies</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategories.flatMap(cat =>
              cat.skills.map(skill => (
                <span
                  key={`${cat.name}-${skill.name}`}
                  className="badge bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getSkillEmoji(name: string): string {
  const map: Record<string, string> = {
    JavaScript: '🟨',
    Python: '🐍',
    Dart: '🎯',
    'C++': '⚡',
    Java: '☕',
    HTML5: '🌐',
    CSS3: '🎨',
    'React.js': '⚛️',
    Flutter: '🦋',
    'Bootstrap 5': '🅱️',
    'Material UI': '🎭',
    'Node.js': '🟢',
    'Express.js': '🚂',
    Flask: '🧪',
    'REST API Design': '🔌',
    MongoDB: '🍃',
    'Oracle 11g (SQL)': '🗄️',
    PyTorch: '🔥',
    'spaCy (NLP)': '🧠',
    'scikit-learn': '📊',
    'Vision Transformers': '👁️',
    'LSTM / ResNet50': '🕸️',
    'Statistical Modeling': '📈',
    'Git & GitHub': '🐙',
    Postman: '📮',
    'VS Code': '💙',
    'Android Studio': '🤖',
    Render: '☁️',
    Vercel: '▲',
    DSA: '🧮',
    OOP: '📦',
    'Agile Development': '🔄',
    'Mutation Testing': '🧬',
  }
  return map[name] ?? '⚙️'
}
