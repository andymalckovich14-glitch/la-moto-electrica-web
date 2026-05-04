import { db } from "../../db/index.js";
import { contrataciones } from "../../db/schema.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      nombre,
      email,
      fecha,
      lugar,
      tipoEvento,
      backline,
      backlineDetalle,
      comentarios,
    } = body;

    // Validación básica en servidor
    if (!nombre || !email || !fecha || !lugar || !tipoEvento || !backline) {
      return Response.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const [result] = await db
      .insert(contrataciones)
      .values({
        nombre,
        email,
        fechaEvento: fecha,
        lugar,
        tipoEvento,
        tieneBackline: backline === "si",
        backlineDetalle: backlineDetalle || null,
        comentarios: comentarios || null,
      })
      .returning({ id: contrataciones.id });

    return Response.json({ success: true, id: result.id }, { status: 201 });
  } catch (error) {
    console.error("[API/contrataciones] Error al guardar:", error);
    return Response.json(
      { error: "Error interno del servidor. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
