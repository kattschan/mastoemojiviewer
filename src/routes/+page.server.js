import { error } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		var instance = data.get('instance');
		if (!instance.startsWith('http')) {
			instance = 'https://' + instance;
		}
		const emoji = await fetch(instance + '/api/v1/custom_emojis', {
			method: 'GET',
			headers: {
				'X-Application-Name': 'mastoemojiviewer',
				'X-Application-Version': '1.0.0'
			}
		}).catch((errorCaught) => {
			error(500, errorCaught.message);
		});
		// if emoji isn't json
		if (emoji === undefined) {
			throw error(418, 'Not a Masto instance or not responding to my API request');
		} else {
			const json = await emoji.json();
			return { json, instance };
		}
	}
};
