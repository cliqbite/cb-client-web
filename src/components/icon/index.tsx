import { Fragment, type FC, type ReactNode, type SVGAttributes } from 'react'
import { FaSchool, FaUser, FaCartShopping } from 'react-icons/fa6'
import { LuSearch } from 'react-icons/lu'
import { GoHomeFill } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'

export type IconsList =
  | ''
  | 'school'
  | 'home'
  | 'search'
  | 'cart'
  | 'about'
  | 'back'

interface IconType extends SVGAttributes<SVGElement> {
  children?: ReactNode
  icon?: IconsList
  size?: string | number
  color?: string
  title?: string
}

export const Icon: FC<IconType> = (props) => {
  const { icon = '', ...rest } = props
  let Component = Fragment

  if (icon === 'school') {
    Component = FaSchool
  }
  if (icon === 'home') {
    Component = GoHomeFill
  }
  if (icon === 'search') {
    Component = LuSearch
  }
  if (icon === 'about') {
    Component = FaUser
  }
  if (icon === 'cart') {
    Component = FaCartShopping
  }
  if (icon === 'back') {
    Component = IoIosArrowBack
  }

  return <Component color='inherit' {...rest} />
}

export default Icon
