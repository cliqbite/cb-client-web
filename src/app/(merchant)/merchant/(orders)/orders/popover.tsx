'use client'
import { cls } from '@/common/utils/classnames'
import Icon from '@/components/ui/icon'
import { useState } from 'react'
import styles from './page.module.scss'

export default function Popover({
  fstate
}: {
  fstate: 'accepted' | 'preparing' | 'prepared'
}) {
  const [state, setstate] = useState(true)
  return (
    <div className={cls(styles.btn, styles[fstate], styles.popupDrop)}>
      <header onClick={() => setstate((o) => !o)}>
        <Icon icon='forward' />
      </header>
      <ul className={cls(styles.options, state && styles.hide)}>
        <li>Preparing</li>
        <li>Accepted</li>
        <li>Prepared</li>
      </ul>
    </div>
  )
}
