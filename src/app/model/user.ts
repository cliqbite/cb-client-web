export class User {
  username: string
  mobile_number: string
  email_id: string
  first_name: string
  last_name: string
  canteen: string[]
  role: string

  constructor(
    username: string,
    mobile_number: string,
    email_id: string,
    first_name: string,
    last_name: string,
    canteen: string[],
    role: string
  ) {
    this.username = username
    this.mobile_number = mobile_number
    this.email_id = email_id
    this.first_name = first_name
    this.last_name = last_name
    this.canteen = canteen
    this.role = role
  }
}
