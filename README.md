# robin-portfolio

Personal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** – App Router + static generation
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (ready to use)
- **Google Fonts** – Syne + JetBrains Mono

## Pages

| Route | Description |
|---|---|
| `/` | Hero landing with featured project |
| `/projects` | All projects grid |
| `/projects/[slug]` | Individual project detail |
| `/about` | Experience, education, skills |
| `/contact` | Contact channels |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customisation

All content (projects, experience, education, skills) lives in **`lib/data.ts`** — edit that file to update everything at once. No need to touch individual pages.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com).

## Add Framer Motion animations

The dependency is already installed. Example usage in any client component:

```tsx
"use client";
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  content
</motion.div>
```
