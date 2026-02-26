"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { jwtDecode } from "jwt-decode"
import {
  getStoredTokens,
  storeTokens,
  clearStoredTokens,
  refreshAccessToken as refreshToken,
} from "@/lib/api/auth-tokens"

interface User {
  id: number
  email: string
  name: string
  cpf: string | null
  phone: string | null
  avatar: string | null
  direction_id: number | null
  direction_name: string | null
  management_id: number | null
  management_name: string | null
  coordination_id: number | null
  coordination_name: string | null
}

interface AuthContextType {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  refreshAccessToken: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const clearAuth = useCallback(() => {
    setAccessToken(null)
    setUser(null)
    clearStoredTokens()
  }, [])

  const logout = useCallback(async () => {
    const { refresh, access } = getStoredTokens()

    if (refresh && access) {
      try {
        await fetch("/api/v1/accounts/logout/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access}`,
          },
          body: JSON.stringify({ refresh }),
        })
      } catch {
        // Silently fail - we're logging out anyway
      }
    }

    clearAuth()
    window.location.href = "/login"
  }, [clearAuth])

  const refreshAccessTokenHandler = useCallback(async (): Promise<boolean> => {
    const { refresh } = getStoredTokens()
    if (!refresh) {
      clearAuth()
      return false
    }

    const success = await refreshToken()
    if (!success) {
      clearAuth()
      return false
    }

    const { access } = getStoredTokens()
    setAccessToken(access)
    return true
  }, [clearAuth])

  // Initialize from localStorage
  useEffect(() => {
    const { access: storedToken } = getStoredTokens()
    const storedUser = localStorage.getItem("user")

    if (storedToken && storedUser) {
      try {
        const decoded = jwtDecode<{ exp: number }>(storedToken)
        const isExpired = decoded.exp * 1000 < Date.now()

        if (isExpired) {
          refreshAccessTokenHandler().then((success) => {
            if (success) {
              setUser(JSON.parse(storedUser))
            }
            setIsLoading(false)
          })
          return
        }

        setAccessToken(storedToken)
        setUser(JSON.parse(storedUser))
      } catch {
        clearStoredTokens()
      }
    }
    setIsLoading(false)
  }, [refreshAccessTokenHandler])

  // Auto-refresh token before expiry
  useEffect(() => {
    if (!accessToken) return

    const checkTokenExpiry = () => {
      try {
        const decoded = jwtDecode<{ exp: number }>(accessToken)
        const expiresIn = decoded.exp * 1000 - Date.now()

        if (expiresIn < 5 * 60 * 1000) {
          refreshAccessTokenHandler()
        }
      } catch {
        // Invalid token
      }
    }

    const interval = setInterval(checkTokenExpiry, 30000)
    return () => clearInterval(interval)
  }, [accessToken, refreshAccessTokenHandler])

  const login = async (email: string, password: string) => {
    const response = await fetch("/api/v1/accounts/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => null)
      throw new Error(
        error?.detail || error?.non_field_errors?.[0] || "Email ou senha inválidos"
      )
    }

    const data = await response.json()

    setAccessToken(data.access)
    setUser(data.user)

    storeTokens(data.access, data.refresh)
    localStorage.setItem("user", JSON.stringify(data.user))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isAuthenticated: !!accessToken,
        isLoading,
        login,
        logout,
        refreshAccessToken: refreshAccessTokenHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider")
  }
  return context
}
