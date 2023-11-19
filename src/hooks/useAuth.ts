'use client'
import { ROUTE } from '@/helpers/constants/route'
import { log } from '@/helpers/logger'
import authService from '@/modules/auth'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export default function useAuth() {
  const router = useRouter()
  const { data: user } = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: authService.getCurrentUser
  })
  log('useAuth::', user)
  if (!user) router.push(ROUTE.LOGIN)
  return user
}
