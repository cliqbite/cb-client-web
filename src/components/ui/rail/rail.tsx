'use client'
import { cls } from '@/common/utils/classnames'
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type FC,
  type UIEvent
} from 'react'
import Icon from '../icon'
import type { TRail, TRailItem } from './rail.types'
import styles from './style.module.scss'

export const Rail = ({ children, className, ...props }: TRail) => {
  const sliderRef = useRef<HTMLUListElement>(null)
  const [sliderPosition, setSliderPosition] = useState(0)

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderPosition])

  const firstSlide = useMemo(() => {
    if (sliderPosition === 0) return true
    return false
  }, [sliderPosition])

  const onScroll = useCallback(
    (e: UIEvent<HTMLUListElement>) => {
      setSliderPosition(e.currentTarget.scrollLeft)
    },
    [setSliderPosition]
  )

  const onNext = useCallback(() => {
    if (!sliderRef.current) return

    sliderRef.current?.scrollBy({
      top: 0,
      left: sliderRef.current.firstElementChild?.clientWidth,
      behavior: 'smooth'
    })
  }, [])

  const onPrevious = useCallback(() => {
    if (!sliderRef.current) return
    if (!sliderRef.current.firstElementChild?.clientWidth) return

    sliderRef.current?.scrollBy({
      top: 0,
      left: -sliderRef.current.firstElementChild.clientWidth,
      behavior: 'smooth'
    })
  }, [])

  return (
    <section className={cls(styles['rail--container'])}>
      <ul
        onScroll={onScroll}
        className={cls(styles['rail'], className)}
        {...props}
        ref={sliderRef}
      >
        {children}
      </ul>
      <button
        onClick={onPrevious}
        disabled={firstSlide}
        className={cls(styles['chevron'], styles['chevron--left'])}
      >
        <span className='sr-only'>previous</span>
        <Icon icon='forward' className={styles.icon} />
      </button>
      <button
        onClick={onNext}
        disabled={scrolledToEndOfSlider}
        className={cls(styles['chevron'])}
      >
        <span className='sr-only'>next</span>
        <Icon icon='forward' className={styles.icon} />
      </button>
    </section>
  )
}

export const RailItem: FC<TRailItem> = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

Rail.Item = RailItem
