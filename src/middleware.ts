import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server'

const homeRoutes = ['/']

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const homeRewrite = NextResponse.rewrite(new URL('/home', request.url))
  const response = NextResponse.next()
  if (homeRoutes.includes(pathname)) return homeRewrite
  return response
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|images|assets|favicon.ico|logo.png|sw.js).*)'
  ]
}
