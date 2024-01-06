import { cls } from '@/common/utils/classnames'
import Icon from '@/components/ui/icon'
import Image from '@/components/ui/image/image'
import type { FC } from 'react'
import type { TDetail } from './detail.type'
import styles from './style.module.scss'

export const CardDetail: FC<TDetail> = ({ ...props }) => {
  return (
    <div className={styles['detail']} {...props}>
      <div className={styles['img-container']}>
        <Image alt='' src={props.src ?? ''} className={styles.img} />
      </div>
      <div className={cls(styles.info)}>
        <h3 className={cls(styles.name)}>{props?.name}</h3>
        <strong>{props?.desc}</strong>
        <p></p>
        <label></label>
      </div>
      <div className={cls(styles.option)}>
        {props?.options && <Icon icon='kebab' color='grey' />}
      </div>
    </div>
  )
}

export default CardDetail
