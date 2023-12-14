import { cls } from '@/common/utils/classnames'
import Header from '@/components/header/merchant'
import Icon from '@/components/ui/icon'
import styles from './page.module.scss'
import Popover from './popover'

function Orders() {
  return (
    <main className='page'>
      <Header>
        <p>Orders</p>
      </Header>
      <section>
        <div className={styles.card}>
          <div className={cls(styles.flex)}>
            <label className={cls(styles.flex)}>
              <Icon icon='user' size={12} />
              <>Ravish Kumar</>
            </label>
            <label>Today, 12.30PM</label>
          </div>
          <div className={cls(styles.flex)}>
            <h3>#123786</h3>
            <Icon icon='kebab'></Icon>
          </div>
          <div className={cls(styles.flex)}>
            <button className={cls(styles.btn, styles.preparing)}>
              Preparing
            </button>
            <Popover fstate='preparing' />
          </div>
          <div className={cls(styles.flex, styles.coulmn)}>
            <div className={cls(styles.dropdown)}>
              <header className={styles.flex}>
                {' '}
                <strong>Order Items</strong>{' '}
                <Icon icon='forward' rotate={180} />
              </header>
              <section className={styles.flex}>
                <p>1X Biriyani</p>
                <p>Rs. 250.00</p>
              </section>
              <section className={styles.flex}>
                <p>2X Noodles</p>
                <p>Rs. 50.00</p>
              </section>
            </div>
          </div>
        </div>
        {/* -------   ------- */}
        <div className={styles.card}>
          <div className={cls(styles.flex)}>
            <label className={cls(styles.flex)}>
              <Icon icon='user' size={12} />
              <>Sharath </>
            </label>
            <label>Today, 12.25PM</label>
          </div>
          <div className={cls(styles.flex)}>
            <h3>#165456</h3>
            <Icon icon='kebab'></Icon>
          </div>
          <div className={cls(styles.flex)}>
            <button className={cls(styles.btn, styles.accepted)}>
              Accepted
            </button>
            <Popover fstate='accepted' />
          </div>
          <div className={cls(styles.flex, styles.coulmn)}>
            <div className={cls(styles.dropdown)}>
              <header className={styles.flex}>
                {' '}
                <strong>Order Items</strong>{' '}
                <Icon icon='forward' rotate={180} />
              </header>
              <section className={styles.flex}>
                <p>1X Biriyani</p>
                <p>Rs. 250.00</p>
              </section>
            </div>
          </div>
        </div>
        {/* -------   ------- */}
        <div className={styles.card}>
          <div className={cls(styles.flex)}>
            <label className={cls(styles.flex)}>
              <Icon icon='user' size={12} />
              <>Sanath</>
            </label>
            <label>Today, 12.00PM</label>
          </div>
          <div className={cls(styles.flex)}>
            <h3>#123456</h3>
            <Icon icon='kebab'></Icon>
          </div>
          <div className={cls(styles.flex)}>
            <button className={cls(styles.btn, styles.prepared)}>
              Prepared
            </button>
            <Popover fstate='prepared' />
          </div>
          <div className={cls(styles.flex, styles.coulmn)}>
            <div className={cls(styles.dropdown)}>
              <header className={styles.flex}>
                {' '}
                <strong>Order Items</strong>{' '}
                <Icon icon='forward' rotate={180} />
              </header>
              <section className={styles.flex}>
                <p>1X Chapati</p>
                <p>Rs. 25.00</p>
              </section>
              <section className={styles.flex}>
                <p>1X Idli</p>
                <p>Rs. 20.00</p>
              </section>
              <section className={styles.flex}>
                <p>2X Juice</p>
                <p>Rs. 20.00</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Orders
