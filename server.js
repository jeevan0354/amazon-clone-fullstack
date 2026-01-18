const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ================= PRODUCTS (DEMO DATA) ================= */
const products = [
  {
    id: 1,
    name: "Gaming PC (RTX Edition)",
    price: 85000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
  },
  {
    id: 2,
    name: "Gaming Headset",
    price: 2999,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 4499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 4,
    name: "Electric Kettle",
    price: 1999,
    image: "https://images.unsplash.com/photo-1509463531435-7c36c6d5d5e1"
  },
  {
    id: 5,
    name: "Mixer Grinder",
    price: 4999,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31b"
  },
  {
    id: 6,
    name: "Bedsheet Set (Queen Size)",
    price: 1299,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  },
  {
    id: 7,
    name: "Men's Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322"
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 3499,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c4a3a4b"
  }
];

/* ================= CART ================= */
let cart = [];

/* ================= ROUTES ================= */

// Test route
app.get("/", (req, res) => {
  res.send("Amazon Clone Backend Running");
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Add to cart
app.post("/api/cart/add", (req, res) => {
  cart.push(req.body);
  res.json({ count: cart.length });
});

// Get cart items
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// Get cart count
app.get("/api/cart/count", (req, res) => {
  res.json({ count: cart.length });
});

// Remove item from cart
app.delete("/api/cart/remove/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.id !== id);
  res.json({ count: cart.length });
});

// Checkout (clear cart)
app.post("/api/cart/checkout", (req, res) => {
  cart = [];
  res.json({ message: "Order placed successfully" });
});

/* ================= SERVER ================= */
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
