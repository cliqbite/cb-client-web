'use client'
import { useContext, type FC } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { CheckboxContext } from '.'

interface CheckboxIndicatorProps {}

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2
    }
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
}

export const CheckboxIndicator: FC<CheckboxIndicatorProps> = ({}) => {
  const { id, isChecked, setIsChecked } = useContext(CheckboxContext)

  return (
    <button aria-hidden className={styles['checkbox-indicator']}>
      <input
        type='checkbox'
        onChange={() => setIsChecked(!isChecked)}
        id={id}
      />
      <div aria-hidden className={styles['svg-container']}>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='3.5'
          stroke='currentColor'
          className='h-3.5 w-3.5'
          initial={false}
          animate={isChecked ? 'checked' : 'unchecked'}
        >
          <motion.path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12.75l6 6 9-13.5'
            variants={tickVariants}
          />
        </motion.svg>
      </div>
    </button>
  )
}
export default CheckboxIndicator
