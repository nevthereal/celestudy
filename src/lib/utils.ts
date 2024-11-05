import { redirect } from '@sveltejs/kit';

export function checkUser(locals: App.Locals) {
	if (!locals.user) redirect(302, '/login');
}
