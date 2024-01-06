import { nextApiHeader } from '@/server/validator/next-api'

type CustomFetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: string | Record<string, any>
  signal?: AbortSignal
}

export const customFetch = async (
  url: string,
  options: CustomFetchOptions
): Promise<Response> => {
  const headers = {
    ...options.headers,
    // Add your custom headers here
    ...nextApiHeader
  }
  // TODO: repair this
  const requestOptions: RequestInit = {
    method: options.method,
    // headers: new Headers(headers),
    // body: options.body && JSON.stringify(options.body),
    signal: options?.signal
  }

  return fetch(url, requestOptions)
}
