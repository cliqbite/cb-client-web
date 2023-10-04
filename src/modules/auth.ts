import Logger from '@/helpers/logger'
import appWriteClient from '@/services/appwrite.js'
import { Account, ID } from 'appwrite'

type CreateAccount = {
  email: string
  password: string
  name: string
}

type Login = {
  email: string
  password: string
}

export class AuthService {
  client = appWriteClient
  account
  logger = new Logger('auth::')

  constructor() {
    this.account = new Account(this.client)
  }

  async createAccount({ email, password, name }: CreateAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      )
      if (userAccount) {
        // call another method
        return this.login({ email, password })
      } else {
        return userAccount
      }
    } catch (error) {
      throw error
    }
  }

  async login({ email, password }: Login) {
    try {
      return await this.account.createEmailSession(email, password)
    } catch (error) {
      throw error
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get()
    } catch (error) {
      this.logger.log('getCurrentUser::error', error)
    }

    return null
  }

  async logout() {
    try {
      await this.account.deleteSessions()
    } catch (error) {
      this.logger.log('logout::error', error)
    }
  }
}

const authService = new AuthService()

export default authService
