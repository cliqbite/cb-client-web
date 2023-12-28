import { TanstackQueryClient } from '@/client/container/provider'
import PWAPrompt from '@/client/pwa'
import GoogleAnalytics from '@/client/services/analytics/GoogleAnalytics'
import { cls } from '@/common/utils/classnames'
import { fontSans } from '@/configs/fonts'
import { siteConfig } from '@/configs/site'
import '@/styles/common.scss'
import '@/styles/globals.scss'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/images/icon-512x512.png'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cls(fontSans.className)} suppressHydrationWarning={true}>
        <TanstackQueryClient>{children}</TanstackQueryClient>
        <PWAPrompt type='initiate' />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
