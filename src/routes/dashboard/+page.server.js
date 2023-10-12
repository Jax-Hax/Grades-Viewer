import { login } from '$lib/index';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies}) {
    const url = cookies.get("url");
    const username = cookies.get("username");
    const password = cookies.get("password");
    if (!url || !username || !password) {
        throw redirect(302, '/')
    }
    let client = await login(url, username, password);
    let grades = await client.getGradebook();
    let studentInfo = await client.getStudentInfo();
    return {
        grades: JSON.parse(grades),
        studentInfo: JSON.parse(studentInfo)
    };
}