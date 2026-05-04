'use client';

import * as XLSX from 'xlsx';
import { logout } from './actions';

export default function DashboardHeader({ data }: { data: any[] }) {
  const handleExport = () => {
    // Formatear los datos para que el Excel sea más legible
    const dataToExport = data.map((item) => ({
      'Nombre': item.nombre,
      'Email': item.email,
      'Fecha del Evento': item.fechaEvento ? new Date(item.fechaEvento).toLocaleDateString('es-ES') : 'Sin fecha',
      'Ubicación': item.lugar,
      'Tipo de Evento': item.tipoEvento,
      '¿Tiene Backline?': item.tieneBackline ? 'Sí' : 'No',
      'Detalles Backline': item.backlineDetalle || '',
      'Mensaje': item.comentarios || '',
      'Fecha de Solicitud': new Date(item.createdAt).toLocaleString('es-ES')
    }));

    // Crear worksheet y workbook
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contrataciones');
    
    // Generar y descargar el archivo
    XLSX.writeFile(workbook, 'contrataciones_la_moto.xlsx');
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleExport}
        className="px-4 py-2 bg-zinc-800 text-zinc-100 rounded hover:bg-zinc-700 transition-colors text-sm font-medium flex items-center gap-2 border border-zinc-700 shadow-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Exportar a Excel
      </button>
      
      <form action={logout}>
        <button
          type="submit"
          className="px-4 py-2 bg-red-950/40 text-red-200 rounded hover:bg-red-900/60 transition-colors text-sm font-medium flex items-center gap-2 border border-red-900/50 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar Sesión
        </button>
      </form>
    </div>
  );
}
