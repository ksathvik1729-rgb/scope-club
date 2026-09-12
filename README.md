# SCOPE Club Website

Award-tier website for **SCOPE** — the student-run CSE club at MLR Institute of
Technology, Hyderabad. Built during the HTML/CSS/AWS Basics workshop.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** — custom SCOPE token system (phosphor-green + amber on dark scope-screen)
- **shadcn/ui** (Card, Avatar primitives in `/components/ui`)
- **lucide-react** — all icons
- **Framer Motion** — Spotlight glow physics
- **@splinetool/react-spline** — lazy-loaded 3D scene in About section
- **@radix-ui/react-avatar** — accessible avatar primitive

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or pnpm

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

## Project Structure

```
scope-club/
├── app/
│   ├── globals.css          # Design tokens, scan-line overlay, utility classes
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Assembles all sections
├── components/
│   ├── ui/
│   │   ├── kinetic-matrix.tsx      # Component 1: Canvas spring-lattice hero
│   │   ├── 3d-testimonials.tsx     # Component 2: 3D perspective marquee
│   │   ├── splite.tsx              # Component 3: Lazy Spline scene wrapper
│   │   ├── spotlight.tsx           # Component 3: Framer Motion pointer glow
│   │   ├── halide-topo-hero.tsx    # Component 4: Parallax depth card (Zenith)
│   │   ├── card.tsx                # shadcn Card primitive
│   │   └── avatar.tsx              # shadcn Avatar primitive
│   └── sections/
│       ├── navbar.tsx         # Fixed nav, dark/light toggle, mobile menu
│       ├── hero.tsx           # Full-bleed hero with Kinetic Matrix
│       ├── about.tsx          # About + Spline 3D panel
│       ├── what-we-do.tsx     # Three pillar cards
│       ├── events.tsx         # Zenith (Halide card) + other events
│       ├── voices.tsx         # Testimonial marquee section
│       ├── resources.tsx      # Directory-listing resource grid
│       ├── contact.tsx        # Contact form + social + location
│       └── footer.tsx
├── lib/
│   └── utils.ts               # cn() helper
├── tailwind.config.ts         # Custom tokens, keyframes, marquee animations
└── components.json            # shadcn config
```

## Design Tokens

All tokens are CSS custom properties declared in `globals.css`:

| Token | Dark | Light |
|-------|------|-------|
| `--scope-bg` | `#081210` | `#f3f6f1` |
| `--scope-panel` | `#0b1614` | `#ffffff` |
| `--scope-ink` | `#eaf3ee` | `#0e1512` |
| `--scope-muted` | `#8fa69b` | `#5a7066` |
| `--scope-accent` | `#4ade94` | `#1f9d5c` |
| `--scope-amber` | `#ffb454` | `#b96a12` |

Dark/light toggle is in the Navbar. Preference is saved to `localStorage`.

## Component Notes

### Component 1 — Kinetic Matrix (Hero)
Canvas spring-mass lattice. Click anywhere to trigger a shockwave. Use the
**PULSE** button for a centred shockwave; **RUN / FREEZE** to pause physics.
Respects `prefers-reduced-motion` (animation still runs but at user's discretion
— the canvas event handlers are intact; for strict reduced-motion, the canvas
could be swapped for a static phosphor-grid SVG).

### Component 3 — Spline 3D Scene
The placeholder scene URL is `https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode`.
**Replace this** with a club-made model — a rotating "SCOPE" wordmark or a
stylised circuit/lens model exported from [Spline](https://spline.design).
Update the `scene` prop in `/components/sections/about.tsx`.

### Component 4 — Halide Topo / Zenith Card
Mouse parallax is scoped to the card bounds (uses `getBoundingClientRect()`).
On touch devices the parallax rests at the default `rotateX(55deg) rotateZ(-25deg)`
(no movement, which is appropriate since there's no pointer hover on touch).
`prefers-reduced-motion` disables the entrance animation and scroll-hint keyframe.

## Deployment to AWS (workshop path)

1. `npm run build` → creates the `.next/` production bundle.
2. For a static export, add `output: 'export'` to `next.config.mjs`, then run
   `npm run build`. The `out/` directory can be uploaded to an S3 bucket configured
   for static website hosting with a CloudFront distribution in front.
3. The easier path from the workshop: deploy to **Vercel** (`vercel --prod`) or
   **AWS Amplify** (connect your GitHub repo in the Amplify console).

## Customisation Checklist

- [ ] Replace the Spline placeholder scene URL (`about.tsx`) with a club-made 3D model
- [ ] Update `scope@mlrit.ac.in` email in `contact.tsx` with the real address
- [ ] Wire the contact form to a real backend (Formspree, AWS SES, or similar)
- [ ] Add real Instagram / LinkedIn URLs in `contact.tsx`
- [ ] Add real event photos by replacing the Unsplash URLs in `events.tsx`
- [ ] Add member avatar images to `3d-testimonials.tsx` (currently uses initials fallback)
- [ ] Add a `public/favicon.ico` (reticle icon works well)
