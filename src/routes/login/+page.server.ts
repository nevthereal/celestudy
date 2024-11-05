import { zRegister } from '$lib/zod';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) redirect(302, '/');

	const registerForm = await superValidate(zod(zRegister));

	return { registerForm };
};
