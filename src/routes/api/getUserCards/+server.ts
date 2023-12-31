import { json, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const GET = async (event) => {
	const session = await event.locals.getSession();
	const user = session?.user;
	if (!user) {
		throw redirect(303, '/login');
	}
	const userCards = await prisma.card.findMany({
		where: {
			User: {
				email: user.email
			}
		}
	});

	if (!userCards) {
		return json({ cards: [] });
	}

	return json({
		cards: userCards.map((card) => card.cardNumber)
	});
};
