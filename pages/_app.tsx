import { AppProps } from 'next/app'
import { UserProvider } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import 'styles/index.css'
import { ErrorBoundary } from '#/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <UserProvider supabaseClient={supabaseClient}>
        <Component {...pageProps} />
      </UserProvider>
    </ErrorBoundary>
  )
}
