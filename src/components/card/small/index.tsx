import fallback16x9 from '@/assets/png/fallback16x9.png'
import { cls } from '@/common/utils/classnames'
import Image from '@/components/ui/image'
import type { FC } from 'react'
import styles from './styles.module.scss'

interface CardSmallProps {
  src?: string
  name: string
}

const CardSmall: FC<CardSmallProps> = ({ src, name }) => {
  return (
    <div className={styles.scard}>
      <section className={cls(styles['img-container'])}>
        <Image
          alt=''
          src={src ?? fallback16x9}
          className={styles.img}
          loading='lazy'
        />
      </section>
      <section className={cls(styles['detail'])}>
        <h3 className={styles.title}>{name}</h3>
      </section>
    </div>
  )
}
export default CardSmall
