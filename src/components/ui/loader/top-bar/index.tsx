import { cls } from '@/common/utils/classnames'
import type { CSSProperties, FC } from 'react'
import styles from './style.module.scss'

interface ITopLoaderBar {
  progress?: number
  stale?: boolean
  complete?: boolean
  flicker?: boolean
}

export const TopLoaderBar: FC<ITopLoaderBar> = ({
  progress = 0,
  stale = false,
  complete = false,
  flicker = false
}) => {
  return (
    <div
      className={cls(
        styles['top-loader'],
        flicker && styles['flicker'],
        stale && styles['stale'],
        complete && styles['complete']
      )}
      style={
        {
          '--bar-width': `${Math.min(Math.max(progress, 0), 100)}%`
        } as CSSProperties
      }
    ></div>
  )
}
export default TopLoaderBar
