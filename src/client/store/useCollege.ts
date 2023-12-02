import type { College, Colleges } from '@/common/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const KEY = 'cb-college-client'

type State = {
  college: College,
  colleges: Colleges
}

type Actions = {
  setCollege: (clg: College) => void,
  setColleges: (clg: Colleges) => void
}

// Initialize a default state
const initialState: State = {
  college: {} as College,
  colleges: [] as Colleges
}

export const useCollege = create<State & Actions>()(
  devtools(persist((set, get) => ({
    ...initialState,
    setCollege: (clg: College) => {
      set({ college: clg })
    },
    setColleges: (clgs: Colleges) => {
      set({ colleges: [...get().colleges, ...clgs] })
    }
  }), { name: KEY, skipHydration: true, }))
)
