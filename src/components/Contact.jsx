import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const FIELDS = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
]

const SOCIALS = [
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/' }, // TODO: your GitHub URL
  { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/' }, // TODO: your LinkedIn URL
  { label: 'Email', icon: FiMail, href: 'mailto:you@example.com' }, // TODO: your email
]

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: wire this up to your Django backend, e.g.:
    // await fetch('/api/contact/', { method: 'POST', body: new FormData(e.target) })
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <section id="contact" className="relative bg-[var(--color-base)] py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading hash="f1a02b" label="feat: contact form" title="Let's build something" align="center" />

        <div className="mt-14 grid gap-10 sm:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8"
          >
            {FIELDS.map((field) => (
              <FloatingField key={field.id} {...field} />
            ))}
            <FloatingField id="message" label="Message" type="textarea" />

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-text)] px-6 py-3 font-mono-tag text-sm font-medium text-[var(--color-base)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === 'idle' && (
                <>
                  Send message <FiSend />
                </>
              )}
              {status === 'sending' && 'Sending…'}
              {status === 'sent' && 'Message sent ✓'}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8"
          >
            <div>
              <p className="font-mono-tag text-xs text-[var(--color-amber)]">$ open --to-opportunities</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                Have a React front end or a Django API that needs building, or a project that needs
                both? I'd like to hear about it.
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-lg text-[var(--color-muted)] transition-all hover:-translate-y-1 hover:border-[var(--color-react)] hover:text-[var(--color-react)]"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const FloatingField = ({ id, label, type }) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const active = focused || value.length > 0
  const Field = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className="relative">
      <Field
        id={id}
        name={id}
        type={type === 'textarea' ? undefined : type}
        rows={type === 'textarea' ? 4 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className="peer w-full resize-none rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-2)] px-4 pb-2.5 pt-5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-react)]"
      />
      <motion.label
        htmlFor={id}
        animate={{
          top: active ? 8 : type === 'textarea' ? 16 : '50%',
          y: active ? 0 : type === 'textarea' ? 0 : '-50%',
          fontSize: active ? '0.7rem' : '0.875rem',
          color: focused ? 'var(--color-react)' : 'var(--color-muted)',
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none absolute left-4 font-mono-tag"
      >
        {label}
      </motion.label>
    </div>
  )
}

export default Contact
