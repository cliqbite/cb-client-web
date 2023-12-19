import { useEffect, useState } from 'react'
import { Session } from '../../common/types'
import authService from '../lib/auth'

async function getSession(id: string) {
  return authService.getSession(id)
}

export default function useSession(id: string = 'current') {
  const [session, setSession] = useState<Session>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getSession(id)
      .then(setSession)
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  return { session, isLoading }
}
