/* eslint-disable no-unused-vars */
import { type Canteen } from '@/server/model/canteen'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const KEY = 'cb-college-canteen-client'

type State = {
  canteen: Canteen
  canteens: Canteen[]
  _hasHydrated: Boolean
}

type Actions = {
  setCanteen: (clg: Canteen) => void
  setCanteens: (clg: Canteen[]) => void
  setHasHydrated: (isLoading: boolean) => void
}

// Initialize a default state
const initialState: State = {
  canteen: {} as Canteen,
  canteens: [] as Canteen[],
  _hasHydrated: false
}

export const useCanteen = create<
  State & Actions,
  [['zustand/persist', State & Actions]]
>(
  persist(
    (set) => ({
      ...initialState,
      setCanteen: (ctn: Canteen) => {
        set({ canteen: ctn })
      },
      setCanteens: (canteens: Canteen[]) => {
        set({ canteens })
      },
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state
        })
      }
    }),
    {
      name: KEY,
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      }
    }
  )
)
