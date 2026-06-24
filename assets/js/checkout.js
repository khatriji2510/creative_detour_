import { products } from "./data/products.js";
document.body.classList.add("is-ready");
const params = new URLSearchParams(
  window.location.search
);

const productId =
  params.get("id");

const size =
  params.get("size");

const color =
  params.get("color");

const product =
  products.find(
    item => item.id === productId
  );

if (!product) {

  document.body.innerHTML =
    "<h1>Product not found</h1>";

  throw new Error(
    "Product not found"
  );
}

document.getElementById(
  "checkoutTitle"
).textContent =
  product.title;

document.getElementById(
  "checkoutSummary"
).innerHTML = `
  <p><strong>Size:</strong> ${size}</p>
  <p><strong>Color:</strong> ${color}</p>
  <p><strong>Product:</strong> ₹${product.price}</p>
  <p><strong>Shipping:</strong> ₹${product.shipping}</p>
`;
