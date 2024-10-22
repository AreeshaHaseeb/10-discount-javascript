let priceInput = prompt("What is the price of the product you'd like to purchase?")
let discountedPrice = parseFloat(priceInput.replace(/[^0-9\.-]+/g, "")) * 0.90;
console.log('$' + discountedPrice.toFixed(2));