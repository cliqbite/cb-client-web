/* eslint-disable no-unused-vars */
import { create } from 'zustand'

type State = {
  isAsideOpen: boolean
}

type Actions = {
  toggleAside: () => void
  closeAside: () => void
}

// Initialize a default state
const initialState: State = {
  isAsideOpen: false
}

export const useNavigation = create<State & Actions>((set) => ({
  ...initialState,
  toggleAside: () => {
    set((state) => ({ isAsideOpen: !state.isAsideOpen }))
  },
  closeAside: () => {
    set({ isAsideOpen: false })
  }
}))
