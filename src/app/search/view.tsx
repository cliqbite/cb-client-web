'use client'
import OutlineInput from '@/components/ui/input/outline'
import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { type MouseEvent } from 'react'

export default function View() {
  function onSearch(event: MouseEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className={cls('page')}>
      <form className={cls(styles['search-container'])} onSubmit={onSearch}>
        <OutlineInput
          type='search'
          className={cls(styles.search)}
          wapperclassName={cls(styles.search, styles.wrapper)}
          outlineclassName={cls(styles.search)}
        />
        <Button btn='solid' type='submit' className={styles['search-btn']}>
          <Icon icon='search' size={16} />
        </Button>
      </form>{' '}
      <aside className={cls(styles['recomendation-wrapper'])}>
        recomandations
      </aside>
      <section className={cls(styles['result-wrapper'])}>
        <h4>Search results</h4>
        <section></section>
      </section>
    </section>
  )
}
