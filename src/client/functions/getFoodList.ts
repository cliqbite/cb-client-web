'use client'

import type { FoodType } from '@/common/types'
import env from '@/configs/environment'
import { customFetch } from '../services/interceptor/fetch'

export const getFoodList = async (
  canteenId: string,
  category?: string
): Promise<FoodType[]> => {
  const res = await customFetch(
    `${env.hostUrl}/api/food/menu?canteen_id=${canteenId}&category=${category}`,
    {
      method: 'GET'
    }
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch college information')
  }

  return res.json()
}
