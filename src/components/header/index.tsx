import { cls } from '@/common/utils/classnames'
import LocationSelection from '../location-selection'
import styles from './style.module.scss'
import PWAPrompt from '@/client/pwa'

export default function Header() {
  return (
    <header className={cls(styles.header, 'page')}>
      <LocationSelection />

      <PWAPrompt type='button' />
    </header>
  )
}
