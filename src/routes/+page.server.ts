import type { PageServerLoad } from './$types';
import { maxCards } from '$lib/globals';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const res = await event.fetch('/api/getUserCards');
	const userCards = await res.json();

	if (userCards.cards.length == maxCards) {
		throw redirect(303, '/completion');
	}

	return {
		session: await event.locals.getSession(),
		totalCardsCollected: userCards.cards.length,
		maxCards
	};
};
