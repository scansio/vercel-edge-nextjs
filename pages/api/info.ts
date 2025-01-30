import { type NextRequest } from 'next/server'
import { jsonResponse } from '@lib/utils'

export const config = {
  runtime: 'edge',
}

export default async function info(req: NextRequest) {
  return jsonResponse(200, {
    email: "your-email@example.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/scansio/vercel-edge-nextjs"
  })
}
