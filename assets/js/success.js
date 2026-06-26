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
  We've also sent an order confirmation to your email address.
</p>

<p style="
font-size:14px;
color:#aaa;
line-height:1.6;
">

If you don't see it within a few minutes,
please check your <strong>Spam</strong> or
<strong>Junk</strong> folder and mark it as
<strong>"Not Spam"</strong>.

</p>

<p>
  We'll contact you again once your order has been packed and shipped.
</p>

`;
