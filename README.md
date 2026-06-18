# Rafey Saleem — Portfolio

Personal portfolio website built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Resume Setup

Copy your resume PDF into the `public/` folder:

```
public/Rafey_Saleem_Resume.pdf
```

The "Download Resume" button links to `/Rafey_Saleem_Resume.pdf`.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. **Framework Preset**: Vite
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. Click **Deploy** ✓

The `vercel.json` handles SPA client-side routing automatically.

## Project Structure

```
src/
├── main.tsx             # React entry point
├── App.tsx              # Root component + theme toggle
├── index.css            # Global styles (Tailwind)
├── types/index.ts       # TypeScript interfaces
├── data/portfolio.ts    # ← All your data lives here
├── lib/utils.ts         # cn() utility
└── components/
    ├── Navigation.tsx
    ├── ScrollProgress.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Experience.tsx
    ├── Projects.tsx       18 projects, search + filter
    ├── GitHubStats.tsx
    ├── Education.tsx
    ├── Leadership.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Customization

All content lives in `src/data/portfolio.ts` — edit projects, skills, experience, education, and personal info there.

## Tech Stack

- React 18 + Vite 5
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (icons)
