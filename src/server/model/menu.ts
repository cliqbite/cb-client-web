import { Canteen } from './canteen'

export class Menu {
  name: string
  category: string
  price: string
  preparation_time: string
  available: boolean
  canteen: Canteen

  constructor(
    name: string,
    category: string,
    price: string,
    preparation_time: string,
    available: boolean,
    canteen: Canteen
  ) {
    this.name = name
    this.category = category
    this.price = price
    this.preparation_time = preparation_time
    this.available = available
    this.canteen = canteen
  }
}
