/**
 * Utilitarios compartilhados para gerenciamento de tokens JWT.
 * Usado por AuthContext e ApiClient para evitar duplicacao.
 */

const isSecure = typeof window !== "undefined" && window.location.protocol === "https:"

function setCookie(name: string, value: string, maxAge?: number) {
  let cookie = `${name}=${value}; path=/; SameSite=Strict`
  if (isSecure) cookie += "; Secure"
  if (maxAge !== undefined) cookie += `; max-age=${maxAge}`
  document.cookie = cookie
}

function deleteCookie(name: string) {
  let cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict`
  if (isSecure) cookie += "; Secure"
  document.cookie = cookie
}

export function getStoredTokens() {
  if (typeof window === "undefined") return { access: null, refresh: null }
  return {
    access: localStorage.getItem("access_token"),
    refresh: localStorage.getItem("refresh_token"),
  }
}

export function storeTokens(access: string, refresh?: string) {
  localStorage.setItem("access_token", access)
  setCookie("access_token", access)

  if (refresh) {
    localStorage.setItem("refresh_token", refresh)
    setCookie("refresh_token", refresh)
  }
}

export function clearStoredTokens() {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("user")
  deleteCookie("access_token")
  deleteCookie("refresh_token")
}

export async function refreshAccessToken(): Promise<boolean> {
  const { refresh } = getStoredTokens()
  if (!refresh) return false

  try {
    const response = await fetch("/api/v1/accounts/token/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    })

    if (!response.ok) return false

    const data = await response.json()
    storeTokens(data.access, data.refresh)
    return true
  } catch {
    return false
  }
}
