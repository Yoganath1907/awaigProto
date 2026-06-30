# awaig — AsWeirdAsItGets (Design-only Prototype)

## Problem Statement
Frontend-only two-page prototype for "awaig" (AsWeirdAsItGets), a social media web app for
AI-slop posts (funny/strange/cursed AI images + short captions). Design-only: no backend logic,
no DB, no real auth, no real uploads. Mock data and placeholder interactions only.

## Design Direction
Internet-native, careless, strange but visually controlled. Color system: black, white,
red (#ff0000). Fonts: Lilita One (chunky childish display) + Space Mono (raw internet UI).
Anti-polished, hard-edged (no rounded SaaS cards), bold typography, thick black borders.

## Tech Stack
- React 18 + react-router-dom (CRA / react-scripts), Tailwind CSS, lucide-react icons
- Minimal FastAPI backend only to keep supervisor healthy (/api/health) — not used by app
- Mock data in src/data/posts.js

## Pages Implemented (2026-06-30)
1. Login/Landing (`/`): desktop 60/40 split (black poster left, white login right),
   brand "awaig" (red) top-left, "AsWeird/AsItGets" poster wordmark, one subhero
   "The Internet's home for AI slop", red scribble + marquee texture. Login buttons
   (Google/Apple/Discord/X) black w/ white text → navigate to /feed. Mobile stacks vertically.
2. Feed (`/feed`): centered max-w-620px column, posts = avatar + username/handle + Follow
   + image (natural aspect preserved) + caption + Pass/Trash/Share actions. Nav: Profile,
   Liked, Following (desktop top bar + mobile bottom nav). Placeholder click states only.

## Status
- Both pages verified at desktop. Login→Feed navigation works. Mock data only.
- NO backend logic, NO auth, NO uploads (as specified — design prototype).

## Backlog / Next Action Items
- P1: Profile / Liked / Following destination views (currently nav toggles active state only)
- P2: Post detail / lightbox view, swipe gestures for Pass/Trash on mobile
- P2: Light empty-state + skeleton loaders for images
