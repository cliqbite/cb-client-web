import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { Account, Databases, Query } from 'appwrite'
const client = createInstace()
const databases = new Databases(client)
const account = new Account(client)
const promise = account.get()
const collectionId = env.appwriteCollectionId.user
const databaseId = env.appwriteDatabaseId.cliqbite

class UserService {
  async userExists(mobileNumber: any) {
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal('mobile_number', mobileNumber)
      ])
      return response.documents.length > 0
    } catch (error) {}
  }
  isAdmin() {
    let isAdmin = false
    try {
      promise.then(
        function (response) {
          isAdmin = response?.labels?.includes('Admin')
        },
        function (error) {
          return error
        }
      )
    } catch (error) {}
    return isAdmin
  }
  isMerchant() {
    let isMerchant = false
    try {
      promise.then(
        function (response) {
          isMerchant = response?.labels?.includes('Merchant')
        },
        function (error) {
          return error
        }
      )
    } catch (error) {}
    return isMerchant
  }

  async getCanteen(canteen: any) {
    const canteenCollectionId = env.appwriteCollectionId.canteen
    const response = await databases.listDocuments(
      databaseId,
      canteenCollectionId,
      [Query.equal('name', canteen)]
    )
    return response
  }
}
const userService = new UserService()
export default userService
