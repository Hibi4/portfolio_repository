Notes

# Portfolio (Astro) — personal website

A personal portfolio website built with **Astro** (based on the *Astro Starter Kit: Portfolio* template).
Goal: showcase my projects, skills, and contact information through a static, responsive, and accessible website.

🔗 **Live site:** https://portfolio-ousmane-diallo.vercel.app/en/

---

## 🛠️ Tech stack

- **Languages:** Astro, TypeScript, CSS (PostCSS), HTML
- **Framework:** Astro v4.x
- **Notable dependencies:** `astro`, `typescript`, `@astrojs/check`
- **Environment:** Node.js + npm (recommended: Node 18+)

## ✨ Key features

- Multi-language pages (FR / EN)
- Project grid (`ProjectGrid` / `ProjectCard`)
- Reusable components: header, footer, hero, CTA, theme toggle
- Centralized SVG icons (`IconPaths.ts`) and theming (dark/light)
- Progressive enhancement: navigation usable without JS, menu enhanced with JS
- Static build ready to deploy

## 🚀 Install & run (development)

```bash
# from the project root
npm install
npm run dev       # local server (default: localhost:4321)
npm run build
npm run preview
```

## 🎨 Quick customization

- **Screenshots:** place them in `portfolio/public/` and reference them in the pages/projects

## 🧩 Technical challenges and solutions

- **Accessible navigation + no-JS support:** full structure wrapped in `<noscript>`, with the menu enhanced via a Web Component for progressive enhancement.
- **Icon reusability:** `IconPaths.ts` centralizes all SVGs for visual consistency and easier maintenance.
- **Performant theming:** CSS variables + `ThemeToggle` to avoid flash-of-unstyled-content and keep transitions smooth.
- **Internationalization (i18n):** separate components for FR/EN, with dedicated utilities to extract the language from the URL.

## 💡 Skills demonstrated

- Modern front-end development with Astro (components, responsive design, accessibility)
- Modular, maintainable TypeScript
- SVG asset management and optimization
- Preparing and deploying a static site to production

## 📦 Deployment

Deployed on **Vercel**.

- Build command: `npm run build`
- Publish directory: `dist/`
- Automatic deployment via Git integration

## ✅ Production checklist

- [ ]  Replace all placeholder content with real projects and screenshots
- [ ]  Add a license (e.g., MIT)
- [ ]  Add CI (GitHub Actions) for build/tests/preview

## 📄 License

This project is distributed under the MIT license.

## 📬 Contact

- **Name:** Ousmane Diallo
- **Email:** you@example.com
- **LinkedIn:** https://www.linkedin.com/in/ousmane-diallo-a5308b230
- **GitHub:** https://github.com/Hibi4/
- **Portfolio:** https://portfolio-ousmane-diallo.vercel.app/en/