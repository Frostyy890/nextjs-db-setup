import { migrate } from "drizzle-orm/postgres-js/migrator";
import { migrationClient } from "../connection";

console.log("Running migrations...");
migrate(migrationClient, {
  migrationsFolder: "./db/migrations",
  migrationsSchema: "./db/schema/index.ts",
})
  .then(() => {
    console.log("Migrations complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error running migrations: ", error);
    process.exit(1);
  });
