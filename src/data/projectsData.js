/**
 * projectsData
 * ------------------------------------------------------------------
 * Single source of truth for the Projects section. The grid and card
 * components just map over this array, so adding a real project is a
 * matter of pushing a new object with this exact shape — no other
 * file needs to change.
 *
 * Shape reference:
 * {
 *   id:          number | string   — unique, used as the React key
 *   title:       string            — project name
 *   description: string            — 1–2 sentence summary
 *   techStack:   string[]          — short tags, shown as chips
 *   liveLink:    string | null     — deployed URL, or null if none yet
 *   githubLink:  string | null     — repo URL, or null if private/none
 *   image:       string | null     — imported screenshot/thumbnail,
 *                                    or null to fall back to the
 *                                    generated placeholder graphic
 *   featured:    boolean           — optional, shows a "Featured" tag
 * }
 *
 * The two entries below are placeholders only — swap the values for
 * your real projects and duplicate the object to add more. Nothing
 * fake is rendered as if it were shipped work: the card UI visibly
 * labels an entry as a placeholder whenever liveLink/githubLink are
 * both null, so half-filled entries never look finished by accident.
 */

export const projectsData = [
  {
    id: 1,
    title: 'Football Dashboad', // TODO: replace with your real project name
    description:
      'A full-stack football analytics platform that centralizes player, team, league, and match statistics. It helps users quickly analyze performance and track football data through an interactive dashboard.', // TODO
    techStack: ['React', 'Django', 'PostgreSQL'], // TODO: adjust tags
    liveLink: null, // TODO: e.g. 'https://your-project.com'
    githubLink: null, // TODO: e.g. 'https://github.com/you/repo'
    image: null, // TODO: import a screenshot and reference it here
    featured: true,
  },
  {
    id: 2,
    title: 'Uhudd Developer Website', // TODO: replace with your real project name
    description:
      'A modern website for a construction and development company, showcasing its projects, available apartments, and construction and renovation services. It allows potential customers to explore properties and submit booking or service inquiries', // TODO
    techStack: ['React', 'Tailwind CSS'], // TODO: adjust tags
    liveLink: null, // TODO
    githubLink: null, // TODO
    image: null, // TODO
    featured: false,
  },

  // Add more real projects below, following the same shape:
  // {
  //   id: 3,
  //   title: '...',
  //   description: '...',
  //   techStack: ['...'],
  //   liveLink: '...',
  //   githubLink: '...',
  //   image: myImportedImage,
  //   featured: false,
  // },
]
