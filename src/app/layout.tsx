import '@/styles/globals.scss'
import type { Metadata } from 'next'
import GoogleAnalytics from '@/services/analytics/GoogleAnalytics'
import { cls } from '@/helpers/utils/classnames'
import { siteConfig } from '@/configs/site'
import { fontSans } from '@/configs/fonts'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cls(fontSans.className)}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
