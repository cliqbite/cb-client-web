'use client'

import authService from '@/modules/auth'
import Button from '.'
import styles from './style.module.scss'
import Icon from '../icon'

export default function LogoutButton() {
  const logOut = async () => {
    await authService.logout()
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
