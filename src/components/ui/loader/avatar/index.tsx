import type { FC } from 'react'
import styles from './style.module.scss'

const Avatar: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles['loader-user']}></span>
    </div>
  )
}
export default Avatar

/// ref: https://cssloaders.github.io/
