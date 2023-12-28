import logo_png from '@/assets/png/logo.png'
import PWAPrompt from '@/client/pwa'
import { cls } from '@/common/utils/classnames'
import Button from '@/components/ui/button'
import Image from '@/components/ui/image'
import styles from './page.module.scss'
import View from './view'

export default function SelectLocation() {
  return (
    <main className={cls(styles['select-location'])}>
      <header>
        <section
          className={cls('pad-gap', 'contain', styles['header-content'])}
        >
          <Image src={logo_png} alt='logo' className={styles.logo} />
          <Button btn='outline' className={cls(styles['sign-in'])}>
            Signin
          </Button>
        </section>
      </header>
      <View></View>
      <section className={cls(styles['pwa-separator'])}>
        <PWAPrompt type='landing-page' />
      </section>
    </main>
  )
}
