import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { Consumer } from '@/server/model/consumer'
import { Databases, ID, Query } from 'appwrite'
import { NextResponse } from 'next/server'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.consumer
const databaseId = env.appwriteDatabaseId.cliqbite

class ConsumerService {
  async userExists(mobileNumber: string) {
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal('mobile_number', mobileNumber)
      ])
      return response.documents[0].$id
    } catch (error) {}
  }

  async addUser(user: Consumer) {
    try {
      const response = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        user
      )
      response.then(
        function (response: any) {
          return NextResponse.json(JSON.stringify(response)) // Success
        },
        function (error: any) {
          return NextResponse.json({ error: error }, { status: 500 }) // Failure
        }
      )
    } catch (err) {
      return NextResponse.json({ message: 'Internal server error' })
    }
  }
  async updateUser(user: Consumer, existingUser: string) {
    try {
      const response = await databases.updateDocument(
        databaseId,
        collectionId,
        existingUser,
        user
      )
      response.then(
        function (response: any) {
          return NextResponse.json(JSON.stringify(response)) // Success
        },
        function (error: any) {
          return NextResponse.json({ error: error }, { status: 500 }) // Failure
        }
      )
    } catch (err) {
      return NextResponse.json({ message: 'Internal server error' })
    }
  }
}
const consumerService = new ConsumerService()
export default consumerService
