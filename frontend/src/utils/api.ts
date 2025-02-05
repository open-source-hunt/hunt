const API_URL = import.meta.env.VITE_API_URL || 'https://api.opensourcehunt.io'

export async function fetchApi(path: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
    return fetch(`${API_URL}/api/${path}`, init)
}