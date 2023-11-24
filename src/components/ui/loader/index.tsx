import type { ReactNode } from 'react'
import styles from './style.module.scss'
import { cls } from '@/helpers/utils/classnames'
import Avatar from './avatar'
import Default from './default'
import Dot from './dot'
import Location from './location'
import Search from './search'
import Wifi from './wifi'

type LoaderProps = {
  children: ReactNode
  className?: string
}

const Loader = ({ children, ...rest }: LoaderProps) => {
  return (
    <section className={cls('page', styles.page)} {...rest}>
      {children}
    </section>
  )
}

Loader.Avatar = Avatar
Loader.Default = Default
Loader.Dot = Dot
Loader.Location = Location
Loader.Search = Search
Loader.Wifi = Wifi

export default Loader

/// ref: https://cssloaders.github.io/
