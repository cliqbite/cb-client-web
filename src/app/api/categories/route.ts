import { Databases, Query } from 'appwrite'
import env from '@/configs/environment'
import { NextResponse } from 'next/server'
import { createInstace } from '@/client/services/appwrite'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.category
const databaseId = env.appwriteDatabaseId.cliqbite

export async function GET(req: any) {
  try {
    let categories: any[] = []
    const id = req.nextUrl.searchParams.get('canteen_id')
    if (!id) {
      throw new Error('Invalid Canteen')
    }
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.equal('canteen_id', id)
    ])
    if (response) {
      response.documents.forEach((el) => {
        categories.push(el.category)
      })
    }
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
