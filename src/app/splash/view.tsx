'use client'
import { useEffect, type FC } from 'react'
import authService from '@/modules/auth'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/helpers/constants/route'

const View: FC = () => {
  const router = useRouter()
  useEffect(() => {
    authService.getCurrentUser().then((res) => {
      res !== null ? router.replace(ROUTE.HOME) : router.replace(ROUTE.LOGIN)
    })
  }, [router])
  return <></>
}
export default View
