import { cls } from '@/common/utils/classnames'
import Button from '@/components/ui/button'
import { OnClick } from '..'
import styles from './style.module.scss'

export function PWALandingPage({ onClick }: OnClick) {
  return (
    <section className={cls('pad-gap', 'contain', styles['landing-page'])}>
      <strong className={cls(styles.header)}>
        Get the best CliqBite experience
      </strong>

      <Button btn='base' onClick={onClick} className={cls(styles.btn)}>
        <label>Order in the App</label>
      </Button>
    </section>
  )
}
