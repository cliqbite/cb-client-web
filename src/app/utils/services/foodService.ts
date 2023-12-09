import env from '@/configs/environment'
import { Databases, Query } from 'appwrite'
import { NextResponse } from 'next/server'
import { createInstace } from '@/client/services/appwrite'
import { Food } from '@/server/model/food'
const client = createInstace()
const databases = new Databases(client)
const collectionIdCanteen = env.appwriteCollectionId.canteen
const collectionIdFood = env.appwriteCollectionId.food
const databaseId = env.appwriteDatabaseId.cliqbite

class FoodService {
  async getMenu(canteen_id: any) {
    try {
      let items: Food[] = []
      let item: Food
      const canteen_name = await this.getCanteen(canteen_id)
      const response = await databases.listDocuments(
        databaseId,
        collectionIdFood,
        [Query.equal('canteen_id', canteen_name)]
      )
      if (response) {
        response.documents.forEach((el) => {
          item = {
            name: el.name,
            category: el.category,
            price: el.price,
            preparation_time: el.preparation_time,
            available: el.available,
            canteen_id: el.canteen_id,
            image_id: el.image_id,
            food_id: el.food_id
          }
          items.push(item)
        })
      }
      return items
    } catch (error) {
      console.error('Error in getMenu:', error)
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
    }
  }

  async getOrdersByCategory(canteen_id: any, category: any) {
    try {
      let items: Food[] = []
      let item: Food
      const canteen_name = await this.getCanteen(canteen_id)
      const response = await databases.listDocuments(
        databaseId,
        collectionIdFood,
        [
          Query.equal('canteen_id', canteen_name),
          Query.equal('category', category)
        ]
      )
      if (response) {
        response.documents.forEach((el) => {
          item = {
            name: el.name,
            category: el.category,
            price: el.price,
            preparation_time: el.preparation_time,
            available: el.available,
            canteen_id: el.canteen_id,
            image_id: el.image_id,
            food_id: el.food_id
          }
          items.push(item)
        })
      }
      return items
    } catch (error) {
      console.error('Error in getOrdersByCategory:', error)
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
    }
  }
  async getCanteen(canteen_id: any) {
    let canteen_name
    if (canteen_id) {
      const canteen = await databases.listDocuments(
        databaseId,
        collectionIdCanteen,
        [Query.equal('canteen_id', canteen_id)]
      )
      canteen_name = canteen.documents[0].canteen_id
    }
    return canteen_name
  }
}
const foodService = new FoodService()
export default foodService
