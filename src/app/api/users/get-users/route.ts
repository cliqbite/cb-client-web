import { Databases } from 'appwrite'
import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { NextResponse } from 'next/server'
import { User } from '@/server/model/user'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.user
const databaseId = env.appwriteDatabaseId.cliqbite

export async function GET() {
  try {
    let users: User[] = []
    let user: User
    const response = await databases.listDocuments(databaseId, collectionId)
    if (response) {
      response.documents.forEach((el) => {
        user = {
          username: el.username,
          mobile_number: el.mobile_number,
          email_id: el.email_id,
          first_name: el.first_name,
          last_name: el.last_name,
          canteen: el.canteen,
          role: 'MERCHANT'
        }
        users.push(user)
      })
    }
    return NextResponse.json(JSON.stringify(users))
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
