"use client";
import { useState } from "react";
import Link from "next/link";
import "./booking.css";

const EVENT_TYPES = [
  "Concierto",
  "Festival",
  "Evento privado",
  "Corporativo",
  "Otro",
];

const initialForm = {
  nombre: "",
  email: "",
  fecha: "",
  lugar: "",
  tipoEvento: "",
  backline: "",
  backlineDetalle: "",
  comentarios: "",
};

export default function ContratacionesPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al corregir
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.nombre.trim()) errs.nombre = "El nombre es obligatorio";
    if (!form.email.trim()) {
      errs.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Ingresa un email válido";
    }
    if (!form.fecha) errs.fecha = "La fecha es obligatoria";
    if (!form.lugar.trim()) errs.lugar = "El lugar es obligatorio";
    if (!form.tipoEvento) errs.tipoEvento = "Selecciona un tipo de evento";
    if (!form.backline) errs.backline = "Indica si incluye backline";
    if (form.backline === "si" && !form.backlineDetalle.trim()) {
      errs.backlineDetalle = "Describe con qué equipo cuentas";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll al primer error
      const firstKey = Object.keys(errs)[0];
      document.querySelector(`[name="${firstKey}"]`)?.focus();
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  // ── Estado: enviado ──
  if (submitted) {
    return (
      <div className="booking-page">
        <div className="booking-success">
          <div className="success-icon">✓</div>
          <h2>¡Solicitud enviada!</h2>
          <p>
            Gracias por tu interés, <strong>{form.nombre}</strong>. Nos
            pondremos en contacto contigo pronto a través de{" "}
            <strong>{form.email}</strong>.
          </p>
          <div className="success-actions">
            <Link href="/" className="booking-btn-secondary">
              Volver al inicio
            </Link>
            <button onClick={handleReset} className="booking-btn-primary">
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Formulario ──
  return (
    <div className="booking-page">
      {/* ── Header ── */}
      <div className="booking-header">
        <Link href="/" className="booking-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver
        </Link>
        <h1 className="booking-title">Contrataciones</h1>
        <p className="booking-subtitle">
          Completa el formulario y nos pondremos en contacto contigo para
          coordinar todos los detalles.
        </p>
      </div>

      {/* ── Form ── */}
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {/* Nombre */}
        <div className={`field ${errors.nombre ? "field--error" : ""}`}>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre o el de tu organización"
            autoComplete="name"
          />
          {errors.nombre && <span className="field-error">{errors.nombre}</span>}
        </div>

        {/* Email */}
        <div className={`field ${errors.email ? "field--error" : ""}`}>
          <label htmlFor="email">Email de contacto</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            autoComplete="email"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        {/* Fecha + Lugar (grid 2 cols) */}
        <div className="field-row">
          <div className={`field ${errors.fecha ? "field--error" : ""}`}>
            <label htmlFor="fecha">Fecha del evento</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
            />
            {errors.fecha && <span className="field-error">{errors.fecha}</span>}
          </div>

          <div className={`field ${errors.lugar ? "field--error" : ""}`}>
            <label htmlFor="lugar">Lugar</label>
            <input
              type="text"
              id="lugar"
              name="lugar"
              value={form.lugar}
              onChange={handleChange}
              placeholder="Ciudad, Venue, Dirección"
              autoComplete="off"
            />
            {errors.lugar && <span className="field-error">{errors.lugar}</span>}
          </div>
        </div>

        {/* Tipo de evento */}
        <div className={`field ${errors.tipoEvento ? "field--error" : ""}`}>
          <label htmlFor="tipoEvento">Tipo de evento</label>
          <select
            id="tipoEvento"
            name="tipoEvento"
            value={form.tipoEvento}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.tipoEvento && (
            <span className="field-error">{errors.tipoEvento}</span>
          )}
        </div>

        {/* Backline */}
        <div className={`field ${errors.backline ? "field--error" : ""}`}>
          <label>¿Incluye Backline?</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="backline"
                value="si"
                checked={form.backline === "si"}
                onChange={handleChange}
              />
              <span className="radio-label">Sí, contamos con equipo</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="backline"
                value="no"
                checked={form.backline === "no"}
                onChange={handleChange}
              />
              <span className="radio-label">No, la banda trae todo</span>
            </label>
          </div>
          {errors.backline && (
            <span className="field-error">{errors.backline}</span>
          )}
        </div>

        {/* Detalle backline (condicional) */}
        {form.backline === "si" && (
          <div
            className={`field field--conditional ${
              errors.backlineDetalle ? "field--error" : ""
            }`}
          >
            <label htmlFor="backlineDetalle">
              ¿Con qué equipo cuentas?
            </label>
            <textarea
              id="backlineDetalle"
              name="backlineDetalle"
              value={form.backlineDetalle}
              onChange={handleChange}
              placeholder="Ej: Amplificadores, batería, sistema de sonido..."
              rows={3}
            />
            {errors.backlineDetalle && (
              <span className="field-error">{errors.backlineDetalle}</span>
            )}
          </div>
        )}

        {/* Comentarios */}
        <div className="field">
          <label htmlFor="comentarios">Comentarios adicionales</label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={form.comentarios}
            onChange={handleChange}
            placeholder="Cualquier detalle que consideres importante..."
            rows={4}
          />
        </div>

        {/* Submit */}
        <button type="submit" className="booking-submit">
          Enviar solicitud
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </form>
    </div>
  );
}
