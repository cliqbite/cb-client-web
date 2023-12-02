import { type FC, type ReactNode, type SVGAttributes } from 'react'
import { ICON } from '@/common/constants/icons'
import { FaUser, FaCartShopping } from 'react-icons/fa6'
import { LuSearch } from 'react-icons/lu'
import { GoHomeFill } from 'react-icons/go'
import { IoIosArrowBack, IoMdSchool } from 'react-icons/io'
import { AiOutlineFileUnknown } from 'react-icons/ai'
import { CiLogout } from 'react-icons/ci'
import { FcGoogle } from 'react-icons/fc'
import { GrValidate } from 'react-icons/gr'
import { HiMiniXMark } from 'react-icons/hi2'

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
  [ICON.SCHOOL, IoMdSchool],
  [ICON.SEARCH, LuSearch],
  [ICON.LOGOUT, CiLogout],
  [ICON.GOOGLE, FcGoogle],
  [ICON.VALIDATE, GrValidate],
  [ICON.CROSS, HiMiniXMark]
]

export const Icon: FC<IconType> = (props) => {
  const { icon, ...rest } = props
  const _mappedIcon = new Map<string, IconType>(_icons)
  const Component = _mappedIcon.get(icon) ?? AiOutlineFileUnknown

  return <Component color='inherit' {...rest} />
}

export default Icon
