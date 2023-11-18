'use client'
import { cls } from '@/helpers/utils/classnames'
import Icon, { IconsList } from '../icon'
import styles from './style.module.scss'
import { usePathname } from 'next/navigation'
import { log } from '@/helpers/logger'
import Link from 'next/link'

const B_NAV = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    href: '/home'
  },
  {
    id: 'search',
    label: 'Search',
    icon: 'search',
    href: '/search'
  },
  {
    id: 'cart',

    label: 'Cart',
    icon: 'cart',
    href: '/cart'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: 'about',
    href: '/profile'
  }
]

interface NavigationProps {
  active?: 'home' | 'about' | 'cart' | 'search'
}

// Regular expression to split the pathname by "/"
const REGEX = /\/+/

export default function Navigation({ active }: NavigationProps) {
  const pathname = usePathname()
  log('pathname::navigation::', pathname)
  const _active = active || pathname.split(REGEX)[1]

  return (
    <nav className={cls(styles.navigation)}>
      <ul className={styles.warpper}>
        {B_NAV.map((nav) => {
          return (
            <Link key={nav.id} href={nav.href} passHref>
              <li className={cls(_active === nav.id && styles.active)}>
                <Icon icon={nav.icon as IconsList} id={nav.label} size={24} />
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
