# EDUPATH Backend — Phases 01–03

Laravel API foundation and authentication layer for the EDUPATH learning ecosystem.

## Target architecture

React/Vite frontend → Laravel API → MySQL

The API is versioned under `/api/v1` and is the trusted backend boundary for authentication, authorization, learning data, AI orchestration, payments, credits, subscriptions, teacher/parent/school features, and administration.

## Phase 03 authentication scope

- Laravel Sanctum token authentication
- Registration with server-side validation
- Login with credential validation and rate limiting
- Current authenticated user endpoint
- Token-scoped logout
- Persistent users and profiles
- Student role assignment when the seeded role exists
- Roles and permissions relationships
- Personal access token storage migration
- Password hashing through Laravel's `hashed` cast

### Endpoints

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me` — requires `auth:sanctum`
- `POST /api/v1/auth/logout` — requires `auth:sanctum`

## Important bootstrap requirement

The repository currently contains the backend application layer and Composer manifest, but it does **not yet contain a complete generated Laravel application skeleton** (`artisan`, `bootstrap/app.php`, framework config, etc.). Therefore these endpoints are staged in source control but must not be described as runtime-verified until the Laravel skeleton is installed and the test suite can execute.

From `backend/` after the Laravel application files are installed:

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve --port=8000
```

Then verify:

```text
GET http://localhost:8000/api/v1/health
```

## Security rules

Never commit `.env`, API keys, payment secrets, AI provider keys, database passwords, or production credentials. The frontend must never contain private AI or payment credentials. Authentication and authorization must remain server-side.

## Next phase

Phase 04 removes the frontend demo authentication bypass and makes protected routes depend on real authentication in production.
