document.body.classList.add("is-ready");

const order =
  JSON.parse(
    sessionStorage.getItem(
      "lastOrder"
    )
  );

if (!order) {

  window.location.href =
    "./index.html";

}

let paymentHtml = "";

if (
  order.paymentType ===
  "Prepaid"
) {

  paymentHtml = `

    <p>
      <strong>Payment Method:</strong>
      Full Prepaid
    </p>

    <p>
      <strong>Amount Paid:</strong>
      ₹${order.amountPaid}
    </p>

  `;

} else {

  paymentHtml = `

    <p>
      <strong>Payment Method:</strong>
      Partial COD
    </p>

    <p>
      <strong>Paid Today:</strong>
      ₹${order.amountPaid}
    </p>

    <p>
      <strong>Pay on Delivery:</strong>
      ₹${order.balanceDue}
    </p>

  `;

}

document.getElementById(
  "successDetails"
).innerHTML = `

<h2>
  ${order.product}
</h2>

<hr>

<p>
  <strong>Size:</strong>
  ${order.size}
</p>

<p>
  <strong>Color:</strong>
  ${order.color}
</p>

<hr>

${paymentHtml}

<hr>

<p>
  <strong>Order ID:</strong>
  ${order.orderId}
</p>

<p>
  <strong>Payment ID:</strong>
  ${order.paymentId}
</p>

<hr>

<p>
  We'll contact you shortly with your shipping updates.
</p>

`;
