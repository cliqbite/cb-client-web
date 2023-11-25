import Image from 'next/image'
import styles from './page.module.scss'
import { cls } from '@/common/utils/classnames'
import { fontLogo } from '@/configs/fonts'
import PWAPrompt from '@/client/pwa'
import View from './view'

export default function Splash() {
  return (
    <>
      <main className={styles.main}>
        <PWAPrompt type='banner' />
        <section className={cls(fontLogo.className, styles.container)}>
          <Image
            src={'/images/icon-512x512.svg'}
            alt='logo'
            width={192}
            height={192}
            object-fit='cover'
            className={styles.logo}
            priority
          />
          <h1 className={styles.logo__title}>CliqBite</h1>
          <View />
        </section>
      </main>
    </>
  )
}
