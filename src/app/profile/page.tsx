import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import ProfileDetail from '@/components/profile'
import LogoutButton from '@/components/Logout'
import View from './view'
import { Suspense } from 'react'
import Loader from '@/components/ui/loader'

export default async function Profile() {
  return (
    <main className={cls('page', styles.page)}>
      <Suspense
        fallback={
          <Loader>
            <Loader.Default />
          </Loader>
        }
      >
        <ProfileDetail />
        <View />
      </Suspense>
      <LogoutButton />
    </main>
  )
}
