'use client'

import authService from '@/client/modules/auth'
import Button from '../ui/button'
import styles from './style.module.scss'
import Icon from '../ui/icon'
import { useAccount } from '@/client/store'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/common/constants/route'

export default function LogoutButton() {
  const user = useAccount((state) => state.user)
  const router = useRouter()

  if (!user) return <></>

  const logOut = async () => {
    await authService.logout()
    router.push(ROUTE.LOGIN)
  }

  return (
    <Button
      btn='outline'
      type='button'
      onClick={logOut}
      className={styles.logout}
    >
      <Icon icon='logout' size={16} />
      LogOut
    </Button>
  )
}
