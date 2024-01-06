import { NextResponse } from 'next/server'
import foodService from '@/app/utils/services/foodService'
export async function GET(req: any) {
  try {
    const canteen_id = req.nextUrl.searchParams.get('canteen_id')
    const name = req.nextUrl.searchParams.get('name')
    if (!canteen_id) {
      throw new Error('Please select the canteen!')
    }
    if (canteen_id && name) {
      let items = await foodService.getFoods(name, canteen_id)
      return NextResponse.json(items)
    }
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
