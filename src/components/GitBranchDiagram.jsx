import { motion } from 'framer-motion'

/**
 * The page's signature visual: a git graph where a "react" branch and
 * a "django" branch each commit independently, then merge into
 * "main" — a literal picture of the stack plus the version-control
 * discipline that ties it together. Paths draw in on scroll; dots
 * pop in after their line arrives.
 */
const path = (d, delay, color) => (
  <motion.path
    d={d}
    stroke={color}
    strokeWidth="2.5"
    fill="none"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.1, delay, ease: 'easeInOut' }}
  />
)

const Dot = ({ cx, cy, color, delay, label, sub }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.35, delay }}
  >
    <circle cx={cx} cy={cy} r="6" fill="var(--color-base)" stroke={color} strokeWidth="2.5" />
    <circle cx={cx} cy={cy} r="2.2" fill={color} />
    {label && (
      <text
        x={cx}
        y={cy - 14}
        textAnchor="middle"
        className="font-mono-tag"
        fontSize="11"
        fill="var(--color-muted)"
      >
        {label}
      </text>
    )}
    {sub && (
      <text
        x={cx}
        y={cy + 22}
        textAnchor="middle"
        className="font-mono-tag"
        fontSize="10"
        fill="var(--color-line)"
      >
        {sub}
      </text>
    )}
  </motion.g>
)

const GitBranchDiagram = () => {
  const react = 'var(--color-react)'
  const django = 'var(--color-django)'
  const amber = 'var(--color-amber)'

  return (
    <svg
      viewBox="0 0 640 220"
      className="mx-auto w-full max-w-2xl"
      role="img"
      aria-label="Diagram of a React branch and a Django branch merging into the main branch, representing full-stack version-controlled development"
    >
      {/* main branch (straight through) */}
      {path('M20,110 H620', 0, 'var(--color-line)')}

      {/* react branch: peels up, commits, merges back */}
      {path('M120,110 C160,110 160,45 200,45 H420 C460,45 460,110 500,110', 0.15, react)}

      {/* django branch: peels down, commits, merges back */}
      {path('M180,110 C220,110 220,175 260,175 H360 C400,175 400,110 440,110', 0.35, django)}

      {/* main branch commit dots */}
      <Dot cx={20} cy={110} color="var(--color-line)" delay={0} />
      <Dot cx={120} cy={110} color={react} delay={0.2} sub="branch" />
      <Dot cx={180} cy={110} color={django} delay={0.4} sub="branch" />
      <Dot cx={500} cy={110} color={react} delay={1.1} />
      <Dot cx={440} cy={110} color={django} delay={1.2} />
      <Dot cx={620} cy={110} color={amber} delay={1.5} label="deploy" />

      {/* react commits */}
      <Dot cx={260} cy={45} color={react} delay={0.6} label="ui components" />
      <Dot cx={360} cy={45} color={react} delay={0.8} label="state + routing" />

      {/* django commits */}
      <Dot cx={300} cy={175} color={django} delay={0.9} label="rest api" />
      <Dot cx={340} cy={175} color={django} delay={1.0} label="auth + db" />

      <text x={20} y={135} className="font-mono-tag" fontSize="11" fill="var(--color-muted)">
        main
      </text>
    </svg>
  )
}

export default GitBranchDiagram
