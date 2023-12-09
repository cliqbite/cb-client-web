import authService from '../modules/auth'

export const getUser = async () => {
  return authService.getCurrentUser()
}
