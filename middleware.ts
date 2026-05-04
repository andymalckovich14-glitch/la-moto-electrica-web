import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Proteger cualquier ruta que empiece con /admin (excepto /admin/login)
  if (path.startsWith('/admin') && !path.startsWith('/admin/login')) {
    const authCookie = request.cookies.get('auth-banda')
    
    // Si no tiene la cookie, redirigir al login
    if (!authCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  // Aplicar el middleware a todas las rutas bajo /admin
  matcher: ['/admin/:path*'],
}
