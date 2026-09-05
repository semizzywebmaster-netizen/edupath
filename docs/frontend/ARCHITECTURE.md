
# EDUPATH Frontend Architecture

## Overview
Multi-page React app using React Router, true route-based architecture, not single-page sections.

## Stack
- React 18 + TypeScript
- Vite 5
- React Router 6
- Tailwind CSS + CSS variables
- PWA

## Folder Structure
src/
  components/ui (20) - design system
  components/common - DemoBadge
  components/layout - PublicNav, PublicFooter
  contexts - Auth, DemoMode, Toast
  hooks - useAuth, useToast, useDemoMode, useMediaQuery
  layouts - PublicLayout, AuthLayout, AppLayout
  lib/utils - cn, formatCurrency
  mocks - courses
  pages/public - Home, About, Features, ForTeachers, ForParents, ForSchools, ExamPrep, Careers, Pricing, FAQ, Contact, AiLearning/*
  pages/auth - Login, Register, Verify, Forgot, Reset, Change, Logout
  pages/app - Dashboard, Onboarding*, Learning, Courses, CourseDetail, Subjects, Practice, Progress, Recommendations, Goals, Profile, Settings, AiHub, Ai*, LearningBrain, Credits, Gamification, Notifications
  pages/teacher, parent, school, community, careers, exam, books, search, legal
  routes - index.tsx (106 routes), ProtectedRoute
  services/api - client.ts, config.ts, errors.ts
  styles/globals.css
  types/index.ts
  utils/index.ts

## Design System
Tokens in globals.css :root hsl vars, Tailwind extends primary 50/100/500/600/700, secondary, muted, etc. Components: Button variants default/destructive/outline/secondary/ghost/link sizes default/sm/lg/icon isLoading. Input with label/error/leftIcon/rightIcon. Card, Badge variants, Alert variants, Modal, Tabs, Dropdown, Tooltip, Skeleton, Loader, EmptyState, ErrorState, PageContainer.

## Routing
BrowserRouter, 106 paths, protected routes via ProtectedRoute, public routes, 404 *, SPA compatible.

## API Layer
Central apiClient class, baseURL VITE_API_BASE_URL, headers X-Request-ID, X-Idempotency-Key, Authorization Bearer, JSON, timeout, error handling 401 clears token.

## Security
No secrets in frontend, backend authoritative, no direct AI provider calls, Verified vs AI labels.

## PWA
manifest.json, sw.js cache-first, favicon.svg, theme-color, installable.

## Demo Mode
DemoModeContext isDemoMode true default, DemoBadge fixed bottom-left, Badge warning.
