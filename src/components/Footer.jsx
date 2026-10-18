const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-base)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono-tag text-xs text-[var(--color-muted)] sm:flex-row">
        <span>© {year} Umar Khan. Built with React, Tailwind CSS &amp; Framer Motion.</span>
        <span className="text-[var(--color-line)]">git commit -m &quot;ship it&quot;</span>
      </div>
    </footer>
  )
}

export default Footer
