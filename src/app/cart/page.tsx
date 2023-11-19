import { BackNavigation } from '@/components/icon/back'
import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import { Suspense } from 'react'
import { CartCard } from '@/components/card/cart'

export default function Cart() {
  return (
    <main className={cls('page')}>
      <header className={styles.header}>
        {' '}
        <BackNavigation className={styles.back} />{' '}
        <h3 className={styles.heading}>Your Order</h3>
      </header>
      <section className={styles.section}>
        <h4 className={styles.title}>Order Items</h4>

        <div className={styles['order-items']}>
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        <div className={styles['total-wrapper']}>
          <h5 className={styles['total-heading']}>Total</h5>
          <h4 className={styles.total}>$100</h4>
        </div>
      </section>
      <Suspense>
        <section className={styles.section}>
          <h4 className={styles.title}>Recommendations</h4>
          <div></div>
        </section>
      </Suspense>
    </main>
  )
}
