import type { College, Colleges } from '@/common/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import zukeeper from 'zukeeper'

const KEY = 'cb-college-client'

type State = {
  college: College
  colleges: Colleges
}

type Actions = {
  // eslint-disable-next-line no-unused-vars
  setCollege: (clg: College) => void
  // eslint-disable-next-line no-unused-vars
  setColleges: (clg: Colleges) => void
}

// Initialize a default state
const initialState: State = {
  college: {} as College,
  colleges: [] as Colleges
}

export const useCollege = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setCollege: (clg: College) => {
          set({ college: clg })
        },
        setColleges: (clgs: Colleges) => {
          if (clgs.length) set({ colleges: [...clgs] })
          else set({ colleges: [...get().colleges] })
        }
      }),
      { name: KEY, skipHydration: true }
    )
  )
)
