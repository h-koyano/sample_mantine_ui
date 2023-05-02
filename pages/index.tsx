import type { NextPage } from 'next'
import useStore from '../store'
import { supabase } from '../utils/supabase'
import { useEffect } from 'react'
import { DashBoard } from '../components/DashBoard'
import { Auth } from '../components/Auth'

const Home: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)
  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])
  return <>{session ? <DashBoard /> : <Auth />}</>
}

export default Home
