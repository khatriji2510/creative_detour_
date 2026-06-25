import { products } from "./data/products.js";

document.body.classList.add("is-ready");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(
  item => item.id === productId
);

if (!product) {

  document.body.innerHTML = `
    <div
      style="
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

const descriptionElement =
  document.getElementById("productDescription");

if (descriptionElement) {

  descriptionElement.textContent =
    product.description || "";

}

/* ---------- Buy Button ---------- */

const buyNowContainer =
  document.getElementById("buyNowContainer");
buyNowContainer.innerHTML = `
 <button
  id="buyNowButton"
  class="buy-now-button"
  disabled>

  ⚡ Buy Now

</button>
`;

const buyNowButton =
  document.getElementById("buyNowButton");

let selectedSize = null;
let selectedPrice = product.price;
let selectedColor = null;

function updateBuyButton() {

  const needsColor =
    (product.colors || []).length > 1;

  buyNowButton.disabled =
    !(
      selectedSize &&
      (
        !needsColor ||
        selectedColor
      )
    );

}

/* ---------- Size Options ---------- */

const sizesElement =
  document.getElementById("productSizes");

if (sizesElement) {

  // ---------- Variant Products (Posters etc.) ----------

  if (product.variants) {

    product.variants.forEach(variant => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className =
        "option-button";

      button.textContent =
        variant.size;

      button.onclick = () => {

        document
          .querySelectorAll(
            "#productSizes .option-button"
          )
          .forEach(btn =>
            btn.classList.remove("active")
          );

        button.classList.add("active");

        selectedSize =
          variant.size;

        selectedPrice =
          variant.price;

        document.getElementById(
          "productPrice"
        ).textContent =
          `₹${selectedPrice}`;

        updateBuyButton();

      };

      sizesElement.appendChild(
        button
      );

    });

  }

  // ---------- Existing Products (Tees etc.) ----------

  else if (product.sizes) {

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

        button.classList.add("active");

        selectedSize =
          size;

        selectedPrice =
          product.price;

        updateBuyButton();

      };

      sizesElement.appendChild(
        button
      );

    });

  }

}

/* ---------- Color Options ---------- */

const colorsElement =
  document.getElementById("productColors");

if (colorsElement && product.colors) {

  product.colors.forEach(color => {

    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "option-button";
    button.textContent = color;

    if (product.colors.length === 1) {

      button.classList.add("active");

      selectedColor = color;

    }

    button.onclick = () => {

      document
        .querySelectorAll(
          "#productColors .option-button"
        )
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");

      selectedColor = color;

      updateBuyButton();

    };

    colorsElement.appendChild(button);

  });

}
/* ---------- Size Chart ---------- */

const sizeChartLink =
  document.getElementById("sizeChartLink");

if (
  sizeChartLink &&
  product.sizeChart
) {

  sizeChartLink.href =
    product.sizeChart;

}

/* ---------- Initial Button State ---------- */

updateBuyButton();

/* ---------- Buy Now ---------- */

buyNowButton.addEventListener(
  "click",
  () => {

    if (buyNowButton.disabled) {
      return;
    }

    window.location.href =
  `./checkout.html?id=${product.id}&size=${encodeURIComponent(selectedSize)}&color=${encodeURIComponent(selectedColor)}&price=${selectedPrice}`;

  }
);
