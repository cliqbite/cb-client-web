'use client'

import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/helpers/constants/route'

export default function View() {
  const router = useRouter()
  const user = useAuth()
  if (!user) router.push(ROUTE.LOGIN)
  return <section className={cls(styles.settings)}></section>
}
