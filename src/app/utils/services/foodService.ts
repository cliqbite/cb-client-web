import env from '@/configs/environment'
import { Databases, Query } from 'appwrite'
import { NextResponse } from 'next/server'
import { createInstace } from '@/client/services/appwrite'
import { Food } from '@/server/model/food'
const client = createInstace()
const databases = new Databases(client)
const collectionIdFood = env.appwriteCollectionId.food
const databaseId = env.appwriteDatabaseId.cliqbite

class FoodService {
  async getMenu(canteen_id: any) {
    try {
      let items: Food[] = []
      let item: Food
      const response = await databases.listDocuments(
        databaseId,
        collectionIdFood,
        [Query.equal('canteen_id', canteen_id)]
      )
      if (response) {
        response.documents.forEach((el) => {
          item = {
            id: el.$id,
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
      const response = await databases.listDocuments(
        databaseId,
        collectionIdFood,
        [Query.equal('canteen_id', canteen_id)]
      )
      if (response) {
        response.documents.forEach((el) => {
          if (el.category.includes(category)) {
            item = {
              id: el.$id,
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
          }
        })
      }
      return items
    } catch (error) {
      console.error('Error in getOrdersByCategory:', error)
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
    }
  }
}
const foodService = new FoodService()
export default foodService
