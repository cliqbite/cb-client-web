import cartService from '@/server/services/cartService'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    if (!req.body) {
      throw new Error('Request body is empty')
    }
    const food = await new Response(req.body).json()
    if (!food || !food.food_id) {
      throw new Error('Food ID is missing or invalid')
    }
    const cartData = {
      quantity: food.quantity,
      user: [food.user_id],
      food: [food.food_id]
    }
    const response = cartService.addToCart(cartData)
    return response
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
