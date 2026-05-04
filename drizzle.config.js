import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Cargar .env.local (Next.js lo hace automáticamente, pero drizzle-kit no)
config({ path: ".env.local" });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
