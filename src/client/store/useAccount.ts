import { User } from '@client/types/account'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  user: User
}

type Actions = {
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User | null) => void
  resetUser: () => void
}

// Initialize a default state
const INITIAL_STATE: State = {
  user: null
}

export const useAccount = create<State & Actions>()(
  devtools((set) => ({
    user: INITIAL_STATE.user,
    setUser: (user: User) =>
      set({
        user
      }),
    resetUser: () => set({ user: null })
  }))
)
