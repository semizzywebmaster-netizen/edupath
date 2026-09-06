import { apiClient } from './client'
import type { AuthUser } from '@/types'

export type AuthResponse = {
  success: boolean
  user: AuthUser
  token: string
  token_type?: string
}

export type LoginPayload = {
  email: string
  password: string
  device_name?: string
}

export type RegisterPayload = {
  name: string
  email: string
  password: string
  password_confirmation: string
  device_name?: string
}

export const authApi = {
  login: (payload: LoginPayload) =>
    apiClient.post<AuthResponse>('/auth/login', payload),

  register: (payload: RegisterPayload) =>
    apiClient.post<AuthResponse>('/auth/register', payload),

  me: () => apiClient.get<{ success: boolean; user: AuthUser }>('/auth/me'),

  logout: () => apiClient.post<{ success: boolean }>('/auth/logout'),
}
