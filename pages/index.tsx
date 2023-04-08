import React from 'react'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextPage } from 'next'
import { useSessionContext, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Database } from '#/types/supabase'

const Home: NextPage = () => {
  const { isLoading, session, error } = useSessionContext()
  const user = useUser()
  const supabaseClient = useSupabaseClient<Database>()
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

export const getServerSideProps = async (context) => {
  const supabaseServerClient = createServerSupabaseClient<Database, 'public'>(context)
  const { data: conversations, error } = await supabaseServerClient
    .from('conversations')
    .select('*')
  if (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
  console.log('conversation', conversations)
  return {
    props: {
      conversations: conversations ?? [],
    },
  }
}

export default Home
