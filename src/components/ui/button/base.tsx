'use client'
import {
  type ForwardedRef,
  type ButtonHTMLAttributes,
  forwardRef,
  type MouseEvent
} from 'react'
import styles from './style.module.scss'
import { cls } from '@/common/utils/classnames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BaseButton = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget
      const overlay = document.createElement('span')
      overlay.classList.add(styles['ripple-overlay'])
      button.appendChild(overlay)

      const xValue = e.clientX - button.getBoundingClientRect().left
      const yValue = e.clientY - button.getBoundingClientRect().top

      overlay.style.left = `${xValue}px`
      overlay.style.top = `${yValue}px`

      setTimeout(() => {
        button.removeChild(overlay)
      }, 750)
    }

    return (
      <button
        ref={ref}
        {...props}
        className={cls(styles.btn, props.className)}
        onClickCapture={handleButtonClick}
      >
        {props.children}
      </button>
    )
  }
)

BaseButton.displayName = 'Button'
export default BaseButton

/// reference: https://www.codingnepalweb.com/button-ripple-animation-in-html-css-and-javascript/
