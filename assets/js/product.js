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

/* ---------- Product Content ---------- */

document.getElementById("productTitle").textContent =
  product.title;

document.getElementById("productPrice").textContent =
  `₹${product.price}`;

document.getElementById("productImage").src =
  product.media.src;

document.getElementById("productImage").alt =
  product.media.alt || product.title;

/* ---------- Description ---------- */

const descriptionElement =
  document.getElementById("productDescription");

if (descriptionElement && product.description) {
  descriptionElement.textContent =
    product.description;
}
const sizesElement =
  document.getElementById("productSizes");

if (sizesElement && product.sizes) {
  sizesElement.textContent =
    product.sizes.join(" • ");
}

const colorsElement =
  document.getElementById("productColors");

if (colorsElement && product.colors) {
  colorsElement.textContent =
    product.colors.join(" • ");
}

const sizeChartLink =
  document.getElementById("sizeChartLink");

if (sizeChartLink && product.sizeChart) {
  sizeChartLink.href =
    product.sizeChart;
}
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

/* ---------- Product Content ---------- */

document.getElementById("productTitle").textContent =
  product.title;

document.getElementById("productPrice").textContent =
  `₹${product.price}`;

document.getElementById("productImage").src =
  product.media.src;

document.getElementById("productImage").alt =
  product.media.alt || product.title;

/* ---------- Description ---------- */

const descriptionElement =
  document.getElementById("productDescription");

if (descriptionElement && product.description) {
  descriptionElement.textContent =
    product.description;
}
const sizesElement =
  document.getElementById("productSizes");

if (sizesElement && product.sizes) {
  sizesElement.textContent =
    product.sizes.join(" • ");
}

const colorsElement =
  document.getElementById("productColors");

if (colorsElement && product.colors) {
  colorsElement.textContent =
    product.colors.join(" • ");
}

const sizeChartLink =
  document.getElementById("sizeChartLink");

if (sizeChartLink && product.sizeChart) {
  sizeChartLink.href =
    product.sizeChart;
}
/* ---------- Full Prepaid ---------- */

const prepaidContainer =
  document.getElementById("prepaidContainer");

if (product.payment?.prepaid) {

  prepaidContainer.innerHTML = `
    <h3>Full Prepaid Order</h3>
    <p>
      Pay the complete amount securely via Razorpay.
    </p>
  `;

  const prepaidForm =
    document.createElement("form");

  const prepaidScript =
    document.createElement("script");

  prepaidScript.src =
    "https://checkout.razorpay.com/v1/payment-button.js";

  prepaidScript.async = true;

  prepaidScript.setAttribute(
    "data-payment_button_id",
    product.payment.prepaid
  );

  prepaidForm.appendChild(prepaidScript);

  prepaidContainer.appendChild(prepaidForm);

} else {

  prepaidContainer.innerHTML = `
    <h3>Coming Soon</h3>
    <p>
      Payment option not available yet.
    </p>
  `;
}

/* ---------- Partial COD ---------- */

const codContainer =
  document.getElementById("codContainer");

if (product.payment?.cod) {

  codContainer.innerHTML = `
    <h3>Partial COD Order</h3>
    <p>
      Pay a small advance now and the remaining amount on delivery.
    </p>
  `;

  const codForm =
    document.createElement("form");

  const codScript =
    document.createElement("script");

  codScript.src =
    "https://checkout.razorpay.com/v1/payment-button.js";

  codScript.async = true;

  codScript.setAttribute(
    "data-payment_button_id",
    product.payment.cod
  );

  codForm.appendChild(codScript);

  codContainer.appendChild(codForm);

} else {

  codContainer.innerHTML = `
    <h3>Coming Soon</h3>
    <p>
      COD option not available yet.
    </p>
  `;
}
