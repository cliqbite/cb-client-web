import Image from 'next/image'
import styles from './page.module.scss'
import { cls } from '@/helpers/utils/classnames'
import { fontLogo } from '@/configs/fonts'
import PWAPrompt from '@/helpers/pwa'
import View from './view'

export default function Splash() {
  return (
    <>
      <PWAPrompt type='banner' />
      <main className={styles.main}>
        <section className={cls(fontLogo.className, styles.container)}>
          <Image
            src={'/images/icon-512x512.svg'}
            alt='logo'
            width={192}
            height={192}
            object-fit='cover'
            className={styles.logo}
          />
          <h1 className={styles.logo__title}>CliqBite</h1>
          <View />
        </section>
      </main>
    </>
  )
}
