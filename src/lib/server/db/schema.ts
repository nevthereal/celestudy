import { pgTable, text, integer, timestamp, serial } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const exam = pgTable('exam', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	date: timestamp('date', { mode: 'date', withTimezone: true }),
	user: text('user')
		.references(() => user.id)
		.notNull()
});

export const note = pgTable('note', {
	id: serial('id').primaryKey(),
	body: text('body').notNull(),
	exam: integer('exam').references(() => exam.id, { onDelete: 'cascade' })
});

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
