import { motion } from 'framer-motion'
import { FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiDjango, SiPython, SiJavascript, SiTailwindcss, SiPostgresql, SiRedux } from 'react-icons/si'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import GitBranchDiagram from './GitBranchDiagram'

const STACKS = [
  {
    key: 'react',
    name: 'React',
    icon: FaReact,
    color: 'var(--color-react)',
    tagline: 'Frontend — interfaces that feel instant',
    skills: ['React & Hooks', 'Component architecture', 'React Router', 'State management', 'Responsive UI'],
    chipIcons: [SiJavascript, SiTailwindcss, SiRedux],
  },
  {
    key: 'django',
    name: 'Django',
    icon: SiDjango,
    color: 'var(--color-django)',
    tagline: 'Backend — APIs that hold up under load',
    skills: ['Django & DRF', 'REST API design', 'Auth & permissions', 'ORM & migrations', 'Database modelling'],
    chipIcons: [SiPython, SiPostgresql],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Skills = () => {
  return (
    <section id="skills" className="relative bg-[var(--color-base)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading hash="a3f9c1" label="feat: core stack" title="What I build with" align="center" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {STACKS.map((stack) => (
            <motion.div key={stack.key} variants={item}>
              <TiltCard glowColor={stack.color} className="h-full p-8">
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl"
                    style={{ color: stack.color, backgroundColor: `${stack.color}1a` }}
                  >
                    <stack.icon />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">{stack.name}</h3>
                    <p className="font-mono-tag text-xs text-[var(--color-muted)]">{stack.tagline}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {stack.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: stack.color }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3 border-t border-[var(--color-line)] pt-5">
                  {stack.chipIcons.map((Icon, i) => (
                    <span
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-lg text-[var(--color-muted)]"
                    >
                      <Icon />
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Signature element: version-control workflow visualized as a git graph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-12"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 font-mono-tag text-sm text-[var(--color-muted)]">
              <FaGitAlt className="text-[var(--color-amber)]" />
              Version control workflow
            </div>
            <div className="flex items-center gap-2 font-mono-tag text-xs text-[var(--color-muted)]">
              <FaGithub />
              feature branches → pull request → main
            </div>
          </div>
          <GitBranchDiagram />
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-[var(--color-muted)]">
            Every feature ships on its own branch and merges into{' '}
            <span className="font-mono-tag text-[var(--color-text)]">main</span> through reviewed
            pull requests — the same discipline behind every project below.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
