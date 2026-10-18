import { motion } from 'framer-motion'
import { projectsData } from '../data/projectsData'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[var(--color-base)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading hash="7c2e8d" label="feat: shipped work" title="Selected projects" align="center" />

        <p className="mx-auto mt-6 max-w-lg text-center text-sm text-[var(--color-muted)]">
          The grid below reads straight from a single{' '}
          <code className="font-mono-tag text-[var(--color-text)]">projectsData</code> array —
          drop in a new object to add a project, no layout changes needed.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
