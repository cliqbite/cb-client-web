'use client'
import { type ReactNode, createContext, useState, useId } from 'react'
import styles from './style.module.scss'
import CheckboxLabel from './checkboxLabel'
import CheckboxIndicator from './checkboxIndicator'

interface CheckboxContextProps {
  id: string
  isChecked: boolean
  // eslint-disable-next-line no-unused-vars
  setIsChecked: (isChecked: boolean) => void
}

export const CheckboxContext = createContext<CheckboxContextProps>({
  id: '',
  isChecked: false,
  setIsChecked: () => {}
})

interface CheckboxProps {
  checked?: boolean
  children: ReactNode
  id?: string
}

export function Checkbox({ checked, children, id = '' }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked ?? false)
  const ID = useId()

  return (
    <div
      className={styles['checkbox']}
      role='checkbox'
      aria-checked={isChecked}
    >
      <CheckboxContext.Provider
        value={{
          id: ID + id,
          isChecked,
          setIsChecked
        }}
      >
        {children}
      </CheckboxContext.Provider>
    </div>
  )
}

Checkbox.Label = CheckboxLabel
Checkbox.Indicator = CheckboxIndicator

export default Checkbox

///reference: https://codesandbox.io/p/sandbox/framer-motion-checkbox-animation-2cf2jn?file=%2Fsrc%2FApp.tsx%3A11%2C14-11%2C22
