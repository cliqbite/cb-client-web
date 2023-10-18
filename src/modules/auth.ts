import Logger from '@/helpers/logger'
import appWriteClient from '@/services/appwrite'
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
  account: Account
  logger: Logger

  constructor() {
    this.account = new Account(this.client)
    this.logger = new Logger('auth::')
  }

  async createEmailPassAccount({ email, password, name }: CreateAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      )
      if (userAccount) {
        // call another method
        return this.loginEmailPass({ email, password })
      } else {
        return userAccount
      }
    } catch (error) {
      this.logger.error('createEmailPassAccount::', error)

      throw error
    }
  }

  async loginEmailPass({ email, password }: Login) {
    try {
      const session = await this.account.createEmailSession(email, password)
      this.logger.log('loginEmailPass::', session)
      return session
    } catch (error) {
      this.logger.error('loginEmailPass::', error)
      throw error
    }
  }

  async loginMobile(phoneNumber: 'string') {
    try {
      const sessionToken = await this.account.createPhoneSession(
        ID.unique(),
        phoneNumber
      )
      this.logger.log({ sessionToken })
      return sessionToken
    } catch (error) {
      this.logger.error('loginMobile::error', error)
      throw error
    }
  }

  async verifyLoginMobile(userId: string, secret: string) {
    try {
      const session = await this.account.updatePhoneSession(userId, secret)
      this.logger.log('verifyLoginMobile::', session)
      return session
    } catch (error) {
      this.logger.error('verifyLoginMobile::', error)
      throw error
    }
  }

  async gOAuthLogin(successLink: string, failureLink: string) {
    try {
      const session = this.account.createOAuth2Session(
        'google',
        successLink,
        failureLink
      )
      this.logger.log('gAuthLogin::', session)
    } catch (error) {
      this.logger.error('gAuthLogin::', error)
    }
  }

  async gOAuthSession() {
    try {
      const session = await this.account.getSession('current')
      this.logger.log('gOAuthSession::', session)
      return session
    } catch (error) {
      this.logger.error('gOAuthSession::', error)
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get()
      this.logger.log('getCurrentUser::', user)
      return user
    } catch (error) {
      this.logger.error('getCurrentUser::error', error)
    }

    return null
  }

  async logout() {
    try {
      await this.account.deleteSessions()
      this.logger.log('logout', this.account)
    } catch (error) {
      this.logger.error('logout', error)
    }
  }
}

const authService = new AuthService()

export default authService
