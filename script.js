
const quantityInput = document.getElementById("quantity");
const totalPriceElement = document.getElementById("total-price");
const pricePerUnit = 15; // Price per unit is Rs. 15


function updateTotalPrice() {
    const quantity = quantityInput.value;
    const totalPrice = quantity * pricePerUnit;
    totalPriceElement.textContent = totalPrice;
}

// Listen for changes in the quantity input
quantityInput.addEventListener("input", updateTotalPrice);

// Add to cart function (basic example)
function addToCart() {
    const quantity = quantityInput.value;
    const totalPrice = quantity * pricePerUnit;
    alert(`Added ${quantity} items to cart. Total Price: Rs. ${totalPrice}`);
}
