<script context="module">
	import { products, getProducts } from '../../store';

import ProductList from '../components/ProductList.svelte';
	// export const prerender = true;
		
	export async function load(ctx) {
		const productType = ctx.page.query.get('type');
		await getProducts();
		if (productType) {
			products.update((items) => {
				const updated = items.filter((product) => product.node.productType === productType);

				return updated;
			});
		}

		return { props: { ProductList } };
	}
</script>


<script>
export let ProductList
</script>

<svelte:head>
	<title>Shoperoni</title>
</svelte:head>


<main>
	<ProductList products={$products} />
</main>

