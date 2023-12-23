import '@/styles/globals.scss'
import '@/styles/common.scss'
import Navigation from '@/components/Navigation'
import Layout from '@/components/template'

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
