# Portfolio — Docusaurus + GitHub Pages

Technical writing and KM portfolio. Three content tracks: case studies, sample docs, writing.

## Quick start

```bash
npm install
npm start
```

Site runs at `http://localhost:3000`.

## Before you push

Find and replace `YOUR-USERNAME` everywhere with your actual GitHub username. Also update:

- `docusaurus.config.js` — `url`, `baseUrl`, `organizationName`, `projectName`, social links
- `src/pages/about.js` — email, LinkedIn, GitHub URLs
- `blog/authors.yml` — your author profile
- `static/img/` — add `favicon.ico`, `logo.svg`, `avatar.png`, `social-card.png`

### `baseUrl` matters

- For a project site (`github.com/you/portfolio` → `you.github.io/portfolio`): `baseUrl: '/portfolio/'`
- For a user site (repo named `you.github.io` → `you.github.io`): `baseUrl: '/'`

## Project structure

```
portfolio/
├── docs/                    # Sample documentation (track 2)
├── case-studies/            # Case studies (track 1, separate docs instance)
├── blog/                    # Writing / essays (track 3, served at /writing)
├── src/
│   ├── pages/               # index.js (landing), about.js
│   ├── css/custom.css       # Editorial theme
│   └── components/
├── static/img/              # Logos, favicons, social cards
├── .github/workflows/       # GitHub Actions deployment
├── docusaurus.config.js
├── sidebars.js              # Sidebar for /docs
└── sidebars-case-studies.js # Sidebar for /case-studies
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In repo Settings → Pages, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and deploys.
4. Site lives at `https://YOUR-USERNAME.github.io/portfolio/` (or your custom domain).

## Custom domain (optional)

1. Add a `CNAME` file in `static/` with one line: `yourdomain.com`
2. Configure DNS at your registrar (A records to GitHub Pages IPs, or CNAME to `YOUR-USERNAME.github.io`)
3. In repo Settings → Pages, set the custom domain.

## Writing checklist

- [ ] Fill in `case-studies/governance-without-authority.md`
- [ ] Fill in `case-studies/guru-instance-rebuild.md`
- [ ] Add 1–2 more case studies
- [ ] Build out `docs/obsidian-pkm/` doc set
- [ ] Write first real essay in `blog/`
- [ ] Replace placeholder bio in `about.js`
- [ ] Add a real social card image
