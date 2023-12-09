'use client'
import useStore from '@/client/hooks/useStore'
import { useCollege } from '@/client/store/useCollege'
import { ROUTE } from '@/common/constants/route'
import { useRouter } from 'next/navigation'
import { type FC, useEffect } from 'react'
import Loader from '../ui/loader'
import styles from './style.module.scss'
import Icon from '../ui/icon'

interface LocationSelectionProps {}

export const LocationSelection: FC<LocationSelectionProps> = () => {
  useEffect(() => {
    useCollege.persist.rehydrate()
  }, [])

  const router = useRouter()
  const selectedCollege = useStore(useCollege, (st) => st.college)
  const hasHydrated = useStore(useCollege, (st) => st._hasHydrated)

  if (!selectedCollege?.college_id && hasHydrated) {
    router.push(`${ROUTE.SUCCESS}?gauth=1`)
  }

  return (
    <section className={styles['location-seelctor']}>
      <div className={styles['icon-warpper']}>
        {!hasHydrated && !selectedCollege?.college_name ? (
          <Loader className={styles.icon}>
            <Loader.Location size={'1em'} />
          </Loader>
        ) : (
          <Icon icon='school' />
        )}
      </div>
      <strong>{selectedCollege?.college_name}</strong>
    </section>
  )
}

export default LocationSelection
