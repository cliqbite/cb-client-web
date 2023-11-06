import { createInstace } from '@/services/appwrite'
import env from '@/configs/environment'
import { Account, Databases, ID, Query } from 'appwrite'
import { NextResponse } from 'next/server'
const client = createInstace()
const databases = new Databases(client)
const account = new Account(client)
const promise = account.get()
const collectionId = env.appwriteCollectionId.user
const databaseId = env.appwriteDatabaseId.cliqbite

export async function POST(req: Request) {
  if (req) {
    let newUser = {}
    try {
      let user = await new Response(req.body).json()
      if (!userExists(user.mobile_number)) {
        if ((await isMerchant()) || (await isAdmin())) {
          const canteen = await getCanteen(user.canteen)
          newUser = {
            username: user.username,
            mobile_number: user.mobile_number,
            email_id: user.email_id,
            first_name: user.first_name,
            last_name: user.last_name,
            canteen: canteen,
            role: 'STAFF'
          }
          user.canteen = canteen
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

async function userExists(mobileNumber: any) {
  try {
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.equal('mobile_number', mobileNumber)
    ])
    return response.documents.length > 0
  } catch (error) {}
}
async function isAdmin() {
  let isAdmin = false
  try {
    promise.then(
      function (response) {
        isAdmin = response?.labels?.includes('Admin')
      },
      function (error) {}
    )
  } catch (error) {}
  return isAdmin
}
async function isMerchant() {
  let isMerchant = false
  try {
    promise.then(
      function (response) {
        isMerchant = response?.labels?.includes('Merchant')
      },
      function (error) {}
    )
  } catch (error) {}
  return isMerchant
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
