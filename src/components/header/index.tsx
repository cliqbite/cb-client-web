import { cls } from '@/common/utils/classnames'
import Icon from '../ui/icon'
import LocationSelection from '../location-selection'
import styles from './style.module.scss'
import PWAPrompt from '@/client/pwa'

export default function Header() {
  return (
    <header className={cls(styles.header, 'page')}>
      <div className={styles['icon-warpper']}>
        <Icon icon='school' />
      </div>
      <LocationSelection />

      <PWAPrompt type='button' />
    </header>
  )
}
