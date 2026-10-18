import { useEffect, useState } from 'react'

/**
 * Cycles through `words`, typing and deleting each one.
 * Returns the current visible substring plus whether the caret
 * should currently render as "on" (kept simple/deterministic so the
 * caret blink is driven by CSS, not this hook).
 */
export function useTypewriter(
  words,
  { typingSpeed = 90, deletingSpeed = 45, pauseTime = 1400 } = {}
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined // show static first word, no timers

    const current = words[wordIndex % words.length]
    const atPauseEnd = !deleting && subIndex === current.length
    const atWordEnd = deleting && subIndex === 0
    const delay = atPauseEnd ? pauseTime : deleting ? deletingSpeed : typingSpeed

    // All state updates happen inside the timeout callback (not
    // synchronously in the effect body) so each tick is a discrete,
    // scheduled step rather than a cascading render.
    const timeout = setTimeout(() => {
      if (atPauseEnd) {
        setDeleting(true)
      } else if (atWordEnd) {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setSubIndex((i) => i + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, reduceMotion])

  if (reduceMotion) return words[0]
  return words[wordIndex % words.length].slice(0, subIndex)
}
