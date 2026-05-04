'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const password = formData.get('password')
  
  if (password === process.env.PASSWORD_LA_MOTO) {
    const cookieStore = await cookies()
    cookieStore.set('auth-banda', 'true', {
      maxAge: 60 * 60 * 24, // 24 hours in seconds
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    })
  } else {
    return { error: 'Contraseña incorrecta' }
  }

  // Redirect is executed outside the try/catch or after cookie is set
  redirect('/admin')
}
