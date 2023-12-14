import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { College } from '@/server/model/college'
import { Databases } from 'appwrite'
import { NextResponse } from 'next/server'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.colleges
const databaseId = env.appwriteDatabaseId.cliqbite

export async function GET() {
  try {
    let colleges: College[] = []
    let college: College
    const response = await databases.listDocuments(databaseId, collectionId)
    if (response) {
      response.documents.forEach((el) => {
        college = {
          id: el.$id,
          college_name: el.college_name,
          college_id: el.college_id
        }
        colleges.push(college)
      })
    }
    return NextResponse.json(colleges)
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
