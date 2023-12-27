'use client'
import { cls } from '@/common/utils/classnames'
import 'keen-slider/keen-slider.min.css'
import { type FC } from 'react'
import type { TRail, TRailItem } from './rail.types'
import styles from './style.module.scss'

export const Rail = ({ children, className, ...props }: TRail) => {
  return (
    <ul className={cls(styles['rail'], className)} {...props}>
      {children}
    </ul>
  )
}

export const RailItem: FC<TRailItem> = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

Rail.Item = RailItem
