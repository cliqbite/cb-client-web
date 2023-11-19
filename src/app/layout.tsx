import '@/styles/globals.scss'
import '@/styles/common.scss'
import type { Metadata } from 'next'
import GoogleAnalytics from '@/services/analytics/GoogleAnalytics'
import { cls } from '@/helpers/utils/classnames'
import { siteConfig } from '@/configs/site'
import { fontSans } from '@/configs/fonts'
import PWAPrompt from '@/helpers/pwa'
import Navigation from '@/components/Navigation'
import { Providers } from './providers'

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
  },
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
      <body className={cls(fontSans.className)}>
        <GoogleAnalytics />
        <Providers>{children}</Providers>
        <Navigation />
        <PWAPrompt type='initiate' />
      </body>
    </html>
  )
}
