import { z } from 'zod';

export const zRegister = z
	.object({
		email: z.string().email(),
		username: z.string().min(3).max(24),
		password: z.string().min(8),
		password_confirm: z.string().min(8)
	})
	.superRefine(({ password, password_confirm }, { addIssue }) => {
		if (password != password_confirm) {
			addIssue({
				code: 'custom',
				message: 'The passwords did not match',
				path: ['password_confirm']
			});
		}
	});
