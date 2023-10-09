import { login } from '$lib/index';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request, cookies }) => {
        const data = await request.formData();
        const url = data.get('schoolURL')
        const username = data.get('username')
        const password = data.get('password')
        cookies.set('url', url, { path: '/' })
		let client = await login(url, username, password);
        let grades = await client.getGradebook();
        return {
            grades: JSON.parse(grades)
        };
	}
};

