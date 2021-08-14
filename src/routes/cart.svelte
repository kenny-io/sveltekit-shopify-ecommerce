<script>
	// @ts-nocheck
	import CartTable from '../components/CartTable.svelte';
	import CartTotal from '../components/CartTotal.svelte';
	import { onMount } from 'svelte';
	let cart;
	let cartItems = [];
	onMount(() => {
		// get cart details from localStorage
		cart = JSON.parse(localStorage.getItem('cart'));
		cartItems = cart.lines.edges;
	});
</script>

<section>
	<main class="cart-page">
		<article class="cart-page-content">
			<h1>Your Cart</h1>
			{#if cartItems.length > 0}
				<CartTable />
				<CartTotal />
			{:else}
				<section v-else>
					<p class="cart-page-message">Your cart is empty, fill it up!</p>
					<a href="/" class="cart-page-button is-dark"> Back to Products </a>
				</section>
			{/if}
		</article>
	</main>
</section>
