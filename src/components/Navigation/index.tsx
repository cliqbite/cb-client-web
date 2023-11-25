'use client'
import { cls } from '@/common/utils/classnames'
import Icon from '../ui/icon'
import styles from './style.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ICON } from '@/common/constants/icons'

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
]

interface NavigationProps {
  active?: 'home' | 'about' | 'cart' | 'search'
}

// Regular expression to split the pathname by "/"
const REGEX = /\/+/

const BYPASS_NAV = ['/splash', '/login', '/verification', '/forgot', '/signup']

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
