import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import { Account, Databases, ID, Query } from 'appwrite'
import { NextResponse } from 'next/server'
import { User } from '@/server/model/user'
import UserService from '../../../utils/services/userService'
const client = createInstace()
const databases = new Databases(client)
const account = new Account(client)
const collectionId = env.appwriteCollectionId.user
const databaseId = env.appwriteDatabaseId.cliqbite

export async function POST(req: Request) {
  if (req) {
    let newUser: User
    try {
      let user = await new Response(req.body).json()
      let existingUser = await UserService.userExists(user.mobile_number)
      if (!existingUser) {
        if ((await UserService.isMerchant()) || (await UserService.isAdmin())) {
          const canteen = await UserService.getCanteen(user.canteen)
          newUser = {
            username: user.username,
            mobile_number: user.mobile_number,
            email_id: user.email_id,
            first_name: user.first_name,
            last_name: user.last_name,
            canteen: [canteen.documents[0].$id],
            role: 'STAFF'
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
              return NextResponse.json(
                { error: 'An error occurred' },
                { status: 500 }
              ) // Failure
            }
          )
        }
      } else {
        //update the user?
        return NextResponse.json('User Already Exists!')
      }
    } catch (err) {
      return NextResponse.json({ message: 'Internal server error' })
    }
  }
}
