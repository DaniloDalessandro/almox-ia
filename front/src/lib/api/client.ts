import {
  getStoredTokens,
  clearStoredTokens,
  refreshAccessToken,
} from "./auth-tokens"

interface RequestOptions extends RequestInit {
  skipAuth?: boolean
}

class ApiClient {
  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { skipAuth = false, ...fetchOptions } = options

    const headers = new Headers(fetchOptions.headers)

    if (!skipAuth) {
      const { access } = getStoredTokens()
      if (access) {
        headers.set("Authorization", `Bearer ${access}`)
      }
    }

    if (!headers.has("Content-Type") && fetchOptions.body) {
      headers.set("Content-Type", "application/json")
    }

    const url = endpoint.startsWith("http") ? endpoint : `/api/v1${endpoint}`

    let response = await fetch(url, {
      ...fetchOptions,
      headers,
    })

    if (response.status === 401 && !skipAuth) {
      const refreshed = await refreshAccessToken()

      if (refreshed) {
        const { access } = getStoredTokens()
        if (access) {
          headers.set("Authorization", `Bearer ${access}`)
        }

        response = await fetch(url, {
          ...fetchOptions,
          headers,
        })
      } else {
        clearStoredTokens()
        window.location.href = "/login"
        throw new Error("Sessão expirada")
      }
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: "Erro na requisição" }))
      throw new Error(error.detail || `HTTP error! status: ${response.status}`)
    }

    if (response.status === 204) {
      return null as T
    }

    return response.json()
  }

  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" })
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async patch<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" })
  }
}

export const apiClient = new ApiClient()
