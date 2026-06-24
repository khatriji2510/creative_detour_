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

  handler: async function (response) {

  try {

    const verifyResponse =
      await fetch(
        "/api/verify-payment",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(
            response
          )
        }
      );

    const result =
      await verifyResponse.json();

    if (result.success) {

  const orderData = {

    date:
      new Date()
        .toLocaleString(),

    orderId:
      response.razorpay_order_id,

    product:
      product.title,

    size,

    color,

    name:
      document.getElementById(
        "customerName"
      ).value,

    phone:
      document.getElementById(
        "customerPhone"
      ).value,

    address:
      document.getElementById(
        "customerAddress"
      ).value,

    pincode:
      document.getElementById(
        "customerPincode"
      ).value,

    paymentType:
      "Prepaid",

    amountPaid:
      product.price +
      product.shipping,

    balanceDue:
      0,

    paymentId:
      response.razorpay_payment_id

  };

  await fetch(
    "/api/save-order",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify(
        orderData
      )
    }
  );

  alert(
    "Payment Verified ✅"
  );

} else {

      alert(
        "Payment Verification Failed ❌"
      );

    }

  } catch (error) {

    console.error(error);

    alert(
      "Verification Error"
    );

  }

}

};

const razorpay =
  new Razorpay(options);

razorpay.open();

    } catch (error) {

      console.error(error);

      alert(
        "Failed to start payment"
      );

    }

  }
);
