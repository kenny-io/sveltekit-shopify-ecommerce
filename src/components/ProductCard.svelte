<script>
	export let product;
</script>

<section>
	<div class="product-card">
		<div class="product-card-frame">
			<a href={`/products/${product.handle}`}>
				<img class="prodimg" src={product.images.edges[0].node.src} alt={product.handle} />
			</a>
		</div>
		<div class="product-card-text">
			<h3 class="product-card-title">{product.title}</h3>
			<p class="product-card-description">{product.description.substring(0, 60) + '...'}</p>
		</div>
		<a href={`/products/${product.handle}`}>
			<button>View Item {">"}</button>
		</a>
	</div>
</section>
