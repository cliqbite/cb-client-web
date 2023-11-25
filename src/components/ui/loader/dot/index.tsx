import type { FC } from 'react'
import styles from './style.module.scss'

const Dot: FC = () => {
  return <span className={styles['loader-dot']}></span>
}
export default Dot

/// ref: https://cssloaders.github.io/
