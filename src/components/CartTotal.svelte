<script>
	let cart = JSON.parse(localStorage.getItem('cart'));
	let subtotal = cart.estimatedCost.subtotalAmount.amount;
	let currency = cart.estimatedCost.subtotalAmount.currencyCode;
	let total = cart.estimatedCost.totalAmount.amount;
	let tax = cart.estimatedCost.totalTaxAmount.amount;

	function calculateTax(tax) {
		if (tax) return tax;
		return 0;
	}
</script>

<section class="cart-total">
	<div class="cart-total-content">
		<div class="cart-total-column">
			<p>
				<strong>Subtotal:</strong>
			</p>
			<p>Shipping:</p>
			<p>Tax:</p>
			<p>Total:</p>
		</div>
		<div class="cart-total-column">
			<p>
				<strong>{currency} {subtotal}</strong>
			</p>
			<p>Free Shipping</p>
			<p>{currency} {calculateTax(tax)}</p>
			<p>{currency} {total}</p>
		</div>
	</div>
</section>
