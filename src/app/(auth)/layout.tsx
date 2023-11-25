import Layout from '@/components/template'
import { type ReactNode } from 'react'

export default function AuthLayOut({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}
