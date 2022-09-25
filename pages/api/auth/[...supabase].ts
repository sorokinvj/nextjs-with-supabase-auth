import { handleAuth } from '@supabase/auth-helpers-nextjs'

export default handleAuth({
  cookieOptions: {
    lifetime: 60 * 60 * 24,
  },
})
