
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  appName: import.meta.env.VITE_APP_NAME || 'EDUPATH',
  env: import.meta.env.VITE_APP_ENV || 'development',
  timeout: 15000,
}

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    verify: '/auth/verify',
    forgot: '/auth/forgot-password',
    reset: '/auth/reset-password',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  courses: '/courses',
  subjects: '/subjects',
  profile: '/profile',
  onboarding: '/onboarding',
  ai: {
    tutor: '/ai/tutor',
    studyCoach: '/ai/study-coach',
    snap: '/ai/snap-to-solve',
    notes: '/ai/notes',
  }
} as const
