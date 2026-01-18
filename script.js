const productsDiv = document.getElementById("dynamic-products");
const cartCount = document.getElementById("cartCount");

/* Load cart count on page load */
fetch("http://localhost:5001/api/cart/count")
  .then(res => res.json())
  .then(data => {
    cartCount.innerText = data.count;
  });

/* Load products */
fetch("http://localhost:5001/api/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      productsDiv.innerHTML += `
        <div class="product-card">
          <h3>${product.name}</h3>
          <img src="${product.image}">
          <p>₹${product.price}</p>
          <button class="add-btn">Add to Cart</button>
        </div>
      `;
    });

    // Attach click events AFTER rendering
    document.querySelectorAll(".add-btn").forEach((btn, index) => {
      btn.addEventListener("click", () => {
        addToCart(products[index]);
      });
    });
  });

/* Add to cart */
function addToCart(product) {
  fetch("http://localhost:5001/api/cart/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(data => {
      cartCount.innerText = data.count;
      alert("Added to cart!");
    });
}
