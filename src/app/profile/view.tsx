'use client'

import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/helpers/constants/route'
import useAuth from '@/helpers/hooks/useAuth'
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
