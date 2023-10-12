import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Jua as FontLogo,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const fontLogo = FontLogo({
  preload: true,
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['400'],
})
