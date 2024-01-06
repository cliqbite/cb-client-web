'use client'
import { useNavigation } from '@/client/store/useNavigation'
import { cls } from '@/common/utils/classnames'
import type { FC, ReactNode } from 'react'
import Icon from '../ui/icon'
import styles from './style.module.scss'

interface IMerchantHeader {
  children?: ReactNode
  className?: string
}

const MerchantHeader: FC<IMerchantHeader> = ({ children, className }) => {
  const toggleAside = useNavigation((state) => state.toggleAside)
  return (
    <header className={cls(styles.merchantheader, className)}>
      <Icon icon='menu' size={24} onClick={() => toggleAside()} />
      {children}
    </header>
  )
}
export default MerchantHeader
