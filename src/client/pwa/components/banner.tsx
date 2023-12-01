import { cls } from '@/common/utils/classnames'
import { OnClick } from '..'
import styles from './style.module.scss'
import Button from '@/components/ui/button'

export function PWAPromptBanner({ onClick }: OnClick) {
  // Install our free web app to keep track of your orders.
  return (
    <section className={cls(styles.toast)}>
      <h5 className={cls(styles.header)}>
        {' '}
        Keep App, For Offline & Quick Access!
      </h5>
      <p className={cls(styles.body)}>
        Install our free web app to keep track of your orders.
      </p>
      <Button btn='solid' onClick={onClick} className={cls(styles.btn)}>
        <label>Install Now</label>
        <svg
          className={cls(styles.svg)}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </Button>
    </section>
  )
}
