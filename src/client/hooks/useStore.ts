/* eslint-disable no-unused-vars */
'use client'

import { useState, useEffect } from 'react'

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export const useStoreSingle = <T, K extends keyof T>(
  store: (callback: (state: T) => unknown) => unknown,
  key: K
) => {
  return useStore(store, (state) => state[key])
}

export default useStore

/// reference : https://docs.pmnd.rs/zustand/integrations/persisting-store-data#usage-in-next.js
