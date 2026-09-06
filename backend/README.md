# EDUPATH Backend — Foundation + Authentication + RBAC

Laravel API foundation for the EDUPATH learning ecosystem.

## Target architecture

React/Vite frontend → Laravel API → MySQL

The API is versioned under `/api/v1` and is the trusted backend boundary for authentication, authorization, learning data, AI orchestration, payments, credits, subscriptions, teacher/parent/school features, and administration.

## Current backend foundation

The repository now contains the core Laravel application bootstrap and runtime entrypoints required for the backend layer:

- `artisan`
- `bootstrap/app.php`
- `bootstrap/providers.php`
- application/configuration files
- `public/index.php`
- web/API/console route entrypoints
- application service provider

The repository also contains the authentication and RBAC source layer:

- Laravel Sanctum token authentication
- Server-side registration and login validation
- Current authenticated user endpoint
- Token-scoped logout
- Persistent users and profiles
- Student role assignment on registration when seeded
- Roles and permissions relationships
- Role and permission middleware aliases
- Personal access token storage migration
- Seeded platform roles and baseline permissions

## Authentication endpoints

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me` — requires `auth:sanctum`
- `POST /api/v1/auth/logout` — requires `auth:sanctum`

## RBAC

Supported platform roles:

- `student`
- `teacher`
- `parent`
- `school_admin`
- `content_manager`
- `finance_admin`
- `support_admin`
- `super_admin`

Middleware aliases:

- `role:teacher`
- `role:school_admin`
- `permission:content.manage`

The `super_admin` role receives the permission-level bypass through the `User` model helper. Endpoint-specific authorization should still be applied to every protected administrative or operational route as those routes are introduced.

## Runtime verification status

**Not yet runtime-verified in this GitHub-only workflow.** The source files are committed, but Composer installation, Artisan execution, database migrations, HTTP requests, and automated tests have not been executed here. Do not claim the backend is deployed or fully operational until those checks pass in CI or a local/server environment.

After cloning and installing dependencies from `backend/`:

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

## Next production step

Wire real role/permission checks into protected application endpoints, then continue with profile and student onboarding persistence while keeping all authorization server-side.
