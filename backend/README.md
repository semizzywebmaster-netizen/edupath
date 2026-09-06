# EDUPATH Backend — Phase 01

Laravel API foundation for the EDUPATH learning ecosystem.

## Target architecture

React/Vite frontend → Laravel API → MySQL

The API is versioned under `/api/v1` and will become the single trusted backend boundary for authentication, authorization, learning data, AI orchestration, payments, credits, subscriptions, teacher/parent/school features, and administration.

## Phase 01 scope

- Laravel 11 + PHP 8.2+
- Sanctum reserved for production authentication
- MySQL configuration template
- Frontend CORS origin configuration
- Versioned API namespace
- Health endpoint: `GET /api/v1/health`
- Environment template with no secrets

## Local bootstrap

From `backend/` after the Laravel application files are installed:

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve --port=8000
```

Then verify:

```text
GET http://localhost:8000/api/v1/health
```

Expected response contains `success: true`, `service: EDUPATH API`, and `status: healthy`.

## Security rule

Never commit `.env`, API keys, payment secrets, AI provider keys, database passwords, or production credentials. The frontend must never contain private AI or payment credentials.

## Next phase

Phase 02 will establish the production database schema, relationships, indexes, UUID strategy, timestamps, and soft-delete policy before authentication is wired to persistent users and roles.
