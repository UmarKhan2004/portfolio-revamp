import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaReact } from 'react-icons/fa'

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

const ProjectCard = ({ project }) => {
  const { title, description, techStack, liveLink, githubLink, image, featured } = project
  const isPlaceholder = !liveLink && !githubLink

  return (
    <motion.article
      variants={item}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-react)]/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface-2)]">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FaReact className="text-6xl text-[var(--color-line)] transition-transform duration-500 group-hover:scale-110 group-hover:text-[var(--color-react)]/40" />
          </div>
        )}

        {featured && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--color-amber)] px-3 py-1 font-mono-tag text-[10px] font-semibold uppercase tracking-wide text-[var(--color-base)]">
            Featured
          </span>
        )}
        {isPlaceholder && (
          <span className="absolute right-3 top-3 rounded-full border border-[var(--color-line)] bg-[var(--color-base)]/80 px-3 py-1 font-mono-tag text-[10px] uppercase tracking-wide text-[var(--color-muted)]">
            Placeholder
          </span>
        )}

        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[var(--color-base)]/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live demo of ${title}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-text)] text-lg text-[var(--color-base)] transition-transform hover:scale-110"
            >
              <FiExternalLink />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open GitHub repository for ${title}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-text)] text-lg text-[var(--color-base)] transition-transform hover:scale-110"
            >
              <FiGithub />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 font-mono-tag text-[11px] text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
