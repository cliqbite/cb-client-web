import Logger from '@/common/log'
import appWriteClient from '@/client/services/appwrite'
import { Account, type Client, type Models } from 'appwrite'

export class Profile {
  private static instance: Profile
  private static account: Account
  private static logger: Logger

  private constructor(client: Client) {
    Profile.account = new Account(client)
    Profile.logger = new Logger('profile::')
  }

  public static createService(client: Client): Profile {
    if (!Profile.instance) {
      Profile.instance = new Profile(client)
    }

    return Profile.instance
  }

  async getAccount() {
    try {
      const account = await Profile.account.get()
      Profile.logger.log('getAccount::', account)
      return account
    } catch (error) {
      Profile.logger.error('getAccount::', error)
      return error
    }
  }

  async updateEmail(email: string, password: string) {
    try {
      const promise = await Profile.account.updateEmail(email, password)
      Profile.logger.log('updateEmail::', promise)
      return promise
    } catch (error) {
      Profile.logger.error('updateEmail::', error)
      return error
    }
  }

  async updateName(name: string) {
    try {
      const promise = await Profile.account.updateName(String(name))
      Profile.logger.log('updateName::', promise)
      return promise
    } catch (error) {
      Profile.logger.error('updateName::', error)
      return error
    }
  }

  async updatePhone(phone: string, password: string) {
    try {
      const promise = await Profile.account.updatePhone(phone, password)
      Profile.logger.log('updatePhone::', promise)
      return promise
    } catch (error) {
      Profile.logger.error('updatePhone::', error)
      return error
    }
  }

  async getPrefs() {
    try {
      const promise = await Profile.account.getPrefs()
      Profile.logger.log('getPrefs::', promise)
      return promise
    } catch (error) {
      Profile.logger.error('getPrefs::', error)
      return error
    }
  }

  /**
   * The maximum allowed prefs size is 64kB and throws error if exceeded.
   */
  async updatePrefs(preferences: Partial<Models.Preferences>) {
    try {
      const promise = await Profile.account.updatePrefs(preferences)
      Profile.logger.log('getPrefs::', promise)
      return promise
    } catch (error) {
      Profile.logger.error('getPrefs::', error)
      return error
    }
  }
}

const profileService = Profile.createService(appWriteClient)

export default profileService
