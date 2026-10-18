import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Wraps children in a card that tilts toward the cursor in 3D and
 * renders a soft glow that follows the pointer along the border.
 * Falls back to a static card automatically for touch/reduced-motion
 * since there's no meaningful pointer position on those inputs.
 */
const TiltCard = ({ children, glowColor = 'var(--color-react)', className = '' }) => {
  const ref = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })

  const xPercent = useTransform(mouseX, (v) => `${v * 100}%`)
  const yPercent = useTransform(mouseY, (v) => `${v * 100}%`)
  const glow = useMotionTemplate`radial-gradient(200px circle at ${xPercent} ${yPercent}, ${glowColor}33, transparent 70%)`

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    mouseX.set(px)
    mouseY.set(py)
    rotateY.set((px - 0.5) * 14)
    rotateX.set((0.5 - py) * 14)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[var(--color-line)]/0 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5"
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

export default TiltCard
