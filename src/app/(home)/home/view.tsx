'use client'
import CardBasic from '@/components/card/basic'
import styles from './page.module.scss'
import CardSmall from '@/components/card/small'
import CardPromotion from '@/components/card/promotion'
import { ROUTE } from '@/helpers/constants/route'
import { log } from '@/helpers/logger'
import { useRouter } from 'next/navigation'
import Button from '@/components/button'
import authService from '@/modules/auth'

const View = () => {
  const user = authService.getCurrentUser()
  const router = useRouter()
  log('home::user::', user)
  if (!user) router.push(ROUTE.LOGIN)
  return (
    <>
      <Button btn='base' onClick={authService.logout}>
        LogOut
      </Button>
      <CardPromotion />
      <CardBasic name='title' price={3} />
      <CardSmall name='title' />
    </>
  )
}
export default View
