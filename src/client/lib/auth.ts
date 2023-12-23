import appWriteClient from '@/client/services/appwrite'
import Logger from '@/common/log'
import { Account, ID, type Client } from 'appwrite'

type CreateAccount = {
  email: string
  password: string
  name: string
}

type Login = Omit<CreateAccount, 'name'>

export class Auth {
  private static instance: Auth
  private static account: Account
  private static logger: Logger

  private constructor(client: Client) {
    Auth.account = new Account(client)
    Auth.logger = new Logger('auth::')
  }

  public static createService(client: Client): Auth {
    if (!Auth.instance) {
      Auth.instance = new Auth(client)
    }

    return Auth.instance
  }

  async createEmailPassAccount({ email, password, name }: CreateAccount) {
    try {
      const userAccount = await Auth.account.create(
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
      Auth.logger.error('createEmailPassAccount::', error)

      throw error
    }
  }

  async loginEmailPass({ email, password }: Login) {
    try {
      const session = await Auth.account.createEmailSession(email, password)
      Auth.logger.log('loginEmailPass::', session)
      return session
    } catch (error) {
      Auth.logger.error('loginEmailPass::', error)
      throw error
    }
  }

  async loginMobile(phoneNumber: string) {
    try {
      const sessionToken = await Auth.account.createPhoneSession(
        ID.unique(),
        phoneNumber
      )
      Auth.logger.log({ sessionToken })
      return sessionToken
    } catch (error) {
      Auth.logger.error('loginMobile::error', error)
      throw error
    }
  }

  async verifyLoginMobile(userId: string, secret: string) {
    try {
      const session = await Auth.account.updatePhoneSession(userId, secret)
      Auth.logger.log('verifyLoginMobile::', session)
      return session
    } catch (error) {
      Auth.logger.error('verifyLoginMobile::', error)
      throw error
    }
  }

  async gOAuthLogin(successLink: string, failureLink: string) {
    try {
      const session = Auth.account.createOAuth2Session(
        'google',
        successLink,
        failureLink
      )
      Auth.logger.log('gAuthLogin::', session)
    } catch (error) {
      Auth.logger.error('gAuthLogin::', error)
    }
  }

  /**
   * Deprecated
   * @returns session
   */
  async gOAuthSession() {
    try {
      const session = await Auth.account.getSession('current')
      Auth.logger.log('gOAuthSession::', session)
      return session
    } catch (error) {
      Auth.logger.error('gOAuthSession::', error)
    }
  }

  async getCurrentUser() {
    try {
      if (!Auth.instance) {
        Auth.createService(appWriteClient)
      }

      const user = await Auth.account.get()
      Auth.logger.log('getCurrentUser::', user)
      return user
    } catch (error) {
      Auth.logger.error('getCurrentUser::error', error)
    }

    return null
  }

  async getSession(sessionId = 'current') {
    try {
      const user = await Auth.account.getSession(sessionId)
      Auth.logger.log('getSession::', user)
      return user
    } catch (error) {
      Auth.logger.error('getSession::error', error)
    }

    return null
  }

  async logout() {
    try {
      await Auth.account.deleteSessions()
      Auth.logger.log('logout', Auth.account)
    } catch (error) {
      Auth.logger.error('logout', error)
    }
  }
}

const authService = Auth.createService(appWriteClient)

export default authService
