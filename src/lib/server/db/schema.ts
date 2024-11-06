import { pgTable, text, integer, timestamp, serial, boolean } from 'drizzle-orm/pg-core';

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

export const project = pgTable('project', {
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
	projectId: integer('project_id').references(() => project.id, { onDelete: 'cascade' })
});

export const task = pgTable('task', {
	id: serial('id'),
	projectId: integer('project_id').references(() => project.id, { onDelete: 'cascade' }),
	completed: boolean('completed'),
	body: text('body').notNull()
});

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
