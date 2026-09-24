# Sree SS Yashoda Hospital — Website

**Production-ready marketing website** for Sree SS Yashoda Hospital, Anantapur, Andhra Pradesh.

Built with Vite + React 18 + TypeScript + Tailwind CSS v3 + Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|---|---|---|
| `VITE_APPOINTMENT_MODE` | No | `mock` (default) \| `whatsapp` \| `api` |
| `VITE_WHATSAPP_NUMBER` | For whatsapp mode | e.g. `918712251147` |
| `VITE_APPOINTMENT_ENDPOINT` | For api mode | POST endpoint URL |
| `VITE_ANALYTICS_ID` | No | Analytics provider ID |

---

## Editing Content

**All hospital data is in `src/content/`** — never in component files.

| File | What it controls |
|---|---|
| `site.config.ts` | Name, phone, address, feature flags |
| `doctors.ts` | Doctor list, photos, bios, qualifications |
| `specialities.ts` | Speciality names, descriptions, slugs |
| `blog.ts` | Blog article content |
| `faq.ts` | FAQ questions and answers |

### Feature Flags

In `site.config.ts`, set `features.showEmergency = true` to show emergency info once confirmed with the hospital. Same for `showInsurance`, `showDiagnostics`, etc.

---

## Swapping Images

| Image | Location |
|---|---|
| Logo | `src/assets/logo/logo-full.png` |
| Dr. Siva Sankar Naik | `public/assets/doctors/doctor-sivasankar.png` |
| Dr. R. Swetha | `public/assets/doctors/doctor-swetha.png` |
| Hospital exterior | `src/assets/hero/hospital.png` |

After swapping, update the `photo` field in `src/content/doctors.ts` if needed.

---

## Appointment Mode

Set `VITE_APPOINTMENT_MODE` in `.env.local`:

- **`mock`** — console log only, for development
- **`whatsapp`** — opens `wa.me` with pre-filled appointment text
- **`api`** — POST to `VITE_APPOINTMENT_ENDPOINT` (see `docs/appointment-endpoint.md`)

---

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Type check + production build
npm run type-check   # TypeScript check only
npm run lint         # ESLint
npm run test         # Vitest unit tests
```

---

## Deploying

### Vercel
```bash
npm i -g vercel
vercel --prod
```
Set env vars in Vercel dashboard.

### Netlify
```bash
npm run build
# Drag-drop dist/ to Netlify, or connect GitHub repo
# Set publish dir to dist/
```

### Cloudflare Pages
Connect GitHub repo, set build command `npm run build:only`, output `dist/`.

---

## Project Structure

```
src/
  app/            router, providers
  components/
    ui/           reusable UI primitives
    layout/       Navbar, Footer, StickyCallBar
    sections/     Hero, TrustStrip, About, Specialities, Doctors...
    effects/      LogoWatermarkField
  content/        All hospital data (edit here)
  hooks/          Custom hooks
  lib/            Analytics, appointment, cn utilities
  pages/          Route-level page components
  styles/         globals.css (design tokens + utilities)
  assets/         Logo, doctor photos, hero image
public/           Static files (robots.txt, sitemap.xml, favicon)
```
