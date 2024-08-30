import { defineConfig } from "drizzle-kit";
import settings from "./config/settings";

export default defineConfig({
  dialect: "postgresql",
  out: "./db/migrations",
  schema: "./db/schema/index.ts",
  dbCredentials: {
    url: settings.db.url,
  },
  verbose: true,
});
