import { type NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '@lib/auth'

export const config = {
  matcher: ['*'],
}

export async function middleware(req: NextRequest) {

}
