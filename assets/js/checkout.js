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
<p><strong>Product Price:</strong> ₹${product.price}</p>
<p><strong>Shipping:</strong> ₹${product.shipping}</p>
<p><strong>Total:</strong> ₹${product.price + product.shipping}</p>
`;

const prepaidButton =
  document.getElementById(
    "prepaidButton"
  );

prepaidButton.addEventListener(
  "click",
  async () => {

    try {

      const response =
        await fetch(
          "/api/create-order",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              amount:
                (product.price +
                  product.shipping) *
                100
            })
          }
        );

      const order =
        await response.json();

      console.log(order);

      alert(
        "Order created successfully.\n\nOrder ID: " +
        order.id
      );

    } catch (error) {

      console.error(error);

      const options = {

  key:
    "rzp_test_T5XfJ1gxIf9WZl",

  amount:
    order.amount,

  currency:
    order.currency,

  order_id:
    order.id,

  name:
    "Creative Detour",

  description:
    product.title,

  handler:
    function (response) {

      console.log(response);

      alert(
        "Payment Successful!"
      );

    }

};

const razorpay =
  new Razorpay(options);

razorpay.open();

    }

  }
);
