import { cls } from '@/common/utils/classnames'
import MerchantHeader from '@/components/header/merchant'
import type { FC } from 'react'
import styles from './page.module.scss'

interface PageProps {}

const Merchant: FC<PageProps> = ({}) => {
  return (
    <main className='page'>
      <MerchantHeader>
        <p>Dashboard</p>
      </MerchantHeader>
      <section className={cls(styles.card)}>
        <label>Customer</label>
        <h3>1256</h3>
        <label>
          <span>+25%</span> from previous month
        </label>
      </section>
      <section className={cls(styles.card)}>
        <label>Profits</label>
        <h3>40%</h3>
        <label>
          <span>+25%</span> from previous month
        </label>
      </section>
      <section className={cls(styles.card)}>
        <label>Revenue</label>
        <h3>Rs. 52,025</h3>
        <label>
          <span>+25%</span> from previous month
        </label>
      </section>
      <section className={cls(styles.card)}>
        <label>Top selling item</label>
        <div className={styles.metric}>
          <div className={styles.name}>
            <h4>Noodles</h4>
            <p>256 orders</p>
          </div>
          <div className={styles.progress}>
            <div
              className={styles.idicator}
              data-progress={90}
              style={{ width: '67%' }}
            />
          </div>
        </div>
        <div className={styles.metric}>
          <div className={styles.name}>
            <h4>Veg Frid Rice</h4>
            <p>251 orders</p>
          </div>
          <div className={styles.progress}>
            <div
              className={styles.idicator}
              data-progress={90}
              style={{ width: '87%' }}
            />
          </div>
        </div>
        <div className={styles.metric}>
          <div className={styles.name}>
            <h4>Paneer Manchurian</h4>
            <p>113 orders</p>
          </div>
          <div className={styles.progress}>
            <div
              className={styles.idicator}
              data-progress={90}
              style={{ width: '25%' }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
export default Merchant
