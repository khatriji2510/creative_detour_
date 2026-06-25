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

let selectedSize = null;

if (sizesElement && product.sizes) {

  product.sizes.forEach(size => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "option-button";

    button.textContent =
      size;

    button.onclick = () => {

      document
        .querySelectorAll(
          "#productSizes .option-button"
        )
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add(
        "active"
      );

      selectedSize = size;

    };

    sizesElement.appendChild(
      button
    );

  });

}

const colorsElement =
  document.getElementById("productColors");

let selectedColor = null;

if (colorsElement && product.colors) {

  product.colors.forEach(color => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "option-button";

    button.textContent =
      color;

    button.onclick = () => {

      document
        .querySelectorAll(
          "#productColors .option-button"
        )
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add(
        "active"
      );

      selectedColor = color;

    };

    colorsElement.appendChild(
      button
    );

  });

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

 if (!selectedSize) {
  alert("Please select a size.");
  return;
}

if (!selectedColor) {
  alert("Please select a color.");
  return;
}

window.location.href =
  `./checkout.html?id=${product.id}&size=${encodeURIComponent(selectedSize)}&color=${encodeURIComponent(selectedColor)}`;

});
