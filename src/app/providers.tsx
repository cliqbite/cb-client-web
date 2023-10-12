'use client'

import { NextUIProvider } from '@nextui-org/system'
import { ReactNode } from 'react'

export interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>
}
