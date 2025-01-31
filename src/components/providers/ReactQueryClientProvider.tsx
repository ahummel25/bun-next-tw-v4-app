'use client'

import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { useState } from 'react'

const persister = createSyncStoragePersister({
  storage: typeof window !== 'undefined' ? window.localStorage : null
})
const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * (60 * 1000), // 5 mins
      gcTime: 10 * (60 * 1000) // 10 mins
    }
  }
}

export const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions))

  return (
    <PersistQueryClientProvider
      client={queryClient}
      onSuccess={() => {
        queryClient.resumePausedMutations().then(() => queryClient.invalidateQueries())
      }}
      persistOptions={{
        persister, dehydrateOptions: {
          shouldDehydrateQuery: (query) =>
            query.state.status === 'success' && !!query.meta?.persist
        }
      }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}
