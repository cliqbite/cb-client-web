import { Layout } from '@/client/container/provider'
import { type ReactNode } from 'react'

export default function AuthLayOut({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}
