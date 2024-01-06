'use client'
import Input from '@/components/ui/input/base'
import styles from './page.module.scss'

export default function View() {
  return (
    <section className={styles['select-location--view']}>
      <h1>Get food delivery and more</h1>
      <Input />
    </section>
  )
}
