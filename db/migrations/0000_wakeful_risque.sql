DO $$ BEGIN
 CREATE TYPE "public"."TestStatus" AS ENUM('PENDING', 'SUCCESS', 'FAILED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Test" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"status" "TestStatus" DEFAULT 'PENDING' NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"success_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Test_name_unique" UNIQUE("name")
);
