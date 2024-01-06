import { cls } from '@/common/utils/classnames'
import type { FC } from 'react'
import styles from './style.module.scss'

interface IScrollWatcher {}

export const ScrollWatcher: FC<IScrollWatcher> = () => {
  return <div className={cls(styles['scroll-watcher'])}></div>
}
export default ScrollWatcher
