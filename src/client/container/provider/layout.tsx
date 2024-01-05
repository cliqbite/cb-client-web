import Loader from '@/components/ui/loader'
import dynamic from 'next/dynamic'
import { Fragment, ReactNode, Suspense, type FC } from 'react'
import { Toaster } from 'react-hot-toast'

type LayoutProps = { children: ReactNode }

const Modal = dynamic(() => import('@/components/custom-modal'), {
  ssr: false
})

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Toaster position='top-right' />
      <Suspense
        fallback={
          <Loader>
            <Loader.Default />
          </Loader>
        }
      >
        <Modal />
      </Suspense>
    </Fragment>
  )
}
export default Layout
