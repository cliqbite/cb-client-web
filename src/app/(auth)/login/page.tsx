import type { FC } from 'react'
import View from './view'
import styles from './page.module.scss'
import { cls } from '@/helpers/utils/classnames'
import Image from 'next/image'
import logoPNG from '@/assets/png/logo.png'

interface PageProps {}

const Login: FC<PageProps> = ({}) => {
  return (
    <main className={cls('page', styles.page)}>
      <section className={styles.welcome}>
        <Image
          src={logoPNG}
          alt={'logo'}
          width={100}
          height={100}
          objectFit='contain'
          className={styles.logo}
        />
        <h1>Welcome to CliqBite</h1>
        <p>Get your meals delivered quickly</p>
      </section>

      <View />
    </main>
  )
}
export default Login
