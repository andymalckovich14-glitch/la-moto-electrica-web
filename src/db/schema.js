import {
  pgTable,
  serial,
  varchar,
  text,
  date,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const contrataciones = pgTable("contrataciones", {
  id:              serial("id").primaryKey(),
  nombre:          varchar("nombre", { length: 255 }).notNull(),
  email:           varchar("email", { length: 255 }).notNull(),
  fechaEvento:     date("fecha_evento").notNull(),
  lugar:           varchar("lugar", { length: 255 }).notNull(),
  tipoEvento:      varchar("tipo_evento", { length: 100 }).notNull(),
  tieneBackline:   boolean("tiene_backline").default(false).notNull(),
  backlineDetalle: text("backline_detalle"),
  comentarios:     text("comentarios"),
  atendido:        boolean("atendido").default(false).notNull(),
  createdAt:       timestamp("created_at").defaultNow().notNull(),
});
