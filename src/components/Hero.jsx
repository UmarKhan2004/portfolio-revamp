import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = ['React interfaces.', 'Django APIs.', 'Version-controlled code.']

const FLOATERS = [
  { glyph: '</>', top: '18%', left: '8%', size: 'text-4xl', delay: 0 },
  { glyph: '{ }', top: '68%', left: '12%', size: 'text-5xl', delay: 0.6 },
  { glyph: 'git', top: '28%', left: '85%', size: 'text-2xl', delay: 1.1 },
  { glyph: '=>', top: '75%', left: '82%', size: 'text-4xl', delay: 0.3 },
  { glyph: '#', top: '10%', left: '55%', size: 'text-3xl', delay: 0.9 },
]

const headline = "Hi, I'm Umar Khan."
const headlineWords = headline.split(' ')

const Hero = () => {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-base)] pt-24"
    >
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <motion.div
          className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--color-react)]/20 blur-[110px]"
          animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/5 h-[24rem] w-[24rem] rounded-full bg-[var(--color-django)]/20 blur-[110px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Floating code glyphs */}
      {FLOATERS.map((f) => (
        <motion.span
          key={f.glyph}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden select-none font-mono-tag text-[var(--color-line)] sm:block ${f.size}`}
          style={{ top: f.top, left: f.left }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
        >
          {f.glyph}
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-2 font-mono-tag text-sm text-[var(--color-amber)]"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-amber)]" />
          $ status --available-for-work
        </motion.p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] text-[var(--color-text)] sm:text-6xl">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-5 flex h-10 items-center font-mono-tag text-lg text-[var(--color-muted)] sm:text-2xl"
        >
          <span>I build&nbsp;</span>
          <span className="text-gradient font-medium">{typed}</span>
          <span className="ml-1 h-6 w-[2px] animate-pulse bg-[var(--color-react)] sm:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 max-w-xl text-base text-[var(--color-muted)] sm:text-lg"
        >
          Web developer focused on React front ends and Django back ends,
          with a disciplined Git/GitHub workflow behind every release.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-full bg-[var(--color-text)] px-6 py-3 font-mono-tag text-sm font-medium text-[var(--color-base)] transition-transform hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-full border border-[var(--color-line)] px-6 py-3 font-mono-tag text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-react)] hover:text-[var(--color-react)]"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        }}
        aria-label="Scroll to skills section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--color-muted)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiArrowDown className="text-2xl" />
      </motion.a>
    </section>
  )
}

export default Hero
