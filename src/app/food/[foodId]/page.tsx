import { log } from '@/helpers/logger'
import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import Image from 'next/image'
import fallback16x9 from '@/assets/png/fallback16x9.png'
import { Suspense } from 'react'
import { BackNavigation } from '@/components/ui/icon/back'

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
