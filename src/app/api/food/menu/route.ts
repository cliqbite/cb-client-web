import { NextResponse } from 'next/server'
import foodService from '@/app/utils/services/foodService'
export async function GET(req: any) {
  try {
    const canteen_id = req.nextUrl.searchParams.get('canteen_id')
    const category = req.nextUrl.searchParams.get('category')
    if (canteen_id && !category) {
      let items = await foodService.getMenu(canteen_id)
      return NextResponse.json(items)
    } else if (canteen_id && category) {
      let items = await foodService.getOrdersByCategory(canteen_id, category)
      return NextResponse.json(items)
    }
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
