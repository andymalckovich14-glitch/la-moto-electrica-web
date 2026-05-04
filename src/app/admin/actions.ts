'use server';

import { db } from '../../db';
import { contrataciones } from '../../db/schema';
import { desc } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getSolicitudes() {
  try {
    const solicitudes = await db
      .select()
      .from(contrataciones)
      .orderBy(desc(contrataciones.createdAt));
      
    return solicitudes;
  } catch (error) {
    console.error("Error obteniendo contrataciones:", error);
    return []; // Return empty array on error to prevent breaking the UI
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('auth-banda');
  redirect('/');
}
