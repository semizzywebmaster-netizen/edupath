
export type UserRole = 'student' | 'teacher' | 'parent' | 'school_admin' | 'admin'
export type EducationLevel = 'primary' | 'junior_secondary' | 'senior_secondary' | 'university' | 'polytechnic' | 'college_of_education' | 'nursing' | 'vocational'
export type AuthUser = {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  verified: boolean
}
export type ApiResponse<T> = {
  data: T
  message?: string
  meta?: { current_page: number; last_page: number; per_page: number; total: number }
}
export type ApiError = {
  message: string
  errors?: Record<string, string[]>
  status: number
}
export type Course = {
  id: string
  title: string
  slug: string
  description: string
  subject: string
  level: EducationLevel
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  progress?: number
  thumbnail: string
  duration: string
  lessonsCount: number
}
export type PaginatedParams = {
  page?: number
  per_page?: number
  search?: string
  sort?: string
  filter?: Record<string, string>
}
