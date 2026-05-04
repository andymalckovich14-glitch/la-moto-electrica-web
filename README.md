# La Moto Eléctrica - Official Website

Sitio web oficial de la banda de Shoegaze / Post-Rock **La Moto Eléctrica** (Anaco, Venezuela).
Desarrollado con Next.js 16 (App Router), Framer Motion, Vanilla CSS y base de datos PostgreSQL (Neon).

## 🚀 Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Base de Datos:** PostgreSQL a través de [Neon (Serverless)](https://neon.tech/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Animaciones:** Framer Motion (Scroll animations, Hover effects, Custom cursor)
- **Estilos:** Vanilla CSS / CSS Variables Tokens (Glassmorphism, Gradientes)
- **Componentes:** Swiper (Carrusel), React Icons
- **Herramientas Admin:** xlsx (Exportación a Excel), Next.js Middleware (Protección de rutas)

## 💻 Desarrollo Local

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto y agrega tu cadena de conexión a Neon Database:
   ```env
   DATABASE_URL=postgresql://usuario:contraseña@host.neon.tech/dbname?sslmode=require
   PASSWORD_LA_MOTO=xxxxxxxxxx
   ```

3. (Opcional) Operaciones de Base de Datos:
   - Generar migraciones: `npm run dbg`
   - Aplicar migraciones: `npm run dbm`
   - Abrir Drizzle Studio (interfaz visual): `npm run dbs`

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Despliegue (Producción en Vercel)

Este proyecto está optimizado para ser desplegado en **Vercel**.
Al conectar el repositorio a Vercel, el framework "Next.js" será detectado automáticamente.

**⚠️ PASO CRÍTICO PARA EL DESPLIEGUE:**
Debes configurar la variable de entorno de la base de datos en Vercel.
1. Ve a tu proyecto en Vercel -> Settings -> Environment Variables.
2. Agrega una nueva variable:
   - **Key:** `DATABASE_URL`
   - **Value:** (Pega aquí la URL de conexión de Neon Database)
3. Agrega también tu variable `PASSWORD_LA_MOTO` para que el panel de administración funcione en la nube.
4. Haz un redeploy de la aplicación para aplicar los cambios.

## 🔒 Panel de Administración

El sitio incluye una zona privada para revisar y gestionar las solicitudes de contratación.
- **Acceso:** Navega manualmente a `/admin`. (No hay enlaces públicos por seguridad).
- **Autenticación:** Protegido por Server Actions y Middleware. Requiere la contraseña definida en la variable de entorno `PASSWORD_LA_MOTO`.
- **Funcionalidades:** 
  - Listado de contrataciones obtenidas en tiempo real desde Neon mediante Drizzle ORM.
  - Exportación de todas las solicitudes a un archivo Excel (`.xlsx`) con un solo clic.
