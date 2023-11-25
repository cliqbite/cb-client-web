'use client'
import { cls } from '@/common/utils/classnames'
import styles from './style.module.scss'
import Image from 'next/image'
import Icon from '../ui/icon'
import { useAccount } from '@/client/store'

type ProfileDetailProps = {
  src?: string
}

export default function ProfileDetail(props: ProfileDetailProps) {
  const { src } = props
  const account = useAccount((state) => state.user)
  return (
    <>
      <section className={cls(styles['profile-container'])}>
        <div className={styles['img-wrapper']}>
          {src ? (
            <Image
              src={src ?? ''}
              alt='profile image'
              loading='lazy'
              className={styles.img}
              width={100}
              height={100}
            />
          ) : (
            <Icon icon='about' size={64} />
          )}
        </div>
        <h3 className={styles.name}>{account?.name} </h3>
        <label className={styles.contact}>
          {account?.phone || account?.email}{' '}
          {account?.phoneVerification || account?.emailVerification ? (
            <Icon icon='validate' size={16} />
          ) : (
            <></>
          )}
        </label>
      </section>
    </>
  )
}
