import { useUser } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/ui'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

const LoginPage: NextPage = () => {
  const { user, error } = useUser()
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
            supabaseClient={supabaseClient}
            socialLayout='horizontal'
            socialButtonSize='xlarge'
            redirectTo='/'
            view={isPasswordRecovery ? 'update_password' : 'sign_in'}
          />
        </div>
      </div>
    )
  } else {
    router.push('/', undefined, { shallow: true })
  }
}

export default LoginPage
