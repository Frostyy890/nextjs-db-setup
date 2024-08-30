import { pgTable, serial, varchar, timestamp, boolean, pgEnum, integer } from "drizzle-orm/pg-core";

export enum TestStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export const testStatusEnum = pgEnum("TestStatus", [
  TestStatus.PENDING,
  TestStatus.SUCCESS,
  TestStatus.FAILED,
]);

export const testTable = pgTable("Test", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).unique().notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  status: testStatusEnum("status").default(TestStatus.PENDING).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  successCount: integer("success_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
