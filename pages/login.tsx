import { useSessionContext, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { Database } from '#/types/supabase'

const LoginPage: NextPage = () => {
  const { isLoading, session, error } = useSessionContext()
  const user = useUser()
  const supabaseClient = useSupabaseClient<Database>()

  const [authEvent, setAuthEvent] = useState('')
  const isPasswordRecovery = authEvent === 'PASSWORD_RECOVERY'
  const router = useRouter()

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event) => {
      if (event !== 'TOKEN_REFRESHED') {
        setAuthEvent(event)
      }
    })
  })

  if (!user) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center p-4'>
        <div>
          {error && <p>{error.message}</p>}
          <Auth
            appearance={{ theme: ThemeSupa }}
            redirectTo={(router.query.refirectFrom as string) || '/'}
            view={isPasswordRecovery ? 'update_password' : 'sign_in'}
            supabaseClient={supabaseClient}
            providers={null}
            // scopes={{github: 'repo'}} // TODO: enable scopes in Auth component.
            socialLayout='horizontal'
          />
        </div>
      </div>
    )
  } else {
    router.push('/', undefined, { shallow: true })
  }
}

export default LoginPage
