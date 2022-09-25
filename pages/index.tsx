import React from 'react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextPage } from 'next'
import { useUser } from '@supabase/auth-helpers-react'

const Home: NextPage = () => {
  const { user } = useUser()
  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-4'>
      <h1>Home</h1>
      {user ? (
        <>
          <p>Authenticated as {user?.email}</p>
          <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
        </>
      ) : (
        <p>Not authenticated</p>
      )}
    </div>
  )
}

export default Home
