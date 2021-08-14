import { createCartWithItem } from './utils/createCartWithItem';
import { addItemToCart } from './utils/addItemToCart';

export async function post(request) {
	let { cartId, itemId, quantity } = JSON.parse(request.body);
	quantity = parseInt(quantity);
	if (cartId) {
		console.log('--------------------------------');
		console.log('Adding item to existing cart...');
		console.log('--------------------------------');

		const shopifyResponse = await addItemToCart({
			cartId,
			itemId,
			// @ts-ignore
			quantity
		});

		return {
			statusCode: 200,
			body: JSON.stringify(shopifyResponse.cartLinesAdd.cart)
		};
	} else {
		console.log('--------------------------------');
		console.log('Creating new cart with item...');
		console.log('--------------------------------');
		const createCartResponse = await createCartWithItem({
			itemId,
			// @ts-ignore
			quantity
		});
		return {
			statusCode: 200,
			body: JSON.stringify(createCartResponse.cartCreate.cart)
		};
	}
}
