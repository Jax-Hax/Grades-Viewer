

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
        const data = await request.formData();
		login(data.get('schoolURL'),data.get('username'),data.get('password')).then(client => client.getGradebook())
        .then(console.log);
	}
};

