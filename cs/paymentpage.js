// =======================
// LOAD CART PRODUCT
// =======================

const cart = document.getElementById("cart");
const checkoutBtn = document.getElementById("checkout-btn");

const cartProduct = JSON.parse(localStorage.getItem("cartProduct"));

if (!cartProduct) {
  cart.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.innerHTML = `
    <div id="container">
      <div id="img">
        <img src="${cartProduct.image}" class="img">
      </div>

      <div id="datas">
        <p id="clothname"><b>${cartProduct.name}</b></p>
        <p>₹ ${cartProduct.price}</p>
        <p>Colour Black</p>
        <p>Size ${cartProduct.size}</p>
        <p>Quantity ${cartProduct.quantity}</p>
      </div>
    </div>
  `;

  const price = Number(cartProduct.price);
  let deliveryCharge = 0;

  document.getElementById("subtotal").innerText = `₹${price}`;
  document.getElementById("delivery").innerText = `₹${deliveryCharge}`;
  document.getElementById("total").innerText = `₹${price + deliveryCharge}`;

  localStorage.setItem("checkoutTotal", price + deliveryCharge);
}

// =======================
// WHATSAPP CHECKOUT
// =======================

checkoutBtn.addEventListener("click", () => {

  if (!cartProduct) {
    alert("Your cart is empty.");
    return;
  }

  // 🔴 CHANGE TO YOUR NUMBER
  const phoneNumber = "919349328697";

  const productLink = window.location.origin + "/products.html";

  const message = `
I would like to order this product 👗

Product: ${cartProduct.name}
Price: ₹${cartProduct.price}
Size: ${cartProduct.size}
Quantity: ${cartProduct.quantity}

Product Link: ${productLink}
  `.trim();

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});
