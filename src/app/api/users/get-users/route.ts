import { Databases } from 'appwrite'
import { createInstace } from '@/services/appwrite'
import env from '@/configs/environment'
import { NextResponse } from 'next/server'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.user
const databaseId = env.appwriteDatabaseId.cliqbite

export async function GET() {
  try {
    let users: any[] = []
    let user
    const response = await databases.listDocuments(databaseId, collectionId)
    if (response) {
      response.documents.forEach((el) => {
        user = {
          username: el.username,
          email: el.email_id,
          mobine_number: el.mobile_number
        }
        users.push(user)
      })
    }
    return NextResponse.json(JSON.stringify(users))
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
