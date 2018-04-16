var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 100 + 1)
 })
 return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
  let str = ''
  if (!cart.length) {
    return "Your shopping cart is empty."
  } else {
    bananas at $17, pancake batter at $5, and eggs at $49.
    return `In your cart, you have${str}`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
