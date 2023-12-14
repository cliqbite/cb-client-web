import env from '@/configs/environment'
import { Databases, ID } from 'appwrite'
import { NextResponse } from 'next/server'
import { createInstace } from '@/client/services/appwrite'
const client = createInstace()
const databases = new Databases(client)
const collectionIdCart = env.appwriteCollectionId.cart
const databaseId = env.appwriteDatabaseId.cliqbite

class CartService {
  async addToCart(data: any) {
    try {
      const response = await databases.createDocument(
        databaseId,
        collectionIdCart,
        ID.unique(),
        data
      )
      let total = response.quantity * response.food[0].price
      // needs to be modified later!
      let resp = {
        message: 'Food Added to Cart!!',
        total_price: total
      }
      await databases.updateDocument(
        databaseId,
        collectionIdCart,
        response.$id,
        { total_price: total }
      )
      return NextResponse.json(resp)
    } catch (error) {
      console.error('Error:', error)
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  }
}
const cartService = new CartService()
export default cartService
