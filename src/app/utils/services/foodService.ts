import env from '@/configs/environment'
import { Databases, Query } from 'appwrite'
import { NextResponse } from 'next/server'
import { createInstace } from '@/client/services/appwrite'
import { Menu } from '@/server/model/menu'
import { Canteen } from '@/server/model/canteen'
import { College } from '@/server/model/college'
const client = createInstace()
const databases = new Databases(client)
const collectionIdCanteen = env.appwriteCollectionId.canteen
const collectionIdFood = env.appwriteCollectionId.food
const databaseId = env.appwriteDatabaseId.cliqbite

class FoodService {
  async getMenu(canteen_id: any) {
    try {
      let items: Menu[] = []
      let item: Menu
      const canteen_name = await this.getCanteen(canteen_id)
      const response = await databases.listDocuments(
        databaseId,
        collectionIdFood,
        [Query.equal('canteen_id', canteen_name)]
      )
      if (response) {
        let college: College
        let canteen: Canteen
        response.documents.forEach((el) => {
          college = {
            id: el.canteen[0].$id,
            college_name: el.canteen[0].college.college_name,
            college_id: el.canteen[0].college.college_id
          }
          canteen = {
            id: el.canteen[0].$id,
            name: el.canteen[0].name,
            canteen_id: el.canteen[0].canteen_id,
            college: college
          }
          item = {
            name: el.name,
            category: el.category,
            price: el.price,
            preparation_time: el.preparation_time,
            available: el.available,
            canteen: canteen
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
      let items: Menu[] = []
      let item: Menu
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
        let college: College
        let canteen: Canteen
        response.documents.forEach((el) => {
          college = {
            college_name: el.canteen[0].college.college_name,
            college_id: el.canteen[0].college.college_id
          }
          canteen = {
            name: el.canteen[0].name,
            college: college
          }
          item = {
            name: el.name,
            category: el.category,
            price: el.price,
            preparation_time: el.preparation_time,
            available: el.available,
            canteen: canteen
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

export default new FoodService()
