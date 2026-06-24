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

const prepaidContainer =
  document.getElementById("prepaidContainer");

prepaidContainer.innerHTML = `
  <button
    id="buyNowButton"
    class="button button--primary">
    Buy Now
  </button>
`;

const buyNowButton =
  document.getElementById("buyNowButton");

buyNowButton.addEventListener("click", () => {

  const size =
    product.sizes?.[0] || "";

  const color =
    product.colors?.[0] || "";

  window.location.href =
    `./checkout.html?id=${product.id}&size=${encodeURIComponent(size)}&color=${encodeURIComponent(color)}`;

});
