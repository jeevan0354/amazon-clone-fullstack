const cartDiv = document.getElementById("cartItems");

function loadCart() {
  fetch("http://localhost:5001/api/cart")
    .then(res => res.json())
    .then(items => {
      cartDiv.innerHTML = "";

      if (items.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty</p>";
        return;
      }

      items.forEach(item => {
        cartDiv.innerHTML += `
          <div class="cart-item" style="background:white;padding:15px;margin-bottom:10px">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${item.id})"
                    style="padding:6px 12px; background:#ffd814; border:none; cursor:pointer">
              Remove
            </button>
          </div>
        `;
      });
    });
}

function removeItem(id) {
  fetch(`http://localhost:5001/api/cart/remove/${id}`, {
    method: "DELETE"
  }).then(() => loadCart());
}

loadCart();
