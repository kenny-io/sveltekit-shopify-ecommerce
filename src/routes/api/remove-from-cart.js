import { removeItemFromCart } from './utils/removeItemFromCart';

export async function post(request) {
	const { cartId, lineId } = JSON.parse(request.body);

	try {
		const shopifyResponse = await removeItemFromCart({
			cartId,
			lineId
		});
		return {
			statusCode: 200,
			body: JSON.stringify(shopifyResponse.cartLinesRemove.cart)
		};
	} catch (error) {
		console.log('----------------');
		console.log('There was an error removing-item-from-cart');
		console.log('----------------');
		console.log(error);
	}
}
