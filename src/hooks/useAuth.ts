'use client'
import authService from '@/modules/auth'
import { useQuery } from '@tanstack/react-query'

export default function useAuth() {
  const { data: user } = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: authService.getCurrentUser
  })

  return user
}
