import { createInstace } from '@/client/services/appwrite'
import env from '@/configs/environment'
import orderService from '@/server/services/orderService'
import { Databases, ID } from 'appwrite'
import { NextResponse } from 'next/server'
const client = createInstace()
const collectionId = env.appwriteCollectionId.orders
const databaseId = env.appwriteDatabaseId.cliqbite
const databases = new Databases(client)
export async function POST(req: Request) {
  try {
    if (!req.body) {
      throw new Error('Request body is empty')
    }

    let order = await new Response(req.body).json()
    const token = await orderService.generateToken()
    const newOrder = {
      order_ts: new Date(),
      delivery_ts: null,
      status: order.status,
      order_id: await orderService.generateOrderId(),
      total_price: order.total_price,
      user: order.user,
      items: order.items,
      token: token
    }
    const response = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      newOrder
    )
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
