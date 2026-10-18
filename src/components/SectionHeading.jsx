import { motion } from 'framer-motion'

/**
 * Every section opens with a small "commit" marker instead of a plain
 * number — a short hash, a conventional-commit style label, and a
 * dot-on-a-line, echoing the git history/branch motif used in the
 * Skills section. It's decorative *and* accurate: this page really is
 * organized like a sequence of commits building up the profile.
 */
const SectionHeading = ({ hash, label, title, align = 'left' }) => {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'text-center' : 'text-left'}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 font-mono-tag text-xs text-[var(--color-muted)] ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-[var(--color-amber)] shadow-[0_0_10px_var(--color-amber)]" />
        <span className="text-[var(--color-amber)]">{hash}</span>
        <span className="hidden sm:inline">{label}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="mt-3 text-3xl font-semibold text-[var(--color-text)] sm:text-4xl"
      >
        {title}
      </motion.h2>
    </div>
  )
}

export default SectionHeading
