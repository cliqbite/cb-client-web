import { cls } from '@/common/utils/classnames'
import styles from './page.module.scss'
import View from './view'
import Image from 'next/image'
import logoPNG from '@/assets/png/logo.png'

const CollegeSelectionPage = () => {
  return (
    <main className={cls('page', styles.page)}>
      <Image
        src={logoPNG}
        alt={'logo'}
        width={100}
        height={100}
        objectFit='contain'
        className={styles.logo}
      />
      <View />
    </main>
  )
}

export default CollegeSelectionPage
