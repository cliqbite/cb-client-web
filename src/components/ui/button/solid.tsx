'use client'
import { type ForwardedRef, forwardRef } from 'react'
import styles from './style.module.scss'
import { cls } from '@/helpers/utils/classnames'
import Button, { type ButtonProps } from './base'

export const SolidButton = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cls(styles.base, props.className)}
      >
        {props.children}
      </Button>
    )
  }
)

SolidButton.displayName = 'SolidButton'
export default SolidButton
