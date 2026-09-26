var cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, options = {}, quantity = 1) {
  var existing = null;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId && JSON.stringify(cart[i].options) === JSON.stringify(options)) {
      existing = cart[i];
      break;
    }
  }
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId: productId, options: options, quantity: quantity });
  }
  saveToStorage();
  updateCartQuantity();
}

function removeFromCart(productId, options = {}) {
  var newCart = [];
  for (var i = 0; i < cart.length; i++) {
    if (!(cart[i].productId === productId && JSON.stringify(cart[i].options) === JSON.stringify(options))) {
      newCart.push(cart[i]);
    }
  }
  cart = newCart;
  saveToStorage();
  updateCartQuantity();
}

function updateQuantity(productId, options = {}, newQuantity) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId && JSON.stringify(cart[i].options) === JSON.stringify(options)) {
      cart[i].quantity = newQuantity;
      break;
    }
  }
  saveToStorage();
}

function updateCartQuantity() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].quantity;
  }
  var elements = document.querySelectorAll('.cart-quantity');
  for (var j = 0; j < elements.length; j++) {
    elements[j].textContent = total.toLocaleString('fa-IR');
  }
}

updateCartQuantity();