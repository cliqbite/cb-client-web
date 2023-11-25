import '@/styles/globals.scss'
import '@/styles/common.scss'
import type { Metadata } from 'next'
import GoogleAnalytics from '@/client/services/analytics/GoogleAnalytics'
import { cls } from '@/common/utils/classnames'
import { siteConfig } from '@/configs/site'
import { fontSans } from '@/configs/fonts'
import PWAPrompt from '@/client/pwa'
import Navigation from '@/components/Navigation'
import { Providers } from './providers'
import Layout from '@/components/template'

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
      <body className={cls(fontSans.className)} suppressHydrationWarning={true}>
        <GoogleAnalytics />
        <Providers>
          <Layout>
            {children}
            <Navigation />
          </Layout>
        </Providers>
        <PWAPrompt type='initiate' />
      </body>
    </html>
  )
}
