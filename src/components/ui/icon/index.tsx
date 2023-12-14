import { ICON } from '@/common/constants/icons'
import { type FC, type ReactNode, type SVGAttributes } from 'react'
import { AiOutlineFileUnknown } from 'react-icons/ai'
import { CiLogout, CiMenuKebab } from 'react-icons/ci'
import { FaCartShopping, FaLocationDot, FaUser } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { FiUser } from 'react-icons/fi'
import { GoHomeFill } from 'react-icons/go'
import { GrValidate } from 'react-icons/gr'
import { HiMenu } from 'react-icons/hi'
import { HiMiniXMark } from 'react-icons/hi2'
import { IoIosArrowBack, IoIosArrowForward, IoMdSchool } from 'react-icons/io'
import { LuSearch } from 'react-icons/lu'
import { MdAutoAwesome } from 'react-icons/md'

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
  [ICON.FORWARD, IoIosArrowForward],
  [ICON.CART, FaCartShopping],
  [ICON.HOME, GoHomeFill],
  [ICON.SCHOOL, IoMdSchool],
  [ICON.SEARCH, LuSearch],
  [ICON.LOGOUT, CiLogout],
  [ICON.GOOGLE, FcGoogle],
  [ICON.VALIDATE, GrValidate],
  [ICON.CROSS, HiMiniXMark],
  [ICON.AWESOME, MdAutoAwesome],
  [ICON.LOCATION, FaLocationDot],
  [ICON.MENU, HiMenu],
  [ICON.KEBAB, CiMenuKebab],
  [ICON.USER, FiUser]
]

export const Icon: FC<IconType> = (props) => {
  const { icon, ...rest } = props
  const _mappedIcon = new Map<string, IconType>(_icons)
  const Component = _mappedIcon.get(icon) ?? AiOutlineFileUnknown

  return <Component color='inherit' {...rest} />
}

export default Icon
