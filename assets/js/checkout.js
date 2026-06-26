import { products } from "./data/products.js";
document.body.classList.add("is-ready");
const params = new URLSearchParams(
  window.location.search
);


const paymentLoading =
  document.getElementById(
    "paymentLoading"
  );

const productId =
  params.get("id");

const size =
  params.get("size");

const color =
  params.get("color");

const selectedPrice =
  Number(
    params.get("price")
  ) || selectedPrice;

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

  <p><strong>Product:</strong> ₹${selectedPrice}</p>

  <p><strong>Shipping:</strong> ₹${product.shipping}</p>

  <p><strong>Total (Prepaid):</strong> ₹${selectedPrice + product.shipping}</p>

  <hr>

  <p><strong>Partial COD</strong></p>

  <p><strong>COD Charge:</strong> ₹${product.codCharge}</p>

  <p><strong>Pay Now:</strong> ₹${product.codAdvance}</p>

  <p><strong>Pay on Delivery:</strong> ₹${
    (selectedPrice + product.shipping + product.codCharge) - product.codAdvance
  }</p>
`;

const prepaidTotal =
  selectedPrice +
  product.shipping;

const codTotal =
  selectedPrice +
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

  const email =
  document
    .getElementById(
      "customerEmail"
    )
    .value
    .trim();

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

if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
) {

  alert(
    "Please enter a valid email address."
  );

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

  paymentLoading.classList.add(
  "active"
);

prepaidButton.disabled = true;

codButton.disabled = true;
  
  let payableAmount;

  let amountPaid;

  let balanceDue;

  if (paymentType === "Prepaid") {

    payableAmount =
      selectedPrice +
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
        selectedPrice +
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

    selectedPrice +
    product.shipping

      :

    selectedPrice +
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
        "rzp_live_T5XUEf1nM7h3c9",

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

modal: {

  ondismiss() {

    paymentLoading.classList.remove(
      "active"
    );

    prepaidButton.disabled = false;

    codButton.disabled = false;

  }

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

                selectedPrice +
                product.shipping

                  :

                selectedPrice +
                product.shipping +
                product.codCharge,

              amountPaid,

              balanceDue,

              paymentId:
                response.razorpay_payment_id

            };

         sessionStorage.setItem(
  "lastOrder",
  JSON.stringify({

    orderId:
      response.razorpay_order_id,

    paymentId:
      response.razorpay_payment_id,

    product:
      product.title,

    size,

    color,

    paymentType,

    amountPaid,

    balanceDue,

    orderTotal:

      paymentType === "Prepaid"

      ?

      selectedPrice +
      product.shipping

      :

      selectedPrice +
      product.shipping +
      product.codCharge

  })
);

await fetch(
  "/api/save-order",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(orderData)

  }
);

window.location.href =
  "./success.html";

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

paymentLoading.classList.remove(
  "active"
);

prepaidButton.disabled = false;

codButton.disabled = false;
    
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
