CREATE TABLE "contrataciones" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"telefono" varchar(50),
	"detalles" text,
	"fecha_solicitud" date DEFAULT now() NOT NULL,
	"atendido" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
