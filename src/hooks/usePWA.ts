'use client'
import Logger from '@/helpers/logger'
import constructPWAStore, {
  type DeferredPrompt,
  OUTCOME,
  type Outcome
} from '@/helpers/pwa/instance'
import { useEffect, useState } from 'react'

interface CreateStatus {
  isInstallAllowed?: boolean
  isInstallWatingConfirm?: boolean
  isInstalling?: boolean
  isInstallCancelled?: boolean
  isInstallSuccess?: boolean
  isInstallFailed?: boolean
}

const logger = new Logger('usePWA::')

/**
 * @function creates a status object with boolean properties based on the input object.
 * @param {CreateStatus} object - The `object` parameter is an object that contains properties related
 * to the installation status.
 * @returns The function `createStatus` returns an object with the following properties:
 */
const createStatus = (object: CreateStatus) => {
  return {
    isInstallAllowed: Object.prototype.hasOwnProperty.call(
      object,
      'isInstallAllowed'
    )
      ? object.isInstallAllowed ?? false
      : false,
    isInstallWatingConfirm: Object.prototype.hasOwnProperty.call(
      object,
      'isInstallWatingConfirm'
    )
      ? object.isInstallWatingConfirm ?? false
      : false,
    isInstalling: Object.prototype.hasOwnProperty.call(object, 'isInstalling')
      ? object.isInstalling ?? false
      : false,
    isInstallCancelled: Object.prototype.hasOwnProperty.call(
      object,
      'isInstallCancelled'
    )
      ? object.isInstallCancelled ?? false
      : false,
    isInstallSuccess: Object.prototype.hasOwnProperty.call(
      object,
      'isInstallSuccess'
    )
      ? object.isInstallSuccess ?? false
      : false,
    isInstallFailed: Object.prototype.hasOwnProperty.call(
      object,
      'isInstallFailed'
    )
      ? object.isInstallFailed ?? false
      : false
  }
}

/**
 * Create instance of a PWA (Progressive Web App) status store
 */
const pwa = constructPWAStore({
  ...createStatus({} as CreateStatus),
  deferredPrompt: null
})

/**
 * The function checks if the PWA prompt is enabled based on certain conditions.
 * @returns a boolean value.
 */
export const pwaPromptEnabled = () => {
  return (
    !!pwa.getValue('deferredPrompt') &&
    pwa.getValue('isInstallAllowed') &&
    !pwa.getValue('isInstallSuccess')
  )
}

/**
 * The `usePWA` function is a custom React hook that handles the installation process of a Progressive
 * Web App (PWA) by managing the installation status, event, and providing a function to trigger the
 * installation prompt.
 * @returns The function `usePWA` returns an object with the following properties:
 */
export const usePWA = () => {
  const [installStatus, setInstallStatus] = useState(
    pwa.getValues({ filter: ['deferredPrompt'] })
  )
  const [installEvent, setInstallEvent] = useState<DeferredPrompt>(
    pwa.getValue('deferredPrompt') as DeferredPrompt
  )

  /**
   * @function "beforeAppInstallpromptHandler" handles the "beforeinstallprompt" event and updates
   * the install status and values accordingly.
   * @param {Event} e - an event object that represents the beforeinstallprompt event.
   */
  const beforeAppInstallpromptHandler = (e: any) => {
    logger.log('beforeinstallprompt::', e)
    e?.preventDefault()
    if (!installStatus.isInstalling) {
      if (!installStatus.isInstallSuccess) {
        setInstallEvent(e)
        pwa.setValue('deferredPrompt', e)
        if (!installStatus.isInstallAllowed) {
          setInstallStatus(
            createStatus({
              isInstallAllowed: true,
              isInstallCancelled: installStatus.isInstallCancelled
            })
          )
          pwa.setValues(
            createStatus({
              isInstallAllowed: true,
              isInstallCancelled: installStatus.isInstallCancelled
            })
          )
        }
      }
    }
  }

  /**
   * @function `appInstalledHandler` handles the event when the app is successfully installed.
   * @param {Event} e - The parameter "e" is an event object that represents the event being triggered.
   * In this case, it is an event object for the "appInstalled" event.
   */
  const appInstalledHandler = (e: Event) => {
    if (!installStatus.isInstallSuccess) {
      window.removeEventListener(
        'beforeinstallprompt',
        beforeAppInstallpromptHandler
      )
      e.preventDefault()
      setInstallStatus(createStatus({ isInstallSuccess: true }))
      pwa.setValues(createStatus({ isInstallSuccess: true }))
    }
  }

  useEffect(() => {
    window.addEventListener(
      'beforeinstallprompt',
      beforeAppInstallpromptHandler
    )
    window.addEventListener('appinstalled', appInstalledHandler)
    logger.log('values', pwa.getValues())
    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        beforeAppInstallpromptHandler
      )
      window.removeEventListener('appinstalled', appInstalledHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * The function `handleOnInstall` handles the installation process of a Progressive Web App (PWA) by
   * prompting the user to install and updating the installation status accordingly.
   * @returns
   */
  const handleOnInstall = () => {
    if (!installEvent) return
    setInstallStatus(createStatus({ isInstallWatingConfirm: true }))
    pwa.setValues(createStatus({ isInstallWatingConfirm: true }))

    installEvent?.prompt()

    Promise.resolve(installEvent.userChoice)
      .then((choiceResult: Outcome) => {
        if (choiceResult?.outcome === OUTCOME.ACCEPTED) {
          setInstallStatus(
            createStatus({ isInstalling: true, isInstallAllowed: false })
          )
          pwa.setValues(
            createStatus({ isInstalling: true, isInstallAllowed: false })
          )
        } else {
          setInstallStatus(
            createStatus({ isInstallCancelled: true, isInstallAllowed: true })
          )
          pwa.setValues(
            createStatus({ isInstallCancelled: true, isInstallAllowed: true })
          )
        }
      })
      .catch(() => {
        setInstallStatus(
          createStatus({ isInstallFailed: true, isInstallAllowed: true })
        )
        pwa.setValues(
          createStatus({ isInstallFailed: true, isInstallAllowed: true })
        )
      })
  }

  return {
    status: installStatus,
    event: installEvent,
    handleInstall: handleOnInstall,
    isPromptEnabled: pwaPromptEnabled()
  }
}
