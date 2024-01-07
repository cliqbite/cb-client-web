import logoPNG from '@/assets/png/logo.png'
import PWAPrompt from '@/client/pwa'
import { cls } from '@/common/utils/classnames'
import Image from 'next/image'
import type { FC } from 'react'
import styles from './page.module.scss'
import View from './view'

interface PageProps {}

const Login: FC<PageProps> = ({}) => {
  return (
    <main className={cls('page', styles.page)}>
      <PWAPrompt type='banner' />
      <section className={styles.welcome}>
        <Image
          src={logoPNG}
          alt={'logo'}
          width={100}
          height={100}
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
