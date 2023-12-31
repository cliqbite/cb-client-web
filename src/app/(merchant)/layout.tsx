import { Layout } from '@/client/container/provider'
import Navigation from '@/components/Navigation/merchant'
import '@/styles/common.scss'
import '@/styles/globals.scss'

export default function MerchantLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
      <Navigation />
    </Layout>
  )
}
