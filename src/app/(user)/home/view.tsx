'use client'
import useAuth from '@/client/hooks/useAuth'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import CardBasic from '@/components/card/basic'
import CardPromotion from '@/components/card/promotion'
import CardSmall from '@/components/card/small'
import Loader from '@/components/ui/loader'
import Rail from '@/components/ui/rail'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

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
    <main className={cls('contain', styles.page)}>
      <CardPromotion />
      <Rail>
        {'testing'.split('').map((_, key) => (
          <Rail.Item key={key}>
            <CardBasic name='title' price={3} />
          </Rail.Item>
        ))}
      </Rail>
      <Rail>
        {'sample testing'.split('').map((_, key) => (
          <Rail.Item key={key}>
            <CardSmall name='title' />
          </Rail.Item>
        ))}
      </Rail>
    </main>
  )
}
export default View
