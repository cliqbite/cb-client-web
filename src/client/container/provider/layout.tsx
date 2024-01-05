import { Fragment, ReactNode, type FC } from 'react'
import { Toaster } from 'react-hot-toast'

type LayoutProps = { children: ReactNode }

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Toaster position='top-right' />
    </Fragment>
  )
}
export default Layout
