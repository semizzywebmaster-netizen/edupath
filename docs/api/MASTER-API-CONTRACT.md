
# EDUPATH Master API Contract

Base: /api/v1/

## Auth
POST /auth/login
POST /auth/register
POST /auth/verify
POST /auth/forgot-password
POST /auth/reset-password
GET /auth/me

Headers:
- Authorization: Bearer <token>
- X-Request-ID: uuid
- X-Idempotency-Key: for POST
- X-Request-Fingerprint: optional

## Core Resources
- /courses
- /subjects
- /profile
- /onboarding
- /learning
- /practice
- /ai/*
- /exams
- /books
- /credits, /wallet, /subscriptions
- /community
- /careers, /scholarships
- /notifications
- /search

All responses follow ApiResponse<T> envelope.

Error codes: 400,401,403,404,419,422,429,500,502,503

No AI provider keys in frontend — all via Laravel → Orchestrator.
