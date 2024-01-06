import { Layout } from '@/client/container/provider'
import Navigation from '@/components/Navigation'
import '@/styles/common.scss'
import '@/styles/globals.scss'

export default function UserLayout({
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
