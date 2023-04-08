import { AppProps } from 'next/app'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { Database } from '../types/supabase'

import { Session, createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import 'styles/index.css'
import { ErrorBoundary } from '#/components'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient<Database>())

  return (
    <ErrorBoundary>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </ErrorBoundary>
  )
}
