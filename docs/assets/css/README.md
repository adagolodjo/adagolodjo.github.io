# Styles: Tokens and Components

Design tokens live in `partials/_variables.scss` and are exported as CSS variables. Use these variables across components.

- Colors: `--primary-color`, `--text-color`, `--card-bg`, etc.
- Spacing: `--spacing-sm|md|lg|xl`
- Radius: `--border-radius(-sm|-md|-lg|...)`
- Shadows: `--shadow(-light|-medium|-heavy)`

Core components
- Navigation: `.hero-nav` (see `partials/_hero.scss`)
- Project cards: `.project-card` (see `partials/_components.scss`)
- Publications: `.publication-item` (see `partials/_publications.scss`)

Accessibility
- Use `.skip-link` for keyboard users (already included in default layout)
- Ensure focus-visible states remain visible

Performance
- Prefer `loading="lazy"` on non-critical images
- Provide `width`/`height` to reduce layout shift
- For video, use `preload="metadata"` and a `poster`


