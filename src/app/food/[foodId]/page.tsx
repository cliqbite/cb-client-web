import fallback16x9 from '@/assets/png/fallback16x9.png'
import { log } from '@/common/log'
import { cls } from '@/common/utils/classnames'
import { BackNavigation } from '@/components/ui/icon/back'
import Image from '@/components/ui/image'
import { Suspense } from 'react'
import styles from './page.module.scss'

interface FoodDetailProps {
  params: { slug: string }
}

export default function FoodDetail(props: FoodDetailProps) {
  const { params } = props
  log('food-detail::params::', params)
  return (
    <main>
      <section className={cls(styles['img-wrapper'])}>
        <BackNavigation className={styles.back} />
        <Image
          src={fallback16x9}
          alt=''
          className={styles.img}
          loading='lazy'
        />
      </section>
      <section className={cls('page', styles['detail-wrapper'])}>
        <h1>food name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nulla.
        </p>
        <p>price: 100$</p>
      </section>
      <section className={cls('page', styles['recommend-wrapper'])}>
        <Suspense fallback={null}></Suspense>
      </section>
    </main>
  )
}
