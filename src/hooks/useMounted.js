"use client";
import { useState, useEffect } from "react";

/**
 * Devuelve `true` solo después de que el componente
 * se monta en el cliente. Evita el flash de contenido
 * invisible (FOIC) causado por framer-motion + SSR.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
