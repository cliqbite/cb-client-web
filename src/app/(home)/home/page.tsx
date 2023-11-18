'use client'
import Button from '@/components/button'
import { ROUTE } from '@/helpers/constants/route'
import { log } from '@/helpers/logger'
import authService from '@/modules/auth'
import { useRouter } from 'next/navigation'
import { useEffect, type FC } from 'react'
import View from './view'
import Header from '@/components/header'

const Home: FC = () => {
  const user = authService.getCurrentUser()
  const router = useRouter()
  if (!user) router.push(ROUTE.LOGIN)

  log(user)
  useEffect(() => {}, [])
  return (
    <main>
      <Header />

      <h1>Home</h1>
      <Button btn='base' onClick={authService.logout}>
        LogOut
      </Button>
      <View />
    </main>
  )
}
export default Home
