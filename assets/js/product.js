import { products } from "./data/products.js";

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const product = products.find(
  item => item.id === productId
);

if (!product) {
  document.body.innerHTML = "<h1>Product not found</h1>";
}

document.getElementById("productTitle").textContent =
  product.title;

document.getElementById("productPrice").textContent =
  `₹${product.price}`;

document.getElementById("productImage").src =
  product.media.src;

document.getElementById("productImage").alt =
  product.media.alt;

const prepaidContainer =
  document.getElementById("prepaidContainer");

prepaidContainer.innerHTML = `
<h3>Pay Full Amount</h3>

<form>
<script
src="https://checkout.razorpay.com/v1/payment-button.js"
data-payment_button_id="${product.prepaidButtonId}"
async>
</script>
</form>
`;

const codContainer =
  document.getElementById("codContainer");

codContainer.innerHTML = `
<h3>Partial COD</h3>

<p>
Pay an advance now and the remaining amount on delivery.
</p>

<form>
<script
src="https://checkout.razorpay.com/v1/payment-button.js"
data-payment_button_id="${product.codButtonId}"
async>
</script>
</form>
`;
