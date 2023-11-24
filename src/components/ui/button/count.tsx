'use client'
import { cls } from '@/helpers/utils/classnames'
import styles from './style.module.scss'
import SolidButton from './solid'
import { type MouseEvent, useState } from 'react'

type CountButtonProps = {
  // eslint-disable-next-line no-unused-vars
  getCount?: (count: number) => void
}

const INCREMENT = 'INC'
const DECRIMENT = 'DEC'

export const CountButton = (props: CountButtonProps) => {
  const { getCount } = props
  const [count, setCount] = useState(1)

  const handleCount = (evt: MouseEvent<HTMLButtonElement>) => {
    const _id = (evt.target as HTMLButtonElement)?.id
    setCount((val) => {
      let _count = val
      if (_id === INCREMENT) {
        ++_count
      }
      if (_id === DECRIMENT) {
        --_count
      }
      if (_count === 0) {
        _count = 1
      }
      getCount?.(_count)
      return _count
    })
  }

  return (
    <div className={cls(styles['btn-count-wrapper'])}>
      <SolidButton
        id={INCREMENT}
        className={styles.modifer}
        onClick={handleCount}
      >
        +
      </SolidButton>
      <label>{count}</label>
      <SolidButton
        id={DECRIMENT}
        className={styles.modifer}
        onClick={handleCount}
      >
        -
      </SolidButton>
    </div>
  )
}

export default CountButton
