import "next";
import { type TEnv } from "./env.schema";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TEnv {}
  }
}
