'use client'
import { type MouseEventHandler } from 'react'
import { log } from '../../common/log'
import { PWAPromtButton } from './components/button'
import { PWAPromptBanner } from './components/banner'
import { usePWA } from '@/client/hooks/usePWA'

export type PWAPromptUI =
  | 'button'
  | 'fixed-header '
  | 'navigation-menu'
  | 'landing-page'
  | 'banner'
  | 'snackbar'
  | 'inine-flow'
  | 'pop-out'
  | ' inline'
  | 'initiate'

export type OnClick = { onClick: MouseEventHandler<HTMLButtonElement> }

interface PWAPromptType {
  type: PWAPromptUI
}

export const PWAPrompt = ({ type = 'button' }: PWAPromptType) => {
  const { isPromptEnabled, handleInstall } = usePWA()

  if (!isPromptEnabled) return <></>

  if (type === 'button') return <PWAPromtButton onClick={handleInstall} />
  if (type === 'banner') return <PWAPromptBanner onClick={handleInstall} />

  return <></>
}

export default PWAPrompt

/// reference: https://web.dev/articles/promote-install#best-practices
