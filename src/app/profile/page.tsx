import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import ProfileDetail from '@/components/profile'
import LogoutButton from '@/components/button/logout'
import View from './view'
import { Suspense } from 'react'

export default function Profile() {
  return (
    <main className={cls('page', styles.page)}>
      <ProfileDetail />
      <Suspense fallback={null}>
        <View />
      </Suspense>
      <LogoutButton />
    </main>
  )
}
