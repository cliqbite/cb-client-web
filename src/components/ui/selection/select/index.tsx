import type {
  FC,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes
} from 'react'
import styles from './style.module.scss'
import { cls } from '@/common/utils/classnames'
import { type UseFormRegisterReturn } from 'react-hook-form'
import type { College } from '@/common/types'
import { Canteen } from '@/server/model/canteen'
import { log } from '@/common/log'

type OptionsProps<T> = {
  options: T[]
} & OptionHTMLAttributes<HTMLOptionElement>

type ReactHookFromProps = {
  register: UseFormRegisterReturn
  fieldName: string
  children: ReactNode
  wrapperClassName?: string
}

type SelectProps = (
  | {
      children: ReactNode
      wrapperClassName?: string
    }
  | ReactHookFromProps
) &
  SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({ children, ...props }: SelectProps) => {
  let rhform = {} as UseFormRegisterReturn

  if ('register' in props) {
    rhform = props.register
  }

  return (
    <div
      className={cls(
        styles['custom-select'],
        props?.className,
        props?.wrapperClassName
      )}
    >
      <select
        className={cls(styles.select, props?.className)}
        {...rhform}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

const OptionClg: FC<OptionsProps<College>> = ({ options, ...props }) => {
  return (
    <>
      <option value={undefined} {...props}>
        Select college
      </option>
      {options?.map((optn) => {
        return (
          <option value={optn.college_name} key={optn.college_id} {...props}>
            {optn.college_name}
          </option>
        )
      })}
    </>
  )
}

const OptionCanteen: FC<OptionsProps<Canteen>> = ({ options, ...props }) => {
  log('options', options)
  return (
    <>
      <option value={undefined} {...props}>
        Select Canteen
      </option>
      {options?.map((optn) => {
        return (
          <option value={optn.name} key={optn.id} {...props}>
            {optn.name}
          </option>
        )
      })}
    </>
  )
}

Select.OptionClg = OptionClg
Select.OptionCanteen = OptionCanteen
export default Select

{
  /* ///reference: https://blog.logrocket.com/creating-custom-select-dropdown-css/ */
}
