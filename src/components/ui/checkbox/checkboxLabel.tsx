'use client'
import { useContext, type FC, type ReactNode } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { CheckboxContext } from '.'

interface CheckboxLabelProps {
  children: ReactNode
}

export const CheckboxLabel: FC<CheckboxLabelProps> = ({ children }) => {
  const { id, isChecked } = useContext(CheckboxContext)

  return (
    <motion.label
      className={styles['checkbox-label']}
      htmlFor={id}
      animate={{
        x: isChecked ? [0, -4, 0] : [0, 4, 0],
        color: isChecked ? '#a1a1aa' : '#27272a'
      }}
      initial={false}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.label>
  )
}
export default CheckboxLabel
