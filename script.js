function addToCart(productName) {
    var cartItems = document.getElementById('cart-items');
    var listItem = document.createElement('li');
    listItem.textContent = productName;
    cartItems.appendChild(listItem);
  }
  
