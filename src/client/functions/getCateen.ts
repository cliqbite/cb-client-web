'use client'

import env from '@/configs/environment'
import { customFetch } from '../services/interceptor/fetch'

export const getCanteen = async (id: string) => {
  const res = await customFetch(
    `${env.hostUrl}/api/canteens/get-canteens?id=${id}`,
    {
      method: 'GET'
    }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch college information')
  }

  return res.json()
}
