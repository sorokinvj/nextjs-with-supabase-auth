import { withPageAuth } from '@supabase/auth-helpers-nextjs'

export default function Profile({ user }) {
  console.log(user)
  return <div>Hello {user.name}</div>
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
