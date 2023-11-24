import { FC } from 'react'
import BaseButton, { type ButtonProps } from './base'
import SolidButton from './solid'
import OutlineButton from './outline'

interface Props extends ButtonProps {
  btn: 'solid' | 'outline' | 'base'
}

export const Button: FC<Props> = ({ btn = 'base', ...props }) => {
  if (btn === 'solid') return <SolidButton {...props} />
  if (btn === 'outline') return <OutlineButton {...props} />
  return <BaseButton {...props} />
}

export default Button
