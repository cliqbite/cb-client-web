import { cls } from '@/helpers/utils/classnames'
import styles from './style.module.scss'
import Image from 'next/image'
import Icon from '../icon'

type ProfileDetailProps = {
  src?: string
}

export default function ProfileDetail(props: ProfileDetailProps) {
  const { src } = props

  return (
    <>
      <section className={cls(styles['profile-container'])}>
        <div className={styles['img-wrapper']}>
          {src ? (
            <Image
              src=''
              alt='profile image'
              loading='lazy'
              className={styles.img}
              width={100}
              height={100}
            />
          ) : (
            <Icon icon='about' size={64} />
          )}
        </div>{' '}
        <h3 className={styles.name}>name of user</h3>
        <label className={styles.contact}>+91987654321</label>
      </section>
    </>
  )
}
