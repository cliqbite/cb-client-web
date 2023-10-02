import { NextResponse } from 'next/server'

export async function GET() {
  const res = 'Hello from CliqBite'

  return NextResponse.json(res)
}
