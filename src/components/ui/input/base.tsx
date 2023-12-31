'use client'
import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from 'react'
import styles from './style.module.scss'
import { cls } from '@/common/utils/classnames'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cls(styles.input, props.className)}
      >
        {props.children}
      </input>
    )
  }
)

Input.displayName = 'Input'
export default Input
