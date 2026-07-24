# Zedrick S. Espiritu — Developer Portfolio

A clean, minimal developer portfolio built with Next.js 16 and Tailwind CSS 4. Showcases projects, experience, skills, and certifications in a modern, responsive layout with subtle interactive details.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono (via `next/font`)

## Features

- Responsive single-page layout with smooth scroll navigation
- Sticky header with scroll-aware background blur
- Mobile-friendly hamburger menu
- Interactive hover sound effects (Web Audio API)
- Custom color system with CSS variables
- Monospace label accents and dot-grid background pattern
- Sections: Hero, Experience, Education, Projects, Skills, Certifications, Leadership, References, Footer

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install & Run

```bash
# Clone the repository
git clone https://github.com/PrynxleWeb/opencode-lab.git
cd opencode-lab

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page composition
├── components/
│   ├── Header.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Intro section with social links
│   ├── Experience.tsx     # Work experience
│   ├── Education.tsx      # Academic background
│   ├── Projects.tsx       # Project showcase grid
│   ├── Skills.tsx         # Technical skills by category
│   ├── Certifications.tsx # AWS & training certs
│   ├── Leadership.tsx     # Leadership & extracurriculars
│   ├── References.tsx     # Academic references
│   ├── Footer.tsx         # Contact info & socials
│   ├── SectionLabel.tsx   # Reusable section label
│   └── TechIcon.tsx       # Tech stack icons
└── assets/                # Images & icons
```

## Customization

Edit the data arrays directly in each component file to update content:

- `src/components/Projects.tsx` — Add/remove projects
- `src/components/Skills.tsx` — Update skill categories
- `src/components/Experience.tsx` — Modify work experience
- `src/components/Education.tsx` — Update education details
- `src/components/Certifications.tsx` — Add certifications

## License

Personal portfolio project. All rights reserved.
