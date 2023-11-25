import { Client, Databases } from 'appwrite'
// import { createInstace } from '@/services/appwrite'
// import env from '@/configs/environment'
import { NextResponse } from 'next/server'
import { College } from '@/model/college'
// const client = createInstace()
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('651ccd3cf07ac674f4fc')
const databases = new Databases(client)
// const collectionId = env.appwriteCollectionId.colleges
// const databaseId = env.appwriteDatabaseId.cliqbite

export async function GET() {
  try {
    let colleges: College[] = []
    let college: College
    //replace id's with collectionId and databaseId
    const response = await databases.listDocuments(
      '651cf1c7305c85827d11',
      '6537642232bccba9442c'
    )
    if (response) {
      response.documents.forEach((el) => {
        college = {
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
