'use client'
import { useEffectOnce, useStore } from '@/client/hooks'
import { useCanteen } from '@/client/store/useCanteen'
import Loader from '@/components/ui/loader'
import { Fragment, type ReactNode } from 'react'
import { modal$ } from '../provider'
import Modal from '../provider/modal'

export const LocationValidator = ({ children }: { children: ReactNode }) => {
  useEffectOnce(() => {
    useCanteen.persist.rehydrate()
  })

  const hasCanteenHydrated = useStore(useCanteen, (st) => st._hasHydrated)
  const selectedCanteen = useStore(useCanteen, (st) => st.canteen)

  if (!selectedCanteen?.id && hasCanteenHydrated) {
    modal$.props = { blurBackDrop: true }
    modal$.body = <h1>select location</h1>
    modal$.trigger(true)
  }

  if (!hasCanteenHydrated && !selectedCanteen?.name) {
    return (
      <Loader isPage>
        <Loader.Location />
      </Loader>
    )
  }

  return (
    <Fragment>
      {children}
      <Modal />
    </Fragment>
  )
}

export default LocationValidator
