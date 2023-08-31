import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/core/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
// import { MongoDBAdapter } from '@auth/mongodb-adapter';
// import clientPromise from '$lib/database/clientPromise';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const authorization: Handle = async ({ event, resolve }) => {
	const session = await event.locals.getSession();
	if (!event.url.pathname.startsWith('/login')) {
		if (!session) {
			throw redirect(303, '/login');
		}
	} else {
		if (session) {
			throw redirect(303, '/');
		}
	}

	return resolve(event);
};

export const handle: Handle = sequence(
	SvelteKitAuth({
		trustHost: true,
		providers: [GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })]
		// adapter: MongoDBAdapter(clientPromise, { databaseName: NODE_ENV }),
	}),
	authorization
);
