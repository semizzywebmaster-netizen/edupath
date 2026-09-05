
# EDUPATH API Integration Readiness

## Base
/api/v1/ via VITE_API_BASE_URL

## Client
src/services/api/client.ts
- get, post, put, delete
- Headers: Content-Type, Accept, X-Request-ID (uuid), X-Idempotency-Key optional, Authorization Bearer token from localStorage edupath_token
- Timeout 15000 (conceptual, fetch doesn't have timeout but could add AbortController)
- 401 handling clears token

## Config
src/services/api/config.ts
- baseURL, appName, env, timeout
- endpoints: auth.login/register/verify/forgot/reset/logout/me, courses, subjects, profile, onboarding, ai.tutor/studyCoach/snap/notes

## Types
src/types/index.ts
- UserRole, EducationLevel, AuthUser, ApiResponse<T> with data/message/meta, ApiError, Course, PaginatedParams

## Errors
src/services/api/errors.ts
- getErrorMessage, isAuthError 401, isValidationError 422

## Integration Points
Frontend prepares API calls but does NOT implement backend:
- Auth: login, register, verify, forgot, reset, me
- Courses: list, detail, enroll, progress
- Subjects: curriculum → subject → topic
- Practice: questions, quiz, explanations
- AI: tutor chat, study-coach, snap-to-solve upload, notes generation
- Exams: list, detail, timer, review, results
- Credits/Wallet/Subscriptions: balance, history, transactions
- Community: posts, comments, groups
- Search: universal search
- Notifications

All via apiClient.request<T>

## Headers Required
- Authorization: Bearer <token>
- X-Request-ID
- X-Idempotency-Key for POST idempotent
- X-Request-Fingerprint optional

## Status Codes
Frontend handles 400,401,403,404,419,422,429,500,502,503 with ErrorState and Toast.

## Demo Mode
When VITE_API_BASE_URL unreachable, DemoModeContext true shows mock data from src/mocks, badge "Demo Mode — No real AI, payments..."

## No Backend Built
This is frontend-only — no Laravel, PHP, MySQL, AI provider integration.
