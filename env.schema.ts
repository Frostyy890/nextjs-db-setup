import { z } from "zod";

export enum NodeEnv {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
  TEST = "test",
}

export const envSchema = z.object({
  NODE_ENV: z.enum([NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION, NodeEnv.TEST]),
  DATABASE_URL: z.string(),
});

export type TEnv = z.infer<typeof envSchema>;
