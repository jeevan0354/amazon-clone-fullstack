document.getElementById("placeOrderBtn").addEventListener("click", checkout);

function checkout() {
  fetch("http://localhost:5001/api/cart/checkout", {
    method: "POST"
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText =
      "Order placed successfully! ✅";
  })
  .catch(err => {
    document.getElementById("msg").innerText =
      "Checkout failed ❌";
    console.error(err);
  });
}
