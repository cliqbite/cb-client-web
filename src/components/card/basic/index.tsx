import fallback16x9 from '@/assets/png/fallback16x9.png'
import PurseSVGR from '@/assets/svg/tsx/purse'
import { cls } from '@/common/utils/classnames'
import Image from '@/components/ui/image'
import type { FC } from 'react'
import styles from './styles.module.scss'

interface CardBasicProps {
  offer?: string
  name: string
  desc?: string
  src?: string
  price: string | number
  className?: string
}

const CardBasic: FC<CardBasicProps> = ({
  offer,
  name,
  price,
  desc,
  src,
  className
}) => {
  return (
    <div className={cls(className, styles.card)}>
      <section className={cls(styles['img-container'])}>
        <Image
          alt={name}
          src={src ?? fallback16x9}
          className={styles.img}
          loading='lazy'
        />
        <div className={styles.offer}>{offer}</div>
      </section>
      <section className={cls(styles['detail'])}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{desc}</p>
        <div className={styles.meta}>
          <div className={styles.price}>
            <PurseSVGR width={'0.8em'} height={'0.8em'} />
            <p>{price}</p>
          </div>
          <div className={styles.timer}>
            <p></p>
          </div>
          <div className={styles.rating}>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CardBasic
