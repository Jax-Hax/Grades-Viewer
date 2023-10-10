import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request, cookies }) => {
        const data = await request.formData();
        const url = data.get('schoolURL')
        const username = data.get('username')
        const password = data.get('password')
        cookies.set('url', url, { path: '/' })
        cookies.set('username', username, { path: '/' })
        cookies.set('password', password, { path: '/' })
		throw redirect(302, '/dashboard');
	}
};

