'use client'
import { useRouter } from 'next/navigation'
import styles from './style.module.scss'
import Icon from '@/components/ui/icon'
import { cls } from '@/helpers/utils/classnames'

type BackNavigationProps = {
  className?: string
}

export const BackNavigation = (props: BackNavigationProps) => {
  const router = useRouter()

  function goBack() {
    router.back()
  }

  return (
    <button
      className={cls(styles.wrapper, props.className)}
      onClick={goBack}
      aria-label='go  back'
    >
      <Icon icon='back' size={24} aria-hidden />
    </button>
  )
}
