'use client'
import useStore from '@/client/hooks/useStore'
import { ROUTE } from '@/common/constants/route'
import { useRouter } from 'next/navigation'
import { type FC, useEffect } from 'react'
import Loader from '../ui/loader'
import styles from './style.module.scss'
import Icon from '../ui/icon'
import { useCanteen } from '@/client/store/useCanteen'

interface LocationSelectionProps {}

export const LocationSelection: FC<LocationSelectionProps> = () => {
  useEffect(() => {
    useCanteen.persist.rehydrate()
  }, [])

  const router = useRouter()
  const hasCanteenHydrated = useStore(useCanteen, (st) => st._hasHydrated)
  const selectedCanteen = useStore(useCanteen, (st) => st.canteen)

  if (!selectedCanteen?.id && hasCanteenHydrated) {
    router.push(`${ROUTE.COLLEGE}`)
  }

  return (
    <section className={styles['location-seelctor']}>
      <div className={styles['icon-warpper']}>
        {!hasCanteenHydrated && !selectedCanteen?.name ? (
          <Loader className={styles.icon}>
            <Loader.Location size={'1em'} />
          </Loader>
        ) : (
          <Icon icon='school' />
        )}
      </div>
      <strong>
        {selectedCanteen?.name},{selectedCanteen?.college.college_name}
      </strong>
    </section>
  )
}

export default LocationSelection
