import React, { createContext, useContext, useEffect, useState } from 'react'
import type { AuthUser } from '@/types'
import { authApi } from '@/services/api/auth'

type AuthContextType = {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (token: string, user: AuthUser) => void
  logout: () => Promise<void>
  updateUser: (u: Partial<AuthUser>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const USER_KEY = 'edupath_user'
const TOKEN_KEY = 'edupath_token'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem(USER_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      localStorage.removeItem(USER_KEY)
      return null
    }
  })
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY))
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let active = true

    const restoreSession = async () => {
      const savedToken = localStorage.getItem(TOKEN_KEY)
      if (!savedToken) {
        if (active) setIsLoading(false)
        return
      }

      try {
        const response = await authApi.me()
        if (!active) return
        setUser(response.user)
        setToken(savedToken)
      } catch {
        if (!active) return
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(USER_KEY)
        setToken(null)
        setUser(null)
      } finally {
        if (active) setIsLoading(false)
      }
    }

    void restoreSession()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
    else localStorage.removeItem(USER_KEY)
  }, [user])

  const login = (t: string, u: AuthUser) => {
    localStorage.setItem(TOKEN_KEY, t)
    setToken(t)
    setUser(u)
  }

  const logout = async () => {
    try {
      if (token) await authApi.logout()
    } catch {
      // Local session is still cleared if the server is unavailable.
    } finally {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
      setToken(null)
      setUser(null)
    }
  }

  const updateUser = (partial: Partial<AuthUser>) => {
    if (user) setUser({ ...user, ...partial })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
