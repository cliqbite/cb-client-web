import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/services/analytics/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CliqBite',
  description: 'Food Order app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
