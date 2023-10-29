import type { FC } from 'react'
import View from './view'
import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'

interface PageProps {}

const Verification: FC<PageProps> = ({}) => {
  return (
    <main className={cls('page', styles.page)}>
      <h1 className={styles.header}>Verification Code</h1>
      <View />
    </main>
  )
}
export default Verification
