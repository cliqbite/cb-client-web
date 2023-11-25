'use client'

import { cls } from '@/common/utils/classnames'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/common/constants/route'
import useAuth from '@/client/hooks/useAuth'
import Loader from '@/components/ui/loader'

export default function View() {
  const router = useRouter()

  const { user, isLoading } = useAuth()

  if (!isLoading && !user) {
    router.push(ROUTE.LOGIN)
  }

  return (
    <section className={cls(styles.settings)}>
      {isLoading && (
        <Loader className={styles.loader}>
          <Loader.Avatar />
        </Loader>
      )}
    </section>
  )
}
