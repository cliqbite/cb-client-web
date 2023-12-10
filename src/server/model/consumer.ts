export class Consumer {
  mobile_number: string
  email_id: string
  first_name: string
  last_name: string
  college: string
  dob: string

  constructor(
    mobile_number: string,
    email_id: string,
    first_name: string,
    last_name: string,
    college: string,
    dob: string
  ) {
    this.mobile_number = mobile_number
    this.email_id = email_id
    this.first_name = first_name
    this.last_name = last_name
    this.college = college
    this.dob = dob
  }
}
