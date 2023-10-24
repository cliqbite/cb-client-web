'use client'
import {
  type ForwardedRef,
  type InputHTMLAttributes,
  forwardRef,
  type MouseEvent,
  useState
} from 'react'
import styles from './style.module.scss'
import { cls } from '@/helpers/utils/classnames'
import Input, { type InputProps } from './base'
import EyeSVGR from '@/assets/svg/tsx/eye'
import EyeOffSVGR from '@/assets/svg/tsx/eyeOff'

export interface OutlineInputProps extends InputProps {
  label?: string
  hint?: string
  wapperClassName?: string
  outlineClassName?: string
  success?: string
  error?: string
}

export const OutlineInput = forwardRef(
  (props: OutlineInputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
      <div className={cls(styles['outline-input'], props?.outlineClassName)}>
        <div
          className={cls(
            styles['outline-input-wrapper'],
            props?.wapperClassName
          )}
        >
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
            {...props}
            type={isPaswordType().state ? isPaswordType().visible : props?.type}
            placeholder={props?.placeholder ?? ' '}
            className={cls(
              styles.outline,
              props?.error && styles.error,
              props?.success && styles.success,
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
            props?.success && styles.success,
            props?.error && styles.error
          )}
        >
          {props?.error ?? props?.success ?? props?.hint}{' '}
        </div>
      </div>
    )
  }
)

OutlineInput.displayName = 'OutlineInput'
export default OutlineInput
