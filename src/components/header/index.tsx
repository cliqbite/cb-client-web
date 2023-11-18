import { cls } from '@/helpers/utils/classnames'
import Icon from '../icon'
import LocationSelection from '../location-selection'
import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={cls(styles.header, 'page')}>
      <div className={styles['icon-warpper']}>
        <Icon icon='school' />
      </div>{' '}
      <LocationSelection />
    </header>
  )
}
