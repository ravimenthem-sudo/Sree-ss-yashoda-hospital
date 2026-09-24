# Content TODO — Items Requiring Hospital Confirmation

This file lists everything the hospital must confirm or provide before the website goes live.

> **Last updated:** September 2024

---

## 🔴 Must Confirm Before Launch

### Contact & Identity
- [ ] **Postal code** — 515001, 515004 or 515005? Currently showing 515001. Omit from JSON-LD until confirmed.
- [ ] **Google Maps coordinates** — Confirm exact lat/lng for accurate map pin
- [ ] **Hospital email address** — Not currently listed. Confirm if to be shown on website.
- [ ] **Second phone number** (09054350104 appears in some directories) — Confirm if valid and whether to display

### Operating Information
- [ ] **OPD/Consultation hours** — Currently omitted. Confirm to add to FAQ and contact section.
- [ ] **Emergency service** — Does the hospital operate a 24-hour emergency? Set `features.showEmergency = true` once confirmed.

### Insurance & Payments
- [ ] **Insurance / cashless panel** — Which insurers, if any? Set `features.showInsurance = true` and list insurers once confirmed.

---

## 🟡 Important Before Launch

### Doctor Photos (Critical)
- [ ] **Doctor–photo mapping** — The current mapping (Dr. Siva Sankar Naik → doctor-sivasankar.png, Dr. R. Swetha → doctor-swetha.png) is based on visual interpretation of hospital branding visible in each image. **Hospital must confirm this is correct before going live.**
- [ ] **Replace with genuine photographs** — Current photos appear AI-generated. Real photos of actual doctors should be used for the live site.

### Doctor Information
- [ ] **Additional doctors** — Are there other doctors at the hospital not yet listed? Add to `src/content/doctors.ts`.
- [ ] **APMC registration number** — 53622 is visible on the building signage. Confirm if to include in website copy.

### Hospital Content
- [ ] **Hospital interior photos** — Interior photos for the About section (currently showing a placeholder).
- [ ] **Hospital logo confirmation** — Confirm the logo file `src/assets/logo/logo-full.png` is the correct/current version.

---

## 🟢 Nice to Have / Future

### Technical
- [ ] **Domain name** — Confirm final domain. Currently placeholder `sreessyashodahospital.in` in config.
- [ ] **Analytics provider** — Choose Plausible / Fathom / GA4. Set `VITE_ANALYTICS_ID` once decided.
- [ ] **Appointment submission method** — Currently in `mock` mode. Set `VITE_APPOINTMENT_MODE=whatsapp` (simplest) or `api` (with backend).
- [ ] **WhatsApp Business number** — If using WhatsApp mode, confirm the correct number.

### Content
- [ ] **Additional testimonials** — Once genuine patient testimonials are available (with consent), can be added.
- [ ] **Diagnostics & lab services** — If the hospital has in-house diagnostics, set `features.showDiagnostics = true` and add details.

### Legal
- [ ] **Privacy Policy** — Review and approve draft in `src/pages/PrivacyPage.tsx` with legal advisor
- [ ] **Terms of Use** — Review and approve draft in `src/pages/TermsPage.tsx` with legal advisor
- [ ] **Copyright year** — Update `legal.copyrightYear` in `site.config.ts` annually

---

## How to Update

All content is in `src/content/`. Components never hardcode data.

```
src/content/site.config.ts    — phone, address, feature flags
src/content/doctors.ts        — doctor list and photos
src/content/specialities.ts   — speciality descriptions
src/content/blog.ts           — blog article content
src/content/faq.ts            — FAQ questions and answers
```
