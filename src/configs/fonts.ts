import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Jua as FontLogo
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const fontLogo = FontLogo({
  preload: true,
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['400']
})
