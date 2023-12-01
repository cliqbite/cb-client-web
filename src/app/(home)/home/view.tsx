'use client'
import CardBasic from '@/components/card/basic'
import styles from './page.module.scss'
import CardSmall from '@/components/card/small'
import CardPromotion from '@/components/card/promotion'
import { cls } from '@/common/utils/classnames'
import useAuth from '@/client/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/common/constants/route'
import Loader from '@/components/ui/loader'

const View = () => {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  if (isLoading) {
    return (
      <Loader>
        <Loader.Dot />
      </Loader>
    )
  }
  if (!user) router.push(ROUTE.LOGIN)
  return (
    <main className={cls('page', styles.page)}>
      <CardPromotion />
      <CardBasic name='title' price={3} />
      <CardSmall name='title' />
    </main>
  )
}
export default View