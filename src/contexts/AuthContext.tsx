
import React, { createContext, useContext, useEffect, useState } from 'react'
import type { AuthUser } from '@/types'

type AuthContextType = {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (token: string, user: AuthUser) => void
  logout: () => void
  updateUser: (u: Partial<AuthUser>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const saved = localStorage.getItem('edupath_user')
    return saved ? JSON.parse(saved) : null
  })
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('edupath_token'))
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) localStorage.setItem('edupath_user', JSON.stringify(user))
    else localStorage.removeItem('edupath_user')
  }, [user])

  const login = (t: string, u: AuthUser) => {
    localStorage.setItem('edupath_token', t)
    setToken(t)
    setUser(u)
  }
  const logout = () => {
    localStorage.removeItem('edupath_token')
    localStorage.removeItem('edupath_user')
    setToken(null)
    setUser(null)
  }
  const updateUser = (partial: Partial<AuthUser>) => {
    if (user) setUser({ ...user, ...partial })
  }

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!token && !!user, isLoading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
