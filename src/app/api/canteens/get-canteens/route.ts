import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { Canteen } from '@/server/model/canteen'
import { College } from '@/server/model/college'
import { Databases, Query } from 'appwrite'
import { NextResponse } from 'next/server'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.canteen
const databaseId = env.appwriteDatabaseId.cliqbite

export async function GET(req: any) {
  try {
    let canteens: Canteen[] = []
    let canteen: Canteen
    let college: College
    const id = req.nextUrl.searchParams.get('id')
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.equal('college', id)
    ])
    if (response) {
      response.documents.forEach((el) => {
        college = {
          id: el.college.$id,
          college_name: el.college.college_name,
          college_id: el.college.college_id
        }
        canteen = {
          id: el.$id,
          name: el.name,
          canteen_id: el.canteen_id,
          college: college
        }
        canteens.push(canteen)
      })
    }
    return NextResponse.json(canteens)
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
