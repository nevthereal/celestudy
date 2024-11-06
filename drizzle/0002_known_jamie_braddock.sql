CREATE TABLE IF NOT EXISTS "task" (
	"id" serial NOT NULL,
	"project_id" integer,
	"completed" boolean,
	"body" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "exam" RENAME TO "project";--> statement-breakpoint
ALTER TABLE "note" RENAME COLUMN "exam" TO "project_id";--> statement-breakpoint
ALTER TABLE "project" DROP CONSTRAINT "exam_user_user_id_fk";
--> statement-breakpoint
ALTER TABLE "note" DROP CONSTRAINT "note_exam_exam_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "task" ADD CONSTRAINT "task_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project" ADD CONSTRAINT "project_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note" ADD CONSTRAINT "note_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
