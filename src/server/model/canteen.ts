import { College } from './college'

export class Canteen {
  id: string
  name: string
  canteen_id: string
  college: College

  constructor(id: string, name: string, canteen_id: string, college: College) {
    this.id = id
    this.name = name
    this.canteen_id = canteen_id
    this.college = college
  }
}
