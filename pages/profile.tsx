import { User, withPageAuth } from '@supabase/auth-helpers-nextjs'

interface Props {
  user: User
}
const Profile: React.FC<Props> = ({ user }) => {
  return <div>Hello {user.email}</div>
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
