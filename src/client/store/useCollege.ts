/* eslint-disable no-unused-vars */
import type { College, Colleges } from '@/common/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const KEY = 'cb-college-client'

type State = {
  college: College
  colleges: Colleges
  _hasHydrated: Boolean
}

type Actions = {
  setCollege: (clg: College) => void
  setColleges: (clg: Colleges) => void
  setHasHydrated: (isLoading: boolean) => void
}

// Initialize a default state
const initialState: State = {
  college: {} as College,
  colleges: [] as Colleges,
  _hasHydrated: false
}

export const useCollege = create<
  State & Actions,
  [['zustand/persist', State & Actions]]
>(
  persist(
    (set, get) => ({
      ...initialState,
      setCollege: (clg: College) => {
        set({ college: clg })
      },
      setColleges: (clgs: Colleges) => {
        if (clgs.length) set({ colleges: [...clgs] })
        else set({ colleges: [...get()?.colleges] })
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
