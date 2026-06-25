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

  <hr>

  <p><strong>Product:</strong> ₹${product.price}</p>

  <p><strong>Shipping:</strong> ₹${product.shipping}</p>

  <p><strong>Total (Prepaid):</strong> ₹${product.price + product.shipping}</p>

  <hr>

  <p><strong>Partial COD</strong></p>

  <p><strong>COD Charge:</strong> ₹${product.codCharge}</p>

  <p><strong>Pay Now:</strong> ₹${product.codAdvance}</p>

  <p><strong>Pay on Delivery:</strong> ₹${
    (product.price + product.shipping + product.codCharge) - product.codAdvance
  }</p>
`;

const prepaidTotal =
  product.price +
  product.shipping;

const codTotal =
  product.price +
  product.shipping +
  product.codCharge;

const codRemaining =
  codTotal -
  product.codAdvance;

document.getElementById(
  "prepaidAmount"
).textContent =
  prepaidTotal;

document.getElementById(
  "codAdvance"
).textContent =
  product.codAdvance;

document.getElementById(
  "codRemaining"
).textContent =
  codRemaining;

function validateForm() {

  const name =
    document.getElementById("customerName").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const address =
    document.getElementById("customerAddress").value.trim();

  const pincode =
    document.getElementById("customerPincode").value.trim();

  if (name.length < 2) {
    alert("Please enter your full name.");
    return false;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }

  if (address.length < 10) {
    alert("Please enter your complete address.");
    return false;
  }

  if (!/^\d{6}$/.test(pincode)) {
    alert("Please enter a valid 6-digit pincode.");
    return false;
  }

  return true;
}



/* ---------- Payment Buttons ---------- */

const prepaidButton =
  document.getElementById(
    "prepaidButton"
  );

const codButton =
  document.getElementById(
    "codButton"
  );

/* ---------- Start Payment ---------- */

async function startPayment(
  paymentType
) {

  if (!validateForm()) {
    return;
  }

  let payableAmount;

  let amountPaid;

  let balanceDue;

  if (paymentType === "Prepaid") {

    payableAmount =
      product.price +
      product.shipping;

    amountPaid =
      payableAmount;

    balanceDue = 0;

  } else {

    payableAmount =
      product.codAdvance;

    amountPaid =
      product.codAdvance;

    balanceDue =
      (
        product.price +
        product.shipping +
        product.codCharge
      ) -
      product.codAdvance;

  }

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
    payableAmount * 100,

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

  paymentType,

  orderTotal:

    paymentType === "Prepaid"

      ?

    product.price +
    product.shipping

      :

    product.price +
    product.shipping +
    product.codCharge,

  amountPaid,

  balanceDue

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

      prefill: {

        name:
          document.getElementById(
            "customerName"
          ).value,

        contact:
          document.getElementById(
            "customerPhone"
          ).value

      },

      handler:
        async function (
          response
        ) {

          try {

            const verifyResponse =
              await fetch(
                "/api/verify-payment",
                {
                  method:
                    "POST",

                  headers: {
                    "Content-Type":
                      "application/json"
                  },

                  body:
                    JSON.stringify(
                      response
                    )

                }
              );

            const result =
              await verifyResponse.json();

            if (!result.success) {

              alert(
                "Payment Verification Failed"
              );

              return;

            }
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

              paymentType,

              orderTotal:

                paymentType ===
                "Prepaid"

                  ?

                product.price +
                product.shipping

                  :

                product.price +
                product.shipping +
                product.codCharge,

              amountPaid,

              balanceDue,

              paymentId:
                response.razorpay_payment_id

            };

          window.location.href =
  `./success.html?order=${response.razorpay_order_id}&payment=${response.razorpay_payment_id}`;

fetch(
  "/api/save-order",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(orderData)

  }
).catch(console.error);

          } catch (error) {

            console.error(
              error
            );

            alert(
              "Verification Error"
            );

          }

        }

    };

    const razorpay =
      new Razorpay(
        options
      );

    razorpay.open();

  } catch (error) {

    console.error(
      error
    );

    alert(
      "Failed to start payment"
    );

  }

}

/* ---------- Buttons ---------- */

prepaidButton.addEventListener(
  "click",
  () => {

    startPayment(
      "Prepaid"
    );

  }
);

codButton.addEventListener(
  "click",
  () => {

    startPayment(
      "Partial COD"
    );

  }
);
