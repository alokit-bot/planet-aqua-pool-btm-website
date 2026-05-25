# Planet Aqua Pool — Website PRD

## Original Problem
Frontend-only marketing site for Planet Aqua Pool, a swimming pool & coaching centre in BTM Layout, Bengaluru. 4.6★ / 885+ reviews. No backend, no testing agent. Build in one go.

## Personas
- Parents enrolling kids (esp. summer batches)
- Adult professionals wanting morning/evening swim routine
- Beginners seeking coached classes
- Drop-in day-pass visitors

## Architecture
- React + Tailwind + Shadcn UI (frontend-only)
- Single-page landing with hash-anchor navigation
- Static data in `/src/data/site.js`
- Font: Poppins (display) + Inter (body), gold/ocean/aqua palette

## What's Implemented (2025-12)
- Sticky transparent → solid Navbar with mobile drawer
- Hero with underwater bg, floating bubbles, rating badge, dual CTAs, info strip
- About: copy + 4-stat grid (members, rating, hours, quote)
- Programs: 6 pricing cards (Day Pass, Beginner, Kids, Monthly, Personal, Annual) with badges
- Why Choose Us: 6 reasons with lucide icons
- Testimonials: 4 paraphrased reviews on dark ocean bg
- Gallery: 6-image asymmetric grid with hover captions
- Contact: phone card (tel:), address card (maps link), hours, amenities, embedded Google Map, final CTA banner
- Sticky mobile call bar
- Footer with quick links

## Backlog (P1/P2)
- P1: Online enquiry form (would need backend)
- P1: Batch timing schedule table
- P2: Coach profile pages
- P2: Online membership purchase / Razorpay
