'use client'
import { useEffectOnce } from '@/client/hooks'
import useStore from '@/client/hooks/useStore'
import { useCanteen } from '@/client/store/useCanteen'
import { ROUTE } from '@/common/constants/route'
import { useRouter } from 'next/navigation'
import { type FC } from 'react'
import Icon from '../ui/icon'
import Loader from '../ui/loader'
import styles from './style.module.scss'

interface LocationSelectionProps {}

export const LocationSelection: FC<LocationSelectionProps> = () => {
  useEffectOnce(() => {
    useCanteen.persist.rehydrate()
  })

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
          <Icon icon='location' />
        )}
      </div>
      <strong>
        {selectedCanteen?.name},{selectedCanteen?.college?.college_name}
      </strong>
    </section>
  )
}

export default LocationSelection
