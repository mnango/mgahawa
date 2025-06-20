
let cart = [];
const buttons = document.querySelectorAll('.add-to-cart');
const cartList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

if (buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseInt(button.getAttribute('data-price'));
      cart.push({ name, price });
      updateCartDisplay();
    });
  });
}

function updateCartDisplay() {
  if (!cartList || !cartTotal) return;
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - TSh ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = `TSh ${total}`;
}
