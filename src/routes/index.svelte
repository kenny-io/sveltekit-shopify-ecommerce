<script context="module">
	import { products, getProducts } from '../../store';
	export async function load(ctx) {
		const productType = ctx.page.query.get('type');
		const productsData = await getProducts();
		
		// console.log(pdata);
		if (productType) {
			products.update((items) => {
				const updated = items.filter((product) => product.node.productType === productType);

				return updated;
			});
		}

		return { props: { productsData} };
	}
</script>

<script>
	import ProductList from '../components/ProductList.svelte';
	export let productsData

</script>

<svelte:head>
	<title>Shoperoni</title>
</svelte:head>


<main>
	<ProductList products={productsData.products.edges} />
</main>

