import { Consumer } from '@/server/model/consumer'
import consumerService from '@/server/services/consumerService'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (req) {
    try {
      let user: Consumer = await new Response(req.body).json()
      const existingUser = await consumerService.userExists(user.mobile_number)
      if (!existingUser) {
        const response = await consumerService.addUser(user)
        return NextResponse.json(JSON.stringify(response)) // Success
      } else {
        //update the user
        const response = await consumerService.updateUser(user, existingUser)
        return NextResponse.json(JSON.stringify(response))
      }
    } catch (err) {
      return NextResponse.json({ message: 'Internal server error' })
    }
  }
}
