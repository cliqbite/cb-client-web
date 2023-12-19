import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { User } from '@/server/model/user'
import { Databases, ID, Query } from 'appwrite'
import { NextResponse } from 'next/server'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.user
const databaseId = env.appwriteDatabaseId.cliqbite

export async function POST(req: Request) {
  if (req) {
    let newUser: User
    try {
      let user = await new Response(req.body).json()
      if (!userExists(user.mobile_number)) {
        const canteen = await getCanteen(user.canteen)
        newUser = {
          username: user.username,
          mobile_number: user.mobile_number,
          email_id: user.email_id,
          first_name: user.first_name,
          last_name: user.last_name,
          canteen: [canteen.documents[0].$id],
          role: 'MERCHANT'
        }
        const response = await databases.createDocument(
          databaseId,
          collectionId,
          ID.unique(),
          newUser
        )
        response.then(
          function (response: any) {
            return NextResponse.json(JSON.stringify(response)) // Success
          },
          function (error: any) {
            return NextResponse.json({ error: error }, { status: 500 })
          }
        )
      } else {
        return NextResponse.json('User Already Exists!')
      }
    } catch (err) {
      return NextResponse.json({ message: 'Internal server error' })
    }
  }
}

async function userExists(mobileNumber: any) {
  try {
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.equal('mobile_number', mobileNumber)
    ])
    return response.documents.length > 0
  } catch (error) {}
}
async function getCanteen(canteen: any) {
  const canteenCollectionId = env.appwriteCollectionId.canteen
  const response = await databases.listDocuments(
    databaseId,
    canteenCollectionId,
    [Query.equal('name', canteen)]
  )
  return response
}
