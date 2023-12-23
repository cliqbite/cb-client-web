import { NextResponse } from 'next/server'

class OrderService {
  async generateToken() {
    try {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$@'
      let token = ''

      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        token += characters.charAt(randomIndex)
      }
      return token
    } catch (error) {
      console.error('Error in getMenu:', error)
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
    }
  }
  async generateOrderId() {
    try {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let token = ''

      for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        token += characters.charAt(randomIndex)
      }
      return token
    } catch (error) {
      console.error('Error in getMenu:', error)
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
    }
  }
}
const orderService = new OrderService()
export default orderService
