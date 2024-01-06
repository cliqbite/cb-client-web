import { cls } from '@/common/utils/classnames'
import styles from './page.module.scss'
import View from './view'

export default async function Profile() {
  return (
    <main className={cls('page', styles.page)}>
      <View />
    </main>
  )
}
