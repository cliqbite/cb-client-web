import type { CSSProperties, FC } from 'react'
import styles from './style.module.scss'

const Location: FC<{
  size?: `${number}px` | `${number}rem` | `${number}em`
}> = ({ size }) => {
  const _style = {
    '--size': size
  } as CSSProperties
  return <span className={styles['loader-location']} style={_style}></span>
}
export default Location

/// ref: https://cssloaders.github.io/
