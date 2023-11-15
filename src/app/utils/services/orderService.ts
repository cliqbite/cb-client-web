import { createInstace } from '@/services/appwrite'
import env from '@/configs/environment'
import { Account, Databases, ID, Query } from 'appwrite'
const client = createInstace()
const databases = new Databases(client)
const account = new Account(client)
const promise = account.get()
const collectionId = env.appwriteCollectionId.user
const databaseId = env.appwriteDatabaseId.cliqbite

class OrderService {}
export default new OrderService()
