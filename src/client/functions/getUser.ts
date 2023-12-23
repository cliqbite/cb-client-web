'use client'
import authService from '../lib/auth'

export const getUser = async () => {
  return authService.getCurrentUser()
}
