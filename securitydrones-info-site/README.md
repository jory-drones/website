# SecurityDrones.info — Landing Site

A fast, ad-ready landing site for your AI drone security company. Built with **Vite + React + Tailwind**.

## Quick Start

1) Install Node.js (LTS) from https://nodejs.org
2) In a terminal:
```bash
npm install
npm run dev
```
Visit http://localhost:5173

## Add Your Media

Place files in `public/media/`:
- `hero.mp4` and optional `hero-poster.jpg`
- `clip1.mp4` + `clip1.jpg`
- `clip2.mp4` + `clip2.jpg`
- `clip3.mp4` + `clip3.jpg`

(You can rename or add more clips; just update paths in `src/App.jsx`.)

## Calendly

Update the `CALENDLY_URL` constant in `src/App.jsx` if your link changes.

## Deploy to Vercel

1. Create a free account at https://vercel.com
2. Run a production build:
```bash
npm run build
```
3. Deploy (either):
   - **Vercel CLI**: `npm i -g vercel && vercel` (follow prompts), or
   - **Connect GitHub**: push this folder to a repo and import it in Vercel.

### Domain (securitydrones.info)

- In Vercel: add your domain to the project (Settings → Domains).
- In your domain registrar: add DNS records Vercel shows (A/AAAA for root and CNAME for www).
- Wait for DNS to propagate; Vercel provisions SSL automatically.

## Customize Styles

Tailwind config lives at `tailwind.config.js`. Global styles in `src/index.css`.
Icons provided by `lucide-react`.

## Notes

- The ROI calculator is an estimate tool for planning purposes only.
- The contact form uses `mailto:` to open the user's email client. You can replace this with a backend endpoint if needed.
