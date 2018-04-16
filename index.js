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
  let string = []
  if (!cart.length) {
    return "Your shopping cart is empty."
  } else {
    for (let i = 0, len = cart.length; i < len; i++) {
      string.push(` ${cart[i].itemName} at \$${cart[i].itemPrice}`)
    }
    // if(string.length > 1) {
    //   string[string.length - 1] = ' and' + string[string.length - 1]
    // }
    string.length > 1 ? (string[string.length - 1] = ' and' + string[string.length - 1]) : ''
    return `In your cart, you have${string}.`
  }
}

function total() {
  let sum = 0;
  for (let i = 0, len = cart.length; i < len; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  let curr = ''
  for (let i = 0, len = cart.length; i < len; i++) {
    cart[i]
  }
  if (item is not in cart) {
    return "That item is not in your cart."
  } else {

  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
