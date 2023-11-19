import { fontSans } from '@/configs/fonts'
import { type ReactNode } from 'react'

export default function AuthLayOut({ children }: { children: ReactNode }) {
  return <body className={fontSans.className}>{children}</body>
}
