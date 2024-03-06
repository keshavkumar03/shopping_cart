let cart = [];

function addToCart(button) {
    const productElement = button.parentElement;
    const productName = productElement.dataset.product;
    const productPrice = parseFloat(productElement.dataset.price);

    cart.push({ name: productName, price: productPrice });
    updateTotal();
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function checkout() {
    alert(`Thank you for shopping! Total amount: $${getTotal()}`);
    cart = []; // Clear the cart after checkout
    updateTotal();
}

function getTotal() {
    return cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);
}