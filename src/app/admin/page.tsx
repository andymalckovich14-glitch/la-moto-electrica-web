import { getSolicitudes } from './actions';
import DashboardHeader from './DashboardHeader';

export const dynamic = 'force-dynamic'; // Forzamos a que siempre renderice dinámicamente y traiga los últimos datos

export default async function AdminDashboard() {
  const solicitudes = await getSolicitudes();

  return (
    <div className="min-h-screen p-8 bg-zinc-950 text-zinc-50 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-light tracking-wider">
            ZONA PRIVADA <span className="text-zinc-500 text-lg ml-2">/ Panel de Control</span>
          </h1>
          <DashboardHeader data={solicitudes} />
        </header>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="px-6 py-5 border-b border-zinc-800 bg-zinc-900/80 flex items-center justify-between">
            <h2 className="text-xl font-medium text-zinc-100">Solicitudes de Contratación</h2>
            <span className="text-sm px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">
              {solicitudes.length} {solicitudes.length === 1 ? 'solicitud' : 'solicitudes'}
            </span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/40 border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Nombre</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Fecha del Evento</th>
                  <th className="px-6 py-4 font-medium">Ubicación</th>
                  <th className="px-6 py-4 font-medium w-1/3">Mensaje</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {solicitudes.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <svg className="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                        <span>No hay solicitudes de contratación todavía.</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  solicitudes.map((solicitud) => (
                    <tr key={solicitud.id} className="hover:bg-zinc-800/30 transition-colors group">
                      <td className="px-6 py-4 text-zinc-100 font-medium whitespace-nowrap">
                        {solicitud.nombre}
                      </td>
                      <td className="px-6 py-4 text-zinc-400 whitespace-nowrap">
                        <a href={`mailto:${solicitud.email}`} className="hover:text-zinc-100 hover:underline transition-all">
                          {solicitud.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-zinc-300 whitespace-nowrap">
                        {solicitud.fechaEvento ? new Date(solicitud.fechaEvento).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }) : '-'}
                      </td>
                      <td className="px-6 py-4 text-zinc-300 whitespace-nowrap">
                        {solicitud.lugar}
                      </td>
                      <td className="px-6 py-4 text-zinc-400">
                        <p className="line-clamp-2 text-sm leading-relaxed" title={solicitud.comentarios || ''}>
                          {solicitud.comentarios || <span className="italic opacity-50">Sin mensaje</span>}
                        </p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
