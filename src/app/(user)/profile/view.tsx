'use client'

import useAuth from '@/client/hooks/useAuth'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import { getPackageVersion } from '@/common/utils/version'
import LogoutButton from '@/components/Logout'
import ProfileDetail from '@/components/profile'
import Loader from '@/components/ui/loader'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

export default function View() {
  const router = useRouter()

  const { user, isLoading } = useAuth()

  if (!isLoading && !user) {
    router.push(ROUTE.LOGIN)
  }

  if (isLoading) {
    return (
      <Loader className={styles.loader}>
        <Loader.Avatar />
      </Loader>
    )
  }

  return (
    <section className={cls(styles.settings)}>
      <ProfileDetail />
      <ul className={styles['settings--content']}>
        <li>
          <Link href={ROUTE.ABOUT}>About Us</Link>
        </li>
      </ul>
      <div className={styles['settings--footer']}>
        <LogoutButton />
        <i>Application: v{getPackageVersion()}</i>
      </div>
    </section>
  )
}
