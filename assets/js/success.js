document.body.classList.add("is-ready");

const params =
  new URLSearchParams(
    window.location.search
  );

document.getElementById(
  "successDetails"
).innerHTML = `
<p><strong>Order ID:</strong> ${params.get("order")}</p>
<p><strong>Payment ID:</strong> ${params.get("payment")}</p>
`;
