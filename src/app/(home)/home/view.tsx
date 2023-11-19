'use client'
import CardBasic from '@/components/card/basic'
import styles from './page.module.scss'
import CardSmall from '@/components/card/small'
import CardPromotion from '@/components/card/promotion'
import { cls } from '@/helpers/utils/classnames'
import useAuth from '@/hooks/useAuth'

const View = () => {
  useAuth()
  return (
    <main className={cls('page', styles.page)}>
      <CardPromotion />
      <CardBasic name='title' price={3} />
      <CardSmall name='title' />
    </main>
  )
}
export default View
