'use client'
import { useCollege } from '@/client/store/useCollege'
import { ROUTE } from '@/common/constants/route'
import { logger } from '@/common/log'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

interface LocationSelectionProps {}

export const LocationSelection: FC<LocationSelectionProps> = () => {
  const router = useRouter()
  const selectedCollege = useCollege((state) => state.college)

  if (!selectedCollege.college_id) {
    logger.warn('LocationSelection::selectedCollege::', selectedCollege)
    router.push(ROUTE.SUCCESS)
  }
  return (
    <section>
      <header>
        <strong>{selectedCollege.college_name}</strong>
      </header>
    </section>
  )
}

export default LocationSelection
