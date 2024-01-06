'use client'
import { ICON } from '@/common/constants/icons'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from '../ui/icon'
import styles from './style.module.scss'

const B_NAV = [
  {
    id: 'home',
    label: 'Home',
    icon: ICON.HOME,
    href: '/home'
  },
  {
    id: 'search',
    label: 'Search',
    icon: ICON.SEARCH,
    href: '/search'
  },
  {
    id: 'cart',
    label: 'Cart',
    icon: ICON.CART,
    href: '/cart'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: ICON.ABOUT,
    href: '/profile'
  }
] as const

interface NavigationProps {
  active?: (typeof B_NAV)[number]['id']
}

// Regular expression to split the pathname by "/"
const REGEX = /\/+/

const BYPASS_NAV = [
  ROUTE.SPLASH,
  ROUTE.LOGIN,
  ROUTE.VERIFY,
  ROUTE.FORGOT,
  ROUTE.SIGNUP,
  ROUTE.SUCCESS,
  ROUTE.MERCHANT,
  `${ROUTE.MERCHANT}/orders`
]

export default function Navigation({ active }: NavigationProps) {
  const pathname = usePathname()
  const _active = active || pathname.split(REGEX)[1]

  if (BYPASS_NAV.includes(pathname)) {
    return <></>
  }

  return (
    <nav className={cls(styles.navigation)}>
      <ul className={styles.warpper}>
        {B_NAV.map((nav) => {
          return (
            <Link key={nav.id} href={nav.href} passHref>
              <li className={cls(_active === nav.id && styles.active)}>
                <Icon icon={nav.icon} id={nav.label} size={24} />
                <label className={styles.hide} htmlFor={nav.label}>
                  {nav.label}
                </label>
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
