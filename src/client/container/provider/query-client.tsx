'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// TODO: move to stable version
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { useState, type ReactNode } from 'react'

export function TanstackQueryClient(props: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000
          }
        }
      })
  )

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>
          {props.children}
        </ReactQueryStreamedHydration>
        {<ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  )
}

export default TanstackQueryClient
