
# EDUPATH — AI-Powered Education & Learning Ecosystem

**Owner:** SEMIZZY WEBMASTER  
**Tagline:** We Design. We Develop. We Deliver.

## Stack
- React 18 + TypeScript
- Vite
- React Router 6 (true multi-page)
- Tailwind CSS
- PWA (manifest + service worker)

## Architecture
- True multi-page React: every major feature has its own route, page component, layout, reusable components, loading/error/empty states
- Central API layer: src/services/api/client.ts uses VITE_API_BASE_URL=/api/v1/
- No secrets in frontend — AI via Laravel → Central Orchestrator → Provider Adapter
- Payments via Laravel → Payment Service → Paystack/OPay
- Demo Mode globally

## Routes
Public: /, /about, /features, /ai-learning/*, /exam-prep, /for-teachers, /for-parents, /for-schools, /careers, /pricing, /faq, /contact, /privacy, /terms, /cookies
Auth: /auth/login, register, verify, forgot-password, reset-password, change-password, logout
App: /app/dashboard, onboarding/*, learning, courses, subjects, practice, progress, recommendations, goals, profile, settings, ai/*, learning-brain, books, credits/wallet/subscriptions, referrals/rewards, community, notifications
Teacher: /teacher/*
Parent: /parent/*
School: /school/*

## Development
```bash
bun install
bun run dev
bun run build
```

## Deployment
Compatible with Cloudflare Pages, Vercel, Netlify — SPA routing configured.

## 40-Phase Autopilot
All 40 phases completed — see docs/frontend/AUTOPILOT-PHASE-STATUS.md
