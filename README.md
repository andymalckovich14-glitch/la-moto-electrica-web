# La Moto Eléctrica - Official Website

Sitio web oficial de la banda de Shoegaze / Post-Rock **La Moto Eléctrica** (Anaco, Venezuela).
Desarrollado con Next.js 16 (App Router), Framer Motion, Tailwind CSS v4 y base de datos PostgreSQL (Neon).

## 🚀 Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Base de Datos:** PostgreSQL a través de [Neon (Serverless)](https://neon.tech/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Animaciones:** Framer Motion (Scroll animations, Reveal effects, Custom cursor interactivo)
- **Estilos:** Híbrido (Tailwind CSS v4 + Vanilla CSS con Variables Tokens)
- **SEO & Performance:** Generación dinámica de `sitemap.ts` y `robots.ts`, optimización de Core Web Vitals.
- **Componentes:** Swiper (Carrusel), Reproductor de audio integrado, Barra de progreso de scroll, React Icons, Lucide React.
- **Estética Visual:** Textura de grano analógico (SVG Filter), Glassmorphism, tipografía Serif elegante.
- **Herramientas Admin:** xlsx (Exportación a Excel), Next.js Middleware (Protección de rutas).
- **Contenido:** Biografía interactiva, sistema de booking y gestión de estadísticas.

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

## ✨ Últimas Mejoras (Mayo 2026)

Recientemente hemos pulido la experiencia de usuario y el diseño visual:

- **Optimización de Layout:** Eliminación de espacios excesivos entre secciones para un flujo de scroll más cohesivo y profesional.
- **Framer Motion Refined:** Corrección de conflictos en animaciones de revelado y scroll suave para una navegación sin interrupciones.
- **Sección "Sobre Nosotros" Re-diseñada:** Implementación de tarjetas individuales para los integrantes con efectos de hover dinámicos y mayor legibilidad.
- **Grilla de Discografía:** Alineación precisa y diseño responsivo mejorado para la exhibición de álbumes.
- **Footer Profesional:** Rediseño del pie de página con enlaces sociales optimizados y estructura legal.
- **Full SEO:** Implementación de metadatos dinámicos, `sitemap.ts` y `robots.ts` para maximizar la visibilidad en buscadores.

## 🔒 Panel de Administración

El sitio incluye una zona privada para revisar y gestionar las solicitudes de contratación.

- **Acceso:** Navega manualmente a `/admin`. (No hay enlaces públicos por seguridad).
- **Autenticación:** Protegido por Server Actions y Middleware. Requiere la contraseña definida en la variable de entorno `PASSWORD_LA_MOTO`.
- **Funcionalidades:**
  - Listado de contrataciones obtenidas en tiempo real desde Neon mediante Drizzle ORM.
  - Exportación de todas las solicitudes a un archivo Excel (`.xlsx`) con un solo clic.
