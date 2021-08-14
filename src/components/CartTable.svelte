<script>
	// @ts-nocheck
	import { formatCurrency } from './utils/currency';
	import { onMount } from 'svelte';
	let cartItems = [];
	let cart;
	onMount(() => {
		cart = JSON.parse(localStorage.getItem('cart'));
		cartItems = cart.lines.edges;
	});
	function itemTotal(price, quantity) {
		const totalPrice = Number(price) * Number(quantity);
		return totalPrice.toFixed(2);
	}
	async function removeItem(lineId) {
		// remove item from Shopify cart
		const removeItemFromCart = await fetch('/api/remove-from-cart', {
			method: 'POST',
			body: JSON.stringify({
				cartId: localStorage.getItem('cartId'),
				lineId
			})
		})
			.then((res) => res.json())
			.then((data) => data);
		// update localStorage;
		localStorage.setItem('cartId', removeItemFromCart.id);
		localStorage.setItem('cart', JSON.stringify(removeItemFromCart));
		location.reload();
	}
</script>

<section>
	<table class="cart-table">
		<thead>
			<th class="cart-table-heading">Item</th>
			<th class="cart-table-heading">Price</th>
			<th class="cart-table-heading">Quantity</th>
			<th class="cart-table-heading">Total</th>
			<th class="cart-table-heading">Actions</th>
		</thead>
		<tbody>
			{#each cartItems as { node: item }}
				<tr class="cart-table-row">
					<td class="cart-table-cell">
						<a href={`/products/${item.merchandise.product.handle}`}>
							{item.merchandise.product.title} ({item.merchandise.title})
						</a>
					</td>
					<td class="cart-table-cell">
						{formatCurrency(item.merchandise.priceV2.amount, item.merchandise.priceV2.currencyCode)}
					</td>
					<td class="cart-table-cell">{item.quantity}</td>
					<td class="cart-table-cell">
						{itemTotal(item.merchandise.priceV2.amount, item.quantity)}
					</td>
					<td class="cart-table-cell">
						<button on:click={removeItem(item.id)}>Remove Item</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
