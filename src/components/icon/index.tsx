import { type FC, type ReactNode, type SVGAttributes } from 'react'
import { FaSchool, FaUser, FaCartShopping } from 'react-icons/fa6'
import { LuSearch } from 'react-icons/lu'
import { GoHomeFill } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineFileUnknown } from 'react-icons/ai'
import { ICON } from '@/helpers/constants/icons'

export type IconsList = (typeof ICON)[keyof typeof ICON]

interface IconType extends SVGAttributes<SVGElement> {
  children?: ReactNode
  icon: IconsList
  size?: string | number
  color?: string
  title?: string
}

const _icons: Array<[string, IconType]> = [
  [ICON.ABOUT, FaUser],
  [ICON.BACK, IoIosArrowBack],
  [ICON.CART, FaCartShopping],
  [ICON.HOME, GoHomeFill],
  [ICON.SCHOOL, FaSchool],
  [ICON.SEARCH, LuSearch]
]

export const Icon: FC<IconType> = (props) => {
  const { icon, ...rest } = props
  const _mappedIcon = new Map<string, IconType>(_icons)
  const Component = _mappedIcon.get(icon) ?? AiOutlineFileUnknown

  return <Component color='inherit' {...rest} />
}

export default Icon
