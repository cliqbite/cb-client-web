export class Food {
  food_id: string
  name: string
  category: string
  price: string
  preparation_time: string
  available: boolean
  canteen_id: string
  image_id: string

  constructor(
    food_id: string,
    name: string,
    category: string,
    price: string,
    preparation_time: string,
    available: boolean,
    canteen_id: string,
    image_id: string
  ) {
    this.name = name
    this.category = category
    this.price = price
    this.preparation_time = preparation_time
    this.available = available
    ;(this.canteen_id = canteen_id),
      (this.food_id = food_id),
      (this.image_id = image_id)
  }
}
