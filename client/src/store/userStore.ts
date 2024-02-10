import { useStore } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

import { UserType } from '@/types/user'

type UserStoreType = {
  user: UserType | null
  setUser: (user: UserType | null) => void
}

export const userStore = createStore<UserStoreType>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'session-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export const useUserStore = () => useStore(userStore)
