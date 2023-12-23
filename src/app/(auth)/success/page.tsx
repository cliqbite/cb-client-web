import Image from 'next/image'
import logoPNG from '@/assets/png/logo.png'
import styles from './page.module.scss'
import View from './view'
import { cls } from '@/common/utils/classnames'
import { Suspense } from 'react'

function Success() {
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
      <Suspense>
        <View />
      </Suspense>
    </main>
  )
}

export default Success
