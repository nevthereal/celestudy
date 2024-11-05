ALTER TABLE "note" DROP CONSTRAINT "note_exam_exam_id_fk";
--> statement-breakpoint
ALTER TABLE "exam" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "note" ADD PRIMARY KEY ("id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note" ADD CONSTRAINT "note_exam_exam_id_fk" FOREIGN KEY ("exam") REFERENCES "public"."exam"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
