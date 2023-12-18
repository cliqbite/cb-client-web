'use client'
import { type FC } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/common/constants/route'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/client/functions/getUser'

const View: FC = () => {
  const router = useRouter()
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser
  })

  if (!isLoading) {
    data !== null ? router.replace(ROUTE.HOME) : router.replace(ROUTE.LOGIN)
  }
  return <></>
}
export default View
