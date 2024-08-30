import "../envConfig";
import { type TEnv, NodeEnv } from "../env.schema";

function loadEnv(key: keyof TEnv, fallback?: string): string {
  const value = process.env[key];
  if (!value) {
    if (fallback) return fallback;
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const settings = {
  db: {
    url: loadEnv("DATABASE_URL"),
  },
  env: loadEnv("NODE_ENV", NodeEnv.DEVELOPMENT),
};

export default settings;
