'use client'
import { type ForwardedRef, forwardRef, useState } from 'react'
import styles from './style.module.scss'
import { cls } from '@/helpers/utils/classnames'
import Input, { type InputProps } from './base'
import EyeSVGR from '@/assets/svg/tsx/eye'
import EyeOffSVGR from '@/assets/svg/tsx/eyeOff'

export interface OutlineInputProps extends InputProps {
  label?: string
  hint?: string
  wapperclassName?: string
  outlineclassName?: string
  success?: string
  error?: string | false
  countryCode?: string
}

export const OutlineInput = forwardRef(
  (props: OutlineInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      wapperclassName,
      outlineclassName,
      error,
      hint = '',
      success,
      ...rest
    } = props
    const [isPassVisible, setPassVisible] = useState(false)
    function togglePassVisibility() {
      setPassVisible((o) => !o)
    }
    function isPaswordType() {
      if (props?.type === 'password')
        return { state: true, visible: isPassVisible ? 'text' : 'password' }
      return { state: false, visible: props?.type }
    }
    return (
      <div className={cls(styles['outline-input'], outlineclassName)}>
        <div className={cls(styles['outline-input-wrapper'], wapperclassName)}>
          {isPaswordType().state ? (
            isPassVisible ? (
              <EyeOffSVGR
                className={cls(styles.icon, styles.trailing)}
                onClick={togglePassVisibility}
              />
            ) : (
              <EyeSVGR
                onClick={togglePassVisibility}
                className={cls(styles.icon, styles.trailing)}
              />
            )
          ) : null}
          <Input
            ref={ref}
            {...rest}
            type={isPaswordType().state ? isPaswordType().visible : props?.type}
            placeholder={props?.placeholder ?? ' '}
            className={cls(
              styles.outline,
              error && styles.error,
              success && styles.success,
              props.className
            )}
          >
            {props.children}
          </Input>
          <label className={cls(styles['label'])}>{props?.label}</label>
        </div>
        <div
          className={cls(
            styles['hints'],
            success && styles.success,
            error && styles.error
          )}
        >
          {error ?? success ?? hint}
        </div>
      </div>
    )
  }
)

OutlineInput.displayName = 'OutlineInput'
export default OutlineInput
