import { products } from "./data/products.js";

document.body.classList.add("is-ready");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(
  item => item.id === productId
);

if (!product) {
  document.body.innerHTML = `
    <div style="
      color:white;
      padding:40px;
      font-size:20px;
      font-family:sans-serif;
    ">
      Product not found
    </div>
  `;
  throw new Error("Product not found");
}

document.getElementById("productTitle").textContent =
  product.title;

document.getElementById("productPrice").textContent =
  `₹${product.price}`;

document.getElementById("productImage").src =
  product.media.src;

document.getElementById("productImage").alt =
  product.media.alt;

document.getElementById("prepaidContainer").innerHTML = `
  <h3>Full Prepaid Order</h3>
  <p>Pay the complete amount securely via Razorpay.</p>

  <form>
    <script
      src="https://checkout.razorpay.com/v1/payment-button.js"
      data-payment_button_id="${product.prepaidButtonId}"
      async>
    </script>
  </form>
`;

document.getElementById("codContainer").innerHTML = `
  <h3>Partial COD Order</h3>
  <p>Pay a small advance now and the remaining amount on delivery.</p>

  <form>
    <script
      src="https://checkout.razorpay.com/v1/payment-button.js"
      data-payment_button_id="${product.codButtonId}"
      async>
    </script>
  </form>
`;
