CREATE TABLE IF NOT EXISTS "contrataciones" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"fecha_evento" date NOT NULL,
	"lugar" varchar(255) NOT NULL,
	"tipo_evento" varchar(100) NOT NULL,
	"tiene_backline" boolean DEFAULT false NOT NULL,
	"backline_detalle" text,
	"comentarios" text,
	"atendido" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
