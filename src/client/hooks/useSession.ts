import { useEffect, useState } from "react";
import authService from "../modules/auth";
import { Session } from "../../common/types";

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