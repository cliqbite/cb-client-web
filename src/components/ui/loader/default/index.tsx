import type { FC } from 'react'
import styles from './style.module.scss'

const Default: FC = () => {
  return <span className={styles['loader']}></span>
}
export default Default

/// ref: https://cssloaders.github.io/
