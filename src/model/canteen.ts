import { College } from './college'

export class Canteen {
  name: string
  college: College

  constructor(name: string, college: College) {
    this.name = name
    this.college = college
  }
}
