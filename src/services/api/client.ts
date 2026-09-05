
import { API_CONFIG } from './config'

type RequestOptions = RequestInit & { idempotencyKey?: string }

class ApiClient {
  private baseURL: string
  constructor(baseURL: string) {
    this.baseURL = baseURL
  }
  private getHeaders(idempotencyKey?: string) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Request-ID': crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    }
    if (idempotencyKey) headers['X-Idempotency-Key'] = idempotencyKey
    const token = localStorage.getItem('edupath_token')
    if (token) headers['Authorization'] = `Bearer ${token}`
    return headers
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const { idempotencyKey, ...fetchOptions } = options
    const response = await fetch(url, {
      ...fetchOptions,
      headers: { ...this.getHeaders(idempotencyKey), ...(fetchOptions.headers as any) },
    })

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({ message: response.statusText }))
      const error: any = new Error(errorBody.message || 'Request failed')
      error.status = response.status
      error.data = errorBody
      if (response.status === 401) {
        localStorage.removeItem('edupath_token')
        // window.location.href = '/auth/login'
      }
      throw error
    }
    if (response.status === 204) return {} as T
    return response.json()
  }

  get<T>(endpoint: string, params?: Record<string, any>) {
    const qs = params ? `?${new URLSearchParams(params).toString()}` : ''
    return this.request<T>(`${endpoint}${qs}`, { method: 'GET' })
  }
  post<T>(endpoint: string, body?: any, opts?: RequestOptions) {
    return this.request<T>(endpoint, { method: 'POST', body: JSON.stringify(body), ...opts })
  }
  put<T>(endpoint: string, body?: any) {
    return this.request<T>(endpoint, { method: 'PUT', body: JSON.stringify(body) })
  }
  delete<T>(endpoint: string) {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }
}

export const apiClient = new ApiClient(API_CONFIG.baseURL)
