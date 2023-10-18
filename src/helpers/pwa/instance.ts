import Logger from '../logger'

const logger = new Logger('pwa::')

/**
 * Type of whatever we want to store in the singleton
 * In this case, it is an object with a name attribute
 */
export type PWAStoreValue = {
  isInstallAllowed: boolean
  isInstallWatingConfirm: boolean
  isInstalling: boolean
  isInstallCancelled: boolean
  isInstallSuccess: boolean
  isInstallFailed: boolean
  deferredPrompt: DeferredPrompt
}

export type PWAStoreValueKeys = keyof PWAStoreValue
export type Outcome = { outcome: 'accepted' | 'dismissed' }
export type UserChoice = PromiseLike<Outcome> | Outcome
export type DeferredPrompt = {
  prompt: () => void
  userChoice: UserChoice
} | null

/**
 * Constants
 */
export const OUTCOME = {
  ACCEPTED: 'accepted',
  DISMISSED: 'dismissed'
}

/**
 * The only instance of our Singleton
 */
let instance: ReturnType<typeof constructStore<PWAStoreValue>>

/**
 * Singleton supplies accessors using Revealing Module pattern
 * Note: Object.freeze() not required due to type narrowing!
 */
const constructStore = <T extends object>(initial: T) => {
  /** Closure of the singleton's value to keep it private */
  let _value: T = initial
  logger.log('initial::', initial)

  /** Only the accessors are returned */
  return {
    /* allows you to update multiple values */
    setValues: (value: Partial<T>) => {
      if (_value !== undefined) return (_value = { ..._value, ...value })
      logger.warn('no data has been set')
      return _value
    },

    /* update a specific key-value pair in the stored object. */
    setValue: (key: keyof T, value: T) => {
      if (_value === undefined) return (_value = value)
      return (_value = { ..._value, [key]: value })
    },

    /* retrieve the values of stored object. 
    optional `filter` parameter, return values other than filtered key  */
    getValues: ({ filter }: { filter?: Array<keyof T> } = {}) => {
      if (filter && filter.length) {
        if (_value instanceof Object) {
          const _obj: { [key in keyof T]: unknown } = {} as {
            [key in keyof T]: unknown
          }
          for (const [key, value] of Object.entries(_value)) {
            if (filter.includes(key as keyof T)) continue
            _obj[key as keyof T] = value
          }
          return _obj as Partial<T>
        }

        return _value
      }
      return _value
    },

    /* retrieve the value of a specific key */
    getValue: (key: keyof T) => {
      if (_value instanceof Object) {
        return _value[key]
      }
      return _value
    }
  }
}

/**
 * Retrieves the only instance of the Singleton
 * and allows a once-only initialisation
 * (additional changes require the setValue accessor)
 */
const createInstance = (initial: PWAStoreValue = {} as PWAStoreValue) => {
  if (!instance) {
    instance = constructStore<PWAStoreValue>(initial)
    return instance
  }
  if (initial) {
    logger.warn('already initialised')
  }
  return instance
}

export default createInstance
