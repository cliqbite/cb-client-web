import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { Food } from '@/server/model/food'
import { Databases, ID } from 'appwrite'
import { NextResponse } from 'next/server'
const client = createInstace()
const databases = new Databases(client)
const collectionId = env.appwriteCollectionId.food
const databaseId = env.appwriteDatabaseId.cliqbite

export async function POST(req: Request) {
  if (req) {
    try {
      let food: Food = await new Response(req.body).json()
      // if ((await UserService.isMerchant()) || (await UserService.isAdmin())) {
      const response = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        food
      )
      response.then(
        function (response: any) {
          return NextResponse.json(JSON.stringify(response)) // Success
        },
        function (error: any) {
          return NextResponse.json({ error: error }, { status: 500 }) // Failure
        }
      )
      // }
    } catch (err) {
      return NextResponse.json({ message: 'Internal server error' })
    }
  }
}
