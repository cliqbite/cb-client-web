'use client'
import { useAccount } from '@/client/store'
import authService from '@/client/modules/auth'
import { useEffect, useState } from 'react'

const getUser = async () => {
  return authService.getCurrentUser()
}

export default function useAuth() {
  // const { data: user, isLoading } = useQuery({
  //   queryKey: ['getCurrentUser'],
  //   queryFn: authService.getCurrentUser,
  //   initialData: null
  // })
  const user = useAccount((state) => state.user)
  const setUser = useAccount((state) => state.setUser)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setUser])

  return { user, isLoading }
}
