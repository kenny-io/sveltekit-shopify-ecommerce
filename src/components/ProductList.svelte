<script>
	// @ts-nocheck
	import ProductCard from '../components/ProductCard.svelte';
	export let products;
</script>

<div class="product-grid">
	{#each products as product}
		<ProductCard product={product.node} />
	{/each}
</div>
