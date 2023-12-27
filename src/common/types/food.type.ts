export type FoodType = {
  id: string
  name: string
  category: FoodCategory[]
  price: number | string
  preparation_time: string | number
  available: boolean
  canteen_id: string
  image_id: string | null
  food_id: string
}

export type FoodCategory =
  | 'breakfast'
  | 'snacks'
  | 'lunch'
  | 'beverage'
  | 'chats'
  | 'meals'
