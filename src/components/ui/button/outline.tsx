'use client'
import { type ForwardedRef, forwardRef } from 'react'
import styles from './style.module.scss'
import { cls } from '@/helpers/utils/classnames'
import Button, { type ButtonProps } from './base'

export const OutlineButton = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cls(styles.outline, props.className)}
      >
        {props.children}
      </Button>
    )
  }
)

OutlineButton.displayName = 'OutlineButton'
export default OutlineButton
