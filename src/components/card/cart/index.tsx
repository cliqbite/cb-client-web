import { cls } from '@/helpers/utils/classnames'
import styles from './styles.module.scss'
import fallback16x9 from '@/assets/png/fallback16x9.png'
import Image from 'next/image'
import CountButton from '@/components/ui/button/count'

type CartCardProps = {
  src?: string
}

export const CartCard = (props: CartCardProps) => {
  const { src } = props

  return (
    <div className={cls(styles.card)}>
      <div className={styles['img-wrapper']}>
        <Image
          alt=''
          src={src ?? fallback16x9}
          className={styles.img}
          loading='lazy'
          width={100}
          height={100}
        />
      </div>
      <div className={cls(styles['detail-wrapper'])}>
        <div className={styles.detail}>
          <h4 className={styles.name}>food name</h4>
          <div className={styles['option-wrapper']}>
            <label className={cls(styles.option)}>+ options</label>
          </div>
        </div>
        <h4 className={styles.amount}>$30.00</h4>
      </div>
      <div className={cls(styles['counter-wrapper'])}>
        <CountButton />
      </div>
    </div>
  )
}
